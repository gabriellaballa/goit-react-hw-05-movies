// pages/Home/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const API_KEY = '34696298a8c2c13903b901c47d5a708f';
        const endpoint = 'https://api.themoviedb.org/3/trending/all/day';
        const params = {
          api_key: API_KEY,
        };
        const response = await axios.get(endpoint, { params });
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error', error.message);
      }
    };

    fetchTrendingMovies();
  }, []);

  const getDefaultImage = movie => {
    const posterUrl = movie.poster_path
      ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
      : 'https://placehold.co/300x450';

    return (
      <div className={style.movieContainer}>
        <img src={posterUrl} alt={movie.title} />
        {movie.title && <p className={style.movieTitle}>{movie.title}</p>}
      </div>
    );
  };

  return (
    <div>
      <h1>Today's most popular movies</h1>
      <ul className={style.popularMovies}>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            {movie.title && (
              <Link to={`/movies/${movie.id}`}>
                {movie.poster_path ? (
                  <img
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <img src={getDefaultImage(movie)} alt={movie.title} />
                )}
                <p className={style.movieTitle}>{movie.title}</p>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
