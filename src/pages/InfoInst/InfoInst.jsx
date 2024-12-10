import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

const InfoInst = () => {
    const grayscale = useSelector((state) => state.theme.grayscale)
    return (
        <>
            <Container className={`container1 ${ grayscale ? 'grayscale' : '' }`}>
                <h1 className="principalTitle">Información Institucional</h1>
                <Outlet />
            </Container>
        </>
    );
}

export default InfoInst;