import React from 'react';
import { Globe, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { clients } from '../data/clients';
import { Button } from './ui/Button';

interface ClientsProps {
  onRequestDemo: () => void;
}

export const Clients: React.FC<ClientsProps> = ({ onRequestDemo }) => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src="/unnamed (1).png" alt="DamnArt Logo" className="w-12 h-12 object-contain animate-float" />
            <h2 className="text-4xl font-bold text-gray-800">
              Our <span className="blue-text-gradient">Trusted Partners</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering innovative companies worldwide to transform their customer experience with cutting-edge AI solutions
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`client-card-hover bg-white border border-gray-200 rounded-2xl p-6 shadow-lg group relative overflow-hidden ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              } floating-animation`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Particles Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce-custom transition-opacity duration-300" style={{ animationDelay: '0.1s' }}></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce-custom transition-opacity duration-300" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute top-1/2 left-1 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 animate-bounce-custom transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
              </div>

              <div className="relative text-center">
                {/* Logo Container */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} Logo`} 
                    className="w-full h-full object-contain logo-hover-effect p-2" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full blue-gradient rounded-lg flex items-center justify-center hidden">
                    <span className="text-white font-bold text-lg">{client.name.charAt(0)}</span>
                  </div>
                </div>

                {/* Company Info */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {client.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-2 group-hover:text-blue-700 transition-colors">
                  {client.industry}
                </p>
          
               

                {/* Success Indicators */}
                <div className="flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    
                  </div>
                  {client.established && (
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-blue-500" />
                  
                    </div>
                  )}
                </div>

                {/* Visit Website Button */}
                {client.website && client.website !== '#' && (
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs blue-gradient text-white px-3 py-1.5 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Visit Website</span>
                      <Globe className="w-3 h-3" />
                    </a>
                  </div>
                )}

                {/* Special Badge for Main Company */}
                
                
              </div>
            </div>
          ))}
        </div>

        {/* Client Success Stats */}
        <div className="blue-gradient rounded-3xl p-8 md:p-12 text-white relative overflow-hidden blue-glow">
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Transforming Businesses Worldwide</h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Our AI solutions have delivered measurable results across industries, 
                helping businesses achieve their goals and exceed customer expectations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {[
                { percentage: 95, label: 'Customer Satisfaction' },
                { percentage: 60, label: 'Cost Reduction' },
                { percentage: 100, label: 'Response Speed', value: '3x' },
                { percentage: 100, label: 'Availability', value: '24/7' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse-custom">
                    {stat.value || `${stat.percentage}%`}
                  </div>
                  <div className="text-blue-100">{stat.label}</div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: `${stat.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={onRequestDemo}
                variant="secondary"
                className="group"
              >
                <span>Join Our Success Stories</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
