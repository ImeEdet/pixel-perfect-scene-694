import { Link } from "@tanstack/react-router";

const navLinks: { label: string; to: "/" | "/about" | "/experience" | "/projects" | "/skills" | "/contact" }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 text-center sm:px-8">
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-teal-deep"
            >
              {item.label}
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
