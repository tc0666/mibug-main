import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  redirectTo?: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, redirectTo = '/auth/signin' }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} replace />;
};
