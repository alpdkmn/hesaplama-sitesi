"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
            href="/anasayfa"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              gap: 12,
            }}
          >
            <Image
              src="/logo1.png"
              alt="Hesaplama Sitesi"
              width={50}
              height={49}
            />
            <Typography variant="h6" fontWeight={700} sx={{ color: "white" }}>
              {/* Hesaplama Sitesi */}
            </Typography>{" "}
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
