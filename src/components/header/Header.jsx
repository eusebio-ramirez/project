import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./header.css";
import { Logo, MenuItem, MenuToggle } from "./components";
import { useTheme } from "../../context";
import { useMenuStore } from "../../hooks";

export const Header = ({ onHeightChange }) => {
  const { datos } = useMenuStore();
  const [overlay, setOverlay] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { theme } = useTheme();
  const headerRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = (submenu) => {
    if (window.innerWidth > 991) {
      setActiveSubmenu(submenu);
    }
  };
  
  const handleMouseLeave = () => {
    if (window.innerWidth > 991) {
      setActiveSubmenu(null);
    }
  };

  const hideMenu = () => {
    setOverlay(false);
    setExpanded(false);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (submenu) => {
    if (window.innerWidth <= 991) {
      setActiveSubmenu(prev => prev === submenu ? null : submenu);
    }
  };

  const isDataReady = datos && datos.length > 0;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        hideMenu();
      }
    };

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        hideMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        onHeightChange(height);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, [onHeightChange]);

  return (
    <>
      {overlay && (
        <div
          onClick={hideMenu}
          className="overlay-menu"
        />
      )}

      <Navbar 
        expand="lg" 
        className={`${theme === "dark" ? "bg-gob-dark" : "bg-gob"}`}
        id="header"
        ref={headerRef}
        expanded={expanded}
        onToggle={(expanded) => setExpanded(expanded)}
      >
        <Container fluid>
          <Logo />
          <MenuToggle setOverlay={setOverlay} />
          <Navbar.Collapse id="navbarNav" className="second-navbar-gob">
            <Nav id="menu-list">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={hideMenu}>Inicio</Nav.Link>
              </Nav.Item>
              {isDataReady ? (
                datos[0].map((item, index) => (
                  <MenuItem
                    key={index}
                    item={item}
                    activeSubmenu={activeSubmenu}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    hideMenu={hideMenu}
                    toggleSubmenu={toggleSubmenu}
                  />
                ))
              ) : (
                <Nav.Item>
                  <Nav.Link>Cargando...</Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};