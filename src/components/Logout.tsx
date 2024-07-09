import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { logout } from '../features/movies/userSlice';

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
    alert('Logged out successfully!');
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
