import { Link } from 'react-router-dom';
import {
  Users, AlertTriangle, Heart, Bell, Smartphone,
  Brain, LayoutDashboard, TrendingUp, MapPin,
  ChevronRight
} from 'lucide-react';
import LogoImage from '../../assets/BloodConnectLogo.png';

const stats = [
  { icon: Users, value: '25,430+', label: 'REGISTERED DONORS' },
  { icon: AlertTriangle, value: '1,890', label: 'EMERGENCY REQUESTS' },
  { icon: Heart, value: '42,000+', label: 'LIVES IMPACTED' },
];

const steps = [
  { n: '1', title: 'Post Request', desc: 'Hospitals submit an urgent request through the dedicated dashboard.' },
  { n: '2', title: 'Smart Matching', desc: 'Our system filters donors based on blood type, location, and eligibility.' },
  { n: '3', title: 'Instant Alerts', desc: 'Matching donors receive real-time alerts via WhatsApp and Email.' },
  { n: '4', title: 'Donor Confirms', desc: 'Donors click one link to confirm and navigate to the hospital.' },
];

const features = [
  { icon: Bell, title: 'Real-time alerts', desc: 'Notifications delivered in milliseconds to ensure no time is wasted.' },
  { icon: Smartphone, title: 'WhatsApp communications', desc: 'Meeting donors where they are with seamless WhatsApp integration.' },
  { icon: Brain, title: 'Smart AI for matching', desc: 'Algorithmic prioritization based on proximity and last donation date.' },
  { icon: LayoutDashboard, title: 'Emergency dashboard', desc: 'A dedicated control center for hospitals to manage active requests.' },
  { icon: TrendingUp, title: 'Fast donor response', desc: 'Track response rates and fulfillment times in real time.' },
  { icon: MapPin, title: 'Area-based filtering', desc: 'Precise geo-fencing to only alert donors who can actually reach the facility.' },
];

const footerLinks = ['Home', 'Donor Form', 'Urgent Request'];

