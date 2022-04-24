import { NewsActions } from '../types';
import { News } from '../enums';
import { NewsData } from '../../types';

interface State {
  latestNews: NewsData[];
  popularNews: NewsData[];
}

const initialState: State = {
  latestNews: [],
  popularNews: [],
};

export const newsReducer = (state: State = initialState, action: NewsActions): State => {
  switch (action.type) {
    case News.SET_LATEST_NEWS:
      return {
        ...state,
        latestNews: [...state.latestNews, ...action.payload]
      }
      case News.SET_POPULAR_NEWS:
      return {
        ...state,
        popularNews: [...state.popularNews, ...action.payload]
      }
    default:
      return state;
  }
};
