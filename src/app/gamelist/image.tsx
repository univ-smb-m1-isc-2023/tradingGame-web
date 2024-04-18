"use client";

import React from "react";

const ImageBackTop: React.FC = () => {


  const imgStyle: React.CSSProperties = {
    height: "300px", // Set the height of the image to 10% of its containing element's height
    width: "100%", // Set the width of the image to 100% of its containing element's width
    objectFit: "cover" // Ensure the image covers the entire container while maintaining its aspect ratio
  };
  
  return (
    <div>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <img src="https://fxmedia.s3.amazonaws.com/articles/forex-trading-account-1.jpg" style={imgStyle} alt="Background" />
      </a>
    </div>
  );
  };

export default ImageBackTop;
