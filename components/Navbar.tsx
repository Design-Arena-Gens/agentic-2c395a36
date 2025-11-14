import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Writing", href: "#writing" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-base/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-mono uppercase text-slate-400">
          alex<span className="text-accent">.ai</span>
        </Link>
        <div className="hidden gap-7 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="mailto:alex@mercer.dev"
          className="rounded-full border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition hover:bg-accent hover:text-base"
        >
          Work Together
        </Link>
      </nav>
    </header>
  );
}
