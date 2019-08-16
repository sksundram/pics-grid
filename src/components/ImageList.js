import React from 'react';

const ImageList = ({ images }) => (
  <div>
    {images.map(image => (
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        key={image.id}
      />
    ))}
  </div>
);

export default ImageList;
