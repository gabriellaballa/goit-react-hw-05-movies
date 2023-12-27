// Cast.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const API_KEY = '34696298a8c2c13903b901c47d5a708f';
        const endpoint = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
        const params = {
          api_key: API_KEY,
        };

        const response = await axios.get(endpoint, { params });
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error', error.message);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://www.themoviedb.org/t/p/w138_and_h175_face${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
