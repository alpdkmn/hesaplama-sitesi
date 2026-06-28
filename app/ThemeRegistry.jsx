"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "@/theme";

const cache = createCache({
  key: "mui",
  prepend: true,
});

export default function ThemeRegistry({ children }) {
  const theme = React.useMemo(() => getTheme(), []);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
