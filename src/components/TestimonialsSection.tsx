
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Michael's approach to insurance planning was refreshingly clear and strategic. He helped us understand exactly what we needed.",
      author: "Dr. Sarah Johnson",
      role: "Medical Professional"
    },
    {
      text: "The level of personalized service and attention to detail we received was exceptional. Highly recommend Walker Insurance.",
      author: "James Wilson",
      role: "Business Owner"
    },
    {
      text: "Finally found an insurance advisor who speaks our language and understands our unique needs as professionals.",
      author: "Dr. Mark Thompson",
      role: "Dental Practice Owner"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0047AB] mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#0047AB] text-[#0047AB]" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-[#0047AB]">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
