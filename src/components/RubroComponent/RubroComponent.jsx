import { Card, Col, Row } from 'react-bootstrap';
import './rubroComponent.css';

const RubroComponent = ({data}) => {
  return (
    <>
      <Row className='rowRubroComponent'>
        {data.map((item, index) => (
          <Col key={`rubro-comp-${index}`} xl={4} lg={6} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  {item.nombre}
                </Card.Title>
                <Card.Link className='linkXLSX' target='_blank' href={`https://s-contraloria.hidalgo.gob.mx/Transparencia/xlsx/${item.xlsx}.xlsx`}>XLSX</Card.Link>
                <Card.Link className='linkHTML' target='_blank' href={`https://s-contraloria.hidalgo.gob.mx/Transparencia/htm/${item.html}.htm`}>Ver Tabla</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default RubroComponent;