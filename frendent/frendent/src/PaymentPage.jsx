import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PaymentPage() {

  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("buyNow"));
    setItem(data);
  }, []);

  if (!item) {
    return <h2 style={{ padding: "20px" }}>No product selected ❗</h2>;
  }

  const handlePayment = async () => {
    try {
      // 1. Backend se order create karo
      const res = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount: item.price })
      });

      const order = await res.json();

      // 2. Razorpay options
      const options = {
        key: "rzp_live_S8RMHt15gvcs1p", // 🔑 yaha apni Razorpay key dalna
        amount: order.amount,
        currency: "INR",
        name: "My Shop",
        description: "Product Payment",
        order_id: order.id,

        handler: function (response) {
          alert("Payment Successful ✅");

          localStorage.removeItem("buyNow");
          navigate("/");
        },

        prefill: {
          name: "Nitin Kumar",
          email: "test@gmail.com",
          contact: "9999999999"
        },

        theme: {
          color: "#28a745"
        }
      };

      // 3. Razorpay open
      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.log(err);
      alert("Payment Failed ❌");
    }
  };

  return (
    <div style={{ padding: "30px" }}>

      <h2>Payment Page 💳</h2>

      <div style={{
        border: "1px solid #ccc",
        padding: "20px",
        width: "300px",
        borderRadius: "10px"
      }}>

        <img
          src={`http://localhost:5000/uploads/${item.profile}`}
          alt="product"
          width="100%"
        />

        <h3>{item.name}</h3>

        <p><b>Price:</b> ₹{item.price}</p>
        <p><b>Size:</b> {item.selectedSize}</p>
        <p><b>Color:</b> {item.selectedColor}</p>

        <br />

        <button
          onClick={handlePayment}
          style={{
            width: "100%",
            padding: "10px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Pay Now
        </button>

      </div>

    </div>
  );
}

export default PaymentPage;