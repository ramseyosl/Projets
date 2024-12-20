import React from "react";
import { Link } from "react-router-dom";
import "./CategorySelector.css"; // Assurez-vous de créer ce fichier CSS


const CategorySelector = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Choose a Category</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card category-card">
            <div className="card-body text-center">
              <span className="category-icon">💪</span>
              <h5 className="card-title">Fitness</h5>
              <p className="card-text">Explore fitness equipment and accessories.</p>
              <Link to="/products/fitness" className="btn btn-primary">
                View Fitness
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card category-card">
            <div className="card-body text-center">
              <span className="category-icon">👟</span>
              <h5 className="card-title">Sportswear</h5>
              <p className="card-text">Find the best sportswear for all activities.</p>
              <Link to="/products/sportswear" className="btn btn-primary">
                View Sportswear
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card category-card">
            <div className="card-body text-center">
              <span className="category-icon">🎒</span>
              <h5 className="card-title">Accessories</h5>
              <p className="card-text">Shop for essential sports accessories.</p>
              <Link to="/products/accessories" className="btn btn-primary">
                View Accessories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
