import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Query } from 'appwrite';
import { ArrowRight, Mail, ShieldCheck } from 'lucide-react';
import { donorService } from '../../services/donorService';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      toast.error('Enter your registered email address.');
      return;
    }

    setLoading(true);
    try {
      const result = await donorService.getDonors([
        Query.equal('email', normalizedEmail),
      ]);

      const donor = result.documents?.[0];

      if (!donor) {
        toast.error('No registered donor found for that email.');
        return;
      }

      localStorage.setItem('currentDonor', JSON.stringify({
        id: donor.$id,
        name: donor.name,
        bloodGroup: donor.bloodGroup,
        area: donor.area,
        phone: donor.phone,
        email: donor.email,
        available: donor.available,
      }));

      toast.success('Login successful.');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed: ' + (error.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #FFF5F5 0%, #FFFFFF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '100%', maxWidth: 480, background: '#fff', border: '1px solid #F3F4F6', borderRadius: 24, boxShadow: '0 20px 60px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        <div style={{ padding: '32px 32px 24px', textAlign: 'center', background: 'linear-gradient(135deg, #DC2626 0%, #9B1C1C 100%)' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldCheck size={30} color="#fff" />
          </div>
          <h1 style={{ margin: 0, fontSize: 28, fontWeight: 800, color: '#fff' }}>Donor Login</h1>
          <p style={{ margin: '8px 0 0', color: 'rgba(255,255,255,0.85)', fontSize: 14 }}>Use the email you registered with to access your dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: 32 }}>
          <div style={{ marginBottom: 18 }}>
            <label style={{ display: 'block', marginBottom: 8, fontSize: 13, fontWeight: 700, color: '#374151' }}>Registered Email</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color="#9CA3AF" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{ width: '100%', height: 48, padding: '0 16px 0 44px', borderRadius: 12, border: '1px solid #E5E7EB', outline: 'none', fontSize: 14 }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ width: '100%', height: 48, border: 'none', borderRadius: 12, background: '#DC2626', color: '#fff', fontWeight: 700, fontSize: 14, cursor: loading ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
          >
            {loading ? 'Logging in...' : 'Login to Dashboard'}
            <ArrowRight size={16} />
          </button>

          <div style={{ marginTop: 20, textAlign: 'center', fontSize: 13, color: '#6B7280' }}>
            New here? <Link to="/register" style={{ color: '#DC2626', fontWeight: 700, textDecoration: 'none' }}>Register as a donor</Link>
          </div>
        </form>
      </div>
    </div>
  );
}