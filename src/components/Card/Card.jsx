import { memo, useState } from "react";  
import { Card, Col } from "react-bootstrap"; 
import './card.css';  

const CardCustom = ({ product }) => {  
  const { image, category, price } = product;  
   
  const [isFavorite, setIsFavorite] = useState(false);  
 
  const toggleFavorite = () => {  
    setIsFavorite(prev => !prev);  
  };  

  return (
    <Col xl={4} lg={6} md={6}>  
      <Card className="cardCustom">  
        <Card.Img variant="top" src={image} />  
        <Card.Body>  
          <Card.Title>{category}</Card.Title>  
          <Card.Text>{price}</Card.Text>
          <button onClick={toggleFavorite} className="favorite-button">  
            {isFavorite ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}  
          </button>  
        </Card.Body>  
      </Card>  
    </Col>  
  );  
};  

export default memo(CardCustom);