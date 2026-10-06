import Section from '../components/Section';
import ScreenshotPlaceholder from '../components/ScreenshotPlaceholder';

const steps = [
  {
    title: 'Upload Media Plan',
    desc: 'Drop a CSV or XLSX file. That\'s it.',
  },
  {
    title: 'AI Extraction',
    desc: 'MCP server API processes the file — placements, creative names, IDs, friendly names, sites, notes — all extracted in ~2 minutes.',
  },
  {
    title: 'Review & Confirm',
    desc: 'Verify the auto-populated table. Make any tweaks if needed. Done.',
  },
];

export default function NewFlowSection() {
  return (
    <Section id="new-flow">
      <span className="badge">After</span>
      <h2 style={{ marginTop: '0.75rem' }}>
        The New Way — Enablement 2.0
      </h2>
      <p>
        Upload your media plan. AI reads it, extracts every placement detail,
        and populates the campaign in minutes — not hours.
      </p>

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

      {/* AI-themed extraction callout */}
      <div
        className="card"
        style={{
          marginTop: '1.5rem',
          background: 'linear-gradient(135deg, rgba(57,196,195,.06), rgba(120,46,255,.06))',
          borderColor: 'var(--n-turquoise)',
        }}
      >
        <h4 className="text-gradient" style={{ fontSize: '1rem' }}>
          What the AI Extracts
        </h4>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '0.75rem',
          }}
        >
          {[
            'Placement ID',
            'Site',
            'Site Description',
            'Friendly Name',
            'Creative Name',
            'Creative ID',
            'Notes',
            'Placement Type',
            'Flight Dates',
          ].map((field) => (
            <span
              key={field}
              style={{
                fontSize: '0.78rem',
                padding: '0.3em 0.8em',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(57,196,195,.12)',
                color: 'var(--n-navy)',
                fontWeight: 500,
              }}
            >
              {field}
            </span>
          ))}
        </div>
      </div>

      {/* Replace these with actual screenshots */}
      <div className="comparison-grid" style={{ marginTop: '2rem' }}>
        <ScreenshotPlaceholder label="Media plan upload" />
        <ScreenshotPlaceholder label="AI extraction results table" />
      </div>
    </Section>
  );
}
