// MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Review/Review';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const API_KEY = '34696298a8c2c13903b901c47d5a708f';

        const endpoint = `https://api.themoviedb.org/3/movie/${movieId}`;

        const params = {
          api_key: API_KEY,
        };

        const response = await axios.get(endpoint, { params });

        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error', error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.container}>
      <h1>{movieDetails.title}</h1>
      <div className={css.details}>
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <div>
          <p>
            {' '}
            <span>Score:</span> {movieDetails.vote_average}
          </p>
          <p>
            {' '}
            <span>Overview:</span> {movieDetails.overview}
          </p>
          <p>
            <span>Genres: </span>
            {movieDetails.genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>
      <nav className={css.movieInfo}>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Review</Link>
      </nav>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetails;
