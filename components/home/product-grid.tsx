import { iphones } from "@/data/iphones";
import { ProductCard } from "@/components/home/product-card";

export function ProductGrid() {
  return (
    <section className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {iphones.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
