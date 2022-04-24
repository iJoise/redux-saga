import { NewsActionsType } from '../types';
import { NewsActions } from '../enums';
import { NewsData } from '../../types';

interface State {
  latestNews: NewsData[];
  popularNews: NewsData[];
}

const initialState: State = {
  latestNews: [],
  popularNews: [],
};

export const newsReducer = (state: State = initialState, action: NewsActionsType): State => {
  switch (action.type) {
    case NewsActions.SET_LATEST_NEWS:
    case NewsActions.SET_POPULAR_NEWS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
