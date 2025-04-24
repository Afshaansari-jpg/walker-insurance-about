
const StatsSection = () => {
  const stats = [
    { number: "12+", label: "Years Experience" },
    { number: "500+", label: "Satisfied Clients" },
    { number: "2", label: "Professional Designations" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white">
              <div className="text-4xl font-bold text-walker-blue mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
