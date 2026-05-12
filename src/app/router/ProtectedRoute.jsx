import { Navigate, Outlet } from 'react-router-dom';

// Dummy implementation for hackathon MVP
// In a real app, this would use context to check if the user is authenticated
export function ProtectedRoute({ isAuthenticated = true, redirectPath = '/register' }) {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
