import { Card, CardHeader, CardTitle, CardContent } from '../../components/common/Card';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Donations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-brand-red">4</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Lives Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-brand-red">12</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Requests Near You</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-brand-red">2</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-500 text-center py-8">No recent activity to show.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
