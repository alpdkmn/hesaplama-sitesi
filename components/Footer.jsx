import { Box, Typography, Divider } from "@mui/material";
import Link from "next/link";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import { calculators } from "@/data/calculators";

// Footer'da listelenecek popüler hesaplayıcılar (id ile seçili).
const POPULAR_IDS = ["kdv", "faiz", "kalori", "yuzde", "gun"];

function FooterLink({ href, children }) {
  return (
    <Link href={href} style={{ color: "inherit", textDecoration: "none" }}>
      <Typography
        variant="body2"
        component="span"
        sx={{
          color: "text.secondary",
          display: "inline-block",
          py: 0.4,
          "&:hover": { color: "primary.main" },
        }}
      >
        {children}
      </Typography>
    </Link>
  );
}

export default function Footer() {
  const popular = POPULAR_IDS.map((id) =>
    calculators.find((c) => c.id === id),
  ).filter(Boolean);

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          px: { xs: 2, md: 3 },
          py: 5,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr" },
          gap: 4,
        }}
      >
        {/* MARKA */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.5 }}>
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: "9px",
                bgcolor: "primary.main",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CalculateRoundedIcon sx={{ fontSize: 20 }} />
            </Box>
            <Typography sx={{ fontWeight: 700, color: "primary.main", fontSize: 17 }}>
              Hesaplior.com
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", maxWidth: 320, lineHeight: 1.7 }}
          >
            Finanstan sağlığa, eğitimden zamana; günlük hayatın hesaplarını
            hızlı ve ücretsiz yapın.
          </Typography>
        </Box>

        {/* POPÜLER HESAPLAMALAR */}
        <Box>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
          >
            Popüler Hesaplamalar
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {popular.map((c) => (
              <FooterLink key={c.id} href={c.path}>
                {c.title}
              </FooterLink>
            ))}
          </Box>
        </Box>

        {/* SİTE */}
        <Box>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
          >
            Site
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FooterLink href="/">Ana Sayfa</FooterLink>
            <FooterLink href="/gizlilik-politikasi">
              Gizlilik Politikası
            </FooterLink>
          </Box>
        </Box>
      </Box>

      <Divider />
      <Typography
        variant="body2"
        sx={{ textAlign: "center", color: "text.secondary", py: 2.5 }}
      >
        © 2026 Hesaplior.com — Tüm hakları saklıdır.
      </Typography>
    </Box>
  );
}
