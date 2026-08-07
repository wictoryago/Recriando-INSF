import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionHeader } from "@/components/site/SiteLayout";
import { courses } from "@/data/courses";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Instituto Social Nossa Senhora de Fátima | Cursos Gratuitos",
      },
      {
        name: "description",
        content:
          "Formação profissional gratuita, acolhimento comunitário e projetos sociais em São Paulo desde 1971. Conheça nossos cursos e inscreva-se.",
      },
      {
        property: "og:title",
        content: "Instituto Social Nossa Senhora de Fátima | Cursos Gratuitos",
      },
      {
        property: "og:description",
        content:
          "Capacitação, esperança e transformação social: cursos técnicos, idiomas e qualificação gratuitos para jovens e adultos.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: "/imagens/book.png",
    title: "Formação Técnica",
    text: "Cursos nas áreas de TI, Gestão, Comunicação Visual e Idiomas projetados para gerar empregabilidade rápida e qualificada.",
  },
  {
    icon: "/imagens/handshake.png",
    title: "Acolhimento Comunitário",
    text: "Projetos sociais, oficinas e ações direcionadas às famílias vulneráveis, fortalecendo os vínculos sociais e a solidariedade.",
  },
  {
    icon: "/imagens/bread.png",
    title: "Sustentabilidade & Tradição",
    text: "Nossa padaria gera recursos direcionados aos projetos sociais e mantém tradições queridas como o Panetone do Frei.",
  },
];

function Home() {
  return (
    <SiteLayout>
      <section className="section-shell grid items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-glass-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-2 animate-pulse rounded-full bg-gold" />
            Desde {site.since} transformando futuros
          </span>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Capacitação, Esperança e{" "}
            <span className="text-gradient-gold">Transformação Social</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Oferecemos formação profissional gratuita, desenvolvimento humano e
            assistência comunitária para que jovens e adultos construam uma trajetória de
            dignidade e sucesso.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/cursos"
              className="rounded-full bg-[image:var(--gradient-blue)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glass)] transition-transform hover:-translate-y-0.5"
            >
              Conheça Nossos Cursos
            </Link>
            <Link
              to="/sobre"
              className="rounded-full border border-glass-border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Explore Nossa Missão
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-glass-border pt-8">
            {[
              ["55", "Anos de História"],
              ["6+", "Cursos Completos"],
              ["100%", "Dedicação Social"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-heading text-3xl font-extrabold text-gold">{value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="glass-panel overflow-hidden rounded-[2rem] p-3">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Alunos em capacitação profissional no Instituto"
            className="h-[26rem] w-full rounded-[1.5rem] object-cover"
            width={1200}
            height={800}
          />
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeader
          tag="Quem Somos"
          title="Compromisso com o Desenvolvimento Humano"
          subtitle="Conheça os pilares que sustentam nossas ações diariamente na comunidade."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="glass-panel rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <img src={p.icon} alt="" aria-hidden className="size-12" loading="lazy" />
              <h3 className="mt-5 font-heading text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="glass-panel grid gap-10 rounded-[2rem] p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
          <div className="relative">
            <img
              src="/imagens/Logo-Reformulada.png"
              alt="Frei do Instituto Social Nossa Senhora de Fátima"
              className="w-full rounded-3xl bg-navy-deep object-contain p-6"
              loading="lazy"
            />
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[image:var(--gradient-gold)] px-4 py-2 text-xs font-semibold text-accent-foreground">
              Liderança Espiritual e Social
            </span>
          </div>
          <div>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Nossa Inspiração
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              Liderança com Fé, Fraternidade e Serviço
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Nossa caminhada é guiada pelos valores franciscanos de acolhimento,
              fraternidade e dedicação incondicional aos que mais precisam.
            </p>
            <blockquote className="mt-6 border-l-2 border-gold pl-5 font-heading text-lg italic leading-relaxed">
              “A verdadeira transformação social acontece quando unimos fé, educação de
              qualidade e compaixão a serviço do próximo.”
            </blockquote>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              O Frei atua diretamente na comunidade articulando projetos socioeducativos e
              mantendo viva a missão de oferecer oportunidades dignas para jovens e
              adultos.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {[
                "Gestão Comunitária",
                "Acolhimento Fraterno",
                "Fomento à Educação",
                "Aprendizado Contínuo",
              ].map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-glass-border px-4 py-2 text-xs font-medium text-muted-foreground"
                >
                  ✓ {chip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeader
          tag="Capacitação Profissional"
          title="Conheça Nossos Cursos"
          subtitle="Aprenda novas habilidades e abra portas para o mercado de trabalho com nossa grade curricular moderna."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.slug}
              className="glass-panel group overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1"
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
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold">{course.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {course.summary}
                </p>
                <Link
                  to="/cursos/$slug"
                  params={{ slug: course.slug }}
                  className="mt-4 inline-flex text-sm font-semibold text-gold transition-transform hover:translate-x-1"
                >
                  Saber mais →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/inscricao"
            className="inline-flex rounded-full bg-[image:var(--gradient-blue)] px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Ver Todos os Cursos e Inscrições
          </Link>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="glass-panel grid items-center gap-10 rounded-[2rem] p-8 md:grid-cols-2 lg:p-12">
          <div>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Tradição & Sabor
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              Padaria do Instituto
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Todos os dias, nossa padaria produz pães e produtos artesanais com
              ingredientes selecionados, amor e cuidado — e toda a renda sustenta os
              projetos sociais.
            </p>
            <Link
              to="/padaria"
              className="mt-6 inline-flex rounded-full bg-[image:var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Encomendar ou Visitar
            </Link>
          </div>
          <img
            src="/imagens/Logo-padaria.png"
            alt="Produtos artesanais da Padaria do Instituto"
            className="mx-auto max-h-72 object-contain"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
