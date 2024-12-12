// eslint-disable-next-line react/prop-types
export const CardDatos = ({product}) => {
    return (
        <div className="card_datos">
            <h5>{product.title}</h5>
            <h6>{product.price}</h6>
            <h6>{product.category}</h6>
        </div>
    )
}