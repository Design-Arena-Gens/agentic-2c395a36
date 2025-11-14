export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-slate-500">
          alex<span className="text-accent">.ai</span>
        </p>
        <p>© {new Date().getFullYear()} Alex Mercer. Crafted with care in the AI era.</p>
        <div className="flex gap-6">
          <a href="mailto:alex@mercer.dev" className="hover:text-white">
            Email
          </a>
          <a href="https://github.com/your-handle" className="hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/your-handle" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
