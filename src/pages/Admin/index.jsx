import { useState } from 'react';

const bloodGroups = [
  { type: 'O+', units: 450 },
  { type: 'A+', units: 210 },
  { type: 'B+', units: 285 },
  { type: 'O-', units: 85 },
  { type: 'AB+', units: 150 },
  { type: 'A-', units: 42 },
  { type: 'B-', units: 192 },
];

const areaDistribution = [
  { name: 'Downtown Medical Center', pct: 42, color: '#DC2626' },
  { name: 'North Hills General', pct: 28, color: '#2563EB' },
  { name: 'East Side Clinic', pct: 18, color: '#16A34A' },
  { name: 'West Lake Hospital', pct: 12, color: '#9CA3AF' },
];

const recentActivity = [
  { initials: 'MW', name: 'Marcus Wright', type: 'O-', location: 'Central Hub', status: 'Confirmed', statusColor: '#16A34A', time: '12 mins ago' },
  { initials: 'EL', name: 'Elena Lopez', type: 'A+', location: 'West Side', status: 'In Transit', statusColor: '#D97706', time: '34 mins ago' },
  { initials: 'JT', name: 'Jordan Thorne', type: 'B-', location: 'North Clinic', status: 'Processing', statusColor: '#F59E0B', time: '1 hour ago' },
];

const liveActivity = [
  { icon: '🚨', color: '#DC2626', bg: '#FEE2E2', text: 'Urgent alert sent for O- Negative in Midtown sector.', time: '2 mins ago' },
  { icon: '🏥', color: '#2563EB', bg: '#DBEAFE', text: 'New Clinic Verified: Southside Community Hospital added to network.', time: '15 mins ago' },
  { icon: '✅', color: '#16A34A', bg: '#DCFCE7', text: 'Restock complete: 12 units of AB+ delivered to East General.', time: '45 mins ago' },
  { icon: '⚠️', color: '#D97706', bg: '#FEF3C7', text: 'Inventory Low: O- stock falling below critical threshold (15% remaining).', time: '1 hour ago' },
];

const maxUnits = Math.max(...bloodGroups.map(b => b.units));

export default function Admin() {
  const [stockView] = useState('Current Stock (Units)');

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#F9FAFB', minHeight: '100vh' }}>
      {/* Top bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #F3F4F6', padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
          <div style={{ color: '#9CA3AF', fontSize: 18 }}>🔍</div>
          <input
            placeholder="Search donors, clinics, or emergencies..."
            style={{ border: 'none', outline: 'none', fontSize: 14, color: '#374151', background: 'transparent', width: '100%', maxWidth: 420 }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <span style={{ fontSize: 20 }}>🔔</span>
            <span style={{ position: 'absolute', top: -4, right: -4, background: '#DC2626', color: '#fff', fontSize: 9, borderRadius: '50%', width: 14, height: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#DC2626', textAlign: 'right' }}>Dr. Sarah Chen</div>
              <div style={{ fontSize: 10, color: '#9CA3AF', textAlign: 'right', letterSpacing: '0.08em' }}>CHIEF ADMINISTRATOR</div>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#DC2626', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14 }}>SC</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', minHeight: 'calc(100vh - 57px)' }}>
        {/* Sidebar */}
        <aside style={{ width: 160, background: '#fff', borderRight: '1px solid #F3F4F6', padding: '24px 0', flexShrink: 0 }}>
          <div style={{ padding: '0 20px 24px', borderBottom: '1px solid #F3F4F6', marginBottom: 8 }}>
            <div style={{ color: '#DC2626', fontWeight: 800, fontSize: 16, lineHeight: 1.1 }}>BloodConnect</div>
            <div style={{ color: '#9CA3AF', fontSize: 11, marginTop: 2 }}>Admin Console</div>
          </div>
          {[
            { icon: '⊞', label: 'Dashboard', active: true },
            { icon: '👥', label: 'Donors', active: false },
            { icon: '✳️', label: 'Emergencies', active: false },
            { icon: '📊', label: 'Analytics', active: false },
            { icon: '⚙️', label: 'Settings', active: false },
          ].map(item => (
            <div key={item.label} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '11px 20px',
              background: item.active ? '#FEF2F2' : 'transparent',
              color: item.active ? '#DC2626' : '#6B7280',
              fontWeight: item.active ? 700 : 500,
              fontSize: 13, cursor: 'pointer', borderLeft: item.active ? '3px solid #DC2626' : '3px solid transparent',
            }}>
              <span>{item.icon}</span>{item.label}
            </div>
          ))}
          <div style={{ position: 'absolute', bottom: 24, left: 12 }}>
            <button style={{ background: '#DC2626', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 16px', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              + New Donation
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, padding: '28px 24px', overflowY: 'auto' }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: '#DC2626', marginBottom: 4 }}>Operational Overview</h1>
          <p style={{ color: '#6B7280', fontSize: 13, marginBottom: 24 }}>Real-time status of blood supply logistics and donor engagement.</p>

          {/* Stat Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 20 }}>
            {/* Total Donors */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 20px', border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ background: '#EFF6FF', borderRadius: 8, padding: 8, fontSize: 20 }}>👥</div>
                <span style={{ color: '#16A34A', fontSize: 12, fontWeight: 600 }}>↑ +12%</span>
              </div>
              <div style={{ color: '#6B7280', fontSize: 11, marginTop: 12, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Total Donors</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#111827', marginTop: 2 }}>24,892</div>
            </div>

            {/* Active Emergencies */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 20px', border: '2px solid #DC2626', boxShadow: '0 1px 4px rgba(220,38,38,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ background: '#FEE2E2', borderRadius: 8, padding: 8, fontSize: 20 }}>🚨</div>
                <span style={{ color: '#DC2626', fontSize: 12, fontWeight: 700 }}>! 3 Critical</span>
              </div>
              <div style={{ color: '#6B7280', fontSize: 11, marginTop: 12, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Active Emergencies</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#DC2626', marginTop: 2 }}>18</div>
            </div>

            {/* Broadcast Analytics */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 20px', border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ background: '#F0FDF4', borderRadius: 8, padding: 8, fontSize: 20 }}>📡</div>
                <span style={{ color: '#6B7280', fontSize: 12, fontWeight: 500 }}>98% Reach</span>
              </div>
              <div style={{ color: '#6B7280', fontSize: 11, marginTop: 12, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Broadcast Analytics</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#111827', marginTop: 2 }}>1,240 <span style={{ fontSize: 14, fontWeight: 500, color: '#6B7280' }}>Sent today</span></div>
            </div>
          </div>

          {/* Middle Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 16, marginBottom: 20 }}>
            {/* Blood Group Availability */}
            <div style={{ background: '#fff', borderRadius: 12, padding: 20, border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#DC2626', fontWeight: 700, fontSize: 15 }}>
                  ❤️ Blood Group Availability
                </div>
                <button style={{ fontSize: 12, border: '1px solid #E5E7EB', borderRadius: 6, padding: '4px 10px', background: '#fff', color: '#374151', cursor: 'pointer' }}>
                  {stockView}
                </button>
              </div>
              {/* Bar chart */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 140, paddingBottom: 8 }}>
                {bloodGroups.map(bg => (
                  <div key={bg.type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#DC2626', marginBottom: 4 }}>{bg.units}</div>
                    <div style={{
                      width: '100%', background: bg.units < 100 ? '#FEE2E2' : '#FECACA',
                      borderRadius: '4px 4px 0 0',
                      height: `${(bg.units / maxUnits) * 100}px`,
                      minHeight: 8,
                      transition: 'height 0.3s',
                    }} />
                    <div style={{ fontSize: 11, color: '#6B7280', marginTop: 6 }}>{bg.type}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Area Distribution */}
            <div style={{ background: '#fff', borderRadius: 12, padding: 20, border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#111827', marginBottom: 16 }}>Area Distribution</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {areaDistribution.map(a => (
                  <div key={a.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                      <span style={{ fontSize: 12, color: '#374151' }}>{a.name}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>{a.pct}%</span>
                    </div>
                    <div style={{ height: 5, background: '#F3F4F6', borderRadius: 99 }}>
                      <div style={{ height: '100%', width: `${a.pct}%`, background: a.color, borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
              <button style={{ marginTop: 18, fontSize: 12, color: '#DC2626', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, padding: 0 }}>
                View Full Geographic Report →
              </button>
            </div>
          </div>

          {/* Bottom Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 16 }}>
            {/* Recent Donation Activity */}
            <div style={{ background: '#fff', borderRadius: 12, padding: 20, border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontWeight: 700, fontSize: 15, color: '#111827' }}>Recent Donation Activity</span>
                <button style={{ fontSize: 12, color: '#DC2626', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Export CSV</button>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                    {['DONOR NAME', 'TYPE', 'LOCATION', 'STATUS', 'TIME'].map(h => (
                      <th key={h} style={{ textAlign: 'left', fontSize: 10, color: '#9CA3AF', fontWeight: 700, padding: '0 8px 10px', letterSpacing: '0.06em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map((r, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #F9FAFB' }}>
                      <td style={{ padding: '14px 8px', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#FEE2E2', color: '#DC2626', fontWeight: 700, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{r.initials}</div>
                        <span style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>{r.name}</span>
                      </td>
                      <td style={{ padding: '14px 8px' }}>
                        <span style={{ background: '#FEE2E2', color: '#DC2626', fontWeight: 700, fontSize: 12, padding: '3px 8px', borderRadius: 4 }}>{r.type}</span>
                      </td>
                      <td style={{ padding: '14px 8px', fontSize: 13, color: '#6B7280' }}>{r.location}</td>
                      <td style={{ padding: '14px 8px' }}>
                        <span style={{ background: r.statusColor + '22', color: r.statusColor, fontWeight: 600, fontSize: 12, padding: '3px 10px', borderRadius: 12 }}>● {r.status}</span>
                      </td>
                      <td style={{ padding: '14px 8px', fontSize: 12, color: '#9CA3AF' }}>{r.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Live Activity + Heatmap */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: '#fff', borderRadius: 12, padding: 20, border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: '#111827' }}>Live Activity</span>
                  <span style={{ width: 8, height: 8, background: '#DC2626', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1.5s infinite' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {liveActivity.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10 }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>{item.icon}</div>
                      <div>
                        <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.4, margin: 0 }}>{item.text}</p>
                        <p style={{ fontSize: 11, color: '#9CA3AF', margin: '3px 0 0' }}>{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regional Heatmap card */}
              <div style={{ background: '#111827', borderRadius: 12, padding: 16, position: 'relative', overflow: 'hidden', minHeight: 140 }}>
                <div style={{ position: 'absolute', top: 10, right: 10, background: '#DC2626', color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4, letterSpacing: '0.06em' }}>LIVE MONITOR</div>
                {/* Heatmap visual */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 80 }}>
                  {[...Array(6)].map((_, ri) => (
                    <div key={ri} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {[...Array(5)].map((_, ci) => {
                        const intensity = Math.random();
                        return <div key={ci} style={{ width: 12, height: 12, borderRadius: 2, margin: 1.5, background: intensity > 0.7 ? '#DC2626' : intensity > 0.4 ? '#F87171' : '#374151', opacity: 0.7 + intensity * 0.3 }} />;
                      })}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff' }}>
                    <span style={{ fontSize: 13 }}>📍</span>
                    <span style={{ fontSize: 13, fontWeight: 700 }}>Regional Heatmap</span>
                  </div>
                  <p style={{ color: '#9CA3AF', fontSize: 11, margin: '4px 0 0' }}>Visualizing critical demand centers across the tri-state area.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}