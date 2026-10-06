import Section from '../components/Section';
import Carousel from '../components/Carousel';
import ProtectedVideo from '../components/ProtectedVideo';

const screenshots = [
  { src: '/media/new-1.jpg', alt: 'Media plan upload — CSV or XLSX' },
  { src: '/media/new-2.jpg', alt: 'All details will be filled by AI' },
];

const steps = [
  { title: 'Upload Media Plan', desc: 'Drop a CSV or XLSX file.' },
  { title: 'AI Extraction', desc: 'AI extracts all placement data — creatives, IDs, friendly names, sites, notes — in ~30 seconds.' },
  { title: 'Review & Save', desc: 'Check the auto-populated table, tweak if needed, save. Total: ~2 minutes.' },
];

export default function NewProcessSection() {
  return (
    <Section id="new-process">
      <span className="badge">Enablement 2.0</span>
      <h2 style={{ marginTop: '0.75rem' }}>The New Way</h2>
      <p>Upload your media plan. AI populates the campaign. You just review and save.</p>

      <div className="step-flow">
        {steps.map((s, i) => (
          <div className="step-item" key={i}>
            <div className="step-number new">{i + 1}</div>
            <div className="step-content">
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="card"
        style={{
          marginTop: '1.5rem',
          background: 'linear-gradient(135deg, rgba(57,196,195,.06), rgba(120,46,255,.06))',
          borderColor: 'var(--n-turquoise)',
        }}
      >
        <h4 className="text-gradient" style={{ fontSize: '1rem' }}>What the AI Extracts</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
          {['Placement ID', 'Site', 'Site Description', 'Friendly Name', 'Creative Name', 'Creative ID', 'Notes', 'Placement Type', 'Flight Dates'].map((field) => (
            <span key={field} style={{ fontSize: '0.78rem', padding: '0.3em 0.8em', borderRadius: 'var(--radius-sm)', background: 'rgba(57,196,195,.12)', color: 'var(--n-navy)', fontWeight: 500 }}>{field}</span>
          ))}
        </div>
      </div>

      <Carousel images={screenshots} />

      <div style={{ marginTop: '1.5rem' }}>
        <ProtectedVideo
          src="/media/new-demo.mp4"
          border="2px solid var(--n-turquoise)"
          shadow="0 0 0 4px rgba(57, 196, 195, 0.10), var(--shadow-md)"
        />
      </div>
    </Section>
  );
}
