import { Link, Outlet } from 'react-router-dom';
import css from './MovieMoreInfo.module.css';

export const MovieMoreInfo = () => {
  return (
    <div>
      <div className={css.moreInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};
