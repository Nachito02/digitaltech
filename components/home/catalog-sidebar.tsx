const ranges = ["iPhone 16 Series", "iPhone 15 Series", "iPhone 14 Series"];
const capacities = ["128GB", "256GB", "512GB", "1TB"];
const swatches = [
  { name: "Negro", className: "bg-[#27272a]" },
  { name: "Blanco", className: "bg-[#f5f5f4]" },
  { name: "Grafito", className: "bg-[#94a3b8]" },
  { name: "Azul", className: "bg-[#4f7cff]" },
  { name: "Plata", className: "bg-[#e5e7eb]" },
];

export function CatalogSidebar() {
  return (
    <aside className="space-y-8 border-b border-[var(--line)] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
      <div className="space-y-4">
        <h2 className="text-[11px] font-semibold tracking-[0.22em] text-[var(--text-subtle)] uppercase">
          Model Range
        </h2>
        <div className="space-y-3">
          {ranges.map((range) => (
            <label
              key={range}
              className="flex items-center gap-3 text-sm text-[var(--text-muted)]"
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-[var(--line-strong)] bg-transparent accent-[var(--accent)]"
              />
              <span>{range}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-[11px] font-semibold tracking-[0.22em] text-[var(--text-subtle)] uppercase">
          Signature Colors
        </h2>
        <div className="flex flex-wrap gap-3">
          {swatches.map((swatch) => (
            <button
              key={swatch.name}
              type="button"
              aria-label={swatch.name}
              className={`h-6 w-6 rounded-full border border-[var(--line)] ${swatch.className}`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-[11px] font-semibold tracking-[0.22em] text-[var(--text-subtle)] uppercase">
          Storage Capacity
        </h2>
        <div className="flex flex-wrap gap-2">
          {capacities.map((capacity) => (
            <button
              key={capacity}
              type="button"
              className="rounded-md border border-[var(--line)] bg-[var(--card-soft)] px-3 py-2 text-xs font-medium text-[var(--text-muted)]"
            >
              {capacity}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-none bg-[var(--button)] px-4 py-3 text-sm font-semibold text-[var(--panel)] transition hover:bg-[var(--button-hover)]"
      >
        Reset iPhone Filters
      </button>
    </aside>
  );
}
