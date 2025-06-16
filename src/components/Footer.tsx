import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const offices = [
    {
      country: '🇮🇳 India',
      address: 'SCO No. 09-Ground Floor, Aero View Plaza, Airport Road, Dyalpura, Punjab - 140603',
      phone: '+91-90565-44487'
    },
    {
      country: '🇬🇧 UK',
      address: '20-22 Wenlock Road, Hoxton, London N1 7GU'
    },
    {
      country: '🇺🇸 USA',
      address: '616, Corporate Way Suite 2, 6015 Valley Cottage NY 10989'
    },
    {
      country: '🇨🇦 Canada',
      address: '8449,116 A Street, Delta - V4C7N7, Greater Vancouver',
      phone: '+1 (778) 798-9624'
    },
    {
      country: '🇦🇪 Dubai',
      address: 'Suite No 2902 and 2903, The Prism Tower, Business Bay, Dubai, UAE'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: 'https://www.damnart.com/privacy-policy/' },
    { name: 'Podcasts', href: 'https://www.damnart.com/podcasts/' },
    { name: 'Blogs', href: 'https://www.damnart.com/blogs/' }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-200 to-blue-300 text-gray-800 py-16 border-t border-blue-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/unnamed (1).png" alt="DamnArt Logo" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-2xl font-bold blue-text-gradient">DamnArt AI</h3>
                <p className="text-sm text-blue-700 font-medium">DIGITAL ADVERTISEMENT MARKETING NETWORK</p>
              </div>
            </div>
            <p className="text-gray-800 mb-6 max-w-md font-medium">
              Empowering businesses with cutting-edge AI solutions and digital marketing strategies to drive growth and success through intelligent automation.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-900">Connect with us on other Platforms</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700' },
                  { icon: Instagram, color: 'bg-pink-600 hover:bg-pink-700' },
                  { icon: Youtube, color: 'bg-red-600 hover:bg-red-700' },
                  { icon: Linkedin, color: 'bg-blue-700 hover:bg-blue-800' }
                ].map((social, index) => (
                  <div 
                    key={index}
                    className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center transition-colors cursor-pointer hover:scale-110 transform duration-300 shadow-lg`}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-2 text-gray-800 hover:text-blue-700 transition-colors cursor-pointer font-medium">
                <Mail className="w-5 h-5" />
                <span>Email us at - info@damnart.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-700 hover:text-blue-700 transition-colors hover:translate-x-1 transform duration-300 inline-block font-medium"
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-gray-900">Global Offices</h4>
            <div className="space-y-6 text-sm">
              {offices.map((office, index) => (
                <div 
                  key={index}
                  className="hover:bg-blue-400/50 p-3 rounded-lg transition-colors cursor-pointer border border-blue-400 hover:border-blue-500 bg-white/80"
                >
                  <h5 className="font-semibold text-gray-900 mb-2">{office.country}</h5>
                  <div className="flex items-start space-x-2 text-gray-700">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-blue-600" />
                    <p>{office.address}</p>
                  </div>
                  {office.phone && (
                    <div className="flex items-center space-x-2 text-gray-700 mt-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>{office.phone}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 pt-8 text-center text-gray-800">
          <p className="font-medium">&copy; 2024 DamnArt AI - Digital Advertisement Marketing Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
