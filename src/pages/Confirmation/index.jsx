import { CheckCircle } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
      <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Request Confirmed</h1>
      <p className="text-gray-600 max-w-md mb-8">
        Your emergency blood request has been broadcasted to nearby matching donors. We will notify you as soon as a donor accepts the request.
      </p>
      <Link to="/dashboard">
        <Button variant="primary">Return to Dashboard</Button>
      </Link>
    </div>
  );
}
