import HeroSection from '../components/HeroSection';
import SustainableWork from '../components/SustainableWork';
import ImpactMetrics from '../components/ImpactMetrics';
import TrustBadges from '../components/TrustBadges';
import CallToAction from '../components/CallToAction';
import NewsHighlights from '../components/NewsHighlights';

function Home() {
  return (
    <div>
      <HeroSection />
      <SustainableWork />
      <ImpactMetrics />
      <TrustBadges />
      <CallToAction />
      <NewsHighlights />
    </div>
  );
}

export default Home;