import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, CalendarDays, Target, GraduationCap } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getCourse, type Course } from "@/data/courses";

export const Route = createFileRoute("/cursos/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Curso não encontrado" }, { name: "robots", content: "noindex" }],
      };
    }
    const { course } = loaderData;
    const title = `${course.title} | Instituto Social N. Sra. de Fátima`;
    return {
      meta: [
        { title },
        { name: "description", content: course.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: course.summary },
        { property: "og:image", content: course.image },
        { name: "twitter:image", content: course.image },
      ],
    };
  },
  notFoundComponent: CourseNotFound,
  component: CourseDetail,
});

function CourseNotFound() {
  return (
    <SiteLayout>
      <div className="section-shell py-24 text-center">
        <h1 className="font-heading text-3xl font-bold">Curso não encontrado</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          O curso que você procura não está disponível no momento.
        </p>
        <Link
          to="/cursos"
          className="mt-6 inline-flex rounded-full border border-glass-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
        >
          Ver todos os cursos
        </Link>
      </div>
    </SiteLayout>
  );
}

function CourseDetail() {
  const { course } = Route.useLoaderData() as { course: Course };

  const facts = [
    { icon: Clock, label: "Carga Horária", value: course.workload },
    { icon: CalendarDays, label: "Duração", value: course.duration },
    { icon: Target, label: "Requisitos", value: course.requirements },
    { icon: GraduationCap, label: "Horários", value: course.schedule },
  ];

  return (
    <SiteLayout>
      <section className="section-shell">
        <div className="glass-panel relative overflow-hidden rounded-[2rem]">
          <img
            src={course.image}
            alt={course.title}
            className="h-72 w-full object-cover opacity-40 sm:h-96"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy via-navy/70 to-transparent p-8 lg:p-12">
            <span className="w-fit rounded-full border border-gold/40 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
              {course.category}
            </span>
            <h1 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold sm:text-5xl">
              {course.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {course.description}
            </p>
            <Link
              to="/inscricao"
              className="mt-6 w-fit rounded-full bg-[image:var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Garantir Minha Vaga
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="glass-panel rounded-2xl p-6">
            <f.icon className="size-6 text-gold" aria-hidden />
            <h2 className="mt-4 font-heading text-base font-bold">{f.label}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.value}</p>
          </div>
        ))}
      </section>

      <section className="section-shell grid gap-8 pb-20 lg:grid-cols-2">
        <div className="glass-panel rounded-3xl p-8">
          <h2 className="font-heading text-2xl font-bold">Conteúdo Programático</h2>
          <ol className="mt-6 space-y-4">
            {course.curriculum.map((item, i) => (
              <li key={item} className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary font-heading text-sm font-bold text-gold">
                  {i + 1}
                </span>
                <span className="pt-1 text-sm leading-relaxed text-muted-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className="glass-panel rounded-3xl p-8">
          <h2 className="font-heading text-2xl font-bold">Diferenciais</h2>
          <ul className="mt-6 space-y-4">
            {course.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="text-gold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-gold/30 p-6">
            <p className="text-sm leading-relaxed">
              As vagas são limitadas e as turmas abrem a cada semestre. Faça sua inscrição
              e a secretaria entrará em contato.
            </p>
            <Link
              to="/inscricao"
              className="mt-4 inline-flex rounded-full bg-[image:var(--gradient-blue)] px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Fazer inscrição
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
