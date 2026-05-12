import { Card, CardHeader, CardTitle, CardContent } from '../../components/common/Card';

export default function Admin() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Donors</p>
            <p className="text-2xl font-bold">1,248</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Active Requests</p>
            <p className="text-2xl font-bold text-brand-red">14</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Completed Donations</p>
            <p className="text-2xl font-bold text-green-600">892</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Hospitals Registered</p>
            <p className="text-2xl font-bold">45</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Emergency Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No active requests currently pending admin review.</p>
        </CardContent>
      </Card>
    </div>
  );
}
