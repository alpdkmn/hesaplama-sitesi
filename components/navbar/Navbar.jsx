"use client";

import React, { useState } from "react";
import Link from "next/link";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";

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

  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    noSsr: true,
  });
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        width: "100%",
        margin: "auto",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Toolbar sx={{ py: 0 }}>
        <Box sx={{ ml: 2 }}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              gap: 10,
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: "10px",
                bgcolor: "primary.main",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <CalculateRoundedIcon sx={{ fontSize: 22 }} />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <Typography
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: 1.15,
                }}
              >
                Hesaplama Sitesi
              </Typography>
              <Typography
                sx={{ color: "text.secondary", fontSize: 11, letterSpacing: 0.3 }}
              >
                Pratik online araçlar
              </Typography>
            </Box>
          </Link>
        </Box>

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
