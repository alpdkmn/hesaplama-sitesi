import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
