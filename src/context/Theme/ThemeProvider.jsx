import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  // Estado inicial
  const [themeColor, setThemeColor] = useState({
    header: "#9e2343", // Color inicial del header
    footer: "#5c1f32", // Color inicial del footer
  });

  // Función para actualizar los colores del tema
  const changeThemeColor = (newColors) => {
    setThemeColor(newColors);
  };

  return (
    <ThemeContext.Provider value={{ themeColor, changeThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
