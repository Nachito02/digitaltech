import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Tech",
  description: "Ecommerce premium para venta de iPhones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const storedTheme = localStorage.getItem("digital-tech-theme");
                const theme =
                  storedTheme === "light" || storedTheme === "dark"
                    ? storedTheme
                    : "dark";
                document.documentElement.classList.toggle("dark", theme === "dark");
                document.documentElement.dataset.theme = theme;
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
