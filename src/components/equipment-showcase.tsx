import fencerWithWeapon from "@assets/nathanael-desmeules-FUNty9nOj-k-unsplash_1751756648718.jpg";
import fencerPortrait from "@assets/nathanael-desmeules-qcVOxxM3RIs-unsplash_1751756648718.jpg";
import tournamentScene from "@assets/pexels-artempodrez-5941996_1751756648718.jpg";

export default function EquipmentShowcase() {
  const equipment = [
    {
      image: fencerWithWeapon,
      title: "Professional Weapons",
      description: "Olympic-standard foils, epees, and sabres for authentic training"
    },
    {
      image: fencerPortrait,
      title: "Safety First",
      description: "Complete protective gear ensuring maximum safety during training"
    },
    {
      image: tournamentScene,
      title: "Olympic Strips",
      description: "Regulation-size strips for competitive training and tournaments"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-academy-gray mb-4">
            Olympic-Grade Equipment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Train with the same equipment used by Olympic champions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-academy-gray mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
