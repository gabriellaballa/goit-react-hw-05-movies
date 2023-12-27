// Review.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import css from './Review.module.css';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const API_KEY = '34696298a8c2c13903b901c47d5a708f';
        const endpoint = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
        const params = {
          api_key: API_KEY,
        };

        const response = await axios.get(endpoint, { params });
        if (response.data.results.length > 0) {
          setReviews(response.data.results);
        } else {
          setError('There are no reviews available for this film.');
        }
      } catch (error) {
        console.error('Error retrieving data for reviews:', error.message);
        setError('Error loading reviews. Please try again later.');
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <ul className={css.reviewList}>
            {reviews.map(review => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Review;
