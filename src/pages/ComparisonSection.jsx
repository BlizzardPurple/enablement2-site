import Section from '../components/Section';

export default function ComparisonSection() {
  return (
    <Section id="comparison">
      <h2>Side-by-Side</h2>
      <p>
        What changes when AI handles the heavy lifting.
      </p>

      {/* Side-by-side comparison cards */}
      <div className="comparison-grid">
        <div className="card">
          <h3 style={{ color: 'var(--n-pink)' }}>Old Flow</h3>
          <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.8 }}>
            <li>Manual entry for every field</li>
            <li>Placement-by-placement configuration</li>
            <li>High risk of typos and mismatches</li>
            <li>Scales linearly with placement count</li>
            <li>~2 hours for 100 placements</li>
          </ul>
        </div>
        <div className="card" style={{ borderColor: 'var(--n-turquoise)' }}>
          <h3 className="text-gradient">Enablement 2.0</h3>
          <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.8 }}>
            <li>Upload once, extract everything</li>
            <li>AI parses all placements in parallel</li>
            <li>Consistent, validated output</li>
            <li>~2 minutes regardless of placement count</li>
            <li>Just review the table and confirm</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
