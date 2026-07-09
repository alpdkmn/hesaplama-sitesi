import { Box, Typography, useTheme } from "@mui/material";
import { formatCurrency } from "@/lib/format";

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
        border: "1px dashed",
        minHeight: 200,
        background: theme.effects.surface,
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        },
      }}
    >
      {result?.values?.length > 0 ? (
        result.values.map((item) => (
          <Typography key={item.key}>
            {item.label ? `${item.label}: ` : ""}
            <strong>{item.value}₺</strong>
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
