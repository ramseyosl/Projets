import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const categories = [
    { name: "Fitness Equipment", emoji: "💪" },
    { name: "Sportswear", emoji: "👕" },
    { name: "Accessories", emoji: "🎒" },
    { name: "Outdoor", emoji: "🏞️" },
    { name: "Team Sports", emoji: "⚽" },
  ];

  return (
    <div className="text-center">
      <h1 className="mb-4">Choose a Category</h1>
      <div className="list-group">
        {categories.map((category) => (
          <Link
            to={`/products/${category.name.toLowerCase()}`}
            key={category.name}
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <span className="me-3">{category.emoji}</span>
            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
