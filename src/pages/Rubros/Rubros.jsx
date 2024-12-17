import { useEffect} from "react";
import { Link } from "react-router";
import "./rubros.css";
import { Container, Row } from "react-bootstrap";
import { CardIconName } from "../../components/CardIconName/CardIconName";
import { useFetchRubros } from "../../hooks/useFetchRubros";

const Rubros = () => {
  const {rubros} = useFetchRubros()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <Container>
      <Row>
        <div className="rubros_titulo">
          <h2>Articulo 69 Ley de Transparencia (48 Rubros)</h2>
        </div>
        {rubros.map((item, index) => (
          <CardIconName key={index} nombre={item.nombre} icono={item.icono}/>
        ))}
        <Link className="rubros_historicos" to="RubrosHistoricos">
          Información Ejercicios Anteriores Art. 69 (48 Fracciones)
        </Link>
      </Row>
    </Container>
  );
};

export default Rubros;

