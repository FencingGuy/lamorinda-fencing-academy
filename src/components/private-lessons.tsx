import { Calendar, Clock, User, AlertCircle, Trophy, Target } from "lucide-react";

export default function PrivateLessons() {
  const coaches = [
    {
      name: "Gabriel Sinkin",
      weapon: "Foil",
      experience: "World Championships Competitor",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Steve Gerberman", 
      weapon: "Foil",
      experience: "US National Team Member",
      image: "/api/placeholder/150/150"
    }
  ];

  const lessonDurations = [
    { duration: "15 minutes", description: "Quick technique focus" },
    { duration: "30 minutes", description: "Standard lesson format" },
    { duration: "1 hour", description: "Comprehensive training" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-olympic-blue/20 text-olympic-blue font-semibold mb-4">
            <User className="w-4 h-4 mr-2" />
            One-on-One Training
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-academy-gray mb-6">
            Private Lessons
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Getting one-on-one attention will show your child the correct way to handle the foil or epee to give him or her the highest advantage. One of the most important aspects of a fencer's skill development and progression is 1-on-1 lessons with a coach. We offer foil and epee lessons throughout the week, feel free to schedule your lessons at anytime.
          </p>
        </div>
      </div>
    </section>
  );
}