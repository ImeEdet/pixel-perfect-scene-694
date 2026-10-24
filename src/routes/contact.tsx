import { createFileRoute } from "@tanstack/react-router";
import { Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { contact } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Ime Akanimo Edet" },
      {
        name: "description",
        content:
          "Get in touch with Ime Akanimo Edet — open to connecting, collaborating, and exploring new opportunities.",
      },
      { property: "og:title", content: "Let's Connect | Ime Akanimo Edet" },
      {
        property: "og:description",
        content:
          "Open to connecting, collaborating, and exploring opportunities. Reach out by email or download the CV.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageShell eyebrow="Get in Touch" title={contact.heading}>
        <p className="text-muted-foreground">{contact.message}</p>
      </PageShell>

      <div className="mx-auto max-w-4xl px-5 pb-20 pt-12 sm:px-8">
        {/* Email — primary channel */}
        <a
          href={`mailto:${contact.email}`}
          className="card-soft group flex items-center gap-5 p-6 sm:p-8"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-lavender-deep">
            <Mail className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="eyebrow">Email</span>
            <span className="mt-1 block truncate font-display text-xl font-semibold text-foreground sm:text-2xl">
              {contact.email}
            </span>
          </span>
        </a>

        {/* Social profiles — placeholders until real links are added */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="card-soft flex items-center gap-5 p-6 sm:p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lavender-soft text-lavender-deep">
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-foreground">LinkedIn</p>
              <p className="text-sm text-muted-foreground">
                {contact.linkedin ? (
                  <a href={contact.linkedin} className="underline underline-offset-2">
                    Visit profile
                  </a>
                ) : (
                  "Profile link coming soon"
                )}
              </p>
            </div>
          </div>

          <div className="card-soft flex items-center gap-5 p-6 sm:p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-soft text-teal-deep">
              <Github className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-foreground">GitHub</p>
              <p className="text-sm text-muted-foreground">
                {contact.github ? (
                  <a href={contact.github} className="underline underline-offset-2">
                    Visit profile
                  </a>
                ) : (
                  "Profile link coming soon"
                )}
              </p>
            </div>
          </div>
        </div>

        {/* CV download */}
        <div className="mt-5 overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <Sparkles className="h-7 w-7 text-lavender" aria-hidden="true" />
              <div>
                <p className="font-display text-xl font-semibold">Want the full picture?</p>
                <p className="text-sm text-primary-foreground/80">
                  Download my CV for the complete overview.
                </p>
              </div>
            </div>
            <a href={contact.cvPath} download className="btn bg-lavender text-white hover:bg-lavender-soft hover:text-lavender-deep">
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
