import { useEffect, useState, useContext } from "react";
import { isMobile } from "react-device-detect";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import { fetchLinks } from "../../json/headerLinks";
import "./header.css";
import { Link } from "react-router";

const Header = () => {
  const [links, setLinks] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { themeColor } = useContext(ThemeContext);

  useEffect(() => {
    fetchLinks().then((links) => {
      setLinks(links);
    });
  }, []);

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

  console.log("Header color:", themeColor.header);

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
      <div id="header" style={{ backgroundColor: themeColor.header }}>
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
                  <Link to={"/"} className="nav-link">
                    Inicio
                  </Link>
                </li>
                {links.map((item, index) => (
                  <li
                    key={index}
                    className="nav-item dropdown"
                    onMouseEnter={() => handleMouseEnter(item.nombre)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={item.link}
                      className="nav-link"
                      onClick={() => {
                        setActiveSubmenu(null);
                      }}
                    >
                      {item.nombre}
                    </Link>
                    {item.submenu ? (
                      <>
                        <ol
                          className={`dropdown-menu ${
                            activeSubmenu === item.nombre ? "show" : ""
                          }`}
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          {item.submenu.map((item, index) => (
                            <li key={index}>
                              <div
                                className="dropdown-item"
                                to={item.subMenuUrl}
                              >
                                {item.subMenuNombre}
                              </div>
                            </li>
                          ))}
                        </ol>
                        <span
                          className={`triangle ${
                            activeSubmenu === item.nombre ? "show" : ""
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
