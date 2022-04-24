import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { LatestNews } from './pages/LatestNews';
import { PopularNews } from './pages/PopularNews';
import { PATH } from './enums';

export const App: FC = () => (
  <Routes>
    <Route path={PATH.HOME} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={PATH.LATEST_NEWS} element={<LatestNews />} />
      <Route path={PATH.POPULAR_NEWS} element={<PopularNews />} />
    </Route>
  </Routes>
);

