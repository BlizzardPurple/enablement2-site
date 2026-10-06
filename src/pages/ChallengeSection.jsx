import Section from '../components/Section';

const painPoints = [
  { icon: '⏱️', title: '~2 hours', desc: 'Per campaign with 100 placements.' },
  { icon: '🔁', title: 'Repetitive', desc: 'Same steps for every single placement.' },
  { icon: '⚠️', title: 'Error-prone', desc: 'Typos, mismatched IDs, copy-paste mistakes.' },
  { icon: '📈', title: 'No shortcuts', desc: 'Time scales linearly with placement count.' },
];

export default function ChallengeSection() {
  return (
    <Section id="challenge">
      <h2>The Challenge</h2>
      <p>Every placement configured one at a time.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
        {painPoints.map((p) => (
          <div className="card" key={p.title} style={{ textAlign: 'center', padding: '1.25rem 1rem' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{p.icon}</div>
            <h4 style={{ color: 'var(--n-pink)', fontSize: '0.95rem' }}>{p.title}</h4>
            <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
