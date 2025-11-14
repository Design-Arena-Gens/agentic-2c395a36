import Link from "next/link";
import { writing } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function WritingList() {
  return (
    <section id="writing" className="border-y border-white/10 bg-base/70">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Writing"
          title="Documenting lessons from the field."
          caption="Thought pieces and implementation deep dives exploring AI agents, DX, and resilient full stack patterns."
        />
        <div className="mt-12 space-y-4">
          {writing.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="flex flex-col gap-2 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-5 transition hover:border-accent hover:bg-white/[0.08] sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-lg font-medium text-white">{post.title}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {post.date}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
