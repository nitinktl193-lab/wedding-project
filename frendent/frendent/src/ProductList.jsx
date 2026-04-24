import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => {
        console.log("DATA 👉", res.data); // DEBUG
        setProducts(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="row">
      {products.map((item) => (
        <div
          key={item._id}
          className="card"
          onClick={() => navigate(`/product/${item._id}`)} // 🔥 FIXED
        >
          <img src={item.image} alt={item.name} width="100%" />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;