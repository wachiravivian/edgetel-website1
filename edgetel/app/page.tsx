import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Features from "@/components/Features";
import CoverageChecker from "@/components/CoverageChecker";
//import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <Packages />
      <Features />
      <CoverageChecker />
      <CTABanner />
    </div>
  );
}
