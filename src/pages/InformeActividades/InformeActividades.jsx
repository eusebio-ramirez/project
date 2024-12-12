import { useContext, useEffect, useMemo, useRef, useState } from "react";
import "./informeActividades.css";
import { ProdContext } from "../../context/ProdContext";
import { Search } from "../../components/Search/Search";
import { CardDatos } from "../../components/CardDatos/CardDatos";

const InformeActividades = () => {
  const { product, setProduct } = useContext(ProdContext)
  const [busquedaActiva, setBusquedaActiva] = useState("")
  const inputRef = useRef()

  console.log("Soy un componente")

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    peticion()
  }, [])
  
  function peticion() {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => {
        setProduct(json)
      })
      .catch(error => console.error(error))
  }

  const productFilter = useMemo(() => {
    console.log("vuelvo a iniciar")
    if (busquedaActiva.trim() == "") {
      return product
    }
    const newData = product.filter(item => {
      return item.category.includes(busquedaActiva) 
    })
    return newData
  }, [busquedaActiva,product])

  function focus(){
    inputRef.current.value = busquedaActiva
    inputRef.current.focus()
  }



  return (
    <div className="container">
      <div className="row">
        <div>
          <h3 className="title">
            Informe Anual de Actividades de la Presidenta del Patronato
          </h3>
          <hr className="hr-gob" />
          <Search setBusquedaActiva={setBusquedaActiva}/>
          <div>
            <input type="text" className="inputBusqueda" placeholder="Focus" ref={inputRef}/>
            <button onClick={focus}>Aceptar</button>
          </div>
        </div>
        {productFilter && productFilter.map((item, index) => (
          <div key={index} className="col-md-3 col-sm-6 col-12">
            <div className="card_container_informe">
              <div
                className="card_img"
                style={{ backgroundImage: `url("${item.image}")` }}
              ></div>
              <div className="card_cintillo"></div>
              <CardDatos product={item}/>
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