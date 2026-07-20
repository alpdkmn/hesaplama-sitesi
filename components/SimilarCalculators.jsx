"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Paper,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";

import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import { calculators } from "@/data/calculators";

function SimilarCalculators() {
  const pathname = usePathname();

  if (!pathname) return null;

  const current = calculators.find((c) => c.path === pathname);

  if (!current) return null;

  // Önce aynı kategorideki benzer araçlar, sonra diğer araçlarla toplam 6'ya tamamla.
  // Deterministik sıra (SSR/client render'ı eşleşsin diye rastgele yok).
  const related = [
    ...calculators.filter(
      (c) => c && c.path !== pathname && c.category === current.category,
    ),
    ...calculators.filter(
      (c) => c && c.path !== pathname && c.category !== current.category,
    ),
  ].slice(0, 8);

  if (related.length === 0) return null;

  return (
    <Paper
      elevation={0}
      sx={{
        mt: { xs: 0, lg: 0 },
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          py: 2,
        }}
      >
        <CalculateOutlinedIcon color="primary" />

        <Typography variant="h6" fontWeight={700}>
          Benzer Hesaplamalar
        </Typography>
      </Box>

      <Divider />

      <List
        disablePadding
        sx={{
          maxHeight: 300,
          overflowY: "auto",

          "&::-webkit-scrollbar": {
            width: 6,
          },

          "&::-webkit-scrollbar-thumb": {
            borderRadius: 10,
            backgroundColor: "#123D6E",
          },

          "&::-webkit-scrollbar-track": {
            backgroundColor: "#F2F4F8",
          },
        }}
      >
        {related.map((item, index) => (
          <Box key={item.id}>
            <ListItemButton
              component={Link}
              href={item.path}
              sx={{
                py: 1.6,
                px: 2,
                transition: "all .2s ease",

                "&:hover": {
                  bgcolor: "action.hover",
                  pl: 3,
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: 0,
                  height: "2px",
                  backgroundColor: "#123d6e",
                  transition: "width 0.3s ease",
                },

                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {item.title}
              </Typography>

              <ChevronRightRoundedIcon fontSize="small" color="action" />
            </ListItemButton>

            {index !== related.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Paper>
  );
}

export default SimilarCalculators;
