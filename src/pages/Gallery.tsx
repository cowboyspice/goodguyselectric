import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryProps {
  onNavigate: (page: string) => void;
}

export default function Gallery({ onNavigate }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      image: '/image0.jpeg',
      title: 'Tesla Wall Connector Installation',
      category: 'EV Charging',
      description: 'Professional Tesla Wall Connector installation with dedicated 60A circuit and proper wall mounting.',
    },
    {
      image: '/image1.jpeg',
      title: 'Vaulted Ceiling Fan Installation',
      category: 'Ceiling Fans',
      description: 'Custom ceiling fan installation in vaulted ceiling with recessed lighting and proper electrical configuration.',
    },
    {
      image: '/image3.jpeg',
      title: 'Kitchen Pendant Lighting',
      category: 'Lighting',
      description: 'Elegant pendant lighting installation over kitchen island with dimmer controls and perfect spacing.',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern-gallery" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="white" />
                <circle cx="75" cy="75" r="2" fill="white" />
                <line x1="25" y1="25" x2="75" y2="25" stroke="white" strokeWidth="1" />
                <line x1="75" y1="25" x2="75" y2="75" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-gallery)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take a look at some of our recent electrical installations and see the quality craftsmanship we bring to every project
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm font-semibold text-[#dc2626] mb-1">{project.category}</p>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-[#1e3a8a] mb-1">{project.category}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={projects[selectedImage].image}
              alt={projects[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <p className="text-sm font-semibold text-[#dc2626] mb-1">
                {projects[selectedImage].category}
              </p>
              <h3 className="text-2xl font-bold mb-2">{projects[selectedImage].title}</h3>
              <p className="text-gray-300">{projects[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want Your Project Featured Here?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us bring the same level of quality and professionalism to your electrical project
          </p>
          <button
            onClick={() => onNavigate('quote')}
            className="bg-[#dc2626] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#b91c1c] transition"
          >
            Request Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
