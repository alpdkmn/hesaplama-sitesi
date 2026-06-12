"use client";
import { List, ListItemButton, ListItemText, Paper } from "@mui/material";
import React from "react";
import { calculators } from "@/data/calculators";
import { usePathname } from "next/navigation";

function SimilarCalculators() {
  const pathname = usePathname();
  if (!pathname) return null;
  const current = calculators.find((c) => c.path === pathname);
  if (!current) return null;

  const related = calculators
    .filter((c) => c && c.path !== pathname && c.category === current.category)
    .slice(0, 5);

  return (
    <Paper
      sx={{
        width: "100%",
        mt: { xs: 0, lg: 2 },
      }}
    >
      <List sx={{ p: 2 }}>
        <ListItemText primary="Benzer Araçlar" />

        {related.map((item) => (
          <ListItemButton key={item.id} component="a" href={item.path}>
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}

export default SimilarCalculators;
