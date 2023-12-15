import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'Api/api';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  const fetchMovieReviews = async () => {
    try {
      const result = await getMovieReviews(movieId);
      setMovieReviews(result.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMovieReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieReviews !== [] ? (
          movieReviews?.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <div>We don't have any reviews for this movie.</div>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
