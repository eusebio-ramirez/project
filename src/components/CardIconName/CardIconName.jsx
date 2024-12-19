import { Link } from "react-router"
// eslint-disable-next-line react/prop-types
export const CardIconName = ({nombre, icono}) => {
    return (
        <Link
            to={`/Rubros/item/${nombre}`}
            className="col-md-4 col-sm-6 col-12 rubro_enlace"
        >
            <div className="rubro_container">
                <div className="rubro_icono">
                    <img
                        src={
                            "http://cdn.hidalgo.gob.mx/plantilla_secretarial/Rubros/PNG/" +
                            icono
                        }
                    />
                </div>
                <h3>{nombre}</h3>
            </div>
        </Link>
    )
}