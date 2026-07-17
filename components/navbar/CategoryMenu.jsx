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
          color: theme.palette.primary.buttonText,
          boxShadow: "none",
          borderRadius: 0,

          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
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
                  justifyContent: "flex-start",
                  textTransform: "none",
                  borderRadius: 0,

                  color: (theme) => theme.palette.primary.main,

                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: "white",
                    transform: "translateX(8px)",
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
