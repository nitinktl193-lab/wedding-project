import { useEffect, useState } from "react";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  
  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            height:"500px",
          
          }}
        >
          <img src={item.image} width="100" alt="" />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>Size: {item.size}</p>
          <p>Color: {item.color}</p>
          <p>{item.payment === "COD" ? "Cash on Delivery 🚚" : "Online/CART 🛒"}</p>

          {/* 🔥 REMOVE BUTTON */}
          <button
            onClick={() => removeItem(index)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer"
            }}
          >
            Remove ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;