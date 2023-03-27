import { applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import imgurReducer from './reducers/imgurReducer';
import {configureStore} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  imgur: imgurReducer,
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export default store;
