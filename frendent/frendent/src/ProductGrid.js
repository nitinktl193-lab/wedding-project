import React from "react";
import { useNavigate } from "react-router-dom";

function ProductGrid({ products = [], showNavigate = true }) {
  const navigate = useNavigate();

  return (
    <div className="product-grid">
      {products.map((item, index) => {
        const id = item.id || item._id;
        const image = item.image || item.img;
        const name = item.name;
        const price = item.price;

        return (
          <div
            className="card"
            key={id || index}
            onClick={() => showNavigate && navigate(`/product/${id}`)}
          >
            <div className="image-wrapper">
              <img src={image} alt={name} />

              <div className="overlay">
                <h3>{name}</h3>
                <p>₹{price}</p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`${name} Added to Cart 🛒`);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductGrid;