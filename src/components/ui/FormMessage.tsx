import React from 'react';

interface FormMessageProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
}

export const FormMessage: React.FC<FormMessageProps> = ({ message, type, isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className={`form-message ${type} ${!isVisible ? 'hidden' : ''}`}>
      {message}
    </div>
  );
};