import { Box, Paper } from "@mui/material";

function SidebarAd() {
  return (
    <Box
      sx={{
        width: 300,
        border: "1px solid",
      }}
    >
      <Paper
        sx={{
          position: "sticky",
          top: 20,
          width: "100%",
          height: 400,
          p: 2,
        }}
      >
        Reklam
      </Paper>
    </Box>
  );
}

export default SidebarAd;
