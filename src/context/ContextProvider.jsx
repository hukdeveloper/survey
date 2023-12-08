"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [collapse, setCollapse] = useState(false);
  const [mode, setMode] = useState("light");

  const handleCollapse = () => {
    setCollapse(!collapse);
  };
  const handleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <>
      <ThemeContext.Provider
        value={{ collapse, handleCollapse, mode, handleMode }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};
