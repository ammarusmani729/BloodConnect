import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute({ isAuthenticated = true, redirectPath = '/login' }) {
  const donorSession = typeof window !== 'undefined' ? localStorage.getItem('currentDonor') : null;
  const hasAccess = isAuthenticated && Boolean(donorSession);

  if (!hasAccess) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
