type SectionTitleProps = {
  eyebrow: string;
  title: string;
  caption?: string;
};

export function SectionTitle({ eyebrow, title, caption }: SectionTitleProps) {
  return (
    <header className="space-y-2">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white">{title}</h2>
      {caption ? <p className="max-w-2xl text-slate-400">{caption}</p> : null}
    </header>
  );
}
