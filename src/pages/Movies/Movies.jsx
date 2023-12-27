// pages/Movies/Movies.js
import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import css from './Movie.module.css';

const Movies = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const API_KEY = '34696298a8c2c13903b901c47d5a708f';
      const endpoint = 'https://api.themoviedb.org/3/search/movie';
      const params = {
        api_key: API_KEY,
        query: keyword,
      };

      const response = await axios.get(endpoint, { params });

      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error', error.message);
    }
  };

  return (
    <div className={css.searchbar}>
      <div>
        {' '}
        <input
          className={css.input}
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="Keyword"
        />
        <button className={css.button} onClick={handleSearch}>
          Search
        </button>
      </div>

      {searchResults.length > 0 ? (
        <MovieList movies={searchResults} />
      ) : (
        <p>No results.Try again.</p>
      )}
    </div>
  );
};

export default Movies;
