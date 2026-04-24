import React from "react";
import "./Header.css";

function BannerSection() {
  return (
    <div data-aos="flip-right">
    <div className="banner-container">

      {/* LEFT BANNER */}
      <div className="banner">
        <img
          src={require("./image/Feature Banner video call_M_31-07-2025-11-55.webp")}
          alt="banner"
        />
        <div className="banner-text">
          <h2>Your personal stylist at your service!</h2>
          <p>Consult our expert stylist to curate a look for your D day</p>
          <button>BOOK A VIDEO CALL</button>
        </div>
      </div>

      {/* RIGHT BANNER */}
      <div className="banner">
        <img
          src={require("./image/Feature Banner wedding closet_M_31-07-2025-11-55.webp")}
          alt="banner"
        />
        <div className="banner-text">
          <h2>Your Dream Wedding Wardrobe</h2>
          <p>Design your wedding wardrobe with us</p>
          <button>CURATE YOUR LOOK</button>
        </div>
      </div>

    </div>
    </div>
  );
}

export default BannerSection;