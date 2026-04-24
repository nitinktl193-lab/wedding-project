import React from "react";

import "./Header.css";

function Features() {
  return (
      <div className="features" style={{background:'rgba(245, 231, 233, 0.993)'}}>

      <div className="feature-box">
     <img
  src={require("./image/footer-made-in-india-icon.svg").default}
  alt="quality"
  className="icon-img"style={{width:'30%'}}
/>
        <p>MADE IN INDIA</p>
      </div>

      <div className="feature-box">
<img
  src={require("./image/footer-quality-icon.svg").default}
  alt="quality"
  className="icon-img"
/>
        <p>ASSURED QUALITY</p>
      </div>

      <div className="feature-box">
      <img
  src={require("./image/footer-secure-payment-icon.svg").default}
  alt="payment"
  className="icon-img"
/>
        <p>SECURE PAYMENTS</p>
      </div>

      <div className="feature-box">
               <img
  src={require("./image/footer-customer-icon.svg").default}
  alt="icon"
  className="icon-img"
/>
        <p>EMPOWERING WEAVERS</p>
      </div>

    </div>
  );
}

export default Features;