import React, { useState } from 'react';
import './ImageSlider.css'

const ImageSwitcher = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  const toggleImage = () => {
    setShowSecondImage(true);
  };

  return (
    <div className="image-switcher">
      <img
        src="dog1.png"
        alt="Image 1"
        style={{
          width: '100%',
          height: '745px',
          objectFit: 'cover',
          display: showSecondImage ? 'none' : 'block',
          cursor: 'pointer',
        }}
        onClick={toggleImage}
      />
      <img
        src="dog2.png"
        alt="Image 2"
        style={{
          width: '100%',
          height: '745px',
          objectFit: 'cover',
       
          display: showSecondImage ? 'block' : 'none',
        }}
      />
    </div>
  );
};

export default ImageSwitcher;
