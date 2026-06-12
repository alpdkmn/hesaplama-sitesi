import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";

function ResultBox({ result }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        borderRadius: 3,
        bgcolor: "background.default",
        border: "1px dashed",
        minHeight: 200,

        background: theme.effects.surface,
      }}
    >
      {result?.values?.length > 0 ? (
        result.values.map((item) => (
          <Typography key={item.key}>
            {item.label ? `${item.label}: ` : ""}
            <strong>{item.value}</strong>
          </Typography>
        ))
      ) : (
        <Typography color="text.secondary">
          Değerleri girip hesaplayın
        </Typography>
      )}
    </Box>
  );
}

export default ResultBox;
