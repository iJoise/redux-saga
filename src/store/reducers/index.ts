import { combineReducers } from 'redux';
import { newsReducer } from './news-reducer';
import { newsErrors } from './errors-reducer';

export const rootReducer = combineReducers({
  news: newsReducer,
  errors: newsErrors,
});
export type RootStateType = ReturnType<typeof rootReducer>
