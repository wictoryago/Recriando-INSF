import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  AuthShell,
  AuthDivider,
  GoogleAuthButton,
  authField,
  authLabel,
} from "@/components/site/AuthShell";

export const Route = createFileRoute("/cadastro")({
  head: () => ({
    meta: [
      { title: "Criar Conta | Área do Aluno — Instituto Social" },
      {
        name: "description",
        content:
          "Crie sua conta na área do aluno do Instituto Social Nossa Senhora de Fátima e acompanhe cursos e projetos.",
      },
      { property: "og:title", content: "Criar Conta | Área do Aluno" },
      {
        property: "og:description",
        content: "Cadastro na área do aluno do Instituto Social Nossa Senhora de Fátima.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: RegisterPage,
});

/** Mensagens amigáveis para cada situação de erro do cadastro. */
const errorMessages: Record<string, string> = {
  invalid_name: "Informe seu nome completo (nome e sobrenome).",
  invalid_email: "E-mail inválido. Verifique se digitou corretamente.",
  email_taken: "E-mail já cadastrado. Faça login ou recupere sua senha.",
  weak_password:
    "Senha fraca: use ao menos 8 caracteres, com letras e números.",
  password_mismatch: "As senhas não conferem. Digite a mesma senha nos dois campos.",
  terms_required: "É preciso aceitar os termos de uso para continuar.",
  network: "Erro de conexão, tente novamente em alguns instantes.",
  unknown: "Não foi possível concluir o cadastro. Tente novamente.",
};

function validate(data: FormData): string | null {
  const name = String(data.get("nome") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const password = String(data.get("password") ?? "");
  const confirm = String(data.get("confirm") ?? "");

  if (name.split(/\s+/).filter(Boolean).length < 2) return "invalid_name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return "invalid_email";
  if (password.length < 8 || !/[A-Za-zÀ-ÿ]/.test(password) || !/\d/.test(password))
    return "weak_password";
  if (password !== confirm) return "password_mismatch";
  if (!data.get("termos")) return "terms_required";
  return null;
}

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submitting = useRef(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Trava contra cliques repetidos no botão de envio.
    if (submitting.current) return;

    const data = new FormData(event.currentTarget);
    const problem = validate(data);
    if (problem) {
      setError(errorMessages[problem] ?? errorMessages["unknown"]!);
      return;
    }

    submitting.current = true;
    setError(null);
    setLoading(true);
    try {
      await new Promise((resolve) => window.setTimeout(resolve, 700));
      toast.info("Cadastro ainda não ativado", {
        description:
          "As contas de aluno serão liberadas assim que o sistema do Instituto entrar no ar.",
      });
    } catch {
      setError(errorMessages["network"]!);
    } finally {
      setLoading(false);
      submitting.current = false;
    }
  };

  return (
    <AuthShell
      tag="Junte-se à nossa comunidade"
      title="Crie sua conta e comece sua jornada"
      description="Participe dos cursos de qualificação profissional, acompanhe sua turma e receba avisos da secretaria do Instituto."
      cardTitle="Criar nova conta"
      cardSubtitle="Preencha os dados abaixo para se cadastrar"
    >
      <GoogleAuthButton
        label="Continuar com o Google"
        disabled={loading}
        onClick={() =>
          toast.info("Login com Google ainda não ativado", {
            description:
              "O acesso com conta Google será liberado junto com o sistema de alunos do Instituto.",
          })
        }
      />
      <AuthDivider label="ou" />

      <form onSubmit={onSubmit} className="grid gap-5" noValidate>
        <fieldset disabled={loading} className="grid gap-5 border-0 p-0">
          <div>
            <label htmlFor="reg-name" className={authLabel}>
              Nome completo
            </label>
            <input
              id="reg-name"
              name="nome"
              required
              autoComplete="name"
              maxLength={120}
              placeholder="Digite seu nome completo"
              className={authField}
            />
          </div>
          <div>
            <label htmlFor="reg-email" className={authLabel}>
              E-mail
            </label>
            <input
              id="reg-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="seuemail@dominio.com"
              className={authField}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="reg-password" className={authLabel}>
                Senha
              </label>
              <input
                id="reg-password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                placeholder="Mínimo 8 caracteres"
                aria-describedby="reg-password-hint"
                className={authField}
              />
              <p id="reg-password-hint" className="mt-2 text-xs text-muted-foreground">
                Use ao menos 8 caracteres, com letras e números.
              </p>
            </div>
            <div>
              <label htmlFor="reg-confirm" className={authLabel}>
                Confirmar senha
              </label>
              <input
                id="reg-confirm"
                name="confirm"
                type="password"
                required
                autoComplete="new-password"
                placeholder="Repita sua senha"
                className={authField}
              />
            </div>
          </div>

          <label className="flex items-start gap-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              name="termos"
              className="mt-1 accent-[oklch(0.812_0.128_82.5)]"
            />
            Li e aceito os termos de uso e a política de privacidade do Instituto.
          </label>
        </fieldset>

        {error && (
          <p
            role="alert"
            aria-live="assertive"
            className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-blue)] px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading && <Loader2 className="size-4 animate-spin" aria-hidden />}
          {loading ? "Enviando cadastro..." : "Concluir cadastro"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Já possui uma conta?{" "}
        <Link to="/entrar" className="text-gold hover:underline">
          Faça login
        </Link>
      </p>
    </AuthShell>
  );
}
