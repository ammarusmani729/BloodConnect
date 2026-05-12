import { Card, CardContent } from '../../components/common/Card';
import { Bell } from 'lucide-react';

export default function Notifications() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Bell className="text-brand-red" /> Notifications
      </h1>
      <div className="space-y-4">
        <Card className="border-l-4 border-l-brand-red">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">Urgent: O+ Blood Required</h4>
                <p className="text-sm text-gray-600">City General Hospital is requesting O+ blood for an emergency surgery.</p>
              </div>
              <span className="text-xs text-gray-400">2 mins ago</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">Welcome to BloodConnect</h4>
                <p className="text-sm text-gray-600">Thank you for registering as a donor. You are now part of our lifesavers community.</p>
              </div>
              <span className="text-xs text-gray-400">1 day ago</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
