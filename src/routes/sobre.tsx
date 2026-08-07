import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, SectionHeader } from "@/components/site/SiteLayout";
import { site } from "@/data/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós | Instituto Social N. Sra. de Fátima" },
      {
        name: "description",
        content:
          "Conheça a história, a missão e os valores franciscanos que guiam o Instituto Social Nossa Senhora de Fátima desde 1971.",
      },
      { property: "og:title", content: "Sobre Nós | Instituto Social" },
      {
        property: "og:description",
        content: "História, missão e valores do Instituto Social Nossa Senhora de Fátima.",
      },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "1971",
    text: "Fundação do Instituto com as primeiras oficinas de formação para jovens da comunidade.",
  },
  {
    year: "1990",
    text: "Ampliação das turmas técnicas e criação dos primeiros cursos de idiomas.",
  },
  {
    year: "2005",
    text: "Abertura da padaria-escola, que passa a sustentar parte dos projetos sociais.",
  },
  {
    year: "Hoje",
    text: "Seis cursos gratuitos ativos, atendimento às famílias e apoio contínuo à empregabilidade.",
  },
];

const values = [
  ["Acolhimento", "Cada pessoa é recebida com dignidade, escuta e respeito."],
  ["Educação", "Formação técnica de qualidade e gratuita como caminho de autonomia."],
  ["Fraternidade", "Os valores franciscanos orientam nossa convivência diária."],
  ["Transparência", "Prestação de contas clara sobre doações e projetos."],
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        tag="Quem Somos"
        title="Mais de 50 anos ao lado da comunidade"
        subtitle={`Desde ${site.since} promovemos formação profissional, acolhimento e desenvolvimento humano em São Paulo.`}
      />

      <section className="section-shell grid gap-8 pb-16 lg:grid-cols-2">
        <div className="glass-panel rounded-3xl p-8">
          <h2 className="font-heading text-2xl font-bold">Nossa Missão</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Oferecer educação profissional gratuita e de qualidade, aliada ao cuidado
            humano, para que jovens e adultos em situação de vulnerabilidade construam
            trajetórias de dignidade, trabalho e cidadania.
          </p>
        </div>
        <div className="glass-panel rounded-3xl p-8">
          <h2 className="font-heading text-2xl font-bold">Nossa Visão</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Ser referência regional em formação profissional social, com projetos
            sustentáveis que retornam integralmente para a comunidade que nos acolhe.
          </p>
        </div>
      </section>

      <section className="section-shell pb-16">
        <SectionHeader tag="Nossa História" title="Uma caminhada construída junto" />
        <ol className="mx-auto mt-12 max-w-3xl border-l border-glass-border pl-8">
          {timeline.map((item) => (
            <li key={item.year} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[2.15rem] top-1 size-4 rounded-full bg-[image:var(--gradient-gold)]" />
              <h3 className="font-heading text-xl font-bold text-gold">{item.year}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell pb-24">
        <SectionHeader tag="Nossos Valores" title="O que nos guia todos os dias" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, text]) => (
            <div key={title} className="glass-panel rounded-2xl p-6">
              <h3 className="font-heading text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/cursos"
            className="inline-flex rounded-full bg-[image:var(--gradient-blue)] px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Conhecer os cursos
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
