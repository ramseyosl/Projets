import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price} DH</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
