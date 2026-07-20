import { Box, Typography } from "@mui/material";
import React from "react";

function PageHeader({ title, desc }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="h3" component="h1">
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        {desc}
      </Typography>
    </Box>
  );
}

export default PageHeader;
