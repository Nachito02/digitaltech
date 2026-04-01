import type { IphoneProduct } from "@/data/iphones";

type ProductCardProps = {
  product: IphoneProduct;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function ProductCard({ product }: ProductCardProps) {
  const lowStock = product.stock <= 5;

  return (
    <article className="group space-y-4 bg-[var(--card-soft)] p-4 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="flex aspect-square items-center justify-center bg-[var(--card)] p-5">
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            background: product.featured
              ? "color-mix(in srgb, var(--card) 92%, var(--foreground) 8%)"
              : "var(--card-soft)",
          }}
        >
          <div
            className="relative h-[166px] w-[86px] rounded-[1.8rem] border-[6px] border-neutral-900 shadow-[0_20px_35px_rgba(15,23,42,0.18)]"
            style={{ background: product.wallpaper }}
          >
            <div className="absolute left-1/2 top-2 h-4 w-10 -translate-x-1/2 rounded-full bg-black" />
            <div
              className="absolute inset-0 rounded-[1.35rem] opacity-90"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, transparent 22%, rgba(255,255,255,0.8) 23%, transparent 31%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.2em] text-[var(--text-subtle)] uppercase">
            {product.series}
          </p>
          <h3 className="mt-2 text-[1.3rem] font-semibold tracking-tight text-[var(--foreground)]">
            {product.name}
          </h3>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)]">
          <span className="text-[var(--accent)]">✦</span>
          <span>{product.rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
            {currencyFormatter.format(product.price)}
          </p>
          <p className="mt-1 text-xs text-[var(--text-subtle)]">
            {product.installments}
          </p>
        </div>
        <a href="#" className="text-sm font-semibold text-[var(--accent)]">
          Configurar
        </a>
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[var(--line)] pt-4">
        <div>
          <dt className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-subtle)]">
            Capacidad
          </dt>
          <dd className="mt-1 text-sm font-medium text-[var(--foreground)]">
            {product.storage}
          </dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-subtle)]">
            Pantalla
          </dt>
          <dd className="mt-1 text-sm font-medium text-[var(--foreground)]">
            {product.display}
          </dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-subtle)]">
            Chip
          </dt>
          <dd className="mt-1 text-sm font-medium text-[var(--foreground)]">
            {product.chip}
          </dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-subtle)]">
            Stock
          </dt>
          <dd
            className={`mt-1 text-sm font-medium ${
              lowStock ? "text-amber-500" : "text-[var(--foreground)]"
            }`}
          >
            {lowStock ? `${product.stock} unidades` : `${product.stock} disponibles`}
          </dd>
        </div>
      </dl>
    </article>
  );
}
