import React from 'react';
import './style/preloader.css'

import { ReactComponent as Loader } from '../../assets/loader.svg';

export const Preloader = () => (
  <div className="fetching">
    <Loader className="fetching__loader" width={200} height={200} />
    <div className="fetching__text">Загрузка...</div>
  </div>
);
