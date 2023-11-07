import React from "react";
import ImageSlider from "./ImageSlider";

const Content = () => {
  return (
    <div className="content">
      <div className="half">
        <h1>Welcome to My Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
      <div className="half">
        <ImageSlider />
      </div>
    </div>
  );
};

export default Content;
