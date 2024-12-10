import { Carousel } from "react-bootstrap";
import './carrusel.css';
import { useEffect, useState } from "react";

const Carrusel = ({ slides }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <div className="contentCarousel">
                <Carousel>
                    {
                        slides.map((slide, index) => (
                            <Carousel.Item key={`slide-${index}`}>
                                <div className="slide">
                                    <img src={`${isMobile ? slide.imgMobile : slide.imgDesktop}`} />
                                </div>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </>
    );
}

export default Carrusel;