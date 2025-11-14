import Link from "next/link";
import { projects } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function ProjectsGrid() {
  return (
    <section id="projects" className="border-y border-white/10 bg-gradient-to-b from-base/80 via-base/60 to-base">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Selected Work"
          title="High-leverage products crafted with AI."
          caption="A snapshot of platforms, copilots, and developer tools I've shipped recently."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-accent/60 hover:bg-white/[0.08]"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>AI Powered</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold text-accent transition hover:text-white"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
