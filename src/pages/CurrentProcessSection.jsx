import Section from '../components/Section';
import Carousel from '../components/Carousel';
import ProtectedVideo from '../components/ProtectedVideo';

const screenshots = [
  { src: '/media/old-1.jpg', alt: 'Campaign Details — manual form entry' },
  { src: '/media/old-2.jpg', alt: 'Digital Details — site selection & placement count' },
  { src: '/media/old-3.jpg', alt: 'Placement configuration — friendly names, creatives' },
  { src: '/media/old-4.jpg', alt: 'Manually filling primary target demo' },
  { src: '/media/old-5.jpg', alt: 'Review before submission' },
];

export default function CurrentProcessSection() {
  return (
    <Section id="current-process">
      <span className="badge" style={{ background: 'var(--n-pink)' }}>Current Process</span>
      <h2 style={{ marginTop: '0.75rem' }}>N1 Ads Campaign Flow</h2>
      <p>Every field by hand. Every placement configured individually. ~2 hours for 100 placements.</p>

      <Carousel images={screenshots} />

      <div style={{ marginTop: '1.5rem' }}>
        <ProtectedVideo
          src="/media/old-demo.mp4"
          border="2px solid var(--n-pink)"
          shadow="0 0 0 4px rgba(244, 9, 83, 0.08), var(--shadow-md)"
        />
        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>
          Video is sped up 10×
        </p>
      </div>
    </Section>
  );
}
