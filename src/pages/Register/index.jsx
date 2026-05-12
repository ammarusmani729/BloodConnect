import { Card, CardHeader, CardTitle, CardContent } from '../../components/common/Card';
import { Input } from '../../components/forms/Input';
import { Button } from '../../components/common/Button';

export default function Register() {
  return (
    <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Become a Donor</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input label="Full Name" placeholder="John Doe" />
            <Input label="Email Address" type="email" placeholder="john@example.com" />
            <Input label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
            <Input label="Blood Group" placeholder="O+" />
            <Input label="City/Location" placeholder="New York" />
            <Button type="button" className="w-full mt-6">Register</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
