import React from "react";
import { Button, Card } from "react-bootstrap";
import "./styling.css";
const SingleProducts = ({ prod }) => {
  return (
    <div className="products">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.names}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProducts;
