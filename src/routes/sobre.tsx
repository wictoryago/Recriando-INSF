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
          "Fundado em 1971 por Frei Xavier, o Instituto Social Nossa Senhora de Fátima forma jovens e adultos da zona sul de São Paulo com cursos técnicos, de qualificação e livres.",
      },
      { property: "og:title", content: "Sobre Nós | Instituto Social" },
      {
        property: "og:description",
        content:
          "História, missão, visão e valores do Instituto Social Nossa Senhora de Fátima — a Escola do Frei.",
      },
    ],
  }),
  component: AboutPage,
});

const history = [
  "Fundado em 1971, pelo Frei Xavier (como é carinhosamente conhecido), o Instituto Social Nossa Senhora de Fátima é uma instituição sem fins lucrativos, localizada na zona sul de São Paulo, e tem sido um farol para o desenvolvimento humano e profissional de jovens a partir de 13 anos. Com duas unidades de ensino, o instituto dedica-se a capacitá-los por meio da oferta de cursos técnicos, de qualificação e livres, proporcionando oportunidades valiosas para o crescimento pessoal e profissional do ser humano. Sua trajetória é marcada pelo compromisso contínuo com o impacto positivo na comunidade, a educação e o crescimento sólido da juventude.",
  "Em 2015, a unidade de ensino da Rua Ave Maria tornou-se o CEDESP Ave Maria — Centro de Desenvolvimento Social e Produtivo, que atende adolescentes, jovens e adultos de 15 a 59 anos. Essa instituição possui convênio com a Secretaria Municipal de Assistência e Desenvolvimento Social (SMADS) e atende anualmente 640 usuários nos cursos de Qualificação Profissional: Assistente Administrativo, Assistente de Recursos Humanos, Torneiro Mecânico, Ajustador Mecânico, Montador e Reparador de Computadores e Redes.",
  "A Escola Profissional Nossa Senhora de Fátima é uma instituição moderna, com uma infraestrutura completa que inclui uma edificação de quatro andares. Contamos com salas de aula bem equipadas, laboratórios especializados, oficinas práticas, uma biblioteca e um auditório para eventos e palestras.",
  "Oferecemos uma diversidade de cursos voltados à formação técnica e qualificação profissional. Entre nossos cursos técnicos, destacam-se os de Administração, Comunicação Visual e Informática. Além disso, proporcionamos cursos de qualificação profissional em áreas de alta demanda, como Eletromecânica de Autos, Automação Residencial e Robótica, preparando nossos alunos para os desafios do mercado de trabalho.",
  "Nosso programa de cursos livres inclui aulas de Inglês, que vão do nível Teens I até o Avançado, a partir dos 13 anos de idade. Para adultos, oferecemos cursos noturnos de Inglês, Informática Básica, Excel e Eletricista Instalador, possibilitando a capacitação e o desenvolvimento profissional em horários flexíveis.",
  "A Escola Profissional Nossa Senhora de Fátima é o lugar ideal para jovens e adultos que buscam qualificação de qualidade para ingressar no mercado de trabalho com confiança e competitividade.",
];

const pillars = [
  {
    title: "Missão",
    text: "Promover o ser humano no caminho para a cidadania, mediante um programa de ensino de qualidade e desenvolvimento que ofereça aos menos favorecidos as condições intelectuais, profissionais, morais e religiosas, capazes de prepará-los para uma vida melhor e mais promissora.",
  },
  {
    title: "Visão",
    text: "Ser um farol de referência na formação pessoal, intelectual e profissional, moldado em planejar um ambiente onde cada um tenha acesso igualitário a oportunidades, promovendo não só o aprendizado como o crescimento social e emocional.",
  },
  {
    title: "Valores",
    text: "Os valores que norteiam nossa instituição são a moral, a ética, excelência, inovação, criatividade, qualidade, respeito e a integridade. Buscamos a qualidade no ensino e na formação técnica de alto nível. Valorizamos as mudanças no mundo e integramos as tecnologias emergentes em nossos programas educacionais.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        tag="Quem Somos"
        title="Sejam bem-vindos à Escola do Frei"
        subtitle={`Desde ${site.since}, formação profissional gratuita e desenvolvimento humano no extremo sul de São Paulo.`}
      />

      <section className="section-shell pb-16">
        <div className="glass-panel rounded-3xl p-8 sm:p-10">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            O Instituto Nossa Senhora de Fátima, localizado no extremo sul de São Paulo, é
            uma instituição dedicada à formação de jovens de baixa renda, oferecendo
            oportunidades de educação e qualificação profissional. Com um compromisso firme
            de inclusão social, o instituto oferece vários cursos, capacitando seus alunos
            para o mercado de trabalho. Ao longo dos anos, o Instituto tem se destacado por
            seu impacto transformador na vida de jovens, promovendo não apenas conhecimento
            técnico, mas também habilidades comportamentais, sociais e tecnológicas
            essenciais para o sucesso profissional.
          </p>
          <figure className="mt-8 border-l-2 border-gold pl-6">
            <blockquote className="font-heading text-xl font-bold leading-snug sm:text-2xl">
              “Não dar o peixe, mas sim, ensinar a pescar.”
            </blockquote>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Frei Xavier — Fundador do Instituto Social Nossa Senhora de Fátima.
              Transformando vidas através da Educação e Cidadania.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-shell pb-16">
        <SectionHeader
          tag="Nossa História"
          title="Conheça nossa história"
          subtitle="Mais de cinco décadas de educação, acolhimento e trabalho junto à comunidade."
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-5">
          {history.map((paragraph, index) => (
            <p
              key={index}
              className="glass-panel rounded-2xl p-6 text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="section-shell pb-24">
        <SectionHeader tag="Nossos Princípios" title="Missão, Visão e Valores" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="glass-panel rounded-3xl p-8">
              <h3 className="font-heading text-xl font-bold text-gold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.text}
              </p>
            </article>
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
