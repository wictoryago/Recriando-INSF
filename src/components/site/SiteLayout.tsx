import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-28">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="section-shell py-12 text-center">
      <span className="inline-block rounded-full border border-gold/40 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
        {tag}
      </span>
      <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </section>
  );
}

export function SectionHeader({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
        {tag}
      </span>
      <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
