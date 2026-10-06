import { useState } from 'react';
import PasswordGate from './pages/PasswordGate';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './pages/HeroSection';
import ProblemStatementSection from './pages/ProblemStatementSection';
import CurrentProcessSection from './pages/CurrentProcessSection';
import ChallengeSection from './pages/ChallengeSection';
import NewProcessSection from './pages/NewProcessSection';
import BenefitsSection from './pages/BenefitsSection';
import InnovationSection from './pages/InnovationSection';
import HowItWorksSection from './pages/HowItWorksSection';

export default function App() {
  const [unlocked, setUnlocked] = useState(true);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <>
      <Navbar />
      <main className="page-container">
        <HeroSection />
        <ProblemStatementSection />
        <CurrentProcessSection />
        <ChallengeSection />
        <NewProcessSection />
        <InnovationSection />
        <BenefitsSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </>
  );
}
