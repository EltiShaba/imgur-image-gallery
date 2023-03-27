import {
  FETCH_GALLERY_REQUEST,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_FAILURE,
  ImgurAction,
} from "../actions/imgurActions";

import {ImgurState} from '../types';

const initialState: ImgurState = {
  images: [],
  isLoading: false,
  error: "",
};

const imgurReducer = (
  state = initialState,
  action: ImgurAction
): ImgurState => {
  switch (action.type) {
    case FETCH_GALLERY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_GALLERY_SUCCESS:
      const { data, page, hasNextPage } = action.payload;
      return {
        ...state,
        images: page === 0 ? data : [...state.images, ...data],
        isLoading: false,
        error: "",
        page,
        hasNextPage,
      };
    case FETCH_GALLERY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default imgurReducer;
