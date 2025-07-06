import HeroSection from "@/components/hero-section";
import ProgramDetails from "@/components/program-details";
import WhyFencing from "@/components/why-fencing";
import CoachesSection from "@/components/coaches-section";
import TournamentHighlights from "@/components/tournament-highlights";
import PrivateLessons from "@/components/private-lessons";
import WaitlistForm from "@/components/waitlist-form";
import EquipmentShowcase from "@/components/equipment-showcase";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <ProgramDetails />
      <WhyFencing />
      <CoachesSection />
      <TournamentHighlights />
      <PrivateLessons />
      <WaitlistForm />
      <EquipmentShowcase />
      <Footer />
    </div>
  );
}
