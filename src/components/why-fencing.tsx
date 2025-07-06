import { Brain, GraduationCap, Heart } from "lucide-react";

export default function WhyFencing() {
  const benefits = [
    {
      icon: Brain,
      title: "Mental Excellence",
      description: "Builds confidence, discipline, and mental agility through strategic thinking and quick decision-making",
      gradient: "from-olympic-blue to-fencing-navy"
    },
    {
      icon: GraduationCap,
      title: "College Scholarships",
      description: "College admissions love it - demonstrates discipline, individuality, and commitment to excellence",
      gradient: "from-olympic-gold to-yellow-500"
    },
    {
      icon: Heart,
      title: "Fun & Safe",
      description: "It's fun (and surprisingly safe!) - lower injury rates than most youth sports with high engagement",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-academy-gray mb-4">
            Why Fencing?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why fencing is the perfect sport for developing young champions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-academy-gray mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
