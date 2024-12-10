

const ItemNavabar = ({}) => {
  return (
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
      {item.nombre}
    </div>
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
  )
}

export default ItemNavabar