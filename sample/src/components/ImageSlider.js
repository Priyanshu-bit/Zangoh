import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
  const images = [
    { url: "dog1.png", alt: "Dog 1" },
    { url: "dog2.png", alt: "Dog 2" },
    // Add more image URLs and alt text as needed
  ];

  return (
    <Carousel showStatus={false} showThumbs={false} autoPlay infiniteLoop>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
