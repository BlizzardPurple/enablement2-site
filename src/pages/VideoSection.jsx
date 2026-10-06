import Section from '../components/Section';

/**
 * Video demo — prominently placed near the top of the page.
 * The video is initially paused; user clicks to play.
 * Using a native <video> element for local mp4 (no need for react-player overhead).
 */
export default function VideoSection() {
  return (
    <Section id="demo">
      <h2>Introduction</h2>
      <p>A quick overview of what Enablement 2.0 is and the problem it solves.</p>

      <div
        style={{
          marginTop: '1.5rem',
          borderRadius: 'var(--radius-md)',
          border: '2px solid var(--n-turquoise)',
          boxShadow: '0 0 0 4px rgba(57, 196, 195, 0.10), var(--shadow-lg)',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        <video
          src="/demo.mp4"
          controls
          style={{ width: '100%', display: 'block' }}
          preload="metadata"
        />
      </div>
    </Section>
  );
}
