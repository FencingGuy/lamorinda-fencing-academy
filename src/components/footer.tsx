

export default function Footer() {
  return (
    <footer className="bg-academy-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Lamorinda Fencing Academy</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Developing the next generation of champions through Olympic-style fencing training in the Lamorinda area.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-gray-300 text-sm">info@lamorindafencing.com</p>
            <p className="text-gray-300 text-sm">(415) 203-7537</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-2">Location</h4>
            <p className="text-gray-300 text-sm">TBD: Orinda, Lafayette, or Moraga, CA</p>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-sm text-gray-400 mb-4">
            <strong>Important Disclaimer:</strong> This is a waitlist interest site only. No facility or schedule guaranteed yet. Refunds available anytime.
          </p>
          <p className="text-sm text-gray-400">
            © 2024 Lamorinda Fencing Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
