import { useEffect } from "react";
import "./rubros.css";
import { Button, Container, Row } from "react-bootstrap";
import { CardIconName } from "../../components/CardIconName/CardIconName";
import { useFetchRubros } from "../../hooks/useFetchRubros";
import { ButtonReLoad } from "../../components/ButtonReLoad/ButtonReLoad";


const Rubros = () => {
  const { rubros, isLoading, recargarPeticion } = useFetchRubros() // Hook Personalizado || Llamado de API
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
          <CardIconName key={index} nombre={item.nombre} icono={item.icono} />
        ))}
        <ButtonReLoad loanding={isLoading} metodo={recargarPeticion}>
          Recargar
        </ButtonReLoad>
      </Row>
    </Container>
  );
};

export default Rubros;

