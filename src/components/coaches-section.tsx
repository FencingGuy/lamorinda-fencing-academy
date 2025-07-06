import { Award, Target, Trophy, Medal } from "lucide-react";

export default function CoachesSection() {
  const coaches = [
    {
      name: "Gabriel Sinkin",
      period: "2001-06",
      winRate: ".729",
      record: "113-30",
      weapon: "foil",
      achievements: [
        "World Championships Competitor",
        "NYU Fencing Scholarship Recipient",
        "College Career: 113-30 record (.729 win %)"
      ]
    },
    {
      name: "Steve Gerberman",
      period: "2001-06",
      winRate: ".711",
      record: "110-30", 
      weapon: "foil",
      achievements: [
        "U.S. National Team Member",
        "Stanford Fencing Scholarship Recipient",
        "College Career: 110-30 record (.711 win %)"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-academy-gray to-fencing-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-olympic-gold/20 text-olympic-gold font-semibold mb-4">
            <Medal className="w-4 h-4 mr-2" />
            Elite-Level Coaching
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Meet Our Coaches
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Learn from former World Championship competitors and scholarship recipients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {coaches.map((coach, index) => (
            <div key={index} className="bg-black/95 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:bg-white transition-all duration-300 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-olympic-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-academy-gray mb-2">{coach.name}</h3>
                {coach.period && (
                  <p className="text-olympic-gold font-semibold">{coach.period}</p>
                )}
              </div>
              
              {/* College Record Stats */}
              <div className="bg-gradient-to-r from-olympic-blue to-fencing-navy rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-olympic-gold mb-4 text-center">College Career Record</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-black text-white">{coach.winRate}</div>
                    <div className="text-sm text-blue-100">Win Percentage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-white">{coach.record}</div>
                    <div className="text-sm text-blue-100">Win-Loss Record</div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-olympic-gold text-white text-sm font-semibold">
                    <Target className="w-3 h-3 mr-1" />
                    {coach.weapon.toUpperCase()}
                  </span>
                </div>
              </div>
              
              {/* Achievements */}
              <div>
                <h4 className="text-lg font-bold text-academy-gray mb-3">Elite Background</h4>
                <ul className="space-y-2">
                  {coach.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <Award className="w-4 h-4 text-olympic-gold mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-olympic-gold to-yellow-500 text-white font-bold shadow-lg">
            <Trophy className="w-5 h-5 mr-2" />
            Combined: Over 220 College Victories
          </div>
          <p className="text-white mt-4 max-w-2xl mx-auto font-medium">
            Your child will train under coaches who competed at the highest levels of international fencing
          </p>
        </div>
      </div>
    </section>
  );
}