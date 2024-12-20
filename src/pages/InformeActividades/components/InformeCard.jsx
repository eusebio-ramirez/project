import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './InformeCard.css';

export const InformeCard = React.memo(({ item, theme }) => (
  <Card className={`h-100 informe-card ${theme === 'dark' ? 'dark-theme' : ''}`}>
    <Card.Img 
      variant="top" 
      src={item.imagen} 
      style={{ height: '200px', objectFit: 'cover' }}
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title>{item.informe}</Card.Title>
      <Card.Text>
        {item.fecha}<br />
        {item.lugar}
      </Card.Text>
      
    </Card.Body>
  </Card>
));