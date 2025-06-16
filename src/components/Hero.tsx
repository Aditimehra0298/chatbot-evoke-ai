import React from 'react';
import { ArrowRight, Play, Sparkles, Bot, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { useCountUp } from '../hooks/useCountUp';

interface HeroProps {
  onStartTrial: () => void;
  onWatchDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartTrial, onWatchDemo }) => {
  const activeUsers = useCountUp(50);
  const uptime = useCountUp(99.9);
  const support = useCountUp(24);

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-20 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-blue-600 animate-fade-in-up">
                <Sparkles className="w-5 h-5 animate-bounce-custom" />
                <span className="text-sm font-medium">Next-Generation AI Technology</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight animate-fade-in-up">
                Transform Your Business with
                <span className="blue-text-gradient"> AI Chatbots</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up">
                Revolutionize customer engagement with DamnArt AI's intelligent chatbot solutions. 
                Automate support, boost sales, and provide 24/7 assistance across all industries with 
                cutting-edge artificial intelligence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button
                onClick={onStartTrial}
                size="lg"
                icon={ArrowRight}
                className="group"
              >
                Start Free Trial
              </Button>
              <Button
                onClick={onWatchDemo}
                variant="outline"
                size="lg"
                icon={Play}
                className="group"
              >
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-up">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {activeUsers}K+
                </div>
                <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                  Active Users Daily
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {uptime}%
                </div>
                <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                  Uptime Guarantee
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {support}/7
                </div>
                <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                  Smart Support
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="blue-gradient rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 blue-glow">
              <div className="bg-white rounded-2xl p-8 text-center space-y-6 border border-gray-200">
                <div className="w-20 h-20 blue-gradient rounded-full flex items-center justify-center mx-auto animate-pulse-custom">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">DamnArt AI Assistant</h3>
                  <p className="text-gray-600">Your intelligent conversation partner ready 24/7</p>
                </div>
                <div className="blue-gradient text-white px-6 py-3 rounded-full font-semibold inline-flex items-center space-x-2 hover:shadow-lg transition-all duration-300 cursor-pointer blue-glow">
                  <Sparkles className="w-5 h-5" />
                  <span>Try the chat widget below!</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 shadow-lg animate-bounce-custom">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 shadow-lg animate-pulse-custom">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};