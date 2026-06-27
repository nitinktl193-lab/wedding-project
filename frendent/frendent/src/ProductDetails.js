import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductDetails.css";

const API_URL = "https://wedding-project-4-5rqj.onrender.com";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error(err);
        alert("Invalid Product ❌");
      });
  }, [id]);

  if (!product) return <h2 className="loading">Loading...</h2>;

  const getImageUrl = () => {
    const imageName = product.image || product.profile;

    if (!imageName) return "";

    if (imageName.startsWith("http")) {
      return imageName;
    }

    return `${API_URL}/uploads/${imageName}`;
  };

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleCart = () => {
    if (!size || !color) {
      alert("Select size & color");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      ...product,
      size,
      color,
      qty: 1,
      payment: "CART",
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    showMessage("✅ Added to Cart successfully!");
  };

  const handleOnline = () => {
    if (!size || !color) {
      alert("Select size & color");
      return;
    }

    const buyNowProduct = {
      ...product,
      selectedSize: size,
      selectedColor: color,
    };

    localStorage.setItem("buyNow", JSON.stringify(buyNowProduct));
    showMessage("💳 Payment process me hai... Please wait");

    window.location.href = "/payment";
  };

  const handleCOD = () => {
    if (!size || !color) {
      alert("Select size & color");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      ...product,
      size,
      color,
      qty: 1,
      payment: "COD",
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    showMessage("🚚 COD Product added to Cart");
  };

  return (
    <div className="product-page">
      {message && <div className="top-msg">{message}</div>}

      <div className="product-left">
        <div className="image-wrapper">
          <img src={getImageUrl()} alt={product.name} />
        </div>
      </div>

      <div className="product-right">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">₹{product.price}</p>

        <p className="product-desc">
          Premium wedding outfit designed for style, comfort, and elegance.
        </p>

        <div className="box">
          <h4>Select Size</h4>
          <div className="options">
            {["S", "M", "L", "XL"].map((s) => (
              <button
                key={s}
                className={size === s ? "active" : ""}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="box">
          <h4>Select Color</h4>
          <div className="options">
            {["Red", "Black", "Gold", "Pink"].map((c) => (
              <button
                key={c}
                className={color === c ? "active" : ""}
                onClick={() => setColor(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="btn-group">
          <button className="cart-btn" onClick={handleCart}>
            Add to Cart 🛒
          </button>

          <button className="online-btn" onClick={handleOnline}>
            Pay Online 💳
          </button>

          <button className="cod-btn" onClick={handleCOD}>
            Cash on Delivery 🚚
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;