import { calculators } from "@/data/calculators";
import { SITE_URL } from "@/lib/site";

// Next.js bu dosyayı otomatik olarak /sitemap.xml adresine çevirir.
// Yeni bir hesaplayıcı data/calculators.js'e eklendiğinde sitemap kendiliğinden güncellenir.
export default function sitemap() {
  const lastModified = new Date();

  // Ana sayfa
  const home = {
    url: SITE_URL,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
  };

  // Her hesaplayıcı için bir giriş
  const calculatorPages = calculators.map((c) => ({
    url: `${SITE_URL}${c.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [home, ...calculatorPages];
}
