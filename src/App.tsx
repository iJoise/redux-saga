import React, { FC } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

interface Props {
  children?: React.ReactNode;
}

export const App: FC<Props> = ({ children }) => (
  <div>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);
