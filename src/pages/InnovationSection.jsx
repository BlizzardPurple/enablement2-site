import Section from '../components/Section';

const innovations = [
  {
    title: 'Semantic Understanding over Rigid Rules',
    desc: 'Claude Sonnet 4.0 reads context, not cell positions. Handles messy spreadsheets, PDFs, and foreign languages like Japanese — without custom parsing code.',
    accent: 'var(--n-purple)',
  },
  {
    title: 'Plug-and-Play Architecture (MCP)',
    desc: 'Lookup tools built on the open MCP standard. Other teams (Study Builder, Ask Nielsen) can reuse them with zero code rewrites.',
    accent: 'var(--n-turquoise)',
  },
  {
    title: 'Parallel Backend Execution',
    desc: 'Starlette API + async MCP. Brand, country, and ad-server lookups fire in parallel — not sequentially. Full campaign setup under a minute.',
    accent: 'var(--n-orange)',
  },
  {
    title: 'AI + Deterministic Guardrails',
    desc: 'AI handles document comprehension. A separate Python layer enforces business rules — date limits, required fields, error flags. No LLM guesswork in production data.',
    accent: 'var(--n-pink)',
  },
];

export default function InnovationSection() {
  return (
    <Section id="innovation">
      <h2>Innovation</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
          marginTop: '1.5rem',
        }}
      >
        {innovations.map((item) => (
          <div
            className="card"
            key={item.title}
            style={{ borderLeft: `4px solid ${item.accent}` }}
          >
            <h4 style={{ color: item.accent, fontSize: '0.95rem' }}>{item.title}</h4>
            <p style={{ fontSize: '0.88rem', marginBottom: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
