import { MapPin, Users, Medal, Calendar } from "lucide-react";

export default function ProgramDetails() {
  const details = [
    {
      icon: MapPin,
      title: "Location",
      main: "TBD",
      sub: "Orinda, Lafayette, or Moraga, CA",
      color: "bg-olympic-blue"
    },
    {
      icon: Users,
      title: "Age Group",
      main: "Ages 7–18",
      sub: "All experience levels",
      color: "bg-olympic-gold"
    },
    {
      icon: Medal,
      title: "Focus",
      main: "Olympic-style training",
      sub: "Foil, Epee & Sabre",
      color: "bg-olympic-blue"
    },
    {
      icon: Calendar,
      title: "Launch",
      main: "Within 6 months",
      sub: "Spring 2025",
      color: "bg-olympic-gold"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-academy-gray mb-4">
            Program Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional Olympic-style training in the heart of Lamorinda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 ${detail.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <detail.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-academy-gray mb-2">{detail.title}</h3>
              <p className="text-gray-600">
                {detail.main}
                <br />
                <span className="text-sm italic">{detail.sub}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
