import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { courses } from "@/data/courses";
import { site } from "@/data/site";

export const Route = createFileRoute("/inscricao")({
  head: () => ({
    meta: [
      { title: "Inscrição em Cursos | Instituto Social N. Sra. de Fátima" },
      {
        name: "description",
        content:
          "Preencha o formulário de inscrição e garanta sua vaga nos cursos gratuitos do Instituto Social Nossa Senhora de Fátima.",
      },
      { property: "og:title", content: "Inscrição em Cursos | Instituto Social" },
      {
        property: "og:description",
        content: "Formulário de inscrição para os cursos gratuitos do Instituto.",
      },
    ],
  }),
  component: EnrollPage,
});

const fieldClass =
  "w-full rounded-xl border border-glass-border bg-navy-deep/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30";
const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-wider text-gold";

function EnrollPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    // Envio real será conectado quando o back-end da secretaria estiver disponível.
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Inscrição registrada!", {
        description: `Nossa secretaria entrará em contato pelo telefone ${site.phone}.`,
      });
    }, 600);
  };

  return (
    <SiteLayout>
      <PageHero
        tag="Formação Profissional"
        title="Formulário de Inscrição"
        subtitle="Preencha suas informações para garantir sua vaga nos cursos gratuitos ou na Feira de Profissões."
      />

      <section className="section-shell max-w-3xl pb-24">
        <form onSubmit={onSubmit} className="glass-panel rounded-3xl p-6 sm:p-10">
          <div className="grid gap-6">
            <div>
              <label htmlFor="nome" className={labelClass}>
                Nome completo
              </label>
              <input
                id="nome"
                name="nome"
                required
                autoComplete="name"
                maxLength={120}
                placeholder="Digite seu nome completo"
                className={fieldClass}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="telefone" className={labelClass}>
                  Telefone / WhatsApp
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  autoComplete="tel"
                  maxLength={20}
                  placeholder="(11) 90000-0000"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  maxLength={160}
                  placeholder="seuemail@dominio.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="curso" className={labelClass}>
                Curso de interesse
              </label>
              <select id="curso" name="curso" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Selecione um curso da lista...
                </option>
                {courses.map((c) => (
                  <option key={c.slug} value={c.title}>
                    {c.title}
                  </option>
                ))}
                <option value="Feira de Profissões">Feira de Profissões</option>
              </select>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="como-soube" className={labelClass}>
                  Como ficou sabendo dos cursos?
                </label>
                <input
                  id="como-soube"
                  name="como_soube"
                  maxLength={120}
                  placeholder="Amigos, redes sociais, cartaz..."
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="aluno-frei" className={labelClass}>
                  Já foi aluno do Frei?
                </label>
                <select
                  id="aluno-frei"
                  name="aluno_frei"
                  required
                  defaultValue=""
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Selecione...
                  </option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input type="checkbox" required className="mt-1 accent-[oklch(0.812_0.128_82.5)]" />
              Autorizo o contato da secretaria e o uso dos meus dados exclusivamente para
              fins de matrícula.
            </label>

            <button
              type="submit"
              disabled={sending}
              className="mx-auto w-full max-w-sm rounded-full bg-[image:var(--gradient-blue)] px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? "Enviando..." : "Enviar Inscrição"}
            </button>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}
