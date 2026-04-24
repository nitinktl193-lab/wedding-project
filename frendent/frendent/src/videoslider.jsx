import React from "react";
import "./Video.css";
import { FaArrowDown } from "react-icons/fa";

function VideoSlider() {
  return (
    <div className="hero">

     <img
        src={require("./image/num5.avif")}
        alt="Wedding Collection"
        className="hero-image"
      />

    
      <div className="overlay"></div>


      <div className="hero-content">
        <h1>Find Your Perfect Look</h1>
        <p>Upgrade your style with our latest wedding collection</p>

        <button className="hero-btn">
          BUTTON NOW <FaArrowDown />
        </button>
      </div>

    </div>
  );
}

export default VideoSlider;