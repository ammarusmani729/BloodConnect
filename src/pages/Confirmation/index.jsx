import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: '100vh', background: '#FEF2F2', backgroundImage: 'radial-gradient(#FECACA 1px, transparent 1px)', backgroundSize: '24px 24px' }}>

      {/* Top bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #F3F4F6', padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>🩸</span>
          <span style={{ fontWeight: 800, fontSize: 18, color: '#DC2626' }}>LifeLink Admin</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <span style={{ fontSize: 20, cursor: 'pointer', color: '#6B7280' }}>🔔</span>
          <span style={{ fontSize: 20, cursor: 'pointer', color: '#6B7280' }}>❓</span>
          <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#6B7280', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>AU</div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 820, margin: '40px auto', padding: '0 20px' }}>

        {/* Confirmed Commitment Banner */}
        <div style={{ background: '#0E7490', borderRadius: 10, padding: '14px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#fff' }}>
            <span style={{ fontSize: 18 }}>🛡️</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Confirmed Commitment</span>
          </div>
          <span style={{ color: '#A5F3FC', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em' }}>TXN-9982-LIFE</span>
        </div>

        {/* Heart Icon + Heading */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#CFFAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', fontSize: 36 }}>
            🩵
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: '#111827', marginBottom: 12 }}>Donation Confirmed. Thank You!</h1>
          <p style={{ fontSize: 14, color: '#6B7280', maxWidth: 460, margin: '0 auto', lineHeight: 1.6 }}>
            Your commitment helps save lives. Please proceed to the medical center as soon as possible. Your blood type is currently in high demand.
          </p>
        </div>

        {/* Two-column cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>

          {/* Appointment Status */}
          <div style={{ background: '#fff', borderRadius: 14, padding: '22px 24px', border: '1px solid #F3F4F6', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Appointment Status</span>
              <span style={{ background: '#CFFAFE', color: '#0E7490', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 99, display: 'flex', alignItems: 'center', gap: 4 }}>✔ Confirmed</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ fontSize: 18, color: '#DC2626', marginTop: 2 }}>📍</span>
                <div>
                  <div style={{ fontSize: 11, color: '#9CA3AF', marginBottom: 3 }}>Hospital Name</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#111827' }}>Downtown Medical Center</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ fontSize: 18, color: '#DC2626', marginTop: 2 }}>🩸</span>
                <div>
                  <div style={{ fontSize: 11, color: '#9CA3AF', marginBottom: 3 }}>Blood Type Needed</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: '#111827' }}>B- Negative</span>
                    <span style={{ background: '#FEE2E2', color: '#DC2626', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4, letterSpacing: '0.06em' }}>URGENT</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ fontSize: 18, color: '#DC2626', marginTop: 2 }}>🕐</span>
                <div>
                  <div style={{ fontSize: 11, color: '#9CA3AF', marginBottom: 3 }}>Estimated Arrival Time</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#111827' }}>Within 45 Minutes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Map + Actions */}
          <div style={{ background: '#fff', borderRadius: 14, padding: '0', border: '1px solid #F3F4F6', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Map visual */}
            <div style={{ background: 'linear-gradient(135deg, #1F2937 0%, #374151 50%, #1F2937 100%)', height: 160, position: 'relative', overflow: 'hidden' }}>
              {/* Grid */}
              {[...Array(6)].map((_, i) => (
                <div key={`h${i}`} style={{ position: 'absolute', left: 0, right: 0, top: `${i * 20}%`, height: 1, background: 'rgba(255,255,255,0.06)' }} />
              ))}
              {[...Array(6)].map((_, i) => (
                <div key={`v${i}`} style={{ position: 'absolute', top: 0, bottom: 0, left: `${i * 20}%`, width: 1, background: 'rgba(255,255,255,0.06)' }} />
              ))}
              {/* Blocks */}
              {[[8,10,22,16],[35,5,18,22],[58,12,20,18],[12,48,18,16],[42,42,24,18],[68,50,16,20]].map(([l,t,w,h], i) => (
                <div key={i} style={{ position: 'absolute', left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%`, background: i % 2 === 0 ? 'rgba(16,185,129,0.3)' : 'rgba(59,130,246,0.2)', borderRadius: 3 }} />
              ))}
              {/* Route line */}
              <div style={{ position: 'absolute', top: '30%', left: '15%', width: '55%', height: 3, background: '#3B82F6', borderRadius: 99, opacity: 0.8 }} />
              <div style={{ position: 'absolute', top: '30%', left: '70%', width: 3, height: '35%', background: '#3B82F6', borderRadius: 99, opacity: 0.8 }} />
              {/* Pin */}
              <div style={{ position: 'absolute', top: '20%', left: '65%', transform: 'translateX(-50%)' }}>
                <div style={{ fontSize: 28 }}>📍</div>
              </div>
              {/* Distance badge */}
              <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 99, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span>⚠</span> 2.4 miles away
              </div>
            </div>

            {/* Buttons */}
            <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button style={{ background: '#DC2626', color: '#fff', border: 'none', borderRadius: 8, padding: '12px', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                🧭 Get Driving Directions
              </button>
              <button style={{ background: '#fff', color: '#DC2626', border: '1px solid #FECACA', borderRadius: 8, padding: '12px', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                📞 Contact Hospital
              </button>
            </div>
          </div>
        </div>

        {/* Add to Calendar / Share */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, marginBottom: 24 }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6B7280', fontWeight: 600 }}>
            📅 Add to Calendar
          </button>
          <div style={{ width: 1, height: 18, background: '#E5E7EB' }} />
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6B7280', fontWeight: 600 }}>
            🔗 Share Awareness
          </button>
        </div>

        {/* Donor Prep Reminder */}
        <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 12, padding: '16px 20px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <span style={{ fontSize: 20, color: '#2563EB', marginTop: 1 }}>ℹ️</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#1E40AF', marginBottom: 4 }}>Donor Prep Reminder</div>
            <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>
              Remember to hydrate well and have a light snack before your donation. Your health is our priority as you save others.
            </div>
          </div>
        </div>

        {/* Return link */}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link to="/dashboard" style={{ fontSize: 13, color: '#DC2626', fontWeight: 600, textDecoration: 'none' }}>
            ← Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}