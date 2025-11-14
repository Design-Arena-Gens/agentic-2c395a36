import Link from "next/link";
import { heroContent } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-base via-base/90 to-base/60">
      <div className="absolute inset-x-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center">
        <div className="z-10 flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.4em] text-slate-300">
            Full Stack · AI Engineering · Product Strategy
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {heroContent.name}
            <span className="block text-lg font-semibold text-slate-300">
              {heroContent.role}
            </span>
          </h1>
          <p className="max-w-xl text-lg text-slate-300">{heroContent.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={heroContent.ctaPrimary.href}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition hover:bg-primary/80"
            >
              {heroContent.ctaPrimary.label}
            </Link>
            <Link
              href={heroContent.ctaSecondary.href}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              {heroContent.ctaSecondary.label}
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            {heroContent.socialLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative flex-1">
          <div className="relative mx-auto max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-primary/20">
            <div className="absolute -top-10 -right-10 hidden h-20 w-20 animate-float rounded-full border border-accent/50 bg-accent/10 md:block" />
            <div className="absolute -bottom-12 -left-10 hidden h-28 w-28 animate-pulseGlow rounded-full border border-primary/40 bg-primary/10 md:block" />
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-white">Mission</p>
                <p>
                  Build products where humans and AI collaborate seamlessly, amplifying creativity
                  and velocity.
                </p>
              </div>
              <div className="border-t border-white/10 pt-3">
                <p className="font-semibold text-white">Focus for 2024</p>
                <p>Agentic systems, trustworthy AI interfaces, resilient full stack platforms.</p>
              </div>
              <div className="border-t border-white/10 pt-3">
                <p className="font-semibold text-white">Currently</p>
                <p>Leading AI platform engineering @ QuantumFlux Labs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
