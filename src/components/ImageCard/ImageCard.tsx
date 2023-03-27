import React from 'react';
import { ImgurImage } from '../../types';
import './ImageCard.css';

interface Props {
  image: ImgurImage;
}

const ImageCard = ({ image }: Props) => {
  return (
    <div className="ImageCard">
      <img src={image.link} alt={image.title} width="400" />
      <div className="ImageCard-details">
        <h2>{image.title}</h2>
        <p>{image.description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
