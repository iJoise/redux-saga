import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hook/useAppSelector';
import { Preloader } from '../Preloader';
import { useRouterFetch } from '../../hook/useRouterFetch';

export const Layout: React.FC = () => {
  const { isLoadingData} = useAppSelector(state => state.app)
  useRouterFetch()

  return (
    <>
      <Header />
      <main>
        <Outlet />
        { isLoadingData && <Preloader />}
      </main>
      <Footer />
    </>
  )
};
