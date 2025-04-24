
const CTASection = () => {
  return (
    <section className="py-20 bg-[#0047AB]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Secure Your Financial Future?
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Let's have a conversation about how we can help protect your income
          and preserve your legacy for generations to come.
        </p>
        <button className="px-8 py-3 bg-white text-[#0047AB] rounded-lg 
          hover:bg-gray-100 transition-colors duration-300 shadow-lg font-semibold">
          Schedule Your Free Consultation
        </button>
      </div>
    </section>
  );
};

export default CTASection;
