interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="text-center">
      {eyebrow && <p className="mb-2 text-sm uppercase tracking-[0.2em] text-base-muted">{eyebrow}</p>}
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-base-muted">{subtitle}</p>}
    </div>
  );
}
