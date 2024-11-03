import React from 'react';
import './ImageSlider.css';

function ImageSlider({ images, onSelect }) {
  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={`${process.env.PUBLIC_URL}${image}`} // `PUBLIC_URL` stellt sicher, dass Bilder aus `public` geladen werden
          alt={`Coin ${index + 1}`}
          onClick={() => onSelect(image)}
          className="coin-image"
        />
      ))}
    </div>
  );
}

export default ImageSlider;

