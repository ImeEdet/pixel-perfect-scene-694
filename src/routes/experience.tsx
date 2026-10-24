import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { experience } from "@/lib/content";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience | Ime Akanimo Edet" },
      {
        name: "description",
        content:
          "Professional experience of Ime Akanimo Edet — IT support at NDDC, team lead at Start Innovation Hub, customer service at NIMC, and instruction work.",
      },
      { property: "og:title", content: "Experience | Ime Akanimo Edet" },
      {
        property: "og:description",
        content:
          "Roles across IT support, developer mentorship, customer service, and technical instruction.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <PageShell
        eyebrow="Professional Experience"
        title="Where I've worked & what I've done"
      >
        <p className="text-muted-foreground">
          A timeline of roles spanning IT operations, mentorship, customer service, and teaching.
        </p>
      </PageShell>

      <div className="mx-auto max-w-4xl px-5 pb-20 pt-12 sm:px-8">
        <ol className="relative space-y-8 before:absolute before:bottom-4 before:left-[11px] before:top-4 before:w-px before:bg-border sm:before:left-[15px]">
          {experience.map((item) => (
            <li key={`${item.company}-${item.period}`} className="relative pl-10 sm:pl-14">
              {/* Timeline marker */}
              <span
                aria-hidden="true"
                className={
                  "absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 sm:h-8 sm:w-8 " +
                  (item.current
                    ? "border-teal-deep bg-teal"
                    : "border-border bg-lavender-soft")
                }
              >
                {item.current && (
                  <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                )}
              </span>

              <div className="card-soft p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={
                      "chip " +
                      (item.current
                        ? "bg-teal text-primary-foreground"
                        : "bg-lavender-soft text-lavender-deep")
                    }
                  >
                    {item.current ? "Current role" : item.period}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
                </div>

                <h2 className="mt-3 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {item.role}
                </h2>
                <p className="mt-1 font-semibold text-lavender-deep">{item.company}</p>

                <ul className="mt-4 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-foreground/85">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-deep"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
