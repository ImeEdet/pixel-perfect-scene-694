import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ime Akanimo Edet | Software Engineer & Creative Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ime Akanimo Edet — Software Engineering graduate with experience in customer service, IT support, and creative application development.",
      },
      { property: "og:title", content: "Ime Akanimo Edet | Software Engineer & Creative Developer" },
      {
        property: "og:description",
        content:
          "Software Engineering graduate combining technical knowledge, customer-facing experience, and creative application development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const highlights = [
  {
    title: "People first",
    text: "Customer service and communication experience from NIMC, Start Innovation Hub, and beyond.",
    tone: "lavender" as const,
  },
  {
    title: "Technical foundations",
    text: "Python, HTML & CSS, IT support, and troubleshooting — from the classroom to live IT operations.",
    tone: "teal" as const,
  },
  {
    title: "Creative building",
    text: "Prototyping and shipping creative applications with modern AI-assisted tools.",
    tone: "navy" as const,
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Decorative composition */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-[-6rem] h-80 w-80 rounded-full bg-lavender-soft blur-3xl" />
          <div className="absolute right-[8%] top-24 hidden h-40 w-40 rounded-full border-[10px] border-teal-soft sm:block" />
          <div className="absolute bottom-[-4rem] left-[-3rem] h-64 w-64 rounded-[2.5rem] bg-teal-soft opacity-70 blur-2xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow">Hello, I'm</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Ime Akanimo
              <br />
              <span className="italic text-lavender-deep">Edet</span>
            </h1>
            <p className="mt-5 max-w-xl text-base font-medium text-muted-foreground sm:text-lg">
              {profile.roles}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              {profile.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/projects" className="btn btn-primary group">
                View My Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/experience" className="btn btn-outline">
                Explore My Experience
              </Link>
              <Link to="/contact" className="btn btn-lavender">
                Contact Me
              </Link>
            </div>
          </div>

          {/* Elegant monogram composition — no photograph needed */}
          <div className="relative mx-auto hidden w-full max-w-sm lg:block" aria-hidden="true">
            <div className="relative aspect-square">
              <div className="absolute inset-6 rounded-[3rem] bg-primary" />
              <div className="absolute inset-6 overflow-hidden rounded-[3rem]">
                <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-lavender opacity-70" />
                <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full bg-teal opacity-80" />
                <div className="absolute bottom-16 right-10 h-2 w-16 rounded-full bg-lavender-soft" />
                <div className="absolute bottom-24 right-10 h-2 w-10 rounded-full bg-teal-soft" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="font-display text-8xl font-medium italic text-primary-foreground">
                  ie
                </span>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-card px-5 py-4 shadow-lg shadow-foreground/10">
                <p className="text-xs font-bold uppercase tracking-widest text-lavender-deep">
                  Class of 2025
                </p>
                <p className="mt-1 font-display text-lg font-semibold">B.Sc. Software Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-border/70 bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-14 sm:px-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="card-soft p-6">
              <span
                className={
                  "chip " +
                  (item.tone === "lavender"
                    ? "bg-lavender-soft text-lavender-deep"
                    : item.tone === "teal"
                      ? "bg-teal-soft text-teal-deep"
                      : "bg-primary text-primary-foreground")
                }
              >
                {item.title}
              </span>
              <p className="mt-4 leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Curious about the work?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Take a look at the projects I've built, or get in touch — I'd love to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/projects" className="btn btn-primary">
            Browse Projects
          </Link>
          <a href={`mailto:${profile.email}`} className="btn btn-outline">
            <Mail className="h-4 w-4" />
            Email Me
          </a>
          <a href="/Ime-Edet-CV.pdf" download className="btn btn-lavender">
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </section>
    </>
  );
}
