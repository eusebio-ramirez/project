import { useContext, useEffect, useState } from "react";
import "./informeActividades.css";
import { ProductsContext } from "../../context/ProductsContext";
import axios from "axios";

const InformeActividades = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error.message || "Error al momento de consumir api");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <input
          style={{ marginTop: "40px" }}
          type="text"
          value={search}
          placeholder="Buscar productos"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="row">
        <div>
          <h3 className="title">
            Informe Anual de Actividades de la Presidenta del Patronato
          </h3>
          <hr className="hr-gob" />
        </div>
        {products.map((item, index) => (
          <div key={index} className="col-md-3 col-sm-6 col-12">
            <div className="card_container_informe">
              <div
                className="card_img"
                style={{ backgroundImage: `url("${item.image}")` }}
              ></div>
              <div className="card_cintillo"></div>
              <div className="card_datos">
                <h5>{item.category}</h5>
                <h6>{item.price}</h6>
              </div>
            </div>
          </div>
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
