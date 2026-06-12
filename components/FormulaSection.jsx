import { Paper, Typography, Box, useTheme } from "@mui/material";
import { FcCalculator } from "react-icons/fc";

function FormulaSection({ data }) {
  const theme = useTheme();
  if (!data) return null;

  return (
    <Paper sx={{ p: 3, mt: 4, borderRadius: 3, maxWidth: 700, mx: "auto" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          justifyContent: "flex-start",
        }}
      >
        <FcCalculator size={30} />

        <Typography variant="h6" fontWeight={600}>
          Formüller
        </Typography>
      </Box>

      <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
        {Object.entries(data).map(([key, value]) => (
          <Typography
            key={key}
            variant="body1"
            sx={{ color: theme.palette.text.secondary }}
          >
            {value}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
}

export default FormulaSection;
