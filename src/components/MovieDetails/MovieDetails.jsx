import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'Api/Api';
import { MovieBasicInfo } from 'components/MovieBasicInfo/MovieBasicInfo';
import { MovieMoreInfo } from 'components/MovieMoreInfo/MovieMoreInfo';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const [movieGenres, setMovieGenres] = useState([]);
  const { movieId } = useParams();

  const fetchMovieDetails = async () => {
    try {
      const result = await getMovieDetails(movieId);
      setMovieData(result.data);
      const genres = result.data.genres;

      setMovieGenres(genres);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);
  return (
    <div>
      <MovieBasicInfo data={movieData} genres={movieGenres} />
      <MovieMoreInfo />
    </div>
  );
};

export default MovieDetails;
