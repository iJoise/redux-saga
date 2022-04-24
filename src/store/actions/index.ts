import { Errors, News } from '../enums';
import { NewsData } from '../../types';

// News
export const setLatestNews = (payload: NewsData[]) => ({
  type: News.SET_LATEST_NEWS,
  payload,
} as const);

export const setPopularNews = (payload: NewsData[]) => ({
  type: News.SET_POPULAR_NEWS,
  payload,
} as const);

export const getNews = () => ({ type: News.GET_NEWS } as const);

// Errors news
export const setErrorLatestNews = (latestNewsError: string) => ({
  type: Errors.SET_LATEST_NEWS_ERROR,
  payload: { latestNewsError },
} as const);

export const setErrorPopularNews = (popularNewsError: string) => ({
  type: Errors.SET_POPULAR_NEWS_ERROR,
  payload: { popularNewsError },
} as const);

