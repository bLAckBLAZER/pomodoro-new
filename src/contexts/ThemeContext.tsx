import { createContext, useContext, useState } from "react";
import { ThemeContextType, ThemeProviderProps } from "./ThemeContext.types";

const initialState: ThemeContextType = {
  theme: "light",
  setTheme: () => null,
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
