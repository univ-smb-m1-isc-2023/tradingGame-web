import React from "react";

const ImageBackTop: React.FC = () => {


  const imgStyle: React.CSSProperties = {
    height: "20%", // Set the height of the image to 20%
  };

  return (
    <div >
      <a href="https://fxmedia.s3.amazonaws.com/articles/forex-trading-account-1.jpg" target="_blank">
        <img src="https://fxmedia.s3.amazonaws.com/articles/forex-trading-account-1.jpg" style={imgStyle} alt="Background" />
      </a>
    </div>
  );
};

export default ImageBackTop;
