import React from 'react';
import { ImgurImage } from '../../types';

type GalleryItemProps = {
  image: ImgurImage;
};

const GalleryItem: React.FC<GalleryItemProps> = ({ image }) => {
  return (
    <div className="gallery-item">
      <img src={image.link} alt={image.title} />
      <div className="gallery-item-info">
        <h3>{image.title}</h3>
        {image.description && <p>{image.description}</p>}
        <p>Type: {image.type}</p>
      </div>
    </div>
  );
};

export default GalleryItem;