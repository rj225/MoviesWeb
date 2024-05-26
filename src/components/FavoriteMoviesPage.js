import React from 'react';
import { useSelector } from 'react-redux';

const FavoriteMoviesPage = () => {
  const favorites = useSelector((state) => state.favorites);
  const movies = useSelector((state) => state.movies);

  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  return (
    <div className="container mx-auto px-4">
      <h1 className="sm:text-2xl text-center text-lg font-bold my-4">Favorite Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favoriteMovies.map((movie) => (
          <a key={movie.id} href={movie.imdb_url} target="_blank" rel="noopener noreferrer" className="border bg-gradient-to-br from-cyan-100 to via-red-100 bg-yellow-300 rounded-lg shadow-lg p-4 block hover:scale-105 duration-300 hover:via-cyan-300 h-40">
            <div>
              <img src={movie.image} alt={movie.movie} className="w-full h-auto mb-2 rounded-lg" />
            </div>
            <div>
              <h2 className="text-lg font-bold">{movie.movie}</h2>
              <p className="text-sm">Rating: {movie.rating}</p>
            </div>
          </a>
        ))}
      </div>
    </div>

  );
};

export default FavoriteMoviesPage;
