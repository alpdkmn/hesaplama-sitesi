"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Paper,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import { calculators } from "@/data/calculators";
import { navigation } from "@/data/navigation";

// Her kategoriye kimlik: renk + ikon.
const CATEGORY_META = {
  finans: { color: "#123D6E", Icon: PaymentsOutlinedIcon },
  egitim: { color: "#B26A00", Icon: SchoolOutlinedIcon },
  saglik: { color: "#B0003A", Icon: FavoriteBorderOutlinedIcon },
  matematik: { color: "#5B3B8C", Icon: CalculateOutlinedIcon },
  zaman: { color: "#0F6E56", Icon: AccessTimeOutlinedIcon },
};

const trLower = (s) => (s || "").toLocaleLowerCase("tr");

export default function HomeContent() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = trLower(query.trim());
    if (!q) return calculators;
    return calculators.filter(
      (c) =>
        trLower(c.title).includes(q) ||
        trLower(c.description).includes(q) ||
        c.tags.some((t) => trLower(t).includes(q)),
    );
  }, [query]);

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", px: { xs: 2, md: 3 }, pb: 8 }}>
      {/* HERO */}
      <Box sx={{ textAlign: "center", pt: { xs: 5, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Typography variant="h3" component="h1" sx={{ mb: 1.5 }}>
          Hesaplama Araçları
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: 560, mx: "auto", mb: 4 }}
        >
          Finanstan sağlığa, eğitimden zamana; günlük hayatın hesaplarını
          hızlı ve ücretsiz yapın.
        </Typography>

        <TextField
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Hesaplayıcı ara (ör. KDV, kalori, faiz)"
          fullWidth
          sx={{ maxWidth: 480, mx: "auto" }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      {/* KATEGORİ BÖLÜMLERİ */}
      {navigation.map((cat) => {
        const items = filtered.filter((c) => c.category === cat.slug);
        if (items.length === 0) return null;

        const meta = CATEGORY_META[cat.slug] || {};
        const Icon = meta.Icon;
        const color = meta.color || "#123D6E";

        return (
          <Box key={cat.slug} sx={{ mb: 5 }}>
            {/* Kategori başlığı */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: alpha(color, 0.1),
                  color,
                }}
              >
                {Icon && <Icon />}
              </Box>
              <Typography variant="h5" component="h2">
                {cat.title}
              </Typography>
            </Box>

            {/* Kart ızgarası */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(auto-fit, minmax(240px, 320px))",
                },
                justifyContent: "center",
                gap: 2,
              }}
            >
              {items.map((c) => (
                <Paper
                  key={c.id}
                  component={Link}
                  href={c.path}
                  elevation={0}
                  sx={{
                    p: 3,
                    minHeight: 165,
                    borderRadius: "14px",
                    border: "1px solid",
                    borderColor: "divider",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 180ms ease",
                    "&:hover": {
                      borderColor: color,
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 20px rgba(16,42,67,0.08)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 600, color: "text.primary", mb: 1 }}
                  >
                    {c.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", lineHeight: 1.7 }}
                  >
                    {c.description}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        );
      })}

      {/* Sonuç yok */}
      {filtered.length === 0 && (
        <Box sx={{ textAlign: "center", py: 6, color: "text.secondary" }}>
          <Typography>
            “{query}” için hesaplayıcı bulunamadı.
          </Typography>
        </Box>
      )}
    </Box>
  );
}
