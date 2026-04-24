import React from "react";
import { useNavigate } from "react-router-dom";
import "./Circle.css"; 

function CircleSteps() {
  const navigate = useNavigate();

  return (
    <div className="main-section" style={{background:'rgba(245, 231, 233, 0.993)'}}>

      <h1 className="heading" style={{background:'rgba(245, 231, 233, 0.993)'}}>HOW IT WORKS</h1>

      <div className="circle-container">

        <div className="step" onClick={() => navigate("/choose")}>
          <div className="circle"><span>1</span></div>
          <p>Choose Product</p>
        </div>

        <div className="step" onClick={() => navigate("/")}>
          <div className="circle"><span>2</span></div>
          <p>Wel come</p>
          
        </div>

          <div className="step" onClick={() => navigate("/cart")}>
          <div className="circle"><span>3</span></div>
          <p>Add to Cart</p>
        </div>


      </div>

    </div>
  );
}

export default CircleSteps;