import { Button } from '../../components/common/Button';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
        Save Lives with <span className="text-brand-red">BloodConnect</span>
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl">
        Real-time emergency blood donation platform. Connecting urgent hospital requests with nearby donors instantly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/request">
          <Button size="lg" variant="primary" className="w-full sm:w-auto text-lg">
            Request Blood
          </Button>
        </Link>
        <Link to="/register">
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg">
            Register as Donor
          </Button>
        </Link>
      </div>
    </div>
  );
}
