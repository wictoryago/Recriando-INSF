import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthShell, authField, authLabel } from "@/components/site/AuthShell";

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

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = String(data.get("password") ?? "");
    const confirm = String(data.get("confirm") ?? "");

    if (password.length < 8) {
      setError("A senha precisa ter ao menos 8 caracteres.");
      return;
    }
    if (password !== confirm) {
      setError("As senhas não conferem.");
      return;
    }

    setError(null);
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      toast.info("Cadastro ainda não ativado", {
        description:
          "As contas de aluno serão liberadas assim que o sistema do Instituto entrar no ar.",
      });
    }, 500);
  };

  return (
    <AuthShell
      tag="Junte-se à nossa comunidade"
      title="Crie sua conta e comece sua jornada"
      description="Participe dos cursos de qualificação, oficinas e acompanhe todos os projetos da comunidade."
      cardTitle="Criar nova conta"
      cardSubtitle="Preencha os dados abaixo para se cadastrar"
    >
      <form onSubmit={onSubmit} className="grid gap-5" noValidate>
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
              className={authField}
            />
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

        {error && (
          <p role="alert" className="rounded-xl border border-destructive/40 px-4 py-3 text-sm text-destructive">
            {error}
          </p>
        )}

        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input type="checkbox" required className="mt-1 accent-[oklch(0.812_0.128_82.5)]" />
          Li e aceito os termos de uso e a política de privacidade do Instituto.
        </label>

        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-[image:var(--gradient-blue)] px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Concluir cadastro"}
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
