import "./detallerubro.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TableDownloadIndividual } from "../../../components/TableDownloadIndividual/TableDownloadIndividual";
import { useFetchRubros } from "../../../hooks/useFetchRubros";

const DetalleRubro = () => {
  const {rubros, isLoading} = useFetchRubros()
  const [rubro, setRubro] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() =>{
    const temp = rubros.find((rubro) => rubro.nombre === nombre);
    if(!isLoading){
      setRubro(temp)
    }
  },[rubros])

  const { nombre } = useParams();
  
  
  return (
    <Container>
      <Row>
        <Col>
          <div className="rubro_titulo">
            <h3 className="title">{nombre}</h3>
            <hr className="hr-gob" />
          </div>
        </Col>
      </Row>
      <Row xs={1} md={3}>
        {isLoading && <h1>Cargando...</h1>}
        { rubro && rubro.formatos.map((formato, index) => {
          const urlXLSX =
            "https://dif.hidalgo.gob.mx/Transparencia/xlsx/a69_" +
            formato.xlsx +
            "DIFH.xlsx";
          const urlHTML =
            "https://dif.hidalgo.gob.mx/Transparencia/htm/a69_" +
            formato.html +
            "DIFH.htm";
          return (
            <Col key={index}>
              <TableDownloadIndividual formato={formato} urlHTML={urlHTML} urlXLSX={urlXLSX} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default DetalleRubro;
