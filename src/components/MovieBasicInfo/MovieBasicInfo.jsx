import css from './MovieBasicInfo.module.css';
import { Link, useLocation } from 'react-router-dom';

export const MovieBasicInfo = ({ data, genres }) => {
  const countScore = Math.floor(data.vote_average * 10);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  return (
    <div>
      <Link to={backLink}>Go back</Link>
      <div className={css.movieInfo}>
        <img
          alt={`${data.title} poster`}
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        />
        <div className={css.movieDetails}>
          <h2>{data.title}</h2>
          <p>User Score: {countScore}%</p>
          <h3>Overview</h3>
          <p>{data.overview}</p>
          <h4>Genres</h4>
          {genres?.map(genre => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
