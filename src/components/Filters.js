import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import "./styling.css";
const Filters = () => {
  const [rate, setRate] = useState(0);

  return (
    <div className="filters">
      <span className="title" style={{ marginBottom: 50 }}>
        Filter Products
      </span>
      <div>
        <Form.Check
          inline
          type="radio"
          name="group1"
          label="Ascending"
          id={`inline-1`}
        />
      </div>
      <div>
        <Form.Check
          inline
          type="radio"
          name="group1"
          label="Decending"
          id={`inline-2`}
        />
      </div>
      <div>
        <Form.Check type="checkbox" label="Include Out of Stock" />
      </div>
      <div>
        <Form.Check type="checkbox" label="Fast Delivery Only" />
      </div>
      <div>
        <label>Rating: </label>
        <Rating
          rating={rate}
          onClick={(i) => setRate(i + 1)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <Button variant="light" style={{ width: 250, height: 40 }}>
        Clear Filter
      </Button>
    </div>
  );
};

export default Filters;
