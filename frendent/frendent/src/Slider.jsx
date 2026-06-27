import React, { useRef } from "react";
import "./Slider.css";

function Slider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 300;
  };

  return (
    <div className="slider-1-wrapper">
      <button
        className="arrow leftt"
        onClick={scrollLeft}
        aria-label="Scroll left"
        style={{ background: "red", height: "30px" }}
      ></button>

      <div className="slider-1-container" ref={sliderRef}>
        <div className="cardn">
          <img
            src={require("./image/HP_Manyavar_Whats_your_vibe_D_01-03-2026-08-19.webp")}
            alt="Sherwani"
            style={{ border: "8px solid rgb(78, 49, 11)" }}
          />
          <div
            className="title"
            style={{ marginLeft: "60px", fontSize: "1.5vw", background: "pink" }}
          >
            SHERWANI
          </div>
        </div>

        <div className="cardn">
          <img
            src={require("./image/HP_Manyavar_Whats_your_vibe_IndoWestern_D_01-03-2026-08-19.webp")}
            alt="Indo Western"
            style={{ border: "8px solid rgb(78, 49, 11)" }}
          />
          <div
            className="title"
            style={{ marginLeft: "40px", fontSize: "1.5vw", background: "pink" }}
          >
            INDO WESTERN
          </div>
        </div>

        <div className="cardn">
          <img
            src={require("./image/HP_Mohey_Whats_your_vibe_D_01-03-2026-08-19.webp")}
            alt="Lehenga"
            style={{ border: "8px solid rgb(78, 49, 11)" }}
          />
          <div
            className="title"
            style={{ marginLeft: "60px", fontSize: "1.5vw", background: "pink" }}
          >
            LEHENGA
          </div>
        </div>

        <div className="cardn">
          <img
            src={require("./image/HP_Manyavar_Whats_your_vibe_Jodhpuri_D_02-03-2026-08-11.webp")}
            alt="Jodhpuri"
            style={{ border: "8px solid rgb(78, 49, 11)" }}
          />
          <div
            className="title"
            style={{ marginLeft: "60px", fontSize: "1.5vw", background: "pink" }}
          >
            JODHPURI
          </div>
        </div>

        <div className="cardn">
          <img
            src={require("./image/HP_Manyavar_Whats_your_vibe_KurtaJacket_D_28-02-2026-09-39.webp")}
            alt="Kurta Jacket"
            style={{ border: "8px solid rgb(78, 49, 11)" }}
          />
          <div
            className="title"
            style={{ marginLeft: "60px", fontSize: "1.5vw", background: "pink" }}
          >
            KURTA SET
          </div>
        </div>

        <div className="cardn">
          <img
            src={require("./image/HP_Manyavar_Whats_your_vibe_KurtaSet_D_28-02-2026-09-40.webp")}
            alt="Kurta Set"
            style={{ border: "8px solid rgb(78, 49, 11)" }}
          />
          <div
            className="title"
            style={{ marginLeft: "60px", fontSize: "1.5vw", background: "pink" }}
          >
            KURTA SET
          </div>
        </div>

        <div className="cardn">
          <img
            src={require("./image/HP_Whats_your_vibe_ShortKurta_D_02-03-2026-09-25.webp")}
            alt="Short Kurta"
            style={{ border: "8px solid rgb(78, 49, 11)" }}
          />
          <div
            className="title"
            style={{ marginLeft: "60px", fontSize: "1.5vw", background: "pink" }}
          >
            SHORT KURTA
          </div>
        </div>
      </div>

      <button
        className="arrow right"
        onClick={scrollRight}
        aria-label="Scroll right"
        style={{
          background: "red",
          borderRadius: "0px 100px 0px 100px",
          height: "30px",
          width: "2%",
        }}
      ></button>

      <img
        src={require("./image/wedding-closet-gif.gif")}
        alt="Wedding closet"
        style={{ marginTop: "70px", width: "5%" }}
      />

      <h1 style={{ marginTop: "0px", fontSize: "2.8vw" }}>
        IN THE SPOTLIGHT
      </h1>
    </div>
  );
}

export default Slider;