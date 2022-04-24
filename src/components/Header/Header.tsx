import { NavLink } from 'react-router-dom';

import './header.css';
import { PATH } from '../../enums';

const navigation = [
  { id: 1, title: 'Home', path: PATH.HOME },
  { id: 2, title: 'Latest News', path: PATH.LATEST_NEWS },
  { id: 3, title: 'Popular News', path: PATH.POPULAR_NEWS },
];

export const Header = () => (
  <header>
    <nav className='nav'>
      <div className='links'>
        {navigation.map(({ id, title, path }) => (
          <NavLink key={id} to={path}>{title}</NavLink>
        ))}
      </div>
    </nav>
  </header>
);
