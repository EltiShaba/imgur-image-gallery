import { combineReducers } from 'redux';
import imgurReducer from './imgurReducer';

const rootReducer = combineReducers({
  imgur: imgurReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;