const footerColumns = [
  {
    title: "Digital Tech",
    links: ["Curated premium catalog", "Apple-style shopping flow"],
  },
  {
    title: "Phone Support",
    links: ["Privacy Policy", "Terms of Service"],
  },
  {
    title: "Concierge",
    links: ["Shipping & Returns", "Contact Specialist"],
  },
  {
    title: "Follow the Vision",
    links: ["Instagram", "WhatsApp"],
  },
];

export function CatalogFooter() {
  return (
    <footer className="grid gap-8 border-t border-[var(--line)] px-5 py-8 sm:px-8 lg:grid-cols-4 lg:px-10">
      {footerColumns.map((column) => (
        <div key={column.title} className="space-y-3">
          <h3 className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
            {column.title}
          </h3>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            {column.links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
