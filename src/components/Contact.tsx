import React, { useState } from 'react';
import { MessageCircle, Send, Mail, Phone, Headphones, Zap, Shield, Rocket, Calendar } from 'lucide-react';
import { Button } from './ui/Button';
import { FormMessage } from './ui/FormMessage';
import { sendEmail, validateEmail, FormData } from '../utils/emailService';

interface ContactProps {
  onRequestDemo: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onRequestDemo }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: 'success' as 'success' | 'error', isVisible: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage({ text, type, isVisible: true });
    setTimeout(() => {
      setMessage(prev => ({ ...prev, isVisible: false }));
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    setIsSubmitting(true);

    const emailData: FormData = {
      ...formData,
      form_type: 'contact',
      to_email: 'info@damnart.com'
    };

    try {
      await sendEmail(emailData);
      showMessage('Message sent successfully! We\'ll get back to you soon.', 'success');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      showMessage('Failed to send message. Please try again or contact us directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
            <MessageCircle className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Ready to Transform Your 
            <span className="blue-text-gradient"> Customer Experience?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our AI experts to discover how DamnArt can revolutionize your business communications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <FormMessage 
              message={message.text} 
              type={message.type} 
              isVisible={message.isVisible} 
            />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                icon={Send}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="blue-gradient rounded-3xl p-8 text-white blue-glow">
              <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
              <p className="text-blue-100 mb-6">
                Our team of AI experts is ready to help you discover the perfect chatbot solution for your business needs.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Headphones, text: '24/7 Expert Support' },
                  { icon: Zap, text: 'Quick Implementation' },
                  { icon: Shield, text: 'Enterprise-Grade Security' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="w-6 h-6 text-blue-200" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h4 className="font-semibold text-lg mb-4 text-gray-800">Quick Contact Options</h4>
              <div className="space-y-4">
                {[
                  { icon: Mail, title: 'Email Us', subtitle: 'info@damnart.com' },
                  { icon: Phone, title: 'Call Us', subtitle: '+91-90565-44487' },
                  { icon: MessageCircle, title: 'Live Chat', subtitle: 'Try our AI assistant now!' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors cursor-pointer border border-blue-500/20">
                    <div className="w-10 h-10 blue-gradient rounded-full flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{contact.title}</div>
                      <div className="text-sm text-gray-500">{contact.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="blue-gradient rounded-3xl p-8 md:p-12 text-white text-center blue-glow">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of businesses already using DamnArt AI to enhance customer experience and drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onRequestDemo}
              variant="secondary"
              size="lg"
              icon={Rocket}
            >
              Start Free Trial
            </Button>
            <Button
              onClick={onRequestDemo}
              variant="outline"
              size="lg"
              icon={Calendar}
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};