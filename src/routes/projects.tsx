import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { projects } from "@/lib/content";

import xyzFoodsImage from "@/assets/project-xyz-foods.png";
import storyMuseImage from "@/assets/project-story-muse.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Ime Akanimo Edet" },
      {
        name: "description",
        content:
          "Featured projects by Ime Akanimo Edet — XYZ Foods restaurant application demo and Story Muse Magic creative writing application.",
      },
      { property: "og:title", content: "Projects | Ime Akanimo Edet" },
      {
        property: "og:description",
        content:
          "Featured projects: XYZ Foods restaurant app demo and Story Muse Magic creative writing application.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

// Map project titles to their cover images. To add a new project later:
// 1. Add an entry to `projects` in src/lib/content.ts
// 2. Drop a cover image into src/assets and reference it here.
const projectImages: Record<string, string> = {
  "XYZ Foods": xyzFoodsImage,
  "Story Muse Magic": storyMuseImage,
};

function ProjectsPage() {
  return (
    <>
      <PageShell eyebrow="Featured Projects" title="Things I've built">
        <p className="text-muted-foreground">
          A selection of applications I've designed and shipped — each one a playground for
          solving real problems creatively.
        </p>
      </PageShell>

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="card-soft group overflow-hidden">
              <div className="overflow-hidden border-b border-border bg-secondary/40">
                <img
                  src={projectImages[project.title]}
                  alt={`${project.title} application preview`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-6 group/btn"
                >
                  Visit Live Project
                  <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          More projects are on the way — this space is easy to grow.
        </p>
      </div>
    </>
  );
}
