import { Box } from "@mui/material";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import ThemeRegistry from "./ThemeRegistry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <ThemeRegistry>
          <Navbar />
          <Box>{children}</Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
