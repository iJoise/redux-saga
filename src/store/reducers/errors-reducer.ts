import { ErrorsNewsAction } from '../types';
import { ErrorsActions } from '../enums';

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
    case ErrorsActions.SET_LATEST_NEWS_ERROR:
    case ErrorsActions.SET_POPULAR_NEWS_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
