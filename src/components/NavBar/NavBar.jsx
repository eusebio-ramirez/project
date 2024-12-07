import { links } from "../../json/headerLinks"
import { NavItem } from "../NavItem/NavItem"
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'

export const NavBar = () => {
    return (
        <Nav variant="pills" className="navBar">
            <Nav.Item>
                <Nav.Link>
                    <NavItem toLink="/">Home</NavItem>
                </Nav.Link>
            </Nav.Item>
            {links.map((item, index) => {
                if (item.submenu && item.submenu.length > 0) {
                    // Renderizar submenús
                    return (
                        <NavDropdown
                            title={item.nombre}
                            id={`nav-dropdown-${index}`}
                            key={index}
                        >
                            {item.submenu.map((subItem, subIndex) => (
                                <NavDropdown.Item
                                    to={subItem.subMenuUrl}
                                    key={subIndex}
                                >
                                    <NavItem toLink={subItem.subMenuUrl}>
                                        {subItem.subMenuNombre}
                                    </NavItem>
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    );
                } else {
                    // Renderizar elementos simples
                    return (
                        <Nav.Item key={index}>
                            <Nav.Link>
                                <NavItem toLink={item.link}>{item.nombre}</NavItem>
                            </Nav.Link>
                        </Nav.Item>
                    );
                }
            })}
        </Nav>
    );    

}

