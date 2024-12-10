import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

const Transparencia = () => {
    const grayscale = useSelector((state) => state.theme.grayscale);
    return (
        <>
            <Container className={`container1 ${ grayscale ? 'grayscale' : '' }`}>
                <h1 className="principalTitle">Transparencia</h1>
                <Outlet />
            </Container>
        </>
    );
}

export default Transparencia;