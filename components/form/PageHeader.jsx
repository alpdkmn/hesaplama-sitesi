import { Box, Typography } from "@mui/material";
import React from "react";

function PageHeader({ title, desc }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h4">{desc}</Typography>
    </Box>
  );
}

export default PageHeader;
