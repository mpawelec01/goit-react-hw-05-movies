import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './MainContainer.styled';

export function MainContainer() {
  return (
    <>
      {' '}
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
