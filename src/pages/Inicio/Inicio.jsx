import { Container } from "react-bootstrap";
import Carrusel from "../../components/Carrusel/Carrusel";
import { slides } from "../../json/carrusel";
import { useSelector } from "react-redux";
import Ubicacion from "../../components/Ubicacion/Ubicacion";
import Dependencia from "../../components/Dependencia/Dependencia";
import Noticias from "../../components/Noticias/Noticias";
import Funciones from "../../components/Funciones/Funciones";
import { useEffect } from "react";
import Team from "../../components/Team1/Team";
import { participantes } from "../../json/team";

const Inicio = () => {
    const grayscale = useSelector((state) => state.theme.grayscale);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className={`${grayscale ? 'grayscale' : ''}`}>
                <Carrusel slides={slides} />
                <Container className="container1">
                    <Dependencia title='Dependencia de Gobierno' />
                    <Funciones />
                    <Team data={participantes}/>
                    <Noticias />
                    <Ubicacion title='Ubicación' urlMap='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1199.106333039913!2d-98.73708142453671!3d20.12205583311787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a76107b036b3%3A0xd001bc38c9baafb5!2sPalacio%20del%20Gobierno%20del%20Estado%20de%20Hidalgo!5e0!3m2!1ses!2smx!4v1733856690634!5m2!1ses!2smx' />
                </Container>
            </div>
        </>
    );
}

export default Inicio;