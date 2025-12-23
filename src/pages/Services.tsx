import { Zap, Fan, Lightbulb, Plug, Settings, Home, AlertCircle, FileCheck, Camera, Shield } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Zap,
      title: 'EV Charger Installation',
      description: 'Professional installation of Tesla Wall Connectors and other EV charging stations. We handle everything from electrical assessment to final installation and testing.',
      features: ['Tesla certified installation', 'Level 2 charging stations', 'Electrical panel upgrades', 'Permitting and inspection'],
    },
    {
      icon: Fan,
      title: 'Ceiling Fan Installation',
      description: 'Expert installation of ceiling fans for improved comfort and energy efficiency. We work with all ceiling types, including vaulted and cathedral ceilings.',
      features: ['All ceiling types', 'Proper bracing', 'Remote control setup', 'Multi-speed configuration'],
    },
    {
      icon: Lightbulb,
      title: 'Lighting Installation & Fixtures',
      description: 'Transform your space with professional lighting installation. From recessed lights to chandeliers, we ensure perfect placement and functionality.',
      features: ['Recessed lighting', 'Pendant lights', 'Chandeliers', 'Under-cabinet lighting'],
    },
    {
      icon: Plug,
      title: 'Outlets & Switches',
      description: 'Installation, replacement, and upgrades for outlets and switches. Including USB outlets, GFCI protection, and smart switches.',
      features: ['GFCI outlets', 'USB charging outlets', 'Smart switches', 'Three-way switches'],
    },
    {
      icon: Settings,
      title: 'Panel Upgrades & Replacement',
      description: 'Upgrade your electrical panel to handle modern power demands safely. Essential for older homes or when adding major appliances.',
      features: ['100A to 200A upgrades', 'Circuit breaker replacement', 'Sub-panel installation', 'Code compliance updates'],
    },
    {
      icon: Home,
      title: 'Whole Home Rewiring',
      description: 'Complete rewiring services for older homes or major renovations. Ensure your home meets modern safety standards and power needs.',
      features: ['Knob and tube removal', 'Aluminum to copper', 'Code compliance', 'Minimal wall damage'],
    },
    {
      icon: AlertCircle,
      title: 'Troubleshooting & Repairs',
      description: 'Quick diagnosis and repair of electrical issues. From flickering lights to tripped breakers, we find and fix the problem.',
      features: ['Circuit troubleshooting', 'Outlet repairs', 'Breaker issues', 'Safety inspections'],
    },
    {
      icon: FileCheck,
      title: 'Electrical Inspections',
      description: 'Comprehensive electrical inspections for home buyers, sellers, or peace of mind. Detailed reports on your electrical system.',
      features: ['Pre-purchase inspections', 'Safety assessments', 'Code compliance checks', 'Detailed reports'],
    },
    {
      icon: Camera,
      title: 'Security Camera Installation',
      description: 'Professional installation of security camera systems with proper electrical connections and weatherproofing.',
      features: ['Indoor/outdoor cameras', 'Power over Ethernet', 'Dedicated circuits', 'Proper mounting'],
    },
    {
      icon: Shield,
      title: 'Surge Protection',
      description: 'Whole-home surge protection to safeguard your valuable electronics and appliances from power surges.',
      features: ['Whole-home protection', 'Point-of-use devices', 'Lightning protection', 'Equipment warranty'],
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern-services" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="white" />
                <circle cx="75" cy="75" r="2" fill="white" />
                <line x1="25" y1="25" x2="75" y2="25" stroke="white" strokeWidth="1" />
                <line x1="75" y1="25" x2="75" y2="75" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-services)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive electrical solutions for residential and commercial properties throughout Texas
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#1e3a8a] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#1e3a8a] text-white rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-[#dc2626] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Good Guys Electric?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Licensed & Certified</h3>
                <p className="text-gray-600">All our electricians are fully licensed Texas master electricians with ongoing training.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Fully Insured</h3>
                <p className="text-gray-600">Comprehensive liability and workers compensation insurance for your protection.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Upfront Pricing</h3>
                <p className="text-gray-600">Clear, detailed quotes before we start. No hidden fees or surprise charges.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">We stand behind our work with a satisfaction guarantee on all services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-[#1e3a8a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern-cta" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="white" />
                <circle cx="75" cy="75" r="2" fill="white" />
                <line x1="25" y1="25" x2="75" y2="25" stroke="white" strokeWidth="1" />
                <line x1="75" y1="25" x2="75" y2="75" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-cta)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Request a free quote or give us a call to discuss your electrical needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('quote')}
              className="bg-[#dc2626] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#b91c1c] transition"
            >
              Get Free Quote
            </button>
            <a
              href="tel:+15551234567"
              className="bg-white text-[#1e3a8a] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
