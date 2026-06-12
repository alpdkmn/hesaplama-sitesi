"use client";

import { Box } from "@mui/material";
import SimilarCalculators from "@/components/SimilarCalculators";
import SidebarAd from "@/components/Ads/SidebarAd";

export default function CalculatorPageLayout({ children, showAds = true }) {
  return (
    <Box sx={{ p: 5 }}>
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
        <Box>{children}</Box>

        {/* SAĞ */}
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          {showAds && <SidebarAd />}
        </Box>
      </Box>
    </Box>
  );
}
