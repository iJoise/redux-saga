import { useDispatch } from 'react-redux';
import { News } from '../../components/News';
import { useAppSelector } from '../../hook/useAppSelector';
import React from 'react';

export const LatestNews = () => {
  const { latestNews } = useAppSelector(store => store.news);
  const { latestNewsError } = useAppSelector(store => store.errors);
  const dispatch = useDispatch();

  return (
    <div>
      <News news={latestNews} error={latestNewsError} title='Latest News' />
    </div>
  );
};
