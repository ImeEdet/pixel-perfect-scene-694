import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {children && <div className="mt-5">{children}</div>}
      </div>
    </div>
  );
}
