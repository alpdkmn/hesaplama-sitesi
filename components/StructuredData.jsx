"use client";

import { usePathname } from "next/navigation";
import { calculators } from "@/data/calculators";
import { SITE_URL } from "@/lib/site";

// Bulunulan hesaplayıcı için yapısal veri (JSON-LD) üretir:
// - BreadcrumbList: aramada "Ana Sayfa › Hesaplayıcı" yol izi
// - WebApplication: sayfayı ücretsiz bir web aracı olarak tanımlar
export default function StructuredData() {
  const pathname = usePathname();
  const calc = calculators.find((c) => c.path === pathname);

  if (!calc) return null;

  const url = `${SITE_URL}${calc.path}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: calc.title, item: url },
    ],
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: calc.title,
    description: calc.description,
    url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
  };

  const toJson = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJson(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJson(webApp) }}
      />
    </>
  );
}
