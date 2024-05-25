// MovieListPage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoviesSuccess, addToFavorites, removeFromFavorites } from './actions';
import axios from 'axios';

const MovieListPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_MOVIES_API_URL);
        dispatch(fetchMoviesSuccess(response.data));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleToggleFavorite = (movieId) => {
    const isFavorite = favorites.includes(movieId);
    if (isFavorite) {
      dispatch(removeFromFavorites(movieId));
    } else {
      dispatch(addToFavorites(movieId));
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Movie List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="border p-4">
            <div>
              <img src={movie.poster} alt={movie.title} className="w-full h-auto mb-2" />
            </div>
            <div>
              <h2 className="text-lg font-bold">{movie.title}</h2>
              <p>Rating: {movie.rating}</p>
              <p>Year: {movie.year}</p>
              <p>Genre: {movie.genre}</p>
              <button
                onClick={() => handleToggleFavorite(movie.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                {favorites.includes(movie.id) ? 'Unfavorite' : 'Favorite'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieListPage;
