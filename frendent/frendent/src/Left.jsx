import React from "react";
import "./Left.css";

function Left() {
  return (
 
    <div className="cardu">
     
      <div className="cardu-row">

       
        <div className="cardu-img">
          <img
            src={require("./image/CPSKJ152_302-Cream_101.webp")}
            alt="product"
          />
        </div>

       
        <div className="cardu-content">
          <h5 className="cardu-title"style={{color:'black',fontSize:'2.5vw'}}>WEL <span style={{color:'red',fontSize:'2.5vw'}}>COME</span> </h5>
          <p className="cardu-text" style={{fontSize:'1.1vw'}}>
           Discover timeless elegance with our exclusive wedding collection, 
           designed to make every moment unforgettable. From intricately crafted sherwanis to stylish suits and traditional ensembles, each piece reflects luxury, comfort, and modern trends. Whether you're the groom, best man, or guest, find the perfect outfit that enhances your personality and celebrates the joy of every wedding occasion.
          </p>
        </div>

      </div>
    </div>
 
  );
}

export default Left;