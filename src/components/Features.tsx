import React from 'react';
import { Cpu, CheckCircle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { features } from '../data/features';

export const Features: React.FC = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-./g, (x) => x[1].toUpperCase())];
    return IconComponent || LucideIcons.Star;
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
            <Cpu className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Advanced Technology</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Powerful Features for 
            <span className="blue-text-gradient"> Every Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI chatbots come packed with advanced features designed to enhance customer experience, 
            streamline operations, and drive business growth through intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = getIcon(feature.icon);
            return (
              <div 
                key={index}
                className="group bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-blue-600 font-semibold mb-2">{feature.stats}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature Showcase */}
        <div className="blue-gradient rounded-3xl p-8 md:p-12 text-white blue-glow animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Experience the Future of Customer Interaction</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Our AI doesn't just respond—it understands, learns, and evolves with every conversation, 
                providing personalized experiences that delight your customers.
              </p>
              <div className="space-y-3">
                {[
                  'Contextual conversation memory',
                  'Intelligent sentiment analysis',
                  'Automated workflow integration'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-slide-in-left">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-slide-in-right">
              <div className="flex items-center space-x-3 mb-4">
                <LucideIcons.MessageSquare className="w-6 h-6" />
                <span className="font-semibold">Live Chat Preview</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-white/20 rounded-lg p-3 animate-fade-in-up">
                  <span className="opacity-75">Customer:</span> "I need help with my order"
                </div>
                <div className="bg-blue-500 rounded-lg p-3 ml-4 animate-fade-in-up">
                  <span className="opacity-75">AI:</span> "I'd be happy to help! Let me pull up your order details..."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};