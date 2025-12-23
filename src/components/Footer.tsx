import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="/good_guys_electric_logo.png"
              alt="Good Guys Electric"
              className="h-20 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              Your trusted electrical experts serving Texas with professional, reliable service since day one.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a href="tel:+15551234567" className="flex items-start gap-3 hover:text-white transition">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </a>
              <a href="mailto:info@goodguyselectric.co" className="flex items-start gap-3 hover:text-white transition">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>info@goodguyselectric.co</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Serving the Greater Texas Area</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Monday - Friday</p>
                  <p className="text-sm">7:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="ml-8">
                <p className="font-medium text-white">Saturday</p>
                <p className="text-sm">8:00 AM - 4:00 PM</p>
              </div>
              <div className="ml-8">
                <p className="font-medium text-white">Sunday</p>
                <p className="text-sm">Emergency Only</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#services" className="block hover:text-white transition">Our Services</a>
              <a href="#gallery" className="block hover:text-white transition">Project Gallery</a>
              <a href="#about" className="block hover:text-white transition">About Us</a>
              <a href="#contact" className="block hover:text-white transition">Contact</a>
              <a href="#quote" className="block hover:text-white transition">Request Quote</a>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Good Guys Electric. All rights reserved.</p>
          <p className="mt-2">
            Licensed & Insured | Texas Master Electrician License #12345
          </p>
        </div>
      </div>
    </footer>
  );
}
