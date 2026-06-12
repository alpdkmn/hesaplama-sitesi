import { Box, Paper } from "@mui/material";

function MobileAd() {
  return (
    <Box
      sx={{
        display: { xs: "block", lg: "none" },
        mt: 3,
      }}
    >
      <Paper sx={{ minHeight: 120, p: 2 }}>Mobil Reklam</Paper>
    </Box>
  );
}
export default MobileAd;
