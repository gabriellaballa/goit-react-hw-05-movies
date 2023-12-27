// components/MovieItem/MovieItem.js
import React from 'react';
import css from './Movie.module.css';
const MovieItem = ({ movie }) => {
  return (
    <li className={css.moviedetails}>
      <img
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>

        <p>{movie.overview}</p>
      </div>
    </li>
  );
};

export default MovieItem;
