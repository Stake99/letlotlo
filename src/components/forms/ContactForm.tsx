'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserIcon, 
  EnvelopeIcon, 
  BuildingOfficeIcon, 
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';
import { theme } from '@/lib/theme';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  buttonHover,
  transitions,
  scaleIn
} from '@/lib/animations';
import type { ContactFormData } from '@/types';

/**
 * ContactForm Component
 * 
 * A comprehensive contact form with real-time validation, animated input focus states,
 * loading animations, and full accessibility compliance.
 * 
 * Features:
 * - Real-time form validation with error messages
 * - Animated input focus states and transitions
 * - Submit button with loading animation
 * - Accessibility compliance with ARIA labels and screen reader support
 * - Success/error feedback with animations
 * - Responsive design with mobile-first approach
 * 
 * Requirements: 11.1, 11.5, 11.6, 15.2, 15.5, 16.8
 */

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  className?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  submitError: string | null;
}

/**
 * Animated Form Field Component
 * Implements animated input focus states and real-time validation
 */
interface FormFieldProps {
  label: string;
  name: keyof ContactFormData;
  type?: 'text' | 'email' | 'textarea';
  placeholder?: string;
  required?: boolean;
  value: string;
  error?: string;
  icon?: React.ComponentType<{ className?: string }>;
  onChange: (value: string) => void;
  onBlur: () => void;
}

