import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { skillCategories } from "@/lib/content";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills | Ime Akanimo Edet" },
      {
        name: "description",
        content:
          "Skills and expertise of Ime Akanimo Edet — customer service and communication, technical skills, leadership, and creative development.",
      },
      { property: "og:title", content: "Skills | Ime Akanimo Edet" },
      {
        property: "og:description",
        content:
          "Organized into customer & communication, technical, leadership, and creative categories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

const categoryTones = [
  { chip: "bg-lavender-soft text-lavender-deep", bar: "bg-lavender" },
  { chip: "bg-teal-soft text-teal-deep", bar: "bg-teal" },
  { chip: "bg-primary text-primary-foreground", bar: "bg-primary" },
  { chip: "bg-lavender text-primary-foreground", bar: "bg-lavender-deep" },
];

function SkillsPage() {
  return (
    <>
      <PageShell eyebrow="Skills & Expertise" title="What I bring to the table">
        <p className="text-muted-foreground">
          My strengths sit at the intersection of people, technology, and creativity.
        </p>
      </PageShell>

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => {
            const tone = categoryTones[index % categoryTones.length]!;
            return (
              <section key={category.title} className="card-soft p-6 sm:p-8">
                <span className={`h-1.5 w-12 rounded-full ${tone.bar} block`} aria-hidden="true" />
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                  {category.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{category.blurb}</p>

                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className={`chip ${tone.chip}`}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
