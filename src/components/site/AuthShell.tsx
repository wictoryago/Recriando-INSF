import type { ReactNode } from "react";
import { SiteLayout } from "./SiteLayout";

export const authField =
  "w-full rounded-xl border border-glass-border bg-navy-deep/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30";
export const authLabel =
  "mb-2 block text-xs font-semibold uppercase tracking-wider text-gold";

export function AuthShell({
  tag,
  title,
  description,
  cardTitle,
  cardSubtitle,
  children,
}: {
  tag: string;
  title: string;
  description: string;
  cardTitle: string;
  cardSubtitle: string;
  children: ReactNode;
}) {
  return (
    <SiteLayout>
      <section className="section-shell grid items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full border border-gold/40 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
            {tag}
          </span>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-10">
          <header className="mb-8">
            <h2 className="font-heading text-2xl font-bold">{cardTitle}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{cardSubtitle}</p>
          </header>
          {children}
        </div>
      </section>
    </SiteLayout>
  );
}
