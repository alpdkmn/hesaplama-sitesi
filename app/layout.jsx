import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
