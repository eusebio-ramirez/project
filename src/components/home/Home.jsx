import React from "react";

import './home.css';
import Title from "../../widgets/title/title";

import { imagesCarousel } from "../../json/home";
import { listPersonal } from "../../json/listPersonal";
import Carousel from "../../widgets/carousel/Carousel";
import Personal from "../../widgets/personal/Personal";

const Home = () => {
    return (

        <>
            <Carousel images={imagesCarousel} />
            <div className="container home">
                <div className="row">
                    <div className="col-12 content-image">
                        <div className="image-dependency" style={{ backgroundImage: `url(https://cdn.hidalgo.gob.mx/gobierno/images/iconosSec/Bienestar.svg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '300px', height: '300px' }}></div>
                    </div>
                    <div className="col-12">
                        <h1 className="title">Proyecto Equipo 2</h1>
                        <hr className="hr-gob" />
                        <p>
                            Desarrollar acciones en materia de asistencia social de manera corresponsable y en apego a lo establecido en las leyes y lineamientos aplicables a través de la ejecución de programas y proyectos encaminados al beneficio de las familias hidalguenses más vulnerables a fin de contribuir a su desarrollo humano y calidad de vida.
                        </p>
                    </div>
                    <div className="col-12 content-bumble">
                        <h4 className="title">FelizNavidad</h4>
                        <div class="bubble">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="bubble">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="bubble">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="bubble">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="bubble">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <Title string = {"Integrantes del equipo"}/>
                    <Personal person={listPersonal} />
                    <div className="col-12 content-icons">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                    </div>
                    <div className="col-12">
                        <iframe style={{ width: '100%', height: 350 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.2780409383913!2d-98.7381916864365!3d20.122444749554596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a76107b036b3%3A0xd001bc38c9baafb5!2sPalacio%20del%20Gobierno%20del%20Estado%20de%20Hidalgo!5e0!3m2!1ses!2smx!4v1734557576803!5m2!1ses!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;