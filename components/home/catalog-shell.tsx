import { CatalogFooter } from "@/components/home/catalog-footer";
import { CatalogHero } from "@/components/home/catalog-hero";
import { CatalogSidebar } from "@/components/home/catalog-sidebar";
import { ProductGrid } from "@/components/home/product-grid";
import { TopNav } from "@/components/home/top-nav";

export function CatalogShell() {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-[var(--line-strong)] bg-[var(--panel)] shadow-[0_35px_120px_rgba(15,23,42,0.09)] transition-colors duration-200">
      <TopNav />
      <CatalogHero />

      <div className="grid gap-8 px-5 pb-10 sm:px-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:px-10">
        <CatalogSidebar />
        <ProductGrid />
      </div>

      <CatalogFooter />
    </section>
  );
}
