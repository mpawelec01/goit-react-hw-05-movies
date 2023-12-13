import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { getMovies } from 'Api/Api';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const queryFilter = urlSearchParams.get('query') || '';
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    setUrlSearchParams({ query: e.target.firstElementChild.value });
  };

  const fetchMovies = async () => {
    try {
      const result = await getMovies(queryFilter);
      setSearchedMovies(result.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMovies(queryFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryFilter]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={queryFilter}
          type="text"
          autoComplete="off"
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchedMovies?.map(movie => (
          <li key={`${movie.id}`}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
