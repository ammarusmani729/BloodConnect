import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/navigation/Navbar';

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
     
    </div>
  );
}
