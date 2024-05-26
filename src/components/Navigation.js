import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaHeart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Navigation = () => {


  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (<nav className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 sm:h-20 h-16 shadow-md">
    <NavLink
      to="/"
      exact
      className={`text-white sm:text-xl text-lg mr-6 flex duration-300 items-center ${isActive('/') ? 'scale-105 bg-white bg-opacity-10 py-2 px-3 shadow-lg rounded-2xl text-purple-200' : '' }`}
    >
      <FaHome className="mr-2" />
      Home
    </NavLink>
    <NavLink
      to="/favorites"
      className={`text-white ml-3 sm:text-xl text-lg flex duration-300  items-center ${isActive('/favorites') ? " scale-105 bg-white bg-opacity-10 py-2 px-3 shadow-lg rounded-2xl text-purple-200" : ""}`}
    >
      <FaHeart className="mr-2" />
      Favorites
    </NavLink>

  </nav>)
};

export default Navigation;
