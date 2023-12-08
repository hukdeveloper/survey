"use client";
import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";

import { themeSettings } from "./theme";
import { ThemeProvider, createTheme } from "@mui/material";
import { ThemeContext } from "../../context/ContextProvider";

export default function ThemeRegistry({ children }) {
  const { mode } = React.useContext(ThemeContext);
  const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
