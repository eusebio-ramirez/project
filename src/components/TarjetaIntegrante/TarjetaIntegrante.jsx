export const TarjetaIntegrante = ({imagen, nombre, dependencia})=>{
    return (
        <div className="col-md-3 col-sm-2 col-12">
              <div className="card_container_informe">
                <div
                  className="card_img"
                  style={{
                    backgroundImage: `url("${imagen}")`,
                  }}
                ></div>
                <div className="card_cintillo"></div>
                <div className="card_datos">
                  <h5>{nombre}</h5>
                  <h6>{dependencia}</h6>
                </div>
              </div>
        </div>
    )
}
