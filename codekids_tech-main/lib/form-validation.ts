// Form validation utilities

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateName = (name: string): ValidationResult => {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: 'Name is required' };
  }
  if (name.trim().length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' };
  }
  if (name.trim().length > 50) {
    return { isValid: false, error: 'Name must be less than 50 characters' };
  }
  if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
    return { isValid: false, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' };
  }
  return { isValid: true };
};

export const validateEmail = (email: string): ValidationResult => {
  if (!email || email.trim().length === 0) {
    return { isValid: false, error: 'Email is required' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  return { isValid: true };
};

export const validatePhone = (phone: string, required: boolean = true): ValidationResult => {
  if (!phone || phone.trim().length === 0) {
    if (required) {
      return { isValid: false, error: 'Phone number is required' };
    }
    return { isValid: true };
  }
  // Remove spaces, dashes, and plus signs for validation
  const cleanPhone = phone.replace(/[\s\-+]/g, '');
  // Indian phone number validation (10 digits)
  const phoneRegex = /^[6-9]\d{9}$/;
  if (cleanPhone.length !== 10 || !phoneRegex.test(cleanPhone)) {
    return { isValid: false, error: 'Please enter a valid 10-digit phone number' };
  }
  return { isValid: true };
};

export const validateMessage = (message: string, required: boolean = true): ValidationResult => {
  if (!message || message.trim().length === 0) {
    if (required) {
      return { isValid: false, error: 'Message is required' };
    }
    return { isValid: true };
  }
  if (message.trim().length < 10) {
    return { isValid: false, error: 'Message must be at least 10 characters' };
  }
  if (message.trim().length > 1000) {
    return { isValid: false, error: 'Message must be less than 1000 characters' };
  }
  return { isValid: true };
};

export const validateSelect = (value: string, required: boolean = true): ValidationResult => {
  if (!value || value.trim().length === 0) {
    if (required) {
      return { isValid: false, error: 'Please select an option' };
    }
    return { isValid: true };
  }
  return { isValid: true };
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  // Format as +91 XXXXX XXXXX
  if (cleaned.length <= 10) {
    return cleaned;
  }
  return cleaned.slice(0, 10);
};

