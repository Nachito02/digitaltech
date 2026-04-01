type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <span className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-neutral-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
