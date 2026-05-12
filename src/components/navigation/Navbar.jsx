import { Link } from 'react-router-dom';
import { Droplet, Menu } from 'lucide-react';
import { Button } from '../common/Button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Droplet className="h-8 w-8 text-brand-red" fill="currentColor" />
              <span className="text-xl font-bold text-gray-900 tracking-tight">BloodConnect</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/request" className="text-gray-600 hover:text-brand-red px-3 py-2 text-sm font-medium transition-colors">
                Emergency Request
              </Link>
              <Link to="/register" className="text-gray-600 hover:text-brand-red px-3 py-2 text-sm font-medium transition-colors">
                Register as Donor
              </Link>
              <Button variant="primary" size="sm">
                Login
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
