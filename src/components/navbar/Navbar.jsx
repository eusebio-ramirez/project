import React, { useEffect, useState } from 'react';

import './navbar.css';
import { links } from '../../json/headerLinks';

import useCustomNavigate from '../../hook/useCustomNavigate';
import useFetch from '../../hook/useFetch';

const Navbar = () => {
    const [overlay, setOverlay] = useState(false);

    const { goTo } = useCustomNavigate();
    const { data, getRequest } = useFetch();

    const getMenu = async () => {
        await getRequest("https://api-project-ap9h.onrender.com/api/menu");
    }
    useEffect(() => {
        let width = window.innerWidth;
        if (width <= 576) {
            setIsMobile(true);
        }
    }, []);

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <>
            {
                overlay ? <div onClick={() => { setOverlay(!overlay) }} className='overlay-menu' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"></div> : null
            }
            <div id='header'>
                <nav className="navbar navbar-expand-lg navbar-light bg-gob">
                    <div className="container-fluid">
                        <a onClick={() => goTo('/')} className='principal-link'>
                            <img className='logo-menu' src='https://cdn.hidalgo.gob.mx/gobierno/images/secretarias/vertical/gobierno.svg' />
                        </a>
                        <span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { setOverlay(true) }} style={{ color: "white" }} viewBox="0 0 32 32">
                            MENÚ
                        </span>
                        <div className="collapse navbar-collapse second-navbar-gob" id="navbarNav">
                            <ul id='menu-list' className="navbar-nav">
                                <li className="nav-item">
                                    <a onClick={() => goTo('/')} className="nav-link">Inicio</a>
                                </li>
                                {data != null &&
                                    data.map((item, index) => (
                                        <li key={index} className="nav-item dropdown">
                                            <a onClick={() => goTo(item.link)}
                                                className="nav-link"
                                            >{item.nombre}</a>
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