import React from 'react';
import { ImgurImage } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import './ImageList.css';

interface Props {
  images: ImgurImage[];
}

const ImageList = ({ images }: Props) => {
  return (
    <div className="ImageList">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;