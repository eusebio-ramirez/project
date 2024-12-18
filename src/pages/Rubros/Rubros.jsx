import { useEffect} from "react";
import { Link } from "react-router";
import "./rubros.css";
import { Container, Row } from "react-bootstrap";
import { CardIconName } from "../../components/CardIconName/CardIconName";
import { useFetchRubros } from "../../hooks/useFetchRubros";
import { useDispatch, useSelector } from "react-redux";
import { saluda } from "../../features/rubroStorage/rubroStorageSlice"; // importa del features

const Rubros = () => {
  const {rubros,recargarPeticion} = useFetchRubros() // Hook Personalizado || Llamado de API

  const numero = useSelector((state) => state.rubroStorage.value) // nombres del counterSlice
  const dispatch = useDispatch() // Utilización de metodos

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
          {numero}
        </Link>
        <button onClick={()=>dispatch(saluda())}>Saluda</button>
        <button onClick={()=> recargarPeticion()}>Rec</button>
        {/*Metodo temporal importado de features || Uso de redux*/}
      </Row>
    </Container>
  );
};

export default Rubros;

