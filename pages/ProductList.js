import React from "react";
import { useParams } from "react-router-dom";

function ProductList() {
  const { category } = useParams();

  return (
    <div>
      <h1>หมวดสินค้า: {category}</h1>
    </div>
  );
}

export default ProductList;