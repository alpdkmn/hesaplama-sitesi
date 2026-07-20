import { Box, Typography, useTheme, alpha } from "@mui/material";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";

function ResultBox({ result }) {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const values = result?.values ?? [];
  const hasResult = values.length > 0;
  const [hero, ...rest] = values;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: hasResult ? "stretch" : "center",
        p: 3,
        borderRadius: "14px",
        minHeight: 200,
        background: hasResult ? alpha(primary, 0.05) : "transparent",
        border: "1px solid",
        borderColor: hasResult ? alpha(primary, 0.15) : "divider",
      }}
    >
      {hasResult ? (
        <>
          <Box>
            {hero.label && (
              <Typography
                sx={{ fontSize: 13, color: "text.secondary", mb: 0.5 }}
              >
                {hero.label}
              </Typography>
            )}
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: 600,
                color: primary,
                lineHeight: 1.15,
              }}
            >
              {hero.value}
            </Typography>
          </Box>

          {rest.length > 0 && (
            <Box
              sx={{
                mt: 2,
                pt: 2,
                borderTop: "1px solid",
                borderColor: alpha(primary, 0.12),
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {rest.map((item) => (
                <Box
                  key={item.key}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: "text.primary" }}>
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </>
      ) : (
        <Box sx={{ textAlign: "center", color: "text.secondary" }}>
          <CalculateOutlinedIcon sx={{ fontSize: 32, opacity: 0.35, mb: 1 }} />
          <Typography color="text.secondary">
            Değerleri girip hesaplayın
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ResultBox;
