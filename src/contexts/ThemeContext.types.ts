import React from "react";

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<any>;
};
