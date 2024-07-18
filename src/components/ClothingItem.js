import React from 'react';
import { Card } from 'react-bootstrap';

const ClothingItem = ({ image, description }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} alt={description} />
      <Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ClothingItem;
