import React from 'react';
import { Card } from 'react-bootstrap';
import '../inicio.css'; // Asegúrate de crear este archivo CSS

export const TeamCard = React.memo(({ item, theme }) => (
  <Card className={`h-100 team-card ${theme === 'dark' ? 'bg-dark text-light' : ''}`}>
    <Card.Img 
      variant="top" 
      src={item.imagen} 
      style={{ height: '200px', objectFit: 'cover' }}
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title>{item.nombre}</Card.Title>
      <Card.Text>
        {item.cargo}
      </Card.Text>
    </Card.Body>
  </Card>
));