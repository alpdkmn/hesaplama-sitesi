import { Box } from "@mui/material";
import AdUnit from "./AdUnit";
import { AD_SLOTS } from "@/lib/adsense";

// Masaüstü kenar reklamı — sadece geniş ekranda görünür (layout xs'te gizliyor).
// Sticky: sayfa kaydırılınca reklam ekranda kalır.
function SidebarAd() {
  return (
    <Box sx={{ position: "sticky", top: 20, width: 300 }}>
      <AdUnit slot={AD_SLOTS.sidebar} minHeight={600} />
    </Box>
  );
}

export default SidebarAd;
