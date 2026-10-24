import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, HeartHandshake, Lightbulb, PenLine } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { aboutParagraphs, education } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Ime Akanimo Edet" },
      {
        name: "description",
        content:
          "About Ime Akanimo Edet — Software Engineering graduate from Topfaith University with experience in IT operations, customer service, technical support, and teaching.",
      },
      { property: "og:title", content: "About | Ime Akanimo Edet" },
      {
        property: "og:description",
        content:
          "Software Engineering graduate with experience in IT operations, customer service, technical support, and teaching.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Lightbulb, label: "Problem-Solving" },
  { icon: HeartHandshake, label: "Communication" },
  { icon: GraduationCap, label: "Continuous Learning" },
  { icon: PenLine, label: "Creative Curiosity" },
];

function AboutPage() {
  return (
    <>
      <PageShell eyebrow="About Me" title="A little about who I am" />

      <div className="mx-auto mt-10 max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Story */}
          <div className="space-y-5">
            {aboutParagraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/85 sm:text-lg">
                {paragraph}
              </p>
            ))}

            <div className="mt-8 flex flex-wrap gap-2.5">
              {values.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="chip bg-lavender-soft text-lavender-deep"
                  title={label}
                >
                  <Icon className="mr-1.5 h-4 w-4" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Education card */}
          <aside>
            <div className="card-soft overflow-hidden">
              <div className="bg-primary px-6 py-6 text-primary-foreground">
                <p className="eyebrow" style={{ color: "var(--color-lavender)" }}>
                  Education
                </p>
                <GraduationCap className="mt-3 h-8 w-8" aria-hidden="true" />
                <h2 className="mt-2 font-display text-2xl font-semibold">{education.school}</h2>
              </div>
              <div className="px-6 py-6">
                <p className="font-semibold text-foreground">{education.degree}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{education.years}</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-teal-soft p-6">
              <p className="font-display text-lg font-semibold text-teal-deep">Beyond work</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                Language learning, fiction writing, and digital creativity keep me experimenting —
                they sharpen the same skills I bring to building useful software.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
