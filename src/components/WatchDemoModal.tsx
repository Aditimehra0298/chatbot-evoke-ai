import React, { useState, useEffect } from 'react';
import { Play, Bot, Send, Rocket, Phone, Sparkles } from 'lucide-react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { demoConversations, Message } from '../data/demoConversations';
import * as LucideIcons from 'lucide-react';

interface WatchDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTrial: () => void;
  onContactSales: () => void;
}

export const WatchDemoModal: React.FC<WatchDemoModalProps> = ({
  isOpen,
  onClose,
  onStartTrial,
  onContactSales
}) => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-./g, (x) => x[1].toUpperCase())];
    return IconComponent || LucideIcons.Star;
  };

  const simulateConversation = (conversationIndex: number) => {
    setActiveDemo(conversationIndex);
    setMessages([]);
    setCurrentMessageIndex(0);
    setIsTyping(false);

    const conversation = demoConversations[conversationIndex];
    let messageIndex = 0;

    const showNextMessage = () => {
      if (messageIndex < conversation.messages.length) {
        const message = conversation.messages[messageIndex];
        
        if (message.type === 'bot') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, message]);
            messageIndex++;
            setTimeout(showNextMessage, 1500);
          }, 1200);
        } else {
          setMessages(prev => [...prev, message]);
          messageIndex++;
          setTimeout(showNextMessage, 1000);
        }
      }
    };

    showNextMessage();
  };

  useEffect(() => {
    if (isOpen) {
      simulateConversation(0);
    }
  }, [isOpen]);

  const handleStartTrial = () => {
    onClose();
    onStartTrial();
  };

  const handleContactSales = () => {
    onClose();
    onContactSales();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="4xl">
      {/* Close Button */}
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
      </div>

      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold blue-text-gradient flex items-center space-x-3 mb-2">
          <Play className="w-8 h-8" />
          <span>Interactive Demo</span>
        </h2>
        <p className="text-gray-600 mb-6">See our AI assistants in action across different industries</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Demo Selector */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose a Demo:</h3>
          <div className="space-y-3">
            {demoConversations.map((demo, index) => {
              const IconComponent = getIcon(demo.icon);
              return (
                <button
                  key={index}
                  onClick={() => simulateConversation(index)}
                  className={`w-full p-4 rounded-lg border text-left transition-all duration-300 hover:shadow-lg ${
                    index === activeDemo
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      index === activeDemo
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium">{demo.title}</div>
                      <div className="text-sm opacity-75">Tap to start demo</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 animate-fade-in-up">
            <div className="flex items-center space-x-2 text-blue-600 mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Live Features</span>
            </div>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Real-time typing indicators</li>
              <li>• Natural conversation flow</li>
              <li>• Context-aware responses</li>
              <li>• Industry-specific knowledge</li>
            </ul>
          </div>
        </div>

        {/* Chat Window */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl h-96 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center space-x-3">
              <div className="w-10 h-10 blue-gradient rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">
                  {demoConversations[activeDemo].title}
                </div>
                <div className="text-sm text-green-500 flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <Bot className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p>Select a demo scenario to see the AI assistant in action!</p>
                </div>
              ) : (
                <>
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                    >
                      <div className={`max-w-[80%] p-3 ${
                        message.type === 'user' ? 'chat-message-user' : 'chat-message-bot'
                      }`}>
                        <div className="whitespace-pre-line">{message.message}</div>
                        <div className={`text-xs mt-2 ${
                          message.type === 'user' ? 'text-blue-200' : 'text-gray-400'
                        }`}>
                          {message.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="chat-message-bot max-w-[80%] p-3">
                        <div className="flex items-center space-x-1">
                          <span>AI is typing</span>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-typing"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Disabled Input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="This is a demo - select scenarios above to see conversations"
                  disabled
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full bg-gray-50 text-gray-400 cursor-not-allowed"
                />
                <button
                  disabled
                  className="blue-gradient text-white p-2 rounded-full opacity-50 cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center animate-fade-in-up">
            <p className="text-gray-600 mb-4">Ready to implement this for your business?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={handleStartTrial}
                icon={Rocket}
              >
                Start Free Trial
              </Button>
              <Button
                onClick={handleContactSales}
                variant="outline"
                icon={Phone}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
