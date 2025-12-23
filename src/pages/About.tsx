import { Award, Users, Heart, Zap } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project, from simple repairs to complex installations.',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Honest, transparent service with upfront pricing and no hidden fees. We treat your home like our own.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We listen to your needs and deliver solutions that exceed expectations.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay current with the latest electrical technologies and techniques to serve you better.',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern-about" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="white" />
                <circle cx="75" cy="75" r="2" fill="white" />
                <line x1="25" y1="25" x2="75" y2="25" stroke="white" strokeWidth="1" />
                <line x1="75" y1="25" x2="75" y2="75" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-about)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Good Guys Electric</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted electrical partner serving Texas with pride, professionalism, and unmatched expertise
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Good Guys Electric was founded on a simple principle: provide honest, reliable electrical services with a personal touch. As a Texas-based company, we understand the unique needs of homes and businesses in our great state, from the demands of hot summers on electrical systems to the latest in energy-efficient solutions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our team of licensed master electricians brings decades of combined experience to every project. Whether you're upgrading to an EV charging station, modernizing your home's lighting, or need emergency repairs, we approach each job with the same commitment to quality and customer satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're proud to be the electricians that Texas homeowners and businesses trust. Our reputation is built on quality workmanship, transparent pricing, and treating every customer like family.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1e3a8a] text-white rounded-full mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Why We're Different</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#dc2626] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Licensed Master Electricians</h3>
                  <p className="text-gray-100">Every technician is a fully licensed Texas master electrician, not apprentices or helpers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#dc2626] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Upfront, Honest Pricing</h3>
                  <p className="text-gray-100">We provide detailed quotes before starting work. No surprise charges or hidden fees.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#dc2626] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Respect for Your Home</h3>
                  <p className="text-gray-100">We treat your property with care, using drop cloths, cleaning up thoroughly, and minimizing disruption.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#dc2626] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Satisfaction Guaranteed</h3>
                  <p className="text-gray-100">We stand behind our work with a comprehensive satisfaction guarantee on all services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Work with the Good Guys?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the difference that honest, professional electrical service makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('quote')}
              className="bg-[#dc2626] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#b91c1c] transition"
            >
              Get Free Quote
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1e40af] transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