export default function Landing() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#fff', color: '#111827' }}>

      {/* ── Critical Alert Banner ── */}
      <div style={{
        background: '#DC2626', padding: '8px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
        animation: 'fadeDown .4s ease',
      }}>
        <span style={{
          background: '#fff', color: '#DC2626', fontSize: '10px', fontWeight: 800,
          padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.5px',
        }}>CRITICAL</span>
        <span style={{ color: '#fff', fontSize: '13px' }}>
          Urgent O-ve need at Centre Hospital.
        </span>
        <a href="/request" style={{
          color: '#fff', fontWeight: 700, fontSize: '13px',
          textDecoration: 'underline', transition: 'opacity .2s',
        }}>Request Now</a>
      </div>

      {/* ── Hero Section ── */}
      <section style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '72px 24px 60px',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '48px', alignItems: 'center',
      }}>
        {/* Left */}
        <div>
          <h1 style={{ fontSize: '46px', fontWeight: 800, lineHeight: 1.15, margin: '0 0 18px', color: '#111827' }}>
            Emergency Blood<br />Donation Made{' '}
            <span style={{ color: '#DC2626' }}>Instant</span>
          </h1>
          <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.7, marginBottom: '32px', maxWidth: '420px' }}>
            Connect hospitals with nearby blood donors through real-time WhatsApp and Email alerts. Saving lives is now just one notification away.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/register" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#DC2626', color: '#fff', fontWeight: 700,
              fontSize: '14px', padding: '12px 22px', borderRadius: '8px',
              textDecoration: 'none', boxShadow: '0 4px 14px rgba(220,38,38,0.35)',
              transition: 'all .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#B91C1C'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#DC2626'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Register as Donor
            </Link>
            <Link to="/request" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#fff', color: '#DC2626', fontWeight: 700,
              fontSize: '14px', padding: '12px 22px', borderRadius: '8px',
              textDecoration: 'none', border: '1.5px solid #DC2626',
              transition: 'all .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#FEF2F2'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; }}
            >
              Request Blood
            </Link>
          </div>
        </div>

        {/* Right — dashboard mockup */}
        <div style={{ position: 'relative' }}>
          <div style={{
            borderRadius: '16px', overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            border: '1px solid #E5E7EB',
            background: '#fff',
          }}>
            {/* Fake browser chrome */}
            <div style={{ background: '#F3F4F6', padding: '10px 14px', display: 'flex', gap: '6px', alignItems: 'center' }}>
              {['#EF4444', '#F59E0B', '#10B981'].map(c => (
                <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
              ))}
            </div>
            {/* Mini dashboard preview */}
            <div style={{ padding: '16px', background: '#FAFAFA' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                {[['A+', '85%', '#22c55e'], ['O-', '12%', '#ef4444'], ['B+', '45%', '#f59e0b']].map(([t, v, c]) => (
                  <div key={t} style={{ flex: 1, background: '#fff', borderRadius: '8px', padding: '10px', border: '1px solid #F3F4F6', textAlign: 'center' }}>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#DC2626' }}>{t}</div>
                    <div style={{ height: '4px', background: '#F3F4F6', borderRadius: '99px', margin: '6px 0 4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: v, background: c, borderRadius: '99px' }} />
                    </div>
                    <div style={{ fontSize: '10px', color: '#9CA3AF' }}>{v}</div>
                  </div>
                ))}
              </div>
              {/* Fake bar chart */}
              <div style={{ background: '#fff', borderRadius: '8px', padding: '12px', border: '1px solid #F3F4F6' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>Weekly Donations</div>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end', height: '50px' }}>
                  {[30, 55, 40, 70, 50, 80, 60].map((h, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                      <div style={{ width: '100%', height: `${h}%`, background: i === 5 ? '#DC2626' : '#FCA5A5', borderRadius: '3px 3px 0 0' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div style={{
            position: 'absolute', bottom: '-16px', left: '50%', transform: 'translateX(-50%)',
            background: '#fff', borderRadius: '12px', padding: '10px 16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)', border: '1px solid #F3F4F6',
            display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap',
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', animation: 'ping 1.5s ease-in-out infinite' }} />
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>New Alert — O- needed · 2 mins ago</span>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6', background: '#fff', padding: '40px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={label} style={{
              textAlign: 'center', padding: '0 32px',
              borderRight: i < 2 ? '1px solid #F3F4F6' : 'none',
            }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <Icon size={20} color="#DC2626" />
              </div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#111827', marginBottom: '4px' }}>{value}</div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#9CA3AF', letterSpacing: '1px' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ padding: '72px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>How It Works</h2>
            <p style={{ color: '#9CA3AF', fontSize: '15px' }}>Streamlining the path from request to transfusion.</p>
          </div>
          {/* Steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', position: 'relative' }}>
            {/* Connector line */}
            <div style={{ position: 'absolute', top: '28px', left: '12.5%', right: '12.5%', height: '2px', background: 'linear-gradient(90deg, #DC2626, #FCA5A5)', zIndex: 0 }} />
            {steps.map(({ n, title, desc }) => (
              <div key={n} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: '#DC2626', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', fontSize: '20px', fontWeight: 800,
                  boxShadow: '0 4px 16px rgba(220,38,38,0.3)',
                }}>
                  {n}
                </div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: '#111827', marginBottom: '8px' }}>{title}</div>
                <div style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Features ── */}
      <section style={{ padding: '72px 24px', background: '#FFF5F5' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>Platform Features</h2>
            <p style={{ color: '#9CA3AF', fontSize: '15px' }}>Advanced technology for time-critical situations.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{
                background: '#fff', borderRadius: '14px', padding: '22px',
                border: '1.5px solid #F3F4F6',
                boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
                transition: 'transform .2s, box-shadow .2s',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(220,38,38,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 8px rgba(0,0,0,0.05)'; }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Icon size={18} color="#DC2626" />
                </div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: '#111827', marginBottom: '6px' }}>{title}</div>
                <div style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ padding: '48px 24px', background: '#fff' }}>
        <div style={{
          maxWidth: '960px', margin: '0 auto',
          background: 'linear-gradient(135deg, #DC2626 0%, #9B1C1C 100%)',
          borderRadius: '20px', padding: '48px 52px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px',
          boxShadow: '0 12px 40px rgba(220,38,38,0.3)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* BG circles */}
          <div style={{ position: 'absolute', right: '-60px', top: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ position: 'absolute', left: '-40px', bottom: '-60px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#fff', margin: '0 0 10px', lineHeight: 1.25 }}>
              Join the network that saves<br />lives.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>
              Whether you're a hospital in need or a donor who wants to help, your<br />presence on BloodConnect makes a difference.
            </p>
          </div>
          <Link to="/register" style={{
            flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#fff', color: '#DC2626', fontWeight: 700, fontSize: '14px',
            padding: '13px 24px', borderRadius: '10px', textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
            transition: 'all .2s', position: 'relative', zIndex: 1,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FEF2F2'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Get Started Today <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#0f172a', padding: '52px 24px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '40px', marginBottom: '40px' }}>
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <img src={LogoImage} alt="Blood Connect" style={{ height: '34px', width: 'auto' }} />
                <span style={{ color: '#fff', fontWeight: 800, fontSize: '17px' }}>Blood Connect</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', lineHeight: 1.7, marginBottom: '16px' }}>
                Connecting hospitals and donors for life-saving blood transfusions in real time.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px' }}>QUICK LINKS</div>
              {footerLinks.map(l => {
                const path = l === 'Home' ? '/' : l === 'Donor Form' ? '/register' : l === 'Urgent Request' ? '/request' : '#';
                return (
                  <div key={l} style={{ marginBottom: '10px' }}>
                    <Link to={path} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', textDecoration: 'none', transition: 'color .2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                    >{l}</Link>
                  </div>
                );
              })}
            </div>

            {/* Contact */}
            <div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px' }}>CONTACT US</div>
              {['emergency@bloodconnect.org', '+1 (555) 6-000-911', 'Global Health Tower, NY'].map(c => (
                <div key={c} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '10px', lineHeight: 1.5 }}>{c}</div>
              ))}
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
              {/* Copyright removed */}
            </span>
            <div style={{ display: 'flex', gap: '20px' }}>
              {['Privacy Policy', 'Terms of Service'].map(t => (
                <a key={t} href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', textDecoration: 'none' }}>{t}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @keyframes fadeDown { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ping { 0%{opacity:1} 100%{transform:scale(2);opacity:0} }
      `}</style>
    </div>
  );
}