import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "./Product.css";

function Product({ category }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then((res) => {
        const filtered = res.data.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === category
        );
        setProducts(filtered);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="product-grid">

      {products.length === 0 && (
        <h2 style={{ textAlign: "center", width: "100%" }}>
       
        </h2>
      )}

      {products.map((item) => (
        <div
          className="card"
          key={item._id || item.id}

          onClick={() => navigate(`/product/${item._id}`)}
        >
          <img src={item.image} alt={item.title || item.name} />

          <div className="card-overlay">
            <h3>{item.title || item.name}</h3>
            <p>Price{item.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;