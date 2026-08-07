import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthShell, authField, authLabel } from "@/components/site/AuthShell";
import { site } from "@/data/site";

export const Route = createFileRoute("/recuperar-senha")({
  head: () => ({
    meta: [
      { title: "Recuperar Senha | Área do Aluno — Instituto Social" },
      {
        name: "description",
        content:
          "Recupere o acesso à sua conta da área do aluno do Instituto Social Nossa Senhora de Fátima.",
      },
      { property: "og:title", content: "Recuperar Senha | Área do Aluno" },
      {
        property: "og:description",
        content: "Redefina com segurança a senha da sua conta do Instituto.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PasswordPage,
});

function PasswordPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    toast.success("Solicitação registrada", {
      description: `Em caso de dúvida, ligue para a secretaria: ${site.phone}.`,
    });
  };

  return (
    <AuthShell
      tag="Recuperação de acesso"
      title="Esqueceu sua senha?"
      description="Digite o e-mail cadastrado na sua conta do Instituto e enviaremos as instruções para redefinir sua senha com segurança."
      cardTitle="Recuperar senha"
      cardSubtitle="Informe seus dados para receber o link de redefinição"
    >
      {sent ? (
        <div className="rounded-2xl border border-gold/30 p-6 text-sm leading-relaxed text-muted-foreground">
          Se o e-mail informado estiver cadastrado, você receberá as instruções de
          redefinição em alguns minutos. Verifique também a caixa de spam.
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-5">
          <div>
            <label htmlFor="recover-email" className={authLabel}>
              E-mail cadastrado
            </label>
            <input
              id="recover-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="seuemail@dominio.com"
              className={authField}
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-[image:var(--gradient-blue)] px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Enviar instruções
          </button>
        </form>
      )}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Lembrou sua senha?{" "}
        <Link to="/entrar" className="text-gold hover:underline">
          Voltar para o login
        </Link>
      </p>
    </AuthShell>
  );
}
