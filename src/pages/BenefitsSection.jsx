import { motion } from 'framer-motion';
import Section from '../components/Section';

const perfData = [
  { placements: '10', time: '16s', cost: '$0.06' },
  { placements: '30', time: '31s', cost: '$0.13' },
  { placements: '50', time: '50s', cost: '$0.19' },
];

export default function BenefitsSection() {
  return (
    <Section id="benefits">
      <h2>Benefits & Scalability</h2>

      {/* Hero stat — 4× throughput */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          marginTop: '1.5rem',
          padding: '2.5rem 2rem',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, var(--n-navy), var(--n-navy-light))',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background accent circles */}
        <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(57,196,195,0.08)' }} />
        <div style={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(120,46,255,0.08)' }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--n-turquoise)', lineHeight: 1 }}>
            4×
          </div>
          <div style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', marginTop: '0.5rem', fontWeight: 600 }}>
            Throughput increase
          </div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', marginTop: '0.5rem', marginBottom: 0, maxWidth: 'none' }}>
            Same team. No new hires. The hiring bottleneck is gone.
          </p>
        </motion.div>
      </motion.div>

      {/* Execution Cost & Latency */}
      <h3 style={{ marginTop: '2rem' }}>Execution Cost & Latency</h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {perfData.map((row, i) => (
          <motion.div
            key={row.placements}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            style={{ textAlign: 'center', padding: '1.25rem' }}
          >
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', fontWeight: 600 }}>
              {row.placements} placements
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--n-navy)', marginTop: '0.4rem' }}>
              {row.time}
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--n-turquoise)', marginTop: '0.25rem' }}>
              {row.cost}
            </div>
          </motion.div>
        ))}
      </div>
      <p style={{ fontSize: '0.88rem', marginTop: '0.75rem' }}>
        Under <strong>20 cents</strong> for tasks that previously cost hours of manual effort.
      </p>

      {/* Roadmap */}
      <h3 style={{ marginTop: '2rem' }}>What's Next</h3>
      <p style={{ fontSize: '0.88rem' }}>
        Current single-pass limit is ~50 placements. For 100+ placement enterprise plans, the next release adds
        <strong> parallel batch chunking</strong> — splitting into 40–50 placement blocks, running parallel LLM calls, and merging output back.
      </p>
    </Section>
  );
}
