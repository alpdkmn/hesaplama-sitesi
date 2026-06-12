import { Box, Button, useTheme } from "@mui/material";
import React from "react";

function CalculatorActions({ temizle }) {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
      <Button type="submit" variant="contained" fullWidth size="large">
        Hesapla
      </Button>

      <Button variant="outlined" fullWidth size="large" onClick={temizle}>
        Temizle
      </Button>
    </Box>
  );
}

export default CalculatorActions;
