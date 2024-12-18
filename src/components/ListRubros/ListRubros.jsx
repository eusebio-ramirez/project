import { Button, Col, Row } from "react-bootstrap";
import './listRubros.css';
import { useNavigate } from "react-router";

const ListRubros = ({ rubros }) => {
  const navigate = useNavigate();
  return (
    <>
      <Row className="rowRubro">
        {rubros.map((item, index) => (
          <Col key={`rubro-${index}`} xl={4} lg={6} md={6}>
            <Button className="rubro" onClick={() => navigate(item.nombre)} variant="info">
              <div className="iconRubro">
                <img
                  src={
                    "http://cdn.hidalgo.gob.mx/plantilla_secretarial/Rubros/PNG/" +
                    item.icono
                  }
                />
              </div>
              <h3 className="textRubro">{item.nombre}</h3>
            </Button>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ListRubros;