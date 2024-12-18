import "./detallerubro.css";
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListRubrosHistoricos from "../../components/ListRubrosHistoricos/ListRubrosHistoricos";
import { transparenciaPath } from "../../constant/paths";
import RubroComponent from "../../components/RubroComponent/RubroComponent";

const DetalleRubro = () => {
  const grayscale = useSelector((state) => state.theme.grayscale);
  const rubros = useSelector((state) => state.rubros.data);
  const navigate = useNavigate();
  const { nombre } = useParams();
  const location = useLocation();
  const dataHistorica = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rubro = rubros.find((rubro) => rubro.nombre === nombre);

  useEffect(() => {
    if (!rubro && nombre !== 'RubrosHistoricos') {
      navigate(transparenciaPath);
    }
  }, [rubro, navigate]);

  const content = () => {
    if (nombre === 'RubrosHistoricos' && dataHistorica) {
      return (
        <>
          <h2 className="secondTitle">Información Histórica</h2>
          <ListRubrosHistoricos data={dataHistorica} />
        </>
      );
    }
    if (rubro) {
      return (
        <>
          <h2 className="secondTitle">{rubro.nombre}</h2>
          <RubroComponent data={rubro.formatos} />
        </>
      );
    }
    return null;
  }

  return (
    <>
      <Container className={`container1 ${grayscale ? "grayscale" : ""} containerRubros`}>
        {
          content()
        }
      </Container>
      {/* <div className="container container_detalle_rubro">
        <div className="row">
          <div className="col-12">
            <div className="rubro_titulo">
              <h3 className="title">{rubro.nombre}</h3>
              <hr className="hr-gob" />
            </div>
          </div>
        </div>
        <div className="row">
          {rubro.formatos.map((formato, index) => {
            const urlXLSX =
              "https://dif.hidalgo.gob.mx/Transparencia/xlsx/a69_" +
              formato.xlsx +
              "DIFH.xlsx";
            const urlHTML =
              "https://dif.hidalgo.gob.mx/Transparencia/htm/a69_" +
              formato.html +
              "DIFH.htm";
            return (
              <div key={index} className="col-md-4 col-12">
                <div className="rubro_container_detalle">
                  <div className="detalle_rubro_nombre">
                    <h5>{formato.nombre}</h5>
                  </div>
                  <div className="detalle_rubro_enlaces">
                    <a
                      href={formato.xlsx_liga ? formato.xlsx_liga : urlXLSX}
                      target="_blank"
                    >
                      XLSX
                    </a>
                    <a
                      href={formato.htm_liga ? formato.htm_liga : urlHTML}
                      target="_blank"
                    >
                      Ver Tabla
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default DetalleRubro;
