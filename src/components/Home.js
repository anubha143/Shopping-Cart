import React from "react";
import "./styling.css";
import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProducts from "./SingleProducts";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProducts prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
