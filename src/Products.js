import React from "react";

const Products = ({ data }) => {
  return (
    <div className="row">
      {data.map((item) => (
        <div className="card" style={{ width: "18rem" }}>
          <img src={item.recipe.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.recipe.label}</h5>
            <p className="card-text">{item.recipe.calories} cal</p>
            <a href="#" className="btn btn-primary">
              Buy
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
