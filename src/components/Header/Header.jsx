import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { fetchLinks } from "../../json/headerLinks";
import { Link } from "react-router";
import { homePath } from "../../constant/paths";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './header.css';
import useGet from "../../hooks/useGet";
import { setMenu } from "../../features/Menu/MenuSlice";

const Header = () => {
    const grayscale = useSelector((state) => state.theme.grayscale);
    const menu = useSelector((state) => state.menu.data);
    const dispatch = useDispatch();
    const { data } = useGet('https://api-project-ap9h.onrender.com/api/menu');

    useEffect(() => {
        dispatch(setMenu(data));
    }, [data]);

    return (
        <Navbar expand="lg" bg="info" className={`headerPrincipal ${grayscale ? 'grayscale' : '' }`}>
            <Container>
                <Link className="navbar-brand" to={homePath}>Dependencia</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                    <Nav className="" variant="dark" >
                        {
                            menu.map((element, index) => (
                                element.submenu ? (
                                    <NavDropdown className="d-lg-flex align-items-center" key={element.link} title={element.nombre}>
                                        {
                                            element.submenu.map((linkSubmenu, index) => (
                                                <Link className="dropdown-item" key={linkSubmenu.subMenuUrl} to={linkSubmenu.subMenuUrl}>{linkSubmenu.subMenuNombre}</Link>
                                            ))
                                        }
                                    </NavDropdown>
                                ) : (
                                    <Nav.Item key={element.link} className="d-lg-flex align-items-center" >
                                        <Link className="nav-link" to={element.link}>{element.nombre}</Link>
                                    </Nav.Item>
                                )
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header