import { ErrorsNewsAction } from '../types';
import { Errors } from '../enums';

interface State {
  latestNewsError: string;
  popularNewsError: string;
}

const initialState: State = {
  latestNewsError: '',
  popularNewsError: '',
};

export const newsErrors = (state: State = initialState, action: ErrorsNewsAction): State => {
  switch (action.type) {
    case Errors.SET_LATEST_NEWS_ERROR:
    case Errors.SET_POPULAR_NEWS_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
