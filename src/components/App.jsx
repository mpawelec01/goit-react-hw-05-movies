import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainContainer } from './MainContainer/MainContainer';

const Home = lazy(() => import('../pages/Home/Home'));
const Cast = lazy(() => import('./Cast/Cast'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
