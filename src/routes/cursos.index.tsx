import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { courses } from "@/data/courses";

export const Route = createFileRoute("/cursos/")({
  head: () => ({
    meta: [
      { title: "Cursos Gratuitos | Instituto Social N. Sra. de Fátima" },
      {
        name: "description",
        content:
          "Cursos técnicos, de idiomas e de qualificação profissional gratuitos: informática, administração, comunicação visual, inglês e eletromecânica.",
      },
      { property: "og:title", content: "Cursos Gratuitos | Instituto Social" },
      {
        property: "og:description",
        content:
          "Conheça a grade de cursos gratuitos do Instituto Social Nossa Senhora de Fátima e garanta sua vaga.",
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <SiteLayout>
      <PageHero
        tag="Formação Profissional"
        title="Nossos Cursos"
        subtitle="Todos os cursos são gratuitos e pensados para gerar empregabilidade real na comunidade."
      />

      <section className="section-shell grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.slug}
            className="glass-panel group flex flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative">
              <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold">
                {course.category}
              </span>
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-heading text-lg font-bold">{course.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {course.summary}
              </p>
              <dl className="mt-4 grid gap-1.5 text-xs text-muted-foreground">
                <div className="flex justify-between gap-3">
                  <dt>Carga horária</dt>
                  <dd className="text-foreground">{course.workload}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Duração</dt>
                  <dd className="text-right text-foreground">{course.duration}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Período</dt>
                  <dd className="text-foreground">{course.schedule}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Requisitos</dt>
                  <dd className="text-right text-foreground">{course.requirements}</dd>
                </div>
              </dl>
              {course.availability && (
                <p className="mt-3 rounded-xl border border-gold/30 px-3 py-2 text-xs text-gold">
                  {course.availability}
                </p>
              )}
              <Link
                to="/cursos/$slug"
                params={{ slug: course.slug }}
                className="mt-5 inline-flex justify-center rounded-full border border-glass-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Ver detalhes
              </Link>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
