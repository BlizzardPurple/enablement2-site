import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section style={{ padding: 'clamp(2rem, 5vw, 3.5rem) 0 clamp(1rem, 3vw, 2rem)', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="badge" style={{ marginBottom: '1rem' }}>AI-Powered Campaign Setup</span>
        <h1 style={{ maxWidth: 640, margin: '1rem auto' }}>
          From <span style={{ color: 'var(--n-pink)' }}>2 hours</span> to{' '}
          <span className="text-gradient">2 minutes</span>
        </h1>
        <p style={{ maxWidth: 520, margin: '0 auto', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
          Enablement 2.0 uses AI to read your media plan and auto-populate N1 Ads campaigns.
        </p>
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: '1.5rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {['var(--n-turquoise)', 'var(--n-purple)', 'var(--n-pink)', 'var(--n-orange)'].map((color, i) => (
            <motion.span
              key={i}
              style={{ width: 10, height: 10, borderRadius: '50%', background: color }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.25, ease: 'easeInOut' }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
