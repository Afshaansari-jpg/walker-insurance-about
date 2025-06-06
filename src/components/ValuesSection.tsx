
import { ShieldCheck, Eye, UserRound } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Trust",
      description: "Built on years of experience and integrity in financial services."
    },
    {
      icon: Eye,
      title: "Clarity",
      description: "Clear communication and transparent processes every step of the way."
    },
    {
      icon: UserRound,
      title: "Personalization",
      description: "Tailored solutions that match your unique needs and goals."
    }
  ];

  return (
    <section className="py-16 bg-[#0047AB] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-100">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
