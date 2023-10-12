import { useContext } from "react";
import { ThemeProvider } from "../context/ThemeContext";

export function useThemeContext() {
  const context = useContext(ThemeProvider);
  if (!context) {
    throw new Error("useThemeContext must be used in ThemeContextProvider");
  }
  return context;
}
