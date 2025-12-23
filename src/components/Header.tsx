import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'EV Charging', id: 'ev-charging' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-[#1e3a8a] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-gray-200 transition">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(555) 123-4567</span>
          </a>
          <a href="mailto:info@goodguyselectric.co" className="flex items-center gap-2 hover:text-gray-200 transition">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">info@goodguyselectric.co</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={() => handleNavClick('home')} className="flex items-center">
            <img
              src="/good_guys_electric_logo.png"
              alt="Good Guys Electric"
              className="h-16 w-auto"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-gray-700 hover:text-[#1e3a8a] font-medium transition ${
                  currentPage === item.id ? 'text-[#1e3a8a] border-b-2 border-[#1e3a8a]' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('quote')}
              className="bg-[#dc2626] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#b91c1c] transition shadow-lg"
            >
              Get Quote
            </button>
          </nav>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg ${
                  currentPage === item.id
                    ? 'bg-[#1e3a8a] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('quote')}
              className="block w-full bg-[#dc2626] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#b91c1c] transition"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
