
import AboutHero from "@/components/AboutHero";
import StatsSection from "@/components/StatsSection";
import ValuesSection from "@/components/ValuesSection";
import MeetMichael from "@/components/MeetMichael";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <StatsSection />
      <ValuesSection />
      <TestimonialsSection />
      <MeetMichael />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
