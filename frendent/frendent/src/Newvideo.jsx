import React from 'react';
import './Newvideo.css'

function Newvideo() {
  return (
    <div style={{ 
        // white background
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  
    }}>
      
      <img
        src={require("./image/new_compressed_groom_11-04-2023-12-26.gif")}
        alt="groom"
        style={{
          marginTop: "70px",
          width: "100%",        
          maxWidth: "400px",   
          borderRadius: "800px",
         
        }}
      />

      <h1 style={{
        marginTop: "40px",
        fontSize: "clamp(18px, 3vw, 40px)"   // responsive font
      }}>
      
      </h1>

    </div>
  );
}

export default Newvideo;