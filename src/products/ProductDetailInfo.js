import React from "react";
import Button from "../Button.js";

export default function ProductDetailInfo({ product, onProductAdd }) {
  return (
    <React.Fragment>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd(product)}>${product.price}</Button>
    </React.Fragment>
  );
}
