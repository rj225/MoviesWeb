export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const addToFavorites = (movieId) => ({
  type: ADD_TO_FAVORITES,
  payload: movieId,
});

export const removeFromFavorites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});
