import { Link } from "react-router-dom";
export const MenuItem = ({ item, activeSubmenu, handleMouseEnter, handleMouseLeave }) => (
    <li
      className="nav-item dropdown"
      onMouseEnter={() => handleMouseEnter(item.nombre)}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={item.link} className="nav-link">
        {item.nombre}
      </Link>
      {item.submenu && (
        <>
          <ol
            className={`dropdown-menu ${activeSubmenu === item.nombre ? "show" : ""}`}
            aria-labelledby="navbarDropdownMenuLink"
          >
            {item.submenu.map((subItem, subIndex) => (
              <li key={subIndex}>
                <Link className="dropdown-item" to={subItem.subMenuUrl}>
                  {subItem.subMenuNombre}
                </Link>
              </li>
            ))}
          </ol>
          <span className={`triangle ${activeSubmenu === item.nombre ? "show" : ""}`} />
        </>
      )}
    </li>
  );