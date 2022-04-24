import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { PATH } from '../enums';
import { useDispatch } from 'react-redux';
import { NewsActions } from '../store/enums';

export const useRouterFetch = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    switch (location.pathname) {
      case PATH.LATEST_NEWS:
        dispatch({ type: NewsActions.GET_LATEST_NEWS });
        break;
      case PATH.POPULAR_NEWS:
        dispatch({ type: NewsActions.GET_POPULAR_NEWS });
        break;
    }
  }, [location.pathname, dispatch]);
};
