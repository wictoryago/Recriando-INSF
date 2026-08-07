import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthShell, authField, authLabel } from "@/components/site/AuthShell";

export const Route = createFileRoute("/entrar")({
  head: () => ({
    meta: [
      { title: "Entrar | Área do Aluno — Instituto Social" },
      {
        name: "description",
        content:
          "Acesse a área do aluno do Instituto Social Nossa Senhora de Fátima para acompanhar cursos e matrículas.",
      },
      { property: "og:title", content: "Entrar | Área do Aluno" },
      {
        property: "og:description",
        content: "Login da área do aluno do Instituto Social Nossa Senhora de Fátima.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      toast.info("Autenticação ainda não ativada", {
        description:
          "A área do aluno será liberada quando o sistema de contas do Instituto entrar no ar.",
      });
    }, 500);
  };

  return (
    <AuthShell
      tag="Área do Aluno"
      title="Bem-vindo de volta ao Instituto"
      description="Acompanhe suas turmas, avisos da secretaria e materiais dos cursos em um só lugar."
      cardTitle="Entrar na conta"
      cardSubtitle="Informe seus dados de acesso"
    >
      <form onSubmit={onSubmit} className="grid gap-5">
        <div>
          <label htmlFor="login-email" className={authLabel}>
            E-mail
          </label>
          <input
            id="login-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="seuemail@dominio.com"
            className={authField}
          />
        </div>
        <div>
          <label htmlFor="login-password" className={authLabel}>
            Senha
          </label>
          <input
            id="login-password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            minLength={8}
            placeholder="••••••••"
            className={authField}
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <label className="flex items-center gap-2">
            <input type="checkbox" name="lembrar" className="accent-[oklch(0.812_0.128_82.5)]" />
            Lembrar-me
          </label>
          <Link to="/recuperar-senha" className="text-gold hover:underline">
            Esqueceu a senha?
          </Link>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-[image:var(--gradient-blue)] px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {loading ? "Entrando..." : "Entrar na conta"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Ainda não possui uma conta?{" "}
        <Link to="/cadastro" className="text-gold hover:underline">
          Cadastre-se aqui
        </Link>
      </p>
    </AuthShell>
  );
}
