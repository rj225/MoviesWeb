import { combineReducers } from 'redux';
import {
  FETCH_MOVIES_SUCCESS,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from '../actions/Actions';

const initialState = {
  movies: [],
  favorites: [],
};

const moviesReducer = (state = initialState.movies, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const favoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
