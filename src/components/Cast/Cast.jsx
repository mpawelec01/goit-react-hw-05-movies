import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'Api/api';
import css from './Cast.module.css';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  const fetchMovieCredits = async () => {
    try {
      const result = await getMovieCredits(movieId);
      setMovieCast(result.data.cast);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMovieCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  return (
    <div>
      <ul>
        {movieCast?.map(castMember => (
          <li key={castMember.id}>
            <img
              className={css.img}
              alt={castMember.name}
              src={
                castMember.profile_path !== null || undefined
                  ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}`
                  : `https://i.stack.imgur.com/l60Hf.png`
              }
            />
            <p>{castMember.name}</p>
            <p>Character: {castMember.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
