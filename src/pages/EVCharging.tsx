import { Zap, CheckCircle, ArrowRight } from 'lucide-react';

interface EVChargingProps {
  onNavigate: (page: string) => void;
}

export default function EVCharging({ onNavigate }: EVChargingProps) {
  const benefits = [
    'Charge your EV 4-10x faster than standard outlets',
    'Convenient overnight charging at home',
    'Increase your property value',
    'Save money compared to public charging',
    'Eco-friendly transportation solution',
    'Tax credits and incentives available',
  ];

  const features = [
    {
      title: 'Tesla Wall Connector',
      description: 'Official Tesla-certified installation with up to 44 miles of range per hour of charging.',
      specs: ['Up to 48A charging', 'WiFi connectivity', 'Sleek design', 'Weather resistant'],
    },
    {
      title: 'Universal Level 2 Chargers',
      description: 'Compatible with all electric vehicles, offering fast and reliable home charging.',
      specs: ['Works with any EV', '25-40 miles per hour', 'Smart features', 'Durable construction'],
    },
    {
      title: 'Electrical Assessment',
      description: 'Complete evaluation of your electrical system to ensure safe, optimal charging.',
      specs: ['Load calculation', 'Panel inspection', 'Wiring assessment', 'Upgrade recommendations'],
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Free Consultation',
      description: 'We assess your home, discuss your EV charging needs, and recommend the best solution.',
    },
    {
      step: '2',
      title: 'Electrical Evaluation',
      description: 'Our licensed electricians inspect your panel and wiring to ensure safe installation.',
    },
    {
      step: '3',
      title: 'Professional Installation',
      description: 'We handle all electrical work, permits, and mounting for a code-compliant installation.',
    },
    {
      step: '4',
      title: 'Testing & Training',
      description: 'We test the system thoroughly and show you how to use your new charger.',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern-ev-hero" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="white" />
                <circle cx="75" cy="75" r="2" fill="white" />
                <line x1="25" y1="25" x2="75" y2="25" stroke="white" strokeWidth="1" />
                <line x1="75" y1="25" x2="75" y2="75" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-ev-hero)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                EV Charger Installation Experts
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional installation of Tesla Wall Connectors and universal EV charging stations. Fast, safe, and code-compliant service for your electric vehicle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('quote')}
                  className="bg-[#dc2626] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#b91c1c] transition flex items-center justify-center gap-2"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="tel:+15551234567"
                  className="bg-white text-[#1e3a8a] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/image0.jpeg"
                alt="Tesla Wall Connector Installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Install a Home EV Charger?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Home charging is the most convenient and cost-effective way to keep your electric vehicle ready to go
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our EV Charging Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We install a variety of charging solutions to match your vehicle and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-[#1e3a8a] text-white rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#dc2626] rounded-full"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to completion, we make EV charger installation easy and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1e3a8a] text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern-faq" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="white" />
                <circle cx="75" cy="75" r="2" fill="white" />
                <line x1="25" y1="25" x2="75" y2="25" stroke="white" strokeWidth="1" />
                <line x1="75" y1="25" x2="75" y2="75" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-faq)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How long does installation take?</h3>
              <p className="text-gray-100">Most installations take 2-4 hours, depending on your electrical setup and charger location.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Do I need to upgrade my electrical panel?</h3>
              <p className="text-gray-100">Not always. We'll assess your current panel capacity during consultation. Many homes can accommodate an EV charger without upgrades.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Are there any incentives available?</h3>
              <p className="text-gray-100">Yes! Federal tax credits and local utility rebates may be available. We can help you understand your options.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What if I have multiple EVs?</h3>
              <p className="text-gray-100">We can install multiple chargers or load-sharing solutions to charge multiple vehicles efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern-ev-cta" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="#1e3a8a" />
                <circle cx="75" cy="75" r="2" fill="#1e3a8a" />
                <line x1="25" y1="25" x2="75" y2="25" stroke="#1e3a8a" strokeWidth="1" />
                <line x1="75" y1="25" x2="75" y2="75" stroke="#1e3a8a" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-ev-cta)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Install Your EV Charger?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free consultation and quote for professional EV charger installation
          </p>
          <button
            onClick={() => onNavigate('quote')}
            className="bg-[#dc2626] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#b91c1c] transition inline-flex items-center gap-2"
          >
            Request Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
