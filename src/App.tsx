import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGallery } from './actions/imgurActions';
import { RootState, AppDispatch } from './store';
import './App.css';
import ImageList from './components/ImageList/ImageList';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ImgurAction } from './actions';

const App =() => {
  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, ImgurAction>>();
  const images = useSelector((state: RootState) => state.imgur.images);
  const isLoading = useSelector((state: RootState) => state.imgur.isLoading);
  const error = useSelector((state: RootState) => state.imgur.error);

  useEffect(() => {
    dispatch(fetchGallery(0));
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Imgur Gallery Browser</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {images.length > 0 && <ImageList images={images} />}
    </div>
  );
}

export default App;
