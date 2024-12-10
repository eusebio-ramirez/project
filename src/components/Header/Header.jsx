import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { fetchLinks } from "../../json/headerLinks";
import "./header.css";
import { NavItem } from "../NavItem/NavItem";



const Header = () => {
  const [overlay, setOverlay] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const [links, setLinks] = useState([])

  useEffect(() => {
    fetchLinks().then((links) => {
      setLinks(links)
      console.log(links)
    })
  }, [])




  const handleMouseEnter = (submenu) => {
    setActiveSubmenu(submenu);
  };
  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  const hideMenu = () => {
    const div = document.getElementById("navbarNav");
    div.classList.remove("show");
    setOverlay(false);
  };

  return (
    <>
      {overlay ? (
        <div
          onClick={() => {
            setOverlay(!overlay);
          }}
          className="overlay-menu"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
        ></div>
      ) : null}
      <div id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-gob">
          <div className="container-fluid">
            <div className="nav-link active" aria-current="page" to="/">
              {isMobile ? (
                <img
                  className="logo-menu"
                  src="https://cdn.hidalgo.gob.mx/gobierno/images/secretarias/vertical/gobierno.svg"
                />
              ) : (
                <span>
                  SISTEMA PARA EL DESARROLLO INTEGRAL DE LA FAMILIA DEL ESTADO
                  DE HIDALGO
                </span>
              )}
            </div>
            <span
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                setOverlay(true);
              }}
              style={{ color: "white" }}
            >
              MENÚ
            </span>
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
                  <div to="/" className="nav-link">
                    <NavItem toLink={"/"}>Inicio</NavItem>
                  </div>
                </li>
                {links.map((item, index) => (
                  <li
                    key={index}
                    className="nav-item dropdown"
                    onMouseEnter={() => handleMouseEnter(item.nombre)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      to={item.link}
                      className="nav-link"
                      onClick={() => {
                        setActiveSubmenu(null);
                      }}
                    >
                      <NavItem toLink={item.link}>
                        {item.nombre}
                      </NavItem>
                    </div>
                    {item.submenu ? (
                      <>
                        <ol
                          className={`dropdown-menu ${activeSubmenu === item.nombre ? "show" : ""
                            }`}
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          {item.submenu.map((item, index) => (
                            <li key={index}>
                              <div
                                className="dropdown-item"
                                to={item.subMenuUrl}
                              >
                                <NavItem toLink={item.subMenuUrl}>{item.subMenuNombre}</NavItem>
                              </div>
                              
                            </li>
                          ))}
                        </ol>
                        <span
                          className={`triangle ${activeSubmenu === item.nombre ? "show" : ""
                            }`}
                        />
                      </>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;