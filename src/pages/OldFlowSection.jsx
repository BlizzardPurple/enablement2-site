import Section from '../components/Section';
import ScreenshotPlaceholder from '../components/ScreenshotPlaceholder';

const steps = [
  {
    title: 'Campaign Details',
    desc: 'Manually fill in advertiser, brand, campaign name, flight dates, and reporting preferences.',
  },
  {
    title: 'Digital Details — Site & Placement Count',
    desc: 'Select a site, define the number of placements. Repeat for each site.',
  },
  {
    title: 'Digital Details — Placement Configuration',
    desc: 'For every placement: set friendly name, creative name, creative ID, placement type, and notes. One by one.',
  },
  {
    title: 'Review & Submit',
    desc: 'Scroll through the full list, hope nothing is mistyped, and submit.',
  },
];

export default function OldFlowSection() {
  return (
    <Section id="old-flow">
      <span className="badge" style={{ background: 'var(--n-pink)' }}>
        Before
      </span>
      <h2 style={{ marginTop: '0.75rem' }}>
        The Old Way — N1 Ads Campaign Flow
      </h2>
      <p>
        Every field entered by hand. Every placement configured individually.
        A 100-placement campaign could take <strong>~2 hours</strong> of repetitive data entry.
      </p>

      <div className="step-flow">
        {steps.map((s, i) => (
          <div className="step-item" key={i}>
            <div className="step-number old">{i + 1}</div>
            <div className="step-content">
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Replace these with actual screenshots */}
      <div className="comparison-grid" style={{ marginTop: '2rem' }}>
        <ScreenshotPlaceholder label="Campaign Details form" />
        <ScreenshotPlaceholder label="Digital Details — placement entry" />
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <ScreenshotPlaceholder label="Manual placement configuration (full view)" />
      </div>
    </Section>
  );
}
