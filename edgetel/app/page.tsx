import Hero from "../components/Hero";
import Features from "../components/Features";
import Packages from "../components/Packages";
import CoverageChecker from "../components/CoverageChecker";
import CTABanner from "../components/CTABanner";
export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      {/* Pricing */}
      <Packages />
      {/* Coverage */}
      <CoverageChecker />
      {/* Final CTA */}
      <CTABanner />
    </div>
  );
}