import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import './noticias.css';
import { Button, Carousel } from 'react-bootstrap';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);
    const [error, setError] = useState(null);
    const carouselRef = useRef(null);

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const getNoticias = useCallback(async () => {
        try {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=Gobierno&language=es&pageSize=10&apiKey=934b7619e48c4343853807333e5bbb13`
            );
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            setNoticias(data.articles);
        } catch (error) {
            console.error('Error al obtener las noticias:', error);
            setError(error.message);
        }
    }, []);

    useEffect(() => {
        getNoticias();
    }, [getNoticias]);

    const renderedNoticias = useMemo(() => (
        noticias.map((noticia, index) => (
            <Carousel.Item key={`noticia-${index}`}>
                <img className='carruselImage' src={noticia.urlToImage} />
                <Carousel.Caption>
                    <h3 onClick={() => window.open(noticia.url, "_blank")} className='noticiaTitle'>{noticia.title}</h3>
                    <p>{noticia.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        ))
    ), [noticias]);

    return (
        <div className='componentContainer componentNoticias'>
            <h2 className='secondTitle'>Noticias</h2>
            {error ? (
                <p className="error">Error: {error}</p>
            ) : (
                <div>
                    <Carousel controls={false} ref={carouselRef}>
                        {renderedNoticias}
                    </Carousel>
                    <div className='contentControlButtons'>
                        <Button onClick={handlePrev}><i className="bi bi-arrow-left-circle-fill icon"></i></Button>
                        <Button onClick={handleNext}><i className="bi bi-arrow-right-circle-fill icon"></i></Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Noticias;
