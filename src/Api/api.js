import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjBlZDdlNTI2NzRlZGI0NDFiZmQ1ZGNlZmRkOGEyMSIsInN1YiI6IjY1NzBhZDQ5ZGNiNmEzMDBlNDM5MTFlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M1hnyZJ0MflZFHZy5PeT8M3MwymRTggn_ollHZIX_XQ';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.params = {
  include_adult: false,
  language: 'en-US',
  page: 1,
};

export const getTrendingMovies = async () => {
  const url = 'trending/movie/day';
  const result = await axios.get(url);
  return result;
};

export const getMovies = async query => {
  const url = `search/movie?query=${query}`;
  const result = await axios.get(url);
  return result;
};

export const getMovieDetails = async id => {
  const url = `movie/${id}`;
  const result = await axios.get(url);
  return result;
};

export const getMovieCredits = async id => {
  const url = `movie/${id}/credits`;
  const result = await axios.get(url);
  return result;
};

export const getMovieReviews = async id => {
  const url = `movie/${id}/reviews`;
  const result = await axios.get(url);
  return result;
};
