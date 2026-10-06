import Section from '../components/Section';
import ProtectedVideo from '../components/ProtectedVideo';

export default function ProblemStatementSection() {
  return (
    <Section id="problem">
      <h2>Introduction</h2>
      <ProtectedVideo
        src="/demo.mp4"
        border="2px solid var(--n-turquoise)"
        shadow="0 0 0 4px rgba(57, 196, 195, 0.10), var(--shadow-lg)"
      />
    </Section>
  );
}
