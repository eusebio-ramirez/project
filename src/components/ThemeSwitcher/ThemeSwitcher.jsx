import React, { useContext, useState, useCallback } from "react";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import { Button } from "react-bootstrap"; // Importamos el componente de React-Bootstrap
import "./themeSwitcher.css";

const ThemeSwitcher = () => {
  const { changeThemeColor } = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState("default");

  const switchTheme = useCallback(() => {
    if (currentTheme === "default") {
      // Tema Navideño
      changeThemeColor({
        header: "#006400",
        footer: "#8B0000",
      });
      setCurrentTheme("navidad");
    } else if (currentTheme === "navidad") {
      // Tema 15 de septiembre
      changeThemeColor({
        header: "#006847",
        footer: "#CE1126",
      });
      setCurrentTheme("septiembre");
    } else {
      // Tema Default
      changeThemeColor({
        header: "#9e2343",
        footer: "#5c1f32",
      });
      setCurrentTheme("default");
    }
  }, [currentTheme, changeThemeColor]);

  return (
    <>
      <Button
        variant="danger"
        className="theme-switcher-btn"
        onClick={switchTheme}
      >
        {currentTheme === "default" && <i className="fas fa-sun"></i>}
        {currentTheme === "navidad" && <i className="fas fa-snowflake"></i>}
        {currentTheme === "septiembre" && <i className="fas fa-flag"></i>}
      </Button>
    </>
  );
};

export default ThemeSwitcher;