import React, { useEffect, useState } from 'react';

import './navbar.css';
import { links } from '../../json/headerLinks';

const Navbar = () => {
    const [overlay, setOverlay] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const handleMouseEnter = (submenu) => {
        setActiveSubmenu(submenu);
    }
    const handleMouseLeave = () => {
        setActiveSubmenu(null);
    }

    const hideMenu = () => {
        const div = document.getElementById('navbarNav');
        div.classList.remove('show');
        setOverlay(false);
    }

    useEffect( () => {
        let width = window.innerWidth;
        if(width <= 576){
            setIsMobile(true);
        }
    }, [])

    return (
        <>
            {
                overlay ? <div onClick={() => { setOverlay(!overlay) }} className='overlay-menu' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"></div> : null
            }
            <div id='header'>
                <nav className="navbar navbar-expand-lg navbar-light bg-gob">
                    <div className="container-fluid">
                        <a href="/" className='principal-link'>
                            {
                                isMobile ? <img className='logo-menu' src='https://cdn.hidalgo.gob.mx/gobierno/images/secretarias/vertical/gobierno.svg' /> : <span>SECRETARÍA DE GOBIERNO</span>
                            }
                        </a>
                        <span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { setOverlay(true) }} style={{ color: "white" }} viewBox="0 0 32 32">
                            MENÚ
                        </span>
                        <div className="collapse navbar-collapse second-navbar-gob" id="navbarNav">
                            <ul id='menu-list' className="navbar-nav"
                                onClick={() => { setActiveSubmenu(null); hideMenu() }}>
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Inicio</a>
                                </li>
                                {
                                    links.map((item, index) => (
                                        <li key={index} className="nav-item dropdown"
                                            onMouseEnter={() => handleMouseEnter(item.nombre)}
                                            onMouseLeave={handleMouseLeave}>
                                            <a href={item.link}
                                                className="nav-link"
                                                onClick={() => { setActiveSubmenu(null) }}>{item.nombre}</a>
                                            {/* {
                                                item.submenu && item.submenu.length > 0 && (
                                                    <ol className={`dropdown-menu ${activeSubmenu === item.nombre ? "show" : ""}`} aria-labelledby="navbarDropdownMenuLink">
                                                        {
                                                            item.submenu.map((item, index) => (
                                                                <li key={index}><Link className="dropdown-item" to={item.subMenuUrl}>{item.subMenuNombre}</Link></li>
                                                            ))
                                                        }
                                                    </ol>
                                                )
                                            } */}
                                            <span className={`triangle ${activeSubmenu === item.nombre ? "show" : ""}`} />
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default Navbar;