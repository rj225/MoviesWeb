// FavoriteMoviesPage.js
import React from 'react';
import { useSelector } from 'react-redux';

const FavoriteMoviesPage = () => {
  const favorites = useSelector((state) => state.favorites);
  const movies = useSelector((state) => state.movies);

  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Favorite Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favoriteMovies.map((movie) => (
          <div key={movie.id} className="border p-4">
            <div>
              <img src={movie.poster} alt={movie.title} className="w-full h-auto mb-2" />
            </div>
            <div>
              <h2 className="text-lg font-bold">{movie.title}</h2>
              <p>Rating: {movie.rating}</p>
              <p>Year: {movie.year}</p>
              <p>Genre: {movie.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMoviesPage;
