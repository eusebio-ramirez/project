import { Card, Col, Row } from "react-bootstrap";
import './listServicios.css';

const ListServicios = ({ data }) => {
    return (
        <>
            <Row className='rowServicio'>
                {data.map((item, index) => (
                    <Col key={`servicio-${index}`} xl={4} lg={6} md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    {item.nombre}
                                </Card.Title>
                                <Card.Text>
                                    {item.descripcion}
                                </Card.Text>
                                <Card.Link className='linkServicio' target='_blank' href={item.url}>Ver Servicio</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default ListServicios;