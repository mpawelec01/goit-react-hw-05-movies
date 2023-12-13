import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'Api/Api';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  const fetchTrendingMovies = async () => {
    try {
      const result = await getTrendingMovies();
      setTrending(result.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trending?.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
