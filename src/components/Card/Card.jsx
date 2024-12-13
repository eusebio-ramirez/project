import { memo } from "react";

const Card = ({ product }) => {
  const { image, category, price } = product;
  console.log("Card renderizado");
  return (
    <div className="col-md-3 col-sm-6 col-12">
      <div className="card_container_informe">
        <div
          className="card_img"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
        <div className="card_cintillo"></div>
        <div className="card_datos">
          <h5>{category}</h5>
          <h6>{price}</h6>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);