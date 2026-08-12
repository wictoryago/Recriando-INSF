import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check, HeartHandshake } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { site } from "@/data/site";
import { buildPixPayload } from "@/lib/pix";
import { PixQrCode } from "@/components/site/PixQrCode";

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
  const pixPayload = buildPixPayload({
    key: pixKey,
    merchantName: site.shortName,
    merchantCity: "SAO PAULO",
    description: "Doacao Instituto",
  });
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

  const copyPayload = async () => {
    try {
      await navigator.clipboard.writeText(pixPayload);
      toast.success("Código PIX copiado!");
    } catch {
      toast.error("Não foi possível copiar o código PIX.");
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
          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-glass-border bg-navy-deep/50 p-6 sm:flex-row sm:items-center">
            <PixQrCode payload={pixPayload} />
            <div className="text-center sm:text-left">
              <h3 className="font-heading text-lg font-bold">Aponte a câmera do seu banco</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Leia o QR Code no app do seu banco e informe o valor que desejar. Se
                preferir, use o código PIX copia e cola.
              </p>
              <button
                type="button"
                onClick={copyPayload}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-glass-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Copy className="size-4" />
                Copiar código PIX
              </button>
              <p className="mt-3 text-sm">
                <button
                  type="button"
                  onClick={copyPayload}
                  className="text-gold underline underline-offset-4 hover:text-gold-soft"
                >
                  Não consegue ler o QR Code? Clique aqui
                </button>{" "}
                <span className="text-muted-foreground">
                  para copiar o mesmo código e colar no app do seu banco.
                </span>
              </p>
              <details className="mt-3 text-left text-xs text-muted-foreground">
                <summary className="cursor-pointer text-gold">
                  Ver o código PIX completo
                </summary>
                <p className="mt-2 break-all rounded-xl border border-glass-border bg-navy-deep/60 p-3 font-mono">
                  {pixPayload}
                </p>
              </details>
            </div>
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
