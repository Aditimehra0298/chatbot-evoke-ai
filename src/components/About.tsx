import React from 'react';
import { Brain } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { aboutValues } from '../data/aboutValues';
import { Button } from './ui/Button';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return IconComponent || LucideIcons.Star;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
            <Brain className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">About DamnArt</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Empowering the Future with 
            <span className="blue-text-gradient"> Artificial Intelligence</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong className="text-blue-600">DamnArt</strong> is a dynamic, AI-driven company committed to empowering forward-thinking organizations with transformative insights and innovative solutions. Our mission is to harness the potential of artificial intelligence to foster creativity, drive sustainable growth, and help businesses thrive in an ever-evolving landscape.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a strong focus on delivering intelligent solutions, DamnArt partners with visionary enterprises to help them overcome complex challenges and seize new opportunities. Guided by a commitment to knowledge sharing and continuous innovation, DamnArt aims to be a driving force for impactful progress and enduring success in the world of AI.
            </p>
            <div className="pt-4">
              <Button
                onClick={() => window.open('https://www.damnart.com/about/', '_blank')}
                variant="primary"
              >
                Learn More About Our Mission
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="blue-gradient rounded-3xl p-8 shadow-2xl blue-glow">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <LucideIcons.Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">500+</div>
                    <div className="text-sm text-gray-500">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <LucideIcons.Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">25+</div>
                    <div className="text-sm text-gray-500">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <LucideIcons.Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">95%</div>
                    <div className="text-sm text-gray-500">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <LucideIcons.Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">10+</div>
                    <div className="text-sm text-gray-500">Awards Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutValues.map((value, index) => {
            const IconComponent = getIcon(value.icon);
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative"
              >
                <div className="blue-gradient w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};