import { ErrorsActions, NewsActions } from '../enums';
import { NewsData } from '../../types';

// News
export const setLatestNews = (latestNews: NewsData[]) => ({
  type: NewsActions.SET_LATEST_NEWS,
  payload: { latestNews },
} as const);

export const setPopularNews = (popularNews: NewsData[]) => ({
  type: NewsActions.SET_POPULAR_NEWS,
  payload: { popularNews },
} as const);

// Errors news
export const setErrorLatestNews = (latestNewsError: string) => ({
  type: ErrorsActions.SET_LATEST_NEWS_ERROR,
  payload: { latestNewsError },
} as const);

export const setErrorPopularNews = (popularNewsError: string) => ({
  type: ErrorsActions.SET_POPULAR_NEWS_ERROR,
  payload: { popularNewsError },
} as const);

