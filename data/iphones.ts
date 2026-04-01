export type IphoneProduct = {
  id: string;
  name: string;
  tagline: string;
  series: string;
  finish: string;
  price: number;
  installments: string;
  stock: number;
  rating: number;
  storage: string;
  display: string;
  chip: string;
  camera: string;
  accent: string;
  wallpaper: string;
  featured?: boolean;
};

export const iphones: IphoneProduct[] = [
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    tagline: "El iPhone más avanzado para quienes quieren todo.",
    series: "Max Performance",
    finish: "Titanio natural",
    price: 1899,
    installments: "12 cuotas sin interés de USD 158,25",
    stock: 6,
    rating: 4.9,
    storage: "256 GB",
    display: "6.9 pulgadas",
    chip: "A18 Pro",
    camera: "Sistema Pro de cámaras de 48 MP",
    accent: "#ef4444",
    wallpaper: "radial-gradient(circle at 45% 45%, #ff9a62 0%, #0f172a 35%, #020617 100%)",
    featured: true,
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    tagline: "Potencia profesional en un tamaño preciso.",
    series: "Titanium Series",
    finish: "Titanio negro",
    price: 1699,
    installments: "12 cuotas sin interés de USD 141,58",
    stock: 9,
    rating: 4.9,
    storage: "256 GB",
    display: "6.3 pulgadas",
    chip: "A18 Pro",
    camera: "Teleobjetivo 5x y ultra gran angular",
    accent: "#0f172a",
    wallpaper: "radial-gradient(circle at 52% 52%, #f59e0b 0%, #111827 34%, #000000 100%)",
    featured: true,
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    tagline: "Rápido, brillante y perfecto para el día a día.",
    series: "Color Series",
    finish: "Ultramarino",
    price: 1299,
    installments: "9 cuotas sin interés de USD 144,33",
    stock: 14,
    rating: 4.8,
    storage: "128 GB",
    display: "6.1 pulgadas",
    chip: "A18",
    camera: "Cámara Fusion de 48 MP",
    accent: "#1d4ed8",
    wallpaper: "radial-gradient(circle at 50% 15%, #60a5fa 0%, #1e3a8a 40%, #0f172a 100%)",
  },
  {
    id: "iphone-16-plus",
    name: "iPhone 16 Plus",
    tagline: "Más batería y una pantalla que se disfruta más.",
    series: "Legacy Series",
    finish: "Rosa",
    price: 1449,
    installments: "12 cuotas sin interés de USD 120,75",
    stock: 11,
    rating: 4.7,
    storage: "128 GB",
    display: "6.7 pulgadas",
    chip: "A18",
    camera: "Cámara dual de 48 MP",
    accent: "#d946ef",
    wallpaper: "radial-gradient(circle at 50% 20%, #f9a8d4 0%, #fb7185 38%, #111827 100%)",
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    tagline: "Una entrada premium al ecosistema Apple.",
    series: "Color Series",
    finish: "Negro",
    price: 1049,
    installments: "6 cuotas sin interés de USD 174,83",
    stock: 18,
    rating: 4.8,
    storage: "128 GB",
    display: "6.1 pulgadas",
    chip: "A16 Bionic",
    camera: "Principal de 48 MP y retrato mejorado",
    accent: "#111827",
    wallpaper: "radial-gradient(circle at 60% 30%, #64748b 0%, #1f2937 40%, #020617 100%)",
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    tagline: "Confiable, elegante y todavía muy vigente.",
    series: "Legacy Series",
    finish: "Azul medianoche",
    price: 899,
    installments: "6 cuotas sin interés de USD 149,83",
    stock: 4,
    rating: 4.7,
    storage: "128 GB",
    display: "6.1 pulgadas",
    chip: "A15 Bionic",
    camera: "Sistema dual de 12 MP",
    accent: "#334155",
    wallpaper: "radial-gradient(circle at 40% 28%, #93c5fd 0%, #1e40af 36%, #020617 100%)",
  },
];
