import { Card, CardHeader, CardTitle, CardContent } from '../../components/common/Card';
import { Input } from '../../components/forms/Input';
import { Button } from '../../components/common/Button';

export default function EmergencyRequest() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-brand-red flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Urgent Blood Request
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input label="Patient Name" placeholder="Jane Doe" />
            <Input label="Required Blood Group" placeholder="A-" />
            <Input label="Hospital Name" placeholder="City General Hospital" />
            <Input label="Urgency Level" placeholder="Critical / High / Medium" />
            <Input label="Contact Number" placeholder="+1 (555) 000-0000" />
            <Button type="button" className="w-full mt-6" variant="primary">Broadcast Request</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
