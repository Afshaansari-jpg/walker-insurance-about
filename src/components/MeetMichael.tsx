
import { Award, Briefcase, MapPin } from "lucide-react";

const MeetMichael = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Meet Michael Walker</h2>
            <p className="text-gray-600 leading-relaxed">
              Michael Walker is a licensed Canadian insurance advisor with more than 12 years of experience
              helping clients protect their income, build their legacy, and prepare for life's unknowns.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Award className="text-walker-blue w-6 h-6" />
                <span>CLU (Chartered Life Underwriter) & TEP (Trust and Estate Practitioner)</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="text-walker-blue w-6 h-6" />
                <span>Specialized in serving professionals and business owners</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-walker-blue w-6 h-6" />
                <span>Fully digital practice serving clients across Canada</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Michael believes insurance should complement—not compete with—the tax and legal strategies
              developed by your advisory team. He's here to bring structure and protection, not complication.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Outside of work, Michael enjoys real estate, spending time at the lake with his wife and son,
              and traveling the world — although not as often these days.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Michael Walker"
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

export default MeetMichael;
