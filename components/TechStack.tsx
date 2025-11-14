import { skills } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function TechStack() {
  return (
    <section id="skills" className="border-y border-white/10 bg-base/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <SectionTitle
          eyebrow="Expertise"
          title="Full stack execution with an AI-first toolkit."
          caption={skills.headline}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.categories.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-inner shadow-black/20"
            >
              <p className="font-semibold text-white">{section.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center justify-between">
                    <span>{item}</span>
                    <span className="h-2 w-2 rounded-full bg-accent/70" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
