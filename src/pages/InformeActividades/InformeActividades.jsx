import { useCallback, useEffect, useMemo, useState } from "react";
import "./informeActividades.css";
import SearchComponent from "../../components/Search/SearchComponent";
import CardCustom from "../../components/Card/Card";
import useGet from "../../hooks/useGet";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import ErrorFetch from "../../components/ErrorFetch/ErrorFetch";
import { setInforme } from "../../features/Informe/InformeSlice";

const InformeActividades = () => {
    const { data, loading, error } = useGet('https://fakestoreapi.com/products');
    const grayscale = useSelector((state) => state.theme.grayscale);
    const informe = useSelector((state) => state.informe.data);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(setInforme(data));
    }, [data]);

    const memoizedHandleSearch = useCallback((event) => {
        setSearch(event.target.value);
    }, []);

    const filteredProducts = useMemo(() => {
        return informe.filter((product) =>
            product.category.toLowerCase().includes(search.toLowerCase())
        );
    }, [informe, search]);

    const content = () => {
        if (loading) return <Loader />;
        if (error) return <ErrorFetch />;
        if (data) {
            return (
                <>
                    <SearchComponent
                        placeholder="Filtrar productos"
                        className={"mb-4 searchComponentInforme"}
                        search={search}
                        searchItem={memoizedHandleSearch}
                    />
                    <Row className="informeContent">
                        {filteredProducts.map((item) => (
                            <CardCustom key={item.id} product={item} />
                        ))}
                    </Row>
                </>
            );
        }
        return null;
    }

    return (
        <>
            <Container className={`container1 ${grayscale ? "grayscale" : ""}`}>
                <h1 className="principalTitle">Informe Anual de Actividades de la Presidenta del Patronato</h1>
                {content()}
            </Container>
        </>
    );
};

export default InformeActividades;