function AnimatedFormField({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  value,
  error,
  icon: Icon,
  onChange,
  onBlur,
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const hasError = !!error;

  const fieldId = `contact-form-${name}`;
  const errorId = `${fieldId}-error`;

  const inputClasses = cn(
    'w-full px-4 py-4 pl-12 text-base bg-white border-2 rounded-xl',
    'transition-all duration-200 ease-out',
    'focus:outline-none focus:ring-4 focus:ring-offset-2',
    'placeholder:text-gray-400',
    {
      // Default state
      'border-gray-200 focus:border-primary-500 focus:ring-primary-500/20': !hasError,
      // Error state
      'border-error-500 focus:border-error-500 focus:ring-error-500/20': hasError,
      // Focus state styling
      'shadow-lg': isFocused,
    }
  );

  const labelClasses = cn(
    'absolute left-12 transition-all duration-200 ease-out pointer-events-none',
    'text-gray-600 font-medium',
    {
      // Floating label when focused or has value
      'top-2 text-xs text-primary-600 transform -translate-y-1': isFocused || hasValue,
      // Default label position
      'top-4 text-base': !isFocused && !hasValue,
      // Error state
      'text-error-600': hasError && (isFocused || hasValue),
    }
  );

  const iconClasses = cn(
    'absolute left-4 top-4 w-5 h-5 transition-colors duration-200',
    {
      'text-primary-500': isFocused && !hasError,
      'text-error-500': hasError,
      'text-gray-400': !isFocused && !hasError,
    }
  );

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    onBlur();
  };

  return (
    <motion.div
      variants={staggerItem}
      className="relative"
    >
      {/* Field container with animated border */}
      <motion.div
        className="relative"
        whileFocus={{ scale: 1.01 }}
        transition={transitions.fast}
      >
        {/* Icon */}
        {Icon && (
          <Icon className={iconClasses} aria-hidden="true" />
        )}

        {/* Input/Textarea */}
        {type === 'textarea' ? (
          <textarea
            id={fieldId}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            required={required}
            rows={4}
            className={cn(inputClasses, 'resize-none min-h-[120px] pt-6')}
            aria-describedby={hasError ? errorId : undefined}
            aria-invalid={hasError}
          />
        ) : (
          <input
            id={fieldId}
            name={name}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            required={required}
            className={inputClasses}
            aria-describedby={hasError ? errorId : undefined}
            aria-invalid={hasError}
            autoComplete={
              name === 'name' ? 'name' :
              name === 'email' ? 'email' :
              name === 'company' ? 'organization' :
              'off'
            }
          />
        )}

        {/* Floating Label */}
        <label htmlFor={fieldId} className={labelClasses}>
          {label}
          {required && (
            <span className="text-error-500 ml-1" aria-label="required">*</span>
          )}
        </label>

        {/* Animated focus border */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-primary-500 opacity-0 pointer-events-none"
          animate={{
            opacity: isFocused && !hasError ? 0.3 : 0,
            scale: isFocused && !hasError ? 1.02 : 1,
          }}
          transition={transitions.fast}
        />
      </motion.div>

      {/* Error Message */}
      <AnimatePresence>
        {hasError && (
          <motion.div
            id={errorId}
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={transitions.fast}
            className="flex items-center mt-2 text-sm text-error-600"
            role="alert"
            aria-live="polite"
          >
            <ExclamationCircleIcon className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * Animated Submit Button Component
 * Implements loading animation and hover effects within performance requirements
 */
interface SubmitButtonProps {
  isSubmitting: boolean;
  disabled: boolean;
}

function AnimatedSubmitButton({ isSubmitting, disabled }: SubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      disabled={disabled}
      className={cn(
        'w-full px-8 py-4 text-lg font-semibold text-white rounded-xl',
        'transition-all duration-150 transform-gpu',
        'focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-primary-500/50',
        'relative overflow-hidden group',
        {
          'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-xl':
            !disabled,
          'bg-gray-300 cursor-not-allowed': disabled,
        }
      )}
      variants={buttonHover}
      whileHover={!disabled ? 'animate' : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      transition={transitions.fast}
      style={{
        boxShadow: !disabled ? theme.shadows.colored.primary : undefined,
      }}
    >
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isSubmitting ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="mr-3"
              >
                <ArrowPathIcon className="w-5 h-5" />
              </motion.div>
              <span>Sending Message...</span>
            </motion.div>
          ) : (
            <motion.span
              key="submit"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              Send Message
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      {/* Animated background overlay */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      )}
    </motion.button>
  );
}

/**
 * Main ContactForm Component
 */
export default function ContactForm({ onSubmit, className }: ContactFormProps) {
  // Form data state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // Form validation and submission state
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
    submitError: null,
  });

  // Real-time validation functions
  const validateField = useCallback((name: keyof ContactFormData, value: string | undefined): string | undefined => {
    const stringValue = value || '';
    
    switch (name) {
      case 'name':
        if (!stringValue.trim()) return 'Name is required';
        if (stringValue.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;

      case 'email':
        if (!stringValue.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(stringValue)) return 'Please enter a valid email address';
        return undefined;

      case 'message':
        if (!stringValue.trim()) return 'Message is required';
        if (stringValue.trim().length < 10) return 'Message must be at least 10 characters';
        if (stringValue.trim().length > 1000) return 'Message must be less than 1000 characters';
        return undefined;

      case 'company':
        // Company is optional, but if provided, validate length
        if (stringValue.trim() && stringValue.trim().length < 2) return 'Company name must be at least 2 characters';
        return undefined;

      default:
        return undefined;
    }
  }, []);

  // Handle field changes with real-time validation
  const handleFieldChange = useCallback((name: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear previous error for this field
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  }, [errors]);

  // Handle field blur with validation
  const handleFieldBlur = useCallback((name: keyof ContactFormData) => {
    const value = formData[name];
    const error = validateField(name, value);
    
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [formData, validateField]);

  // Validate entire form
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate all required fields
    (Object.keys(formData) as Array<keyof ContactFormData>).forEach(name => {
      const error = validateField(name, formData[name]);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validateField]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      // Focus first error field for accessibility (client-side only)
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField && typeof document !== 'undefined') {
        const fieldElement = document.getElementById(`contact-form-${firstErrorField}`);
        fieldElement?.focus();
      }
      return;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true, submitError: null }));

    try {
      await onSubmit(formData);
      
      // Success - show success state
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        submitError: null,
      });

      // Reset form after success
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      setErrors({});

    } catch (error) {
      // Handle submission error
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        submitError: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    }
  }, [formData, validateForm, errors, onSubmit]);

  // Check if form has any errors or is invalid
  const hasErrors = Object.values(errors).some(error => !!error);
  const isFormValid = formData.name && formData.email && formData.message && !hasErrors;

  return (
    <motion.div
      className={cn(
        'w-full max-w-2xl mx-auto',
        className
      )}
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Success Message */}
      <AnimatePresence>
        {formState.isSubmitted && (
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mb-8 p-6 bg-success-50 border border-success-200 rounded-xl"
          >
            <div className="flex items-center text-success-800">
              <CheckCircleIcon className="w-6 h-6 mr-3 text-success-600" />
              <div>
                <h3 className="font-semibold">Message Sent Successfully!</h3>
                <p className="text-sm text-success-700 mt-1">
                  Thank you for your message. We'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {formState.submitError && (
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mb-8 p-6 bg-error-50 border border-error-200 rounded-xl"
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-center text-error-800">
              <ExclamationCircleIcon className="w-6 h-6 mr-3 text-error-600" />
              <div>
                <h3 className="font-semibold">Error Sending Message</h3>
                <p className="text-sm text-error-700 mt-1">
                  {formState.submitError}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        noValidate
        aria-label="Contact form"
      >
        {/* Name Field */}
        <AnimatedFormField
          label="Full Name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          required
          value={formData.name}
          error={errors.name}
          icon={UserIcon}
          onChange={(value) => handleFieldChange('name', value)}
          onBlur={() => handleFieldBlur('name')}
        />

        {/* Email Field */}
        <AnimatedFormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
          value={formData.email}
          error={errors.email}
          icon={EnvelopeIcon}
          onChange={(value) => handleFieldChange('email', value)}
          onBlur={() => handleFieldBlur('email')}
        />

        {/* Company Field (Optional) */}
        <AnimatedFormField
          label="Company Name"
          name="company"
          type="text"
          placeholder="Enter your company name (optional)"
          value={formData.company || ''}
          error={errors.company}
          icon={BuildingOfficeIcon}
          onChange={(value) => handleFieldChange('company', value)}
          onBlur={() => handleFieldBlur('company')}
        />

        {/* Message Field */}
        <AnimatedFormField
          label="Message"
          name="message"
          type="textarea"
          placeholder="Tell us about your project or inquiry..."
          required
          value={formData.message}
          error={errors.message}
          icon={ChatBubbleLeftRightIcon}
          onChange={(value) => handleFieldChange('message', value)}
          onBlur={() => handleFieldBlur('message')}
        />

        {/* Submit Button */}
        <motion.div variants={staggerItem}>
          <AnimatedSubmitButton
            isSubmitting={formState.isSubmitting}
            disabled={!isFormValid || formState.isSubmitting}
          />
        </motion.div>

        {/* Form Footer */}
        <motion.div
          variants={staggerItem}
          className="text-center text-sm text-gray-600"
        >
          <p>
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}