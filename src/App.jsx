import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
//const Footer = lazy(() => import('./components/Footer/Footer'));
const Header = lazy(() => import('./components/Header/Header'));
const MovieDetails = lazy(() =>
  import('./components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./components/Cast/Cast'));
const Review = lazy(() => import('./components/Review/Review'));

const App = () => {
  return (
    <Router basename="/goit-react-hw-05-movies">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
