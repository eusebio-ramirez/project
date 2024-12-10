import { Container } from "react-bootstrap";
import Carrusel from "../../components/Carrusel/Carrusel";
import { slides } from "../../json/carrusel";
import { useSelector } from "react-redux";

const Inicio = () => {
    const grayscale = useSelector((state) => state.theme.grayscale);
    return (
        <>
            <div className={`${ grayscale ? 'grayscale' : '' }`}>
                <Carrusel slides={slides} />
                <Container className="container1">

                </Container>
            </div>
        </>
    );
}

export default Inicio;