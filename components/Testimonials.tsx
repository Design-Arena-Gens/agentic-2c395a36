import { testimonials } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-base">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Signals"
          title="Trusted partners on shipping AI-forward products."
          caption="Leaders I've collaborated with on high-stakes launches."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((quote) => (
            <figure
              key={quote.name}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <blockquote className="text-sm text-slate-300">“{quote.quote}”</blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.25em] text-accent">
                {quote.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
