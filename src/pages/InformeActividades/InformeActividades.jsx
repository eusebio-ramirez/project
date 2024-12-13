import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import "./informeActividades.css";
import { ProductContext } from "../../context/ProductContext";
import SearchComponent from "../../components/Search/SearchComponent";
import Card from "../../components/Card/Card";

const InformeActividades = () => {
    const inputRef = useRef(null);
    const [search, setSearch] = useState('');
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { products, setProducts } = useContext(ProductContext);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            const data = await response.json(); // Obtener los datos correctamente
            setProducts(data);
        } catch (error) {
            console.log(error.message || "Error al momento de consumir api");
        }
    };

    const memoizedHandleSearch = useCallback((event) => {
        setSearch(event.target.value);
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            product.category.toLowerCase().includes(search.toLowerCase())
        );
    }, [products, search]);

    const handleFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div className="container">
            <div className="row">
                <div>
                    <h3 className="title">
                        Informe Anual de Actividades de la Presidenta del Patronato
                    </h3>
                    <button
                        onClick={() => {
                            setCounter(counter + 1);
                        }}
                    >
                        +
                    </button>
                    <hr className="hr-gob" />
                    <SearchComponent
                        placeholder="Filtrar productos"
                        className={"mb-4"}
                        search={search}
                        searchItem={memoizedHandleSearch}
                    />
                    <input ref={inputRef} type="text" placeholder="Focus" />
                    <button onClick={handleFocus}>Enfocar input</button>
                </div>
                {filteredProducts.map((item) => (
                    <Card key={item.id} product={item} />
                ))}
                <br />
                <div>
                    <hr className="hr-gob" />
                </div>
            </div>
        </div>
    );
};

export default InformeActividades;