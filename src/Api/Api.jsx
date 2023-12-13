import axios from 'axios';

const siteUrl = 'https://api.themoviedb.org/3/';
const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjBlZDdlNTI2NzRlZGI0NDFiZmQ1ZGNlZmRkOGEyMSIsInN1YiI6IjY1NzBhZDQ5ZGNiNmEzMDBlNDM5MTFlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M1hnyZJ0MflZFHZy5PeT8M3MwymRTggn_ollHZIX_XQ',
  },
};

export const getTrendingMovies = async () => {
  const url = `${siteUrl}trending/movie/day?language=en-US`;
  const result = await axios.get(url, options);
  return result;
};

export const getMovies = async query => {
  const url = `${siteUrl}search/movie?query=${query}&include_adult=false&language=en-US`;
  const result = await axios.get(url, options);
  return result;
};

export const getMovieDetails = async id => {
  const url = `${siteUrl}movie/${id}?language=en-US`;
  const result = await axios.get(url, options);
  return result;
};

export const getMovieCredits = async id => {
  const url = `${siteUrl}movie/${id}/credits?language=en-US`;
  const result = await axios.get(url, options);
  return result;
};

export const getMovieReviews = async id => {
  const url = `${siteUrl}movie/${id}/reviews?language=en-US&page=1`;
  const result = await axios.get(url, options);
  return result;
};
