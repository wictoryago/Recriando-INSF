import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check, HeartHandshake } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { site } from "@/data/site";

export const Route = createFileRoute("/apoie")({
  head: () => ({
    meta: [
      { title: "Faça uma Doação | Instituto Social N. Sra. de Fátima" },
      {
        name: "description",
        content:
          "Apoie os cursos gratuitos e os projetos comunitários do Instituto Social Nossa Senhora de Fátima com uma doação via PIX.",
      },
      { property: "og:title", content: "Faça uma Doação | Instituto Social" },
      {
        property: "og:description",
        content: "Sua colaboração mantém nossos cursos gratuitos e projetos sociais ativos.",
      },
    ],
  }),
  component: DonatePage,
});

const impact = [
  ["R$ 30", "Material didático para um aluno durante um módulo."],
  ["R$ 100", "Insumos de laboratório para uma turma de informática."],
  ["R$ 250", "Uma bolsa completa de qualificação profissional."],
];

function DonatePage() {
  const pixKey = site.email;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      toast.success("Chave PIX copiada!");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Não foi possível copiar. Copie manualmente a chave.");
    }
  };

  return (
    <SiteLayout>
      <PageHero
        tag="Como Ajudar"
        title="Sua doação mantém nossos cursos gratuitos"
        subtitle="Cada contribuição vira material didático, insumos de laboratório e oportunidades reais para a comunidade."
      />

      <section className="section-shell grid gap-8 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-3xl p-8">
          <HeartHandshake className="size-8 text-gold" aria-hidden />
          <h2 className="mt-4 font-heading text-2xl font-bold">Doe via PIX</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Chave PIX institucional do Instituto. Ao doar, envie o comprovante pelo
            WhatsApp para emitirmos o recibo.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              readOnly
              value={pixKey}
              aria-label="Chave PIX do Instituto"
              className="w-full rounded-xl border border-glass-border bg-navy-deep/60 px-4 py-3 text-sm"
            />
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-gold hover:underline"
          >
            Enviar comprovante pelo WhatsApp {site.whatsapp}
          </a>
        </div>

        <div className="glass-panel rounded-3xl p-8">
          <h2 className="font-heading text-2xl font-bold">O impacto da sua doação</h2>
          <ul className="mt-6 space-y-5">
            {impact.map(([value, text]) => (
              <li key={value} className="flex gap-4">
                <span className="font-heading text-xl font-extrabold text-gold">
                  {value}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="glass-panel rounded-3xl p-8 text-center">
          <h2 className="font-heading text-2xl font-bold">Outras formas de apoiar</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Doe alimentos e materiais, torne-se voluntário, ofereça vagas de estágio ou
            firme uma parceria institucional com o Instituto.
          </p>
          <Link
            to="/contato"
            className="mt-6 inline-flex rounded-full border border-glass-border px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            Falar com a equipe
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
