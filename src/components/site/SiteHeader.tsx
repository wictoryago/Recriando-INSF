import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3">
      <nav
        aria-label="Navegação principal"
        className={cn(
          "glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6",
          scrolled && "bg-navy/85 shadow-[var(--shadow-elevated)]",
        )}
      >
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/imagens/Logo.webp"
            alt={`Logo do ${site.name}`}
            className="size-11 rounded-full object-cover ring-1 ring-glass-border"
            width={44}
            height={44}
          />
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-base font-bold tracking-wide">
              {site.shortName}
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              Nossa Senhora de Fátima
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/inscricao"
            className="hidden rounded-full bg-[image:var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Inscreva-se
          </Link>
          <Link
            to="/entrar"
            className="hidden items-center gap-2 rounded-full border border-glass-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary lg:inline-flex"
          >
            <img src="/imagens/do-utilizador.webp" alt="" aria-hidden className="size-4" />
            Entrar
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-full border border-glass-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-panel mx-auto mt-2 max-w-6xl rounded-3xl p-4 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-gold" }}
                className="rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/entrar"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl border border-glass-border px-3 py-3 text-center text-sm font-medium"
            >
              Entrar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
