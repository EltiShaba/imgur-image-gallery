import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { ImgurImage, ImgurGalleryResponse } from "../types";
import { getGallery } from "../utils/api";

export const FETCH_GALLERY_REQUEST = "FETCH_GALLERY_REQUEST";
export const FETCH_GALLERY_SUCCESS = "FETCH_GALLERY_SUCCESS";
export const FETCH_GALLERY_FAILURE = "FETCH_GALLERY_FAILURE";

interface FetchGalleryRequestAction {
  type: typeof FETCH_GALLERY_REQUEST;
}

interface FetchGallerySuccessAction {
  type: typeof FETCH_GALLERY_SUCCESS;
  payload: {
    data: ImgurImage[];
    page: number;
    hasNextPage: boolean;
  };
}

interface FetchGalleryFailureAction {
  type: typeof FETCH_GALLERY_FAILURE;
  error: string;
}

export type ImgurAction =
  | FetchGalleryRequestAction
  | FetchGallerySuccessAction
  | FetchGalleryFailureAction;

export const fetchGallery =
  (page: number): ThunkAction<void, RootState, unknown, ImgurAction> =>
  async (dispatch) => {
    dispatch({ type: FETCH_GALLERY_REQUEST });

    try {
      const response = await getGallery(page);
      const payload: ImgurGalleryResponse = {
        data: response.data,
        page,
        hasNextPage: response.hasNextPage,
      };
      dispatch({ type: FETCH_GALLERY_SUCCESS, payload });
    } catch (error: any) {
      dispatch({ type: FETCH_GALLERY_FAILURE, error: error.message });
    }
  };
