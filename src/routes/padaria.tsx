import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { site } from "@/data/site";

export const Route = createFileRoute("/padaria")({
  head: () => ({
    meta: [
      { title: "Padaria do Instituto | Pães artesanais que sustentam projetos" },
      {
        name: "description",
        content:
          "Pães, bolos e o tradicional Panetone do Frei. A padaria-escola do Instituto financia os projetos sociais e forma novos padeiros.",
      },
      { property: "og:title", content: "Padaria do Instituto | Tradição e Sabor" },
      {
        property: "og:description",
        content:
          "Produtos artesanais feitos diariamente; toda a renda sustenta os cursos gratuitos.",
      },
    ],
  }),
  component: BakeryPage,
});

const products = [
  ["Pão francês", "Assado ao longo de todo o dia, crocante por fora e macio por dentro."],
  ["Pães doces e bolos", "Receitas de família preparadas pelas turmas da padaria-escola."],
  ["Panetone do Frei", "A tradição de fim de ano mais esperada pela comunidade."],
  ["Encomendas", "Bolos e kits para festas, eventos e celebrações comunitárias."],
];

function BakeryPage() {
  return (
    <SiteLayout>
      <PageHero
        tag="Tradição & Sabor"
        title="Padaria do Instituto"
        subtitle="Todos os dias produzimos pães e produtos artesanais com ingredientes selecionados — e toda a renda volta para os projetos sociais."
      />

      <section className="section-shell grid items-center gap-10 pb-16 lg:grid-cols-2">
        <img
          src="/imagens/Logo-padaria.png"
          alt="Marca da Padaria do Instituto"
          className="mx-auto max-h-80 object-contain"
          loading="lazy"
        />
        <div className="glass-panel rounded-3xl p-8">
          <h2 className="font-heading text-2xl font-bold">Um projeto que se sustenta</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A padaria é ao mesmo tempo uma fonte de renda para os projetos sociais e um
            espaço de aprendizagem. Alunos acompanham a produção, aprendem manipulação de
            alimentos e atendimento ao público.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>🕖 Segunda a sábado, das 6h30 às 18h</li>
            <li>📍 {site.address}</li>
            <li>
              📱{" "}
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Encomendas pelo WhatsApp {site.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-shell grid gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(([title, text]) => (
          <article key={title} className="glass-panel rounded-2xl p-6">
            <h3 className="font-heading text-lg font-bold text-gold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
        <div className="sm:col-span-2 lg:col-span-4 text-center">
          <Link
            to="/contato"
            className="inline-flex rounded-full bg-[image:var(--gradient-gold)] px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Falar com a padaria
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
