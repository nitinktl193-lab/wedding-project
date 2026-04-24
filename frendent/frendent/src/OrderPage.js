import { useLocation } from "react-router-dom";

function OrderPage() {
  const location = useLocation();

  let orderData = location.state;

  // 🔥 fallback (refresh safe)
  if (!orderData) {
    orderData = JSON.parse(localStorage.getItem("buyNow"));
  }

  // ❌ अगर कुछ भी नहीं मिला
  if (!orderData || !orderData.product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        No Order Found ❌
      </h2>
    );
  }

  const { product } = orderData;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Order Page</h2>

      {/* 🔥 SAFE ACCESS */}
      <img src={product?.image} width="150" alt="" />

      <h3>{product?.name}</h3>
      <p>₹{product?.price}</p>

      <button>Cash on Delivery</button>
    </div>
  );
}

export default OrderPage;