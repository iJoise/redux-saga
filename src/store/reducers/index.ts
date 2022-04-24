import { combineReducers } from 'redux';
import { newsReducer } from './news-reducer';
import { appReducer } from './app-reducer';

export const rootReducer = combineReducers({
  news: newsReducer,
  app: appReducer,
});
export type RootStateType = ReturnType<typeof rootReducer>
