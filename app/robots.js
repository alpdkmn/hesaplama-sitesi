import { SITE_URL } from "@/lib/site";

// Next.js bu dosyayı otomatik olarak /robots.txt adresine çevirir.
// Tüm botlara tüm sayfaları taramaya izin verir ve sitemap'in yerini gösterir.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
