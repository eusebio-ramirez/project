import { Card, Col, Row } from "react-bootstrap";
import MyImage from "../MyImage/MyImage";
import './team.css';

const Team = ({ data }) => {
  return (
    <>
      <h2 className='secondTitle'>Integrantes de Equipo</h2>
      <Row className="rowParticipantes">
        {data.map((item, index) => (
          <Col key={`participante-${index}`} xl={4} lg={6} md={6}>
            <Card>
              <Card.Body className="participante">
                <MyImage src={item.foto} alt={`${item.nombre}'s photo`} />
                <Card.Title>
                  {item.nombre}
                </Card.Title>
                <Card.Subtitle>{item.cargo}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
export default Team;