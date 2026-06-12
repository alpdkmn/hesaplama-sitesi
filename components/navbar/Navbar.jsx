"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";

import { useTheme } from "@mui/material/styles";

import { navigation } from "@/data/navigation";
import { calculators } from "@/data/calculators";

import CategoryMenu from "./CategoryMenu";

function Navbar() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        width: "100%",
        margin: "auto",
        color: "white",
        background: (theme) =>
          `linear-gradient(90deg, ${theme.palette.primary.main}, #ffffff 100%)`,
      }}
    >
      <Toolbar>
        {/* LOGO / TITLE */}
        <Typography
          sx={{
            fontFamily: (theme) => theme.typography.fontFamily,
            fontWeight: 600,
          }}
        >
          Hesaplama Araçları
        </Typography>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              gap: 1,
            }}
          >
            {navigation.map((category) => (
              <CategoryMenu key={category.slug} category={category} />
            ))}
          </Box>
        )}

        {/* MOBILE MENU */}
        {isMobile && (
          <>
            <IconButton
              sx={{
                marginLeft: "auto",
                color: (theme) => theme.palette.primary.main,
              }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <Box
                sx={{
                  width: 260,
                }}
              >
                <List>
                  {/* HOME */}
                  <ListItemButton
                    component={Link}
                    href="/"
                    onClick={() => setOpen(false)}
                  >
                    <ListItemText primary="Ana Sayfa" />
                  </ListItemButton>

                  {/* CATEGORY ACCORDIONS */}
                  {navigation.map((category) => {
                    const items = calculators.filter(
                      (item) => item?.category === category?.slug,
                    );

                    return (
                      <Accordion
                        key={category.slug}
                        disableGutters
                        elevation={0}
                        sx={{
                          boxShadow: "none",

                          "&::before": {
                            display: "none",
                          },
                        }}
                      >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography fontWeight={600}>
                            {category.title}
                          </Typography>
                        </AccordionSummary>

                        <AccordionDetails
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            p: 0,
                          }}
                        >
                          {items.length === 0 ? (
                            <Typography
                              sx={{
                                px: 4,
                                py: 1,
                              }}
                            >
                              Henüz içerik yok
                            </Typography>
                          ) : (
                            items.map((item) => (
                              <ListItemButton
                                key={item.id}
                                component={Link}
                                href={item.path}
                                onClick={() => setOpen(false)}
                                sx={{
                                  pl: 4,
                                }}
                              >
                                <ListItemText primary={item.title} />
                              </ListItemButton>
                            ))
                          )}
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
