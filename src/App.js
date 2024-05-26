import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './store/Store'; 
import MovieListPage from './components/MovieListPage';
import FavoriteMoviesPage from './components/FavoriteMoviesPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/favorites" element={<FavoriteMoviesPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
