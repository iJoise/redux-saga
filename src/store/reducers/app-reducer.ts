import { ErrorsNewsAction } from '../types';
import { AppActions, ErrorsActions } from '../enums';

interface State {
  latestNewsError: string;
  popularNewsError: string;
  isLoadingData: boolean
}

const initialState: State = {
  latestNewsError: '',
  popularNewsError: '',
  isLoadingData: false,
};

export const appReducer = (state: State = initialState, action: ErrorsNewsAction): State => {
  switch (action.type) {
    case ErrorsActions.SET_LATEST_NEWS_ERROR:
    case ErrorsActions.SET_POPULAR_NEWS_ERROR:
    case AppActions.SET_LOADING_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
