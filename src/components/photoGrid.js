import React from 'react';
import photos from '../data/data';
import PhotoCell from './photoCell';
import './photoGrid.css';

const PhotoGrid = () => {
  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <PhotoCell key={photo._id} image={photo.image} />
      ))}
    </div>
  );
};

export default PhotoGrid;
