import { Inter } from "next/font/google";
import Script from "next/script";
import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { ADSENSE_CLIENT } from "@/lib/adsense";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Inter fontu Next tarafından kendi sunucumuzdan servis edilir (harici istek yok).
// latin-ext, Türkçe karakterleri (ş, ğ, İ, ı) içerir.
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  // Göreli URL'lerin (canonical, sosyal görsel) tam adrese çevrilmesi için kök adres.
  metadataBase: new URL(SITE_URL),
  title: {
    // Kendi başlığı olmayan sayfalar bunu kullanır.
    default: "Hesaplama Sitesi — Pratik Online Hesaplama Araçları",
    // Kendi başlığı olan sayfalarda %s, o sayfanın başlığıyla değişir.
    template: "%s | Hesaplama Sitesi",
  },
  description:
    "KDV, faiz, kalori, yüzde ve daha birçok konu için hızlı, ücretsiz online hesaplama araçları.",
  openGraph: {
    siteName: "Hesaplama Sitesi",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body>
        {ADSENSE_CLIENT && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
        )}
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
