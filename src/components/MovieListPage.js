import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { fetchMoviesSuccess, addToFavorites, removeFromFavorites } from '../actions/Actions';
import axios from 'axios';

const MovieListPage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);
    const favorites = useSelector((state) => state.favorites);

    useEffect(() => {
        console.log('Updated Favorites:', favorites);
        console.log('Movies:', movies);
    }, [favorites, movies]);

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

        const updatedFavorites = [...favorites, movieId];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            const parsedFavorites = JSON.parse(storedFavorites);
            parsedFavorites.forEach((movieId) => dispatch(addToFavorites(movieId)));
        }
    }, [dispatch]);

    return (
        <div className="container mx-auto px-4">
            <h1 className="sm:text-2xl text-lg text-center font-bold my-4">All Movie</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie) => (
                    <a key={movie.id} href={movie.imdb_url} target="_blank" rel="noopener noreferrer" className="border bg-gradient-to-br from-cyan-100 to via-red-100 bg-yellow-300 rounded-lg shadow-lg p-4 block hover:scale-105 duration-300 hover:via-cyan-300">
                        <div>
                            <img src={movie.image} alt={movie.movie} className="w-full h-auto mb-2 rounded-lg" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold">{movie.movie}</h2>
                            <p className="text-sm">Rating: {movie.rating}</p>
                            <button
                                onClick={() => handleToggleFavorite(movie.id)}
                                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                            >
                                {favorites.includes(movie.id) ? <FaHeart /> : <FaRegHeart />}
                            </button>
                        </div>
                    </a>
                ))}
            </div>
        </div>

    );
};

export default MovieListPage;
