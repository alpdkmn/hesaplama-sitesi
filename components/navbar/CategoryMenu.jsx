"use client";

import { Button, MenuItem } from "@mui/material";
import {
  bindHover,
  bindMenu,
  usePopupState,
} from "material-ui-popup-state/hooks";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import Link from "next/link";
import { calculators } from "@/data/calculators";

function CategoryMenu({ category }) {
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
        variant="contained"
        {...bindHover(popupState)}
        sx={{
          backgroundColor: "transparent",
          color: (theme) => theme.palette.primary.main,
          boxShadow: "none",

          "&:hover": {
            backgroundColor: (theme) => theme.palette.primary.main,
            color: "white",
          },
        }}
      >
        {category.title}
      </Button>

      <HoverMenu {...bindMenu(popupState)} onMouseLeave={popupState.close}>
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
