import React from "react";

import { imagesCarousel } from "../../json/home";
import Carousel from "../../widgets/carousel/Carousel";

const Home = () => {
    return(
        <>
            <Carousel images={imagesCarousel} />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Proyecto Equipo 2</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;