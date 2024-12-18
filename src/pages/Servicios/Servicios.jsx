import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { servicios } from "../../json/servicios";
import "./servicios.css";
import { useDispatch, useSelector } from "react-redux";
import useGet from "../../hooks/useGet";
import { setServicios } from "../../features/Servicios/ServiciosSlice";
import Loader from "../../components/Loader/Loader";
import ErrorFetch from "../../components/ErrorFetch/ErrorFetch";
import ListServicios from "../../components/Listservicios/ListServicios";

const Servicios = () => {
  const grayscale = useSelector((state) => state.theme.grayscale);
  const servicios = useSelector((state) => state.servicios.data); 
  const dispatch = useDispatch();
  const { data, loading, error } = useGet('https://api-project-ap9h.onrender.com/api/servicios');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() =>{
    dispatch(setServicios(data));
  },[data]);

  const content = () => {
    if (loading) return <Loader />;
    if (error) return <ErrorFetch />;
    if (data) {
      return (
        <>
          <ListServicios data={servicios} />
        </>
      );
    }
    return null;
  }

  return (
    <Container className={`container1 ${grayscale ? "grayscale" : ""}`}>
      <h1 className="principalTitle">Servicios</h1>
      {content()}
    </Container>
  );
};

export default Servicios;
