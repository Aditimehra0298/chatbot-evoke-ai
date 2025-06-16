import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAIL_CONFIG = {
  publicKey: 'SAsvhNVv96vC3yBRJ',
  serviceId: 'service_h73hdi9',
  templateId: 'template_wqgu27i'
};

// Initialize EmailJS
emailjs.init(EMAIL_CONFIG.publicKey);

export interface FormData {
  first_name?: string;
  last_name?: string;
  email: string;
  phone?: string;
  company?: string;
  location?: string;
  message?: string;
  form_type: string;
  to_email: string;
}

export const sendEmail = async (formData: FormData): Promise<any> => {
  return emailjs.send(
    EMAIL_CONFIG.serviceId,
    EMAIL_CONFIG.templateId,
    formData
  );
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};