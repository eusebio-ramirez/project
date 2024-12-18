import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import "./rubros.css";
import { useDispatch, useSelector } from "react-redux";
import { setRubros } from "../../features/Rubros/RubrosSlice";
import { Container } from "react-bootstrap";
import useGet from "../../hooks/useGet";
import Loader from "../../components/Loader/Loader";
import ListRubros from "../../components/ListRubros/ListRubros";
import useFetchFake from "../../hooks/useFetchFake";
import { fetchRubrosHistoricos } from '../../json/rubrosHistoricos';
import ErrorFetch from "../../components/ErrorFetch/ErrorFetch";

const Rubros = () => {
  const grayscale = useSelector((state) => state.theme.grayscale);
  const rubros = useSelector((state) => state.rubros.data);
  const dispatch = useDispatch();
  const { data, loading, error } = useGet('https://api-project-ap9h.onrender.com/api/rubros');
  const { dataFake, loadingFake } = useFetchFake(fetchRubrosHistoricos);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(setRubros(data));
  }, [data]);

  const verRubrosHistoricos = useCallback(() => {
    navigate(`RubrosHistoricos`, { state: dataFake });
  }, [navigate, dataFake]);

  const containerClass = useMemo(() => 
    `container1 ${grayscale ? "grayscale" : ""} containerRubros`,
    [grayscale]
  );

  const content = useMemo(() => {
    if (loading || loadingFake) return <Loader />;
    if (error) return <ErrorFetch />;
    if (data) {
      return (
        <>
          <ListRubros rubros={rubros} />
          <h3 className="linkRubrosHistoricos" onClick={verRubrosHistoricos}>
            Información Ejercicios Anteriores Art. 69 (48 Fracciones)
          </h3>
        </>
      );
    }
    return null;
  }, [loading, loadingFake, error, data, rubros, verRubrosHistoricos]);

  return (
    <Container className={containerClass}>
      <h1 className="principalTitle">Articulo 69 Ley de Transparencia (48 Rubros)</h1>
      {content}
    </Container>
  );
};

export default Rubros;
