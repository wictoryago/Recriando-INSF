import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-glass-border bg-navy-deep/50">
      <div className="section-shell grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/imagens/Logo.webp"
              alt={`Logo do ${site.name}`}
              className="size-12 rounded-full object-cover"
              width={48}
              height={48}
              loading="lazy"
            />
            <h3 className="font-heading text-lg font-bold leading-tight">
              Instituto Social
              <br />
              Nossa Senhora de Fátima
            </h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Transformando vidas por meio da educação profissional, fé e acolhimento
            comunitário desde {site.since}.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Contato & Atendimento
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-gold" aria-hidden /> {site.phone} — Secretaria
              </a>
            </li>
            <li>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4 text-gold" aria-hidden /> {site.whatsapp} —
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-gold" aria-hidden /> {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Links Rápidos
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Início" },
              { to: "/sobre", label: "Quem Somos" },
              { to: "/cursos", label: "Nossos Cursos" },
              { to: "/inscricao", label: "Inscrição em Cursos" },
              { to: "/padaria", label: "Padaria" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="transition-colors hover:text-foreground"
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Como Ajudar
          </h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Sua colaboração mantém nossos cursos e projetos comunitários ativos.
          </p>
          <Link
            to="/apoie"
            className="mt-4 inline-flex rounded-full bg-[image:var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Faça uma Doação
          </Link>
        </div>
      </div>

      <div className="border-t border-glass-border py-6 text-center text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
