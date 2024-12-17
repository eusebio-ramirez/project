/* eslint-disable react/prop-types */
export const TableDownloadIndividual = ({ formato, urlHTML, urlXLSX }) => {

  const { nombre, xlsx_liga, htm_liga } = formato

  return (
    <div className="rubro_container_detalle">
      <div className="detalle_rubro_nombre">
        <h5>{nombre}</h5>
      </div>
      <div className="detalle_rubro_enlaces">
        <a
          href={xlsx_liga ? xlsx_liga : urlXLSX}
          target="_blank"
        >
          XLSX
        </a>
        <a
          href={htm_liga ? htm_liga : urlHTML}
          target="_blank"
        >
          Ver Tabla
        </a>
      </div>
    </div>

  )
}

