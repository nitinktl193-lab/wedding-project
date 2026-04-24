import React from "react";
import "./box.css";

function Box() {
  return (
    <div className="box-1">

      {/* LEFT IMAGE */}
      <div className="box image-box">
        <img
          src={require("./image/Feature Banner video call_M_31-07-2025-11-55.webp")}
          alt="left"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="box text-box">
        <h2>Wedding Collection</h2>
        <p>
          Explore our latest premium wedding outfits collection.
          Designed with love, tradition and modern fashion.
        </p>
        <button>Shop Now</button>
      </div>

    </div>
  );
}

export default Box;