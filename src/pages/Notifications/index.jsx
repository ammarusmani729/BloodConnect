import { useState } from 'react';

const stats = [
  { label: 'TOTAL REQUESTS', value: '1,248', note: '+12%', noteColor: '#16A34A' },
  { label: 'ACTIVE EMERGENCIES', value: '42', dot: true },
  { label: 'MATCHED DONORS', value: '892', color: '#2563EB' },
  { label: 'CONFIRMED DONORS', value: '756', color: '#111827' },
];

const requests = [
  { blood: 'O-', badge: 'CRITICAL', badgeColor: '#DC2626', badgeBg: '#FEE2E2', hospital: "St. Mary's General Hospital", posted: '5m ago', matches: 2, status: 'In Progress', statusColor: '#2563EB', border: '#DC2626' },
  { blood: 'A+', badge: 'URGENT', badgeColor: '#fff', badgeBg: '#1F2937', hospital: 'City Trauma Center', posted: '18m ago', matches: 8, extra: '+5', status: 'In Progress', statusColor: '#2563EB', border: '#1F2937' },
  { blood: 'B-', badge: 'STABLE', badgeColor: '#fff', badgeBg: '#2563EB', hospital: 'Red Cross Hub East', posted: '45m ago', matches: 0, status: 'Awaiting', statusColor: '#9CA3AF', border: '#2563EB' },
  { blood: 'AB+', badge: 'CRITICAL', badgeColor: '#DC2626', badgeBg: '#FEE2E2', hospital: 'Mercy Pediatric Clinic', posted: '2m ago', matches: 1, status: 'In Progress', statusColor: '#2563EB', border: '#DC2626' },
];

const donors = [
  { initials: 'MT', name: 'Marcus Thompson', blood: 'O-', area: 'DOWNTOWN DISTRICT', tag: 'Available Now', tagColor: '#16A34A', tagBg: '#F0FDF4' },
  { initials: 'SJ', name: 'Sarah Jenkins', blood: 'A+', area: 'NORTH VALLEY', tag: 'Available Now', tagColor: '#16A34A', tagBg: '#F0FDF4' },
  { initials: 'DC', name: 'David Chen', blood: 'AB+', area: 'WEST RIVERSIDE', tag: 'En Route', tagColor: '#D97706', tagBg: '#FEF3C7' },
];

const stock = [
  { type: 'O- Negative', level: 12, max: 100, label: 'Critical (12 units)', barColor: '#DC2626' },
  { type: 'A+ Positive', level: 84, max: 100, label: 'Stable (84 units)', barColor: '#2563EB' },
];

const avatarBg = { MT: '#6B7280', SJ: '#9CA3AF', DC: '#4B5563' };

export default function Dashboard() {
  const [search, setSearch] = useState('');

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#FFF5F5', minHeight: '100vh', display: 'flex' }}>

      {/* Sidebar */}
      <aside style={{ width: 210, background: '#fff', borderRight: '1px solid #FCE7E7', padding: '28px 0', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh' }}>
        <div>
          <div style={{ padding: '0 20px 24px' }}>
            <div style={{ color: '#DC2626', fontWeight: 900, fontSize: 20, letterSpacing: '-0.5px' }}>HEMOSYNC</div>
            <div style={{ color: '#9CA3AF', fontSize: 12, marginTop: 2 }}>Regional Hub</div>
          </div>
          {[
            { icon: '⊞', label: 'Dashboard', active: true },
            { icon: '📦', label: 'Inventory' },
            { icon: '👥', label: 'Donor Database' },
            { icon: '✳️', label: 'Active Requests' },
            { icon: '🚚', label: 'Logistics' },
          ].map(item => (
            <div key={item.label} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '11px 20px',
              background: item.active ? '#FEF2F2' : 'transparent',
              color: item.active ? '#DC2626' : '#6B7280',
              fontWeight: item.active ? 700 : 500, fontSize: 13, cursor: 'pointer',
              borderRight: item.active ? '3px solid #DC2626' : '3px solid transparent',
            }}>
              <span>{item.icon}</span>{item.label}
            </div>
          ))}
          <div style={{ padding: '20px 20px 0' }}>
            <button style={{ background: '#DC2626', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontSize: 13, fontWeight: 700, cursor: 'pointer', width: '100%' }}>
              🚨 Emergency Alert
            </button>
          </div>
        </div>
        <div style={{ padding: '0 20px 20px' }}>
          {[{ icon: '⚙️', label: 'Settings' }, { icon: '❓', label: 'Help Center' }].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 0', color: '#6B7280', fontSize: 13, cursor: 'pointer' }}>
              <span>{item.icon}</span>{item.label}
            </div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top bar */}
        <div style={{ background: '#fff', borderBottom: '1px solid #FCE7E7', padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 800, fontSize: 18, color: '#DC2626' }}>Emergency Matcher</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#FEF2F2', borderRadius: 8, padding: '8px 16px', width: 320 }}>
            <span style={{ color: '#9CA3AF' }}>🔍</span>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search donors, requests, or hospitals..." style={{ border: 'none', outline: 'none', fontSize: 13, background: 'transparent', color: '#374151', width: '100%' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{ fontSize: 18, cursor: 'pointer', position: 'relative' }}>🔔</span>
            <span style={{ fontSize: 18, cursor: 'pointer' }}>🕐</span>
            <span style={{ fontSize: 18, cursor: 'pointer' }}>❓</span>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#9CA3AF', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>AU</div>
          </div>
        </div>

        <main style={{ flex: 1, padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Stat Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: '18px 20px', border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.08em', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                  {s.label}
                  {s.dot && <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#DC2626', display: 'inline-block' }} />}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 28, fontWeight: 800, color: s.color || '#111827' }}>{s.value}</span>
                  {s.note && <span style={{ fontSize: 13, fontWeight: 600, color: s.noteColor }}>{s.note}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Middle: Active Requests + Matched Donors */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>
            {/* Active Requests */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontWeight: 800, fontSize: 17, color: '#111827' }}>Active Requests</span>
                  <span style={{ background: '#DC2626', color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4, letterSpacing: '0.06em' }}>LIVE</span>
                </div>
                <button style={{ fontSize: 13, color: '#DC2626', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All ›</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {requests.map((r, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: 12, padding: '16px 18px', border: '1px solid #F3F4F6', borderTop: `3px solid ${r.border}`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <span style={{ fontSize: 22, fontWeight: 900, color: '#DC2626' }}>{r.blood}</span>
                      <span style={{ background: r.badgeBg, color: r.badgeColor, fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4, letterSpacing: '0.06em' }}>{r.badge}</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#111827', marginBottom: 6 }}>{r.hospital}</div>
                    <div style={{ fontSize: 11, color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: 4, marginBottom: 12 }}>
                      <span>🕐</span> Posted {r.posted}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        {r.matches > 0 ? (
                          <>
                            <div style={{ display: 'flex' }}>
                              {[...Array(Math.min(r.matches, 2))].map((_, j) => (
                                <div key={j} style={{ width: 22, height: 22, borderRadius: '50%', background: '#9CA3AF', border: '2px solid #fff', marginLeft: j > 0 ? -6 : 0 }} />
                              ))}
                            </div>
                            {r.extra && <span style={{ fontSize: 11, color: '#6B7280' }}>{r.extra}</span>}
                            <span style={{ fontSize: 11, color: '#6B7280' }}>{r.matches} matching</span>
                          </>
                        ) : (
                          <span style={{ fontSize: 11, color: '#9CA3AF' }}>No matches yet</span>
                        )}
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 600, color: r.statusColor }}>{r.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {/* Matched Donors */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '18px', border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: '#111827' }}>Matched Donors</span>
                  <span style={{ fontSize: 18, cursor: 'pointer', color: '#9CA3AF' }}>⊞</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {donors.map((d, i) => (
                    <div key={i} style={{ borderBottom: i < donors.length - 1 ? '1px solid #F9FAFB' : 'none', paddingBottom: i < donors.length - 1 ? 12 : 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: avatarBg[d.initials], color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{d.initials}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <span style={{ fontWeight: 700, fontSize: 13, color: '#111827' }}>{d.name}</span>
                            <span style={{ background: d.tagBg, color: d.tagColor, fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4, whiteSpace: 'nowrap' }}>{d.tag}</span>
                          </div>
                          <div style={{ fontSize: 10, color: '#9CA3AF', marginTop: 2 }}>
                            <span style={{ color: '#DC2626', fontWeight: 700 }}>{d.blood}</span> {d.area}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                        {['WhatsApp', 'Email'].map(action => (
                          <button key={action} style={{ border: '1px solid #E5E7EB', borderRadius: 6, padding: '6px', fontSize: 11, fontWeight: 600, color: '#374151', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                            {action === 'WhatsApp' ? '💬' : '✉️'} {action}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stock Check */}
              <div style={{ background: '#FEF2F2', borderRadius: 12, padding: '16px 18px', border: '1px solid #FECACA' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.1em', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', marginBottom: 12 }}>Quick Stock Check</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {stock.map((s, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                        <span style={{ fontSize: 12, color: '#374151', fontWeight: 600 }}>{s.type}</span>
                        <span style={{ fontSize: 12, fontWeight: 600, color: s.barColor }}>{s.label}</span>
                      </div>
                      <div style={{ height: 5, background: '#F3F4F6', borderRadius: 99 }}>
                        <div style={{ height: '100%', width: `${s.level}%`, background: s.barColor, borderRadius: 99 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}