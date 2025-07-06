import { Trophy, Target, Users2, Award } from "lucide-react";
import fencerPortrait from "@assets/nathanael-desmeules-qcVOxxM3RIs-unsplash_1751756648718.jpg";
import fencerWithWeapon from "@assets/nathanael-desmeules-FUNty9nOj-k-unsplash_1751756648718.jpg";
import tournamentScene from "@assets/pexels-artempodrez-5941996_1751756648718.jpg";

export default function TournamentHighlights() {
  const highlights = [
    {
      image: fencerPortrait,
      title: "Youth Championships",
      subtitle: "Regional Competition",
      icon: Trophy,
      description: "Our students compete in regional and national youth tournaments, building confidence and skills"
    },
    {
      image: fencerWithWeapon,
      title: "Training Excellence",
      subtitle: "Professional Coaching",
      icon: Target,
      description: "Elite-level training methods adapted for young athletes in a supportive environment"
    },
    {
      image: tournamentScene,
      title: "Team Building",
      subtitle: "Lamorinda Community",
      icon: Users2,
      description: "Building lifelong friendships and team spirit through the sport of fencing"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-olympic-gold/10 text-olympic-gold font-semibold mb-4">
            <Award className="w-4 h-4 mr-2" />
            Tournament Excellence
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-academy-gray mb-4">
            Where Champions Are Made
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the excitement of competitive fencing with proper training and supportive community
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={highlight.image} 
                  alt={highlight.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-olympic-gold rounded-full flex items-center justify-center mr-3">
                      <highlight.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">{highlight.subtitle}</h3>
                      <p className="text-blue-100 text-xs">{highlight.title}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-academy-gray mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-olympic-blue to-fencing-navy text-white font-semibold">
            <Trophy className="w-5 h-5 mr-2" />
            Preparing the next generation of elite fencers!
          </div>
        </div>
      </div>
    </section>
  );
}