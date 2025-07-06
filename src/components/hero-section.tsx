import { ArrowRight, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/pexels-artempodrez-5941996_1751756648718.jpg";

export default function HeroSection() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-form');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="gold-accent inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white mb-6">
              <Star className="w-4 h-4 mr-2" />
              Now Forming Waitlist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Lamorinda Fencing Academy
              <span className="block text-olympic-gold">En Garde for Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0">
              Now forming waitlist for kids 7–18 interested in foil, epee, and sabre. Olympic-style fencing close to home.
            </p>
            
            {/* CTA Button */}
            <div className="space-y-4">
              <Button 
                onClick={scrollToWaitlist}
                className="group bg-olympic-gold hover:bg-yellow-400 text-white text-lg font-bold py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow hover:animate-none inline-flex items-center"
              >
                <Shield className="w-5 h-5 mr-3" />
                Reserve Your Spot
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-blue-200 max-w-md mx-auto lg:mx-0">
                Hold your place in line with a fully refundable $25 deposit. Limited spots available!
              </p>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <img 
              src={heroImage} 
              alt="Two fencers competing in tournament with dramatic lighting and professional facility" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white text-academy-gray p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-olympic-gold">Ages 7-18</div>
              <div className="text-sm font-medium">All Skill Levels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
