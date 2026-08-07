import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { site } from "@/data/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Instituto Social N. Sra. de Fátima" },
      {
        name: "description",
        content:
          "Fale com a secretaria do Instituto Social Nossa Senhora de Fátima: telefone, WhatsApp, e-mail e formulário de mensagem.",
      },
      { property: "og:title", content: "Contato | Instituto Social" },
      {
        property: "og:description",
        content: "Telefone, WhatsApp, e-mail e formulário para falar com o Instituto.",
      },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full rounded-xl border border-glass-border bg-navy-deep/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30";
const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-wider text-gold";

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Mensagem enviada!", {
        description: "Responderemos em até dois dias úteis.",
      });
    }, 600);
  };

  const channels = [
    { icon: Phone, label: "Secretaria", value: site.phone, href: site.phoneHref },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: site.whatsapp,
      href: site.whatsappHref,
    },
    { icon: Mail, label: "E-mail", value: site.email, href: site.emailHref },
    { icon: MapPin, label: "Endereço", value: site.address, href: undefined },
  ];

  return (
    <SiteLayout>
      <PageHero
        tag="Fale Conosco"
        title="Estamos aqui para ajudar"
        subtitle="Dúvidas sobre cursos, matrículas, doações ou parcerias? Escolha o canal que preferir."
      />

      <section className="section-shell grid gap-8 pb-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {channels.map((c) => (
            <div key={c.label} className="glass-panel rounded-2xl p-6">
              <c.icon className="size-5 text-gold" aria-hidden />
              <h2 className="mt-3 font-heading text-base font-bold">{c.label}</h2>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {c.value}
                </a>
              ) : (
                <p className="mt-1 text-sm text-muted-foreground">{c.value}</p>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="glass-panel rounded-3xl p-6 sm:p-10">
          <h2 className="font-heading text-2xl font-bold">Envie uma mensagem</h2>
          <div className="mt-6 grid gap-5">
            <div>
              <label htmlFor="contato-nome" className={labelClass}>
                Nome
              </label>
              <input
                id="contato-nome"
                name="nome"
                required
                maxLength={120}
                autoComplete="name"
                placeholder="Seu nome"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="contato-email" className={labelClass}>
                E-mail
              </label>
              <input
                id="contato-email"
                name="email"
                type="email"
                required
                maxLength={160}
                autoComplete="email"
                placeholder="seuemail@dominio.com"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="contato-assunto" className={labelClass}>
                Assunto
              </label>
              <select
                id="contato-assunto"
                name="assunto"
                defaultValue="Cursos"
                className={fieldClass}
              >
                <option>Cursos</option>
                <option>Padaria e encomendas</option>
                <option>Doações</option>
                <option>Parcerias e voluntariado</option>
                <option>Outro assunto</option>
              </select>
            </div>
            <div>
              <label htmlFor="contato-mensagem" className={labelClass}>
                Mensagem
              </label>
              <textarea
                id="contato-mensagem"
                name="mensagem"
                required
                rows={5}
                maxLength={1200}
                placeholder="Como podemos ajudar?"
                className={fieldClass}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="rounded-full bg-[image:var(--gradient-blue)] px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? "Enviando..." : "Enviar mensagem"}
            </button>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}
