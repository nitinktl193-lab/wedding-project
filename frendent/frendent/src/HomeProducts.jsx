import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

const API_URL = "https://wedding-project-4-5rqj.onrender.com";

function HomeProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const men = products.filter((p) => p.category === "men");
  const women = products.filter((p) => p.category === "women");
  const kids = products.filter((p) => p.category === "kids");

  const addToCart = (e, item) => {
    e.stopPropagation();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exist = cart.find((p) => p._id === item._id);

    if (!exist) {
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart ✅");
    } else {
      alert("Already in cart ⚠️");
    }
  };

  const getImageUrl = (item) => {
    if (!item.image) return "";
    if (item.image.startsWith("http")) return item.image;
    return `${API_URL}/uploads/${item.image}`;
  };

  const renderCards = (data) =>
    data.slice(0, 15).map((item) => (
      <div
        className="card"
        key={item._id}
        onClick={() => navigate(`/product/${item._id}`)}
      >
        <img src={getImageUrl(item)} alt={item.name} />

        <div className="overlay">
          <h3>{item.title || item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={(e) => addToCart(e, item)}>Add To Cart</button>
        </div>
      </div>
    ));

  return (
    <div className="home-products">
      <h2 className="section-title"></h2>
      <div className="row">{renderCards(men)}</div>

      <h2 className="section-title"></h2>
      <div className="row">{renderCards(women)}</div>

      <h2 className="section-title"></h2>
      <div className="row">{renderCards(kids)}</div>
    </div>
  );
}

export default HomeProducts;