import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { submitQuoteRequest } from '../lib/supabase';

export default function QuoteRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service_type: '',
    description: '',
    urgency: 'flexible',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const serviceTypes = [
    'EV Charger Installation',
    'Ceiling Fan Installation',
    'Lighting Installation',
    'Outlets & Switches',
    'Panel Upgrade',
    'Whole Home Rewiring',
    'Troubleshooting & Repairs',
    'Electrical Inspection',
    'Security Camera Installation',
    'Other',
  ];

  const urgencyOptions = [
    { value: 'emergency', label: 'Emergency (ASAP)' },
    { value: 'urgent', label: 'Urgent (Within a week)' },
    { value: 'soon', label: 'Soon (1-2 weeks)' },
    { value: 'flexible', label: 'Flexible (No rush)' },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await submitQuoteRequest(formData);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service_type: '',
        description: '',
        urgency: 'flexible',
      });
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quote Request Received!
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Thank you for choosing Good Guys Electric. We've received your request and will contact you shortly with a detailed quote.
          </p>
          <p className="text-gray-600 mb-8">
            A member of our team will reach out within 24 hours to discuss your project and schedule a consultation if needed.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1e40af] transition"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern-quote" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="white" />
                <circle cx="75" cy="75" r="2" fill="white" />
                <line x1="25" y1="25" x2="75" y2="25" stroke="white" strokeWidth="1" />
                <line x1="75" y1="25" x2="75" y2="75" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-quote)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Free Quote</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tell us about your electrical project and we'll provide a detailed, no-obligation quote
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you with a detailed quote within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Address *
                </label>
                <input
                  type="text"
                  id="address"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                  placeholder="123 Main St, City, TX 12345"
                />
              </div>

              <div>
                <label htmlFor="service_type" className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Service *
                </label>
                <select
                  id="service_type"
                  required
                  value={formData.service_type}
                  onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                >
                  <option value="">Select a service...</option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  How soon do you need this done? *
                </label>
                <select
                  id="urgency"
                  required
                  value={formData.urgency}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                >
                  {urgencyOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  required
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                  placeholder="Please describe your electrical project in as much detail as possible. Include information about your home, existing electrical setup, and what you'd like to accomplish."
                />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  By submitting this form, you agree to be contacted by Good Guys Electric regarding your quote request. We respect your privacy and will never share your information.
                </p>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#dc2626] text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#b91c1c] transition disabled:bg-gray-400 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  'Submitting...'
                ) : (
                  <>
                    Submit Quote Request
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Something went wrong. Please try again or call us at (555) 123-4567.
                </div>
              )}
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">Prefer to speak with us directly?</p>
            <a
              href="tel:+15551234567"
              className="text-2xl font-bold text-[#1e3a8a] hover:text-[#1e40af]"
            >
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
