import { Zap, Shield, Clock, Award, Phone, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      title: 'EV Charger Installation',
      description: 'Professional Tesla and electric vehicle charging station installation for your home or business.',
      icon: Zap,
      image: '/image0.jpeg',
    },
    {
      title: 'Ceiling Fans & Lighting',
      description: 'Expert installation of ceiling fans, recessed lighting, and custom fixtures to enhance your space.',
      icon: Zap,
      image: '/image1.jpeg',
    },
    {
      title: 'Custom Lighting Solutions',
      description: 'Beautiful pendant lighting, chandeliers, and specialized fixtures professionally installed.',
      icon: Zap,
      image: '/image3.jpeg',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed Texas electricians with comprehensive insurance coverage.',
    },
    {
      icon: Clock,
      title: 'On-Time Service',
      description: 'We respect your time with prompt arrivals and efficient work completion.',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Superior workmanship backed by our satisfaction guarantee.',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/image6.jpeg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/95 via-[#1e40af]/90 to-[#1e3a8a]/85"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.05) 2px,
              rgba(255, 255, 255, 0.05) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.05) 2px,
              rgba(255, 255, 255, 0.05) 4px
            ),
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Texas' Most Trusted Electrical Experts
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Professional electrical services for homes and businesses. From EV chargers to complete rewiring, we do it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('quote')}
                className="bg-[#dc2626] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#b91c1c] transition shadow-xl flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+15551234567"
                className="bg-white text-[#1e3a8a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1e3a8a] text-white rounded-full mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From modern EV charging stations to elegant lighting solutions, we bring expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-[#1e3a8a] font-semibold hover:text-[#1e40af] flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e40af] transition inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#1e3a8a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern-cta" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="white" />
                <circle cx="75" cy="75" r="2" fill="white" />
                <circle cx="75" cy="25" r="2" fill="white" />
                <circle cx="25" cy="75" r="2" fill="white" />
                <line x1="25" y1="25" x2="75" y2="25" stroke="white" strokeWidth="1" />
                <line x1="75" y1="25" x2="75" y2="75" stroke="white" strokeWidth="1" />
                <line x1="25" y1="25" x2="25" y2="75" stroke="white" strokeWidth="1" />
                <line x1="25" y1="75" x2="75" y2="75" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-cta)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We're here to help with all your electrical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('quote')}
              className="bg-[#dc2626] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#b91c1c] transition shadow-xl"
            >
              Request Free Quote
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#1e3a8a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
