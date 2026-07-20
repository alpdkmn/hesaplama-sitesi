"use client";

import { Children } from "react";
import { Box } from "@mui/material";
import SimilarCalculators from "@/components/SimilarCalculators";
import SidebarAd from "@/components/Ads/SidebarAd";
import StructuredData from "@/components/StructuredData";

export default function CalculatorPageLayout({ children, showAds = true }) {
  // Sayfalarda ilk çocuk her zaman hesaplama formudur; gerisi içerik metinleridir.
  // Mobil "Benzer Hesaplamalar" panelini tam bu ikisinin arasına koyarız.
  const [form, ...content] = Children.toArray(children);

  return (
    <Box sx={{ p: 5 }}>
      <StructuredData />
      <Box
        sx={{
          maxWidth: 1700,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "260px minmax(0, 1fr) 300px",
          },
          gap: 3,
        }}
      >
        {/* SOL */}
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <SimilarCalculators />
        </Box>

        {/* ORTA */}
        <Box sx={{ width: "100%", maxWidth: 800, mx: "auto" }}>
          {form}

          {/* Mobilde benzer hesaplamalar: formun hemen altında, içerik metinlerinden önce */}
          <Box sx={{ display: { xs: "block", lg: "none" }, mt: 3 }}>
            <SimilarCalculators />
          </Box>

          {content}
        </Box>

        {/* SAĞ */}
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          {showAds && <SidebarAd />}
        </Box>
      </Box>
    </Box>
  );
}
