import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { FormMessage } from './ui/FormMessage';
import { sendEmail, validateEmail, FormData } from '../utils/emailService';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
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

    const requiredFields = ['first_name', 'last_name', 'email'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData] || formData[field as keyof typeof formData].trim() === '');

    if (missingFields.length > 0) {
      showMessage('Please fill in all required fields.', 'error');
      return;
    }

    if (!validateEmail(formData.email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    setIsSubmitting(true);

    const emailData: FormData = {
      ...formData,
      form_type: 'demo',
      to_email: 'info@damnart.com'
    };

    try {
      await sendEmail(emailData);
      showMessage('Demo request sent successfully! We\'ll get back to you soon.', 'success');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company: '',
        location: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      showMessage('Failed to send request. Please try again or contact us directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="2xl">
      {/* Top-right close button */}
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
      </div>

      <div>
        <h2 className="text-3xl font-bold blue-text-gradient mb-2">Request Demo Trial</h2>
        <p className="text-gray-600 mb-6">Get started with your personalized AI assistant today</p>
      </div>

      <FormMessage 
        message={message.text} 
        type={message.type} 
        isVisible={message.isVisible} 
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="animate-slide-in-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div className="animate-slide-in-right">
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        <div className="animate-fade-in-up">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="animate-slide-in-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div className="animate-slide-in-right">
            <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        <div className="animate-fade-in-up">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div className="animate-fade-in-up">
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            placeholder="Tell us about your specific needs and requirements..."
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none placeholder-gray-400"
          />
        </div>

        <div className="animate-fade-in-up">
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
            icon={Send}
          >
            {isSubmitting ? 'Sending Request...' : 'Request Demo Trial'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
