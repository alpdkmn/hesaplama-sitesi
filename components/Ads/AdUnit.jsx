"use client";

import { useEffect } from "react";
import { Box } from "@mui/material";
import { ADSENSE_CLIENT } from "@/lib/adsense";

// Tek bir AdSense reklam yuvası.
// - Kimlik + slot girilmişse: gerçek <ins class="adsbygoogle"> render eder ve Google'a "bu yuvayı doldur" der.
// - Girilmemişse: düzgün bir placeholder gösterir (site bozulmaz).
export default function AdUnit({ slot, minHeight = 250 }) {
  const active = Boolean(ADSENSE_CLIENT && slot);

  useEffect(() => {
    if (!active) return;
    try {
      // AdSense script'i bu yuvayı fark edip reklam yerleştirir.
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Script henüz yüklenmediyse sessizce geç.
    }
  }, [active, slot]);

  if (!active) {
    return (
      <Box
        sx={{
          minHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px dashed",
          borderColor: "divider",
          borderRadius: 2,
          color: "text.secondary",
          fontSize: 14,
        }}
      >
        Reklam alanı
      </Box>
    );
  }

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", minHeight }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
