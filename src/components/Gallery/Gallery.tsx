import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { ImgurImage } from '../../types';
import { fetchGallery } from '../../actions';
import GalleryItem from '../GalleryItem/GalleryItem';
import { ThunkDispatch } from 'redux-thunk';
import { ImgurAction } from '../../actions/imgurActions';

const Gallery: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, ImgurAction>>();
  const { images, isLoading, error } = useSelector(
    (state: RootState) => state.imgur,
  );

  useEffect(() => {
    dispatch(fetchGallery(0));
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="gallery">
      {images.map((image: ImgurImage) => (
        <GalleryItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Gallery;
