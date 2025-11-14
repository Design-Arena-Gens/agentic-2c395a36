import { experience } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function ExperienceTimeline() {
  return (
    <section id="about" className="bg-base">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionTitle
            eyebrow="Experience"
            title="Shaping AI-powered products end to end."
            caption="I help teams navigate the full lifecycle: from whiteboard to production-scale systems with measurable impact."
          />
          <div className="relative space-y-8 border-l border-white/10 pl-10">
            <span className="absolute left-0 top-0 h-4 w-4 -translate-x-[9px] rounded-full border border-accent bg-base" />
            {experience.map((role) => (
              <article
                key={role.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  {role.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{role.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{role.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
