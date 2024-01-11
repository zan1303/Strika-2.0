import React from 'react';
import './Gallery.styles.css';

const importAll = (r) => {
  return r.keys().map(r);
};


const images = importAll(
  require.context("../../Pictures", false, /\.(jpg|jpeg|png|gif)$/)
);


function Gallery() {
  return (
    <div className="Gallery" >
      {images.map((image, index) => (
          <div key={index} className="Gallery-item">
            <img src={image} alt={`img ${index}`}/>
          </div>
      ))}
    </div>
  );
}

export default Gallery;
