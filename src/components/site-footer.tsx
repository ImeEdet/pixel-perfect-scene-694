import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 text-center sm:px-8">
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {(
            [
              ["Home", "/"],
              ["About", "/about"],
              ["Experience", "/experience"],
              ["Projects", "/projects"],
              ["Skills", "/skills"],
              ["Contact", "/contact"],
            ] as const
          ).map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-teal-deep"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-muted-foreground">
          © 2026 Ime Akanimo Edet. Built with curiosity and creativity.
        </p>
      </div>
    </footer>
  );
}
