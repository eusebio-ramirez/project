import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { Logo, MenuItem, MenuToggle } from "./components";
import { useTheme } from "../../context";
import { useMenuStore } from "../../hooks";

export const Header = () => {
  const { datos } = useMenuStore();
  const [overlay, setOverlay] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { theme } = useTheme();

  const handleMouseEnter = (submenu) => setActiveSubmenu(submenu);
  const handleMouseLeave = () => setActiveSubmenu(null);

  const hideMenu = () => {
    document.getElementById("navbarNav").classList.remove("show");
    setOverlay(false);
  };

  const isDataReady = datos && datos.length > 0;

  return (
    <>
      {overlay && (
        <div
          onClick={() => setOverlay(false)}
          className="overlay-menu"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
        />
      )}

      <div id="header">
        <nav
          className={`navbar navbar-expand-lg navbar-light ${
            theme === "dark" ? "bg-gob-dark" : "bg-gob"
          }`}
        >
          <div className="container-fluid">
            <Logo />
            <MenuToggle setOverlay={setOverlay} />
            <div
              className="collapse navbar-collapse second-navbar-gob"
              id="navbarNav"
            >
              <ul
                id="menu-list"
                className="navbar-nav"
                onClick={() => {
                  setActiveSubmenu(null);
                  hideMenu();
                }}
              >
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Inicio
                  </Link>
                </li>
                {isDataReady ? (
                  datos[0].map((item, index) => (
                    <MenuItem
                      key={index}
                      item={item}
                      activeSubmenu={activeSubmenu}
                      handleMouseEnter={handleMouseEnter}
                      handleMouseLeave={handleMouseLeave}
                    />
                  ))
                ) : (
                  <li className="nav-item">
                    <span className="nav-link">Cargando...</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
