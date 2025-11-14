import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-secondary via-primary to-accent/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-16 text-center text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Partner Up</p>
        <h2 className="text-3xl font-semibold">
          Let&apos;s craft the next generation of AI-native products together.
        </h2>
        <p className="max-w-2xl text-sm text-white/80">
          From strategy sprints to production launches, I help product teams move faster with
          reliable engineering, pragmatic AI, and crisp storytelling.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:alex@mercer.dev"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-base transition hover:bg-white/90"
          >
            Start a Conversation
          </Link>
          <Link
            href="https://cal.com/your-handle/intro"
            className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Schedule Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
}
