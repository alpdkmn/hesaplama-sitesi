"use client";

import { Button, MenuItem, Box, useTheme } from "@mui/material";
import {
  bindHover,
  bindMenu,
  usePopupState,
} from "material-ui-popup-state/hooks";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import Link from "next/link";
import { calculators } from "@/data/calculators";

function CategoryMenu({ category }) {
  const theme = useTheme();
  // 🔒 Hook HER ZAMAN çalışmalı
  const popupState = usePopupState({
    variant: "popover",
    popupId: category?.slug || "menu",
  });
  // 🔒 category yoksa hooktan SONRA çık
  if (!category) return null;

  const items = calculators.filter((item) => item?.category === category.slug);

  return (
    <>
      <Button
        {...bindHover(popupState)}
        sx={{
          backgroundColor: "transparent",
          color: theme.palette.secondary.dark,
          boxShadow: "none",
          borderRadius: 1.3,

          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.buttonText,
          },
        }}
      >
        {category.title}
      </Button>

      <HoverMenu
        {...bindMenu(popupState)}
        onMouseLeave={popupState.close}
        disableScrollLock
        slotProps={{
          paper: {
            sx: {
              borderRadius: 1.5, // Dış menü kutusunun köşelerini sıfırlar
              "& .MuiMenuItem-root:hover": {
                borderRadius: 0, // İçindeki öğelerin hover köşelerini sıfırlar
              },
            },
          },
        }}
      >
        {items.length === 0 ? (
          <MenuItem disabled>Henüz içerik yok</MenuItem>
        ) : (
          items.map((item) => (
            <MenuItem key={item.id} onClick={popupState.close} sx={{ p: 0 }}>
              <Button
                component={Link}
                href={item.path}
                fullWidth
                sx={{
                  position: "relative",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  borderRadius: 0,

                  "&:hover": {
                    backgroundColor: "transparent",
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
                {item.title}
              </Button>
            </MenuItem>
          ))
        )}
      </HoverMenu>
    </>
  );
}

export default CategoryMenu;
