import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


debugger
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

 
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));


    window.dispatchEvent(new Event("cartUpdated"));

    alert("Added to cart ✅");
  };

  return (
    <div style={{ padding: 20 }}>
     <img
  src={`http://localhost:5000/uploads/${item.profile}`}
  alt=""
/>
      <h2>{product.name}</h2>
      <h3>₹{product.price}</h3>
     
      <p>⭐ {product.rating}</p>

      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
}

export default ProductPage;