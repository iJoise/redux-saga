import { takeEvery, put, call, all, fork } from 'redux-saga/effects';
import { Api } from '../../api';
import { NewsRoot } from '../../types';
import {
  setErrorLatestNews,
  setErrorPopularNews,
  setLatestNews,
  setPopularNews,
} from '../actions';
import { NewsActions } from '../enums';

export function* handleLatestNews() {
  try {
    const { hits }: NewsRoot = yield call(Api.getLatestNews, 'react');
    yield put(setLatestNews(hits));
  } catch (err) {
    yield put(setErrorLatestNews('Error fetching latest news'));
  }
}

export function* handlePopularNews() {
  try {
    const { hits }: NewsRoot = yield call(Api.getPopularNews);
    yield put(setPopularNews(hits));
  } catch (err) {
    yield put(setErrorPopularNews('Error fetching popular news'));
  }
}

export function* watchLatestSaga() {
  yield takeEvery(NewsActions.GET_LATEST_NEWS, handleLatestNews);
}

export function* watchPopularSaga() {
  yield takeEvery(NewsActions.GET_POPULAR_NEWS, handlePopularNews);
}

export function* rootSaga() {
  yield all([
    fork(watchLatestSaga),
    fork(watchPopularSaga),
  ]);
}
