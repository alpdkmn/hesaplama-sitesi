import { Box } from "@mui/material";
import AdUnit from "./AdUnit";
import { AD_SLOTS } from "@/lib/adsense";

// Mobil içi reklam — sadece küçük ekranda görünür (lg ve üstünde gizli).
function MobileAd() {
  return (
    <Box sx={{ display: { xs: "block", lg: "none" }, mt: 3 }}>
      <AdUnit slot={AD_SLOTS.mobile} minHeight={250} />
    </Box>
  );
}

export default MobileAd;
