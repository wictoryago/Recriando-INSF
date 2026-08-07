import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Clock, Activity, ChevronDown } from "lucide-react";
import { site } from "@/data/site";

export const Route = createFileRoute("/painel")({
  head: () => ({
    meta: [
      { title: "Painel Administrativo | Instituto Social" },
      {
        name: "description",
        content:
          "Visão geral interna de acessos, usuários e registros recentes do Instituto Social Nossa Senhora de Fátima.",
      },
      { property: "og:title", content: "Painel Administrativo | Instituto Social" },
      {
        property: "og:description",
        content: "Área interna de acompanhamento do Instituto Social.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPanel,
});

const metrics = [
  { icon: Activity, label: "Acessos totais", value: "1.420" },
  { icon: Users, label: "Usuários ativos", value: "38" },
  { icon: Clock, label: "Tempo médio", value: "14 min" },
];

const users = [
  { name: "Mariana Costa", email: "mariana.costa@exemplo.com", time: "45 min", active: true },
  { name: "Roberto Almeida", email: "roberto.almeida@exemplo.com", time: "12 min", active: false },
  { name: "Camila Fernandes", email: "camila.fer@exemplo.com", time: "1h 30min", active: true },
  { name: "Thiago Silva", email: "thiago.silva@exemplo.com", time: "3 min", active: true },
];

function AdminPanel() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <aside className="border-b border-glass-border bg-sidebar p-6 lg:w-72 lg:border-b-0 lg:border-r">
        <div className="flex items-center gap-3">
          <img
            src="/imagens/Logo.webp"
            alt="Logo do Instituto"
            className="size-11 rounded-full object-cover"
            width={44}
            height={44}
          />
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-base font-bold">Painel</span>
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              {site.shortName}
            </span>
          </span>
        </div>

        <nav className="mt-8 flex gap-2 lg:flex-col" aria-label="Navegação do painel">
          <span className="rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-gold">
            Dashboard
          </span>
          <Link
            to="/inscricao"
            className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Inscrições
          </Link>
          <Link
            to="/"
            className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Voltar ao site
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 lg:p-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-heading text-2xl font-bold">Visão geral do sistema</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Dados de demonstração — a integração com a base real será conectada em
              seguida.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-glass-border px-4 py-2">
            <span className="text-sm">Admin</span>
            <img
              src="/imagens/do-utilizador.webp"
              alt=""
              aria-hidden
              className="size-6"
            />
          </div>
        </header>

        <section className="mt-8 grid gap-5 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="glass-panel rounded-2xl p-6">
              <m.icon className="size-5 text-gold" aria-hidden />
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                {m.label}
              </p>
              <strong className="mt-1 block font-heading text-3xl font-extrabold">
                {m.value}
              </strong>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold">Últimos registros</h2>
          <div className="mt-5 grid gap-3">
            {users.map((u) => (
              <details key={u.email} className="glass-panel group rounded-2xl px-6 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="flex flex-col">
                    <strong className="text-sm">{u.name}</strong>
                    <span className="text-xs text-muted-foreground">
                      Tempo médio: {u.time}
                    </span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span
                      className={
                        u.active
                          ? "rounded-full bg-gold/15 px-3 py-1 text-[0.7rem] font-semibold text-gold"
                          : "rounded-full bg-secondary px-3 py-1 text-[0.7rem] font-semibold text-muted-foreground"
                      }
                    >
                      {u.active ? "Ativo" : "Inativo"}
                    </span>
                    <ChevronDown
                      className="size-4 text-muted-foreground transition-transform group-open:rotate-180"
                      aria-hidden
                    />
                  </span>
                </summary>
                <div className="mt-4 border-t border-glass-border pt-4 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">E-mail:</strong> {u.email}
                  </p>
                  <p className="mt-1">
                    <strong className="text-foreground">Termos de uso:</strong> aceito
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
