import Section from '../components/Section';

export default function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <h2>How It Works</h2>

      <div className="step-flow" style={{ marginTop: '1rem' }}>
        <div className="step-item">
          <div className="step-number new">1</div>
          <div className="step-content">
            <h4>File Upload</h4>
            <p>User uploads a media plan (CSV/XLSX) through the UI.</p>
          </div>
        </div>
        <div className="step-item">
          <div className="step-number new">2</div>
          <div className="step-content">
            <h4>MCP Server API</h4>
            <p>File is sent to the MCP server, which runs the extraction pipeline.</p>
          </div>
        </div>
        <div className="step-item">
          <div className="step-number new">3</div>
          <div className="step-content">
            <h4>AI Extraction (~30s)</h4>
            <p>AI reads the media plan and extracts structured placement data.</p>
          </div>
        </div>
        <div className="step-item">
          <div className="step-number new">4</div>
          <div className="step-content">
            <h4>Validation & Population</h4>
            <p>Data is validated and auto-populated into the campaign fields.</p>
          </div>
        </div>
      </div>

      <div
        className="card"
        style={{
          marginTop: '1.5rem',
          background: 'linear-gradient(135deg, rgba(57,196,195,.06), rgba(120,46,255,.06))',
          borderColor: 'var(--n-turquoise)',
        }}
      >
        <h4 className="text-gradient" style={{ fontSize: '1rem' }}>Tech Stack</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
          {['MCP Server API', 'AI Extraction', 'CSV / XLSX Input', 'Field Validation', 'Auto-Population', 'Batch Processing'].map((tag) => (
            <span key={tag} style={{ fontSize: '0.78rem', padding: '0.3em 0.8em', borderRadius: 'var(--radius-sm)', background: 'rgba(120,46,255,.10)', color: 'var(--n-navy)', fontWeight: 500 }}>{tag}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}
