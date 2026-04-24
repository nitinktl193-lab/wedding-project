import React, { useState } from "react";
import "./Header.css";



function Nitincard() {

  const data = [
    { category: "men", img: men1 },
    { category: "men", img: men2 },
    { category: "men", img: men3 },

    { category: "women", img: women1 },
    { category: "women", img: women2 },
    { category: "women", img: women3 },

    { category: "kids", img: kid1 },
    { category: "kids", img: kid2 },
    { category: "kids", img: kid3 }
  ];

  const [category, setCategory] = useState("men");

  const filteredImages = data.filter((item) => item.category === category);

  return (
    <div className="Nitincard">

      <h2>Shopping Collection</h2>

      <div className="buttons">
        <button onClick={() => setCategory("men")}>Men</button>
        <button onClick={() => setCategory("women")}>Women</button>
        <button onClick={() => setCategory("kids")}>Kids</button>
      </div>

      <div className="image-row">
        {filteredImages.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt="product" />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Nitincard;