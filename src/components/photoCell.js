import React from 'react';
import './photoCell.css';

const PhotoCell = ({ _id, image }) => {
  return (
    <div>
      <img className="BVflyer" alt="Buen Viaje Flyer" src={image}></img>
    </div>
  );
};

export default PhotoCell;
