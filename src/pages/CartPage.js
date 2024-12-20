import React from "react";
import { useAppContext } from "../components/AppContext";
import "./CartPage.css";



const CartPage = () => {
  const { cart, removeFromCart } = useAppContext();

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Your Cart</h1>
      {cart.length > 0 ? (
        <div className="row">
          {cart.map((item, index) => (
            <div className="col-md-6 col-lg-4 mb-3" key={index}>
              <div className="card shadow-sm">
                <img
                  src={item.thumbnail}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Price: {item.price} DH</p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-info text-center">
          Your cart is empty. Start shopping now!
        </div>
      )}
    </div>
  );
};

export default CartPage;
