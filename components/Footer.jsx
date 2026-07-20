import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 3,
        px: 2,
        borderTop: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "text.secondary",
      }}
    >
      <Typography variant="body2">© 2026 Hesaplama Sitesi</Typography>
      <Typography variant="body2" aria-hidden="true">
        ·
      </Typography>
      <Link
        href="/gizlilik-politikasi"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <Typography
          variant="body2"
          component="span"
          sx={{ "&:hover": { textDecoration: "underline" } }}
        >
          Gizlilik Politikası
        </Typography>
      </Link>
    </Box>
  );
}
