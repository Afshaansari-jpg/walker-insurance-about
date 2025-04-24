
import { ShieldCheck, EyeCheck, UserRound } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-walker-blue">
              Insurance That Makes Sense
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Walker Insurance, we believe in making insurance clear, 
              accessible, and aligned with your goals. Our expertise is 
              in crafting protection that fits your unique journey.
            </p>
            <button className="px-8 py-3 bg-walker-blue text-white rounded-lg 
              hover:bg-blue-500 transition-colors duration-300 shadow-lg">
              Schedule a Consultation
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Professional desk setup"
              className="rounded-2xl shadow-2xl"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
