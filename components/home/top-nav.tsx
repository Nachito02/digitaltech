import { ThemeToggle } from "@/components/theme/theme-toggle";

const links = ["iPhones"];

export function TopNav() {
  return (
    <header className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4 sm:px-8 lg:px-10">
      <div className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
        Digital Tech
      </div>

      <nav className="hidden items-center gap-8 text-sm text-[var(--text-subtle)] md:flex">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className={
              link === "iPhones" ? "font-semibold text-[var(--accent)]" : ""
            }
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3 text-[var(--text-muted)]">
        <ThemeToggle />
        <button type="button" aria-label="Buscar" className="text-sm font-medium">
          Search
        </button>
        <button type="button" aria-label="Carrito" className="text-sm font-medium">
          Bag
        </button>
      </div>
    </header>
  );
}
