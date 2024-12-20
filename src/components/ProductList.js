import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useAppContext } from "./AppContext";

const ProductList = () => {
  const { category } = useParams();
  const { addToCart } = useAppContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) =>
        setProducts(data.filter((product) => product.category.toLowerCase() === category))
      );
  }, [category]);

  return (
    <div className="container my-5">
      <h2>Products in {category}</h2>
      {products.length ? (
        products.map((product) => (
          <div key={product.id} className="card my-3">
            <img src={product.thumbnail} alt={product.title} className="card-img-top" />
            <div className="card-body">
              <h5>{product.title}</h5>
              <p>{product.description}</p>
              <p>{product.price} DH</p>
              <button onClick={() => addToCart(product)} className="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  );
};

export default ProductList;
