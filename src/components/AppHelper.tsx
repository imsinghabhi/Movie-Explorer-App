import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import localforage from 'localforage';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import LoginForm from '../pages/Login';
import RegisterForm from '../pages/register';
import MovieDetails from '../components/MovieDetails';
import { User } from '../types/User';
import { setCurrentUser,loadUsers, } from '../features/movies/userSlice';
import { loadFavoriteMovies } from '../features/movies/userSlice';
import { Movie } from '../types/Movie';

const Apphelper: React.FC = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = await localforage.getItem<User>('currentUser');
        if (currentUser) {
          dispatch(setCurrentUser(currentUser));
          const favoriteMovies = await localforage.getItem<Movie[]>('favoriteMovies');
          if (favoriteMovies) {
            dispatch(loadFavoriteMovies(favoriteMovies));
          }
        }
        const users = await localforage.getItem<User[]>('users');
        if (users) {
          dispatch(loadUsers(users));
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    fetchUserData();
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '16px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/movies/:imdbID" element={<MovieDetails />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default Apphelper;
