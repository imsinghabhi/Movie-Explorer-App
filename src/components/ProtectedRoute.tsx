import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';

interface ProtectedRouteProps {
  element: React.ReactNode;
  path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, path }) => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  return (
    <Routes>
      <Route
        path={path}
        element={currentUser ? element : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default ProtectedRoute;
