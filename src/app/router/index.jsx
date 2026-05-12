import { createBrowserRouter } from 'react-router-dom';

// Layouts
import { MainLayout } from '../layouts/MainLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { ProtectedRoute } from './ProtectedRoute';

// Pages
import Landing from '../../pages/Landing';
import Register from '../../pages/Register';
import Dashboard from '../../pages/Dashboard';
import EmergencyRequest from '../../pages/EmergencyRequest';
import Notifications from '../../pages/Notifications';
import Admin from '../../pages/Admin';
import Confirmation from '../../pages/Confirmation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'request',
        element: <EmergencyRequest />,
      },
      {
        path: 'confirmation',
        element: <Confirmation />,
      },
      {
        path: 'notifications',
        element: <Notifications />,
      }
    ],
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          // Future nested routes
          // { path: 'requests', element: <RequestsList /> },
        ],
      },
    ],
  },
  {
    path: '/admin',
    element: <ProtectedRoute isAuthenticated={true} />, // In reality, check for admin role
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Admin />,
          }
        ],
      },
    ],
  }
]);
