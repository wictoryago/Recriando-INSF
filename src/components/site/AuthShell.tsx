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

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" className="size-5" aria-hidden focusable="false">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.4l6.2 5.2C37 40.2 44 35 44 24c0-1.3-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

export function GoogleAuthButton({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-glass-border bg-navy-deep/60 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary disabled:opacity-60"
    >
      <GoogleMark />
      {label}
    </button>
  );
}

export function AuthDivider({ label }: { label: string }) {
  return (
    <div className="my-6 flex items-center gap-4">
      <span className="h-px flex-1 bg-glass-border" />
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className="h-px flex-1 bg-glass-border" />
    </div>
  );
}
