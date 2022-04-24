import { takeEvery, put, call, fork } from 'redux-saga/effects';
import { News } from '../enums';
import { getLatestNews, getPopularNews } from '../../api';
import { NewsRoot } from '../../types';
import { setErrorLatestNews, setErrorPopularNews, setLatestNews, setPopularNews } from '../actions';

export function* handleLatestNews() {
  try {
    const { hits }: NewsRoot = yield call(getLatestNews, 'react');
    yield put(setLatestNews(hits));
  } catch (err) {
    yield put(setErrorLatestNews('Error fetching latest news'));
  }
}

export function* handlePopularNews() {
  try {
    const { hits }: NewsRoot = yield call(getPopularNews);
    yield put(setPopularNews(hits));
  } catch (err) {
    yield put(setErrorPopularNews('Error fetching popular news'));
  }
}

export function* handleNews() {
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
}

export function* watchClickSaga() {
  yield takeEvery(News.GET_NEWS, handleNews);
}

export function* rootSaga() {
  yield watchClickSaga();
}
