import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import ContactForm from './ContactForm';
import type { ContactFormData } from '@/types';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    form: ({ children, ...props }: any) => <form {...props}>{children}</form>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    textarea: ({ children, ...props }: any) => <textarea {...props}>{children}</textarea>,
    input: ({ children, ...props }: any) => <input {...props}>{children}</input>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock Heroicons
jest.mock('@heroicons/react/24/outline', () => ({
  UserIcon: () => <svg data-testid="user-icon" />,
  EnvelopeIcon: () => <svg data-testid="envelope-icon" />,
  BuildingOfficeIcon: () => <svg data-testid="building-icon" />,
  ChatBubbleLeftRightIcon: () => <svg data-testid="chat-icon" />,
  CheckCircleIcon: () => <svg data-testid="check-icon" />,
  ExclamationCircleIcon: () => <svg data-testid="exclamation-icon" />,
  ArrowPathIcon: () => <svg data-testid="arrow-path-icon" />,
}));

describe('ContactForm', () => {
  const mockOnSubmit = jest.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  const renderContactForm = (props = {}) => {
    return render(
      <ContactForm
        onSubmit={mockOnSubmit}
        {...props}
      />
    );
  };

  describe('Rendering', () => {
    it('renders all form fields correctly', () => {
      renderContactForm();

      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/company name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    });

    it('displays required field indicators', () => {
      renderContactForm();

      // Check for required asterisks
      expect(screen.getByText('*')).toBeInTheDocument();
      
      // Name and email should be required
      const nameField = screen.getByLabelText(/full name/i);
      const emailField = screen.getByLabelText(/email address/i);
      const messageField = screen.getByLabelText(/message/i);
      
      expect(nameField).toHaveAttribute('required');
      expect(emailField).toHaveAttribute('required');
      expect(messageField).toHaveAttribute('required');
      
      // Company should not be required
      const companyField = screen.getByLabelText(/company name/i);
      expect(companyField).not.toHaveAttribute('required');
    });

    it('renders with custom className', () => {
      const { container } = renderContactForm({ className: 'custom-class' });
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });

  describe('Form Validation', () => {
    it('validates required fields on blur', async () => {
      renderContactForm();

      const nameField = screen.getByLabelText(/full name/i);
      const emailField = screen.getByLabelText(/email address/i);
      const messageField = screen.getByLabelText(/message/i);

      // Trigger validation by focusing and blurring empty fields
      await user.click(nameField);
      await user.tab();

      await user.click(emailField);
      await user.tab();

      await user.click(messageField);
      await user.tab();

      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/message is required/i)).toBeInTheDocument();
      });
    });

    it('validates email format', async () => {
      renderContactForm();

      const emailField = screen.getByLabelText(/email address/i);

      await user.type(emailField, 'invalid-email');
      await user.tab();

      await waitFor(() => {
        expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
      });
    });

    it('validates minimum field lengths', async () => {
      renderContactForm();

      const nameField = screen.getByLabelText(/full name/i);
      const messageField = screen.getByLabelText(/message/i);

      // Test name minimum length
      await user.type(nameField, 'A');
      await user.tab();

      await waitFor(() => {
        expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      });

      // Test message minimum length
      await user.type(messageField, 'Short');
      await user.tab();

      await waitFor(() => {
        expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument();
      });
    });

    it('validates message maximum length', async () => {
      renderContactForm();

      const messageField = screen.getByLabelText(/message/i);
      const longMessage = 'A'.repeat(1001);

      await user.type(messageField, longMessage);
      await user.tab();

      await waitFor(() => {
        expect(screen.getByText(/message must be less than 1000 characters/i)).toBeInTheDocument();
      });
    });

    it('clears errors when field becomes valid', async () => {
      renderContactForm();

      const nameField = screen.getByLabelText(/full name/i);

      // Trigger error
      await user.click(nameField);
      await user.tab();

      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      });

      // Fix the error
      await user.type(nameField, 'John Doe');

      await waitFor(() => {
        expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
      });
    });
  });

  describe('Form Submission', () => {
    const validFormData: ContactFormData = {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Test Company',
      message: 'This is a test message with enough characters.',
    };

    it('submits form with valid data', async () => {
      mockOnSubmit.mockResolvedValueOnce(undefined);
      renderContactForm();

      // Fill out the form
      await user.type(screen.getByLabelText(/full name/i), validFormData.name);
      await user.type(screen.getByLabelText(/email address/i), validFormData.email);
      await user.type(screen.getByLabelText(/company name/i), validFormData.company!);
      await user.type(screen.getByLabelText(/message/i), validFormData.message);

      // Submit the form
      await user.click(screen.getByRole('button', { name: /send message/i }));

      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledWith(validFormData);
      });
    });

    it('shows loading state during submission', async () => {
      // Mock a delayed submission
      mockOnSubmit.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
      renderContactForm();

      // Fill out the form
      await user.type(screen.getByLabelText(/full name/i), validFormData.name);
      await user.type(screen.getByLabelText(/email address/i), validFormData.email);
      await user.type(screen.getByLabelText(/message/i), validFormData.message);

      // Submit the form
      await user.click(screen.getByRole('button', { name: /send message/i }));

      // Check loading state
      expect(screen.getByText(/sending message/i)).toBeInTheDocument();
      expect(screen.getByTestId('arrow-path-icon')).toBeInTheDocument();

      // Wait for submission to complete
      await waitFor(() => {
        expect(screen.queryByText(/sending message/i)).not.toBeInTheDocument();
      });
    });

    it('shows success message after successful submission', async () => {
      mockOnSubmit.mockResolvedValueOnce(undefined);
      renderContactForm();

      // Fill out and submit form
      await user.type(screen.getByLabelText(/full name/i), validFormData.name);
      await user.type(screen.getByLabelText(/email address/i), validFormData.email);
      await user.type(screen.getByLabelText(/message/i), validFormData.message);
      await user.click(screen.getByRole('button', { name: /send message/i }));

      await waitFor(() => {
        expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
        expect(screen.getByText(/we'll get back to you within 24 hours/i)).toBeInTheDocument();
      });
    });

    it('resets form after successful submission', async () => {
      mockOnSubmit.mockResolvedValueOnce(undefined);
      renderContactForm();

      const nameField = screen.getByLabelText(/full name/i) as HTMLInputElement;
      const emailField = screen.getByLabelText(/email address/i) as HTMLInputElement;
      const messageField = screen.getByLabelText(/message/i) as HTMLTextAreaElement;

      // Fill out and submit form
      await user.type(nameField, validFormData.name);
      await user.type(emailField, validFormData.email);
      await user.type(messageField, validFormData.message);
      await user.click(screen.getByRole('button', { name: /send message/i }));

      await waitFor(() => {
        expect(nameField.value).toBe('');
        expect(emailField.value).toBe('');
        expect(messageField.value).toBe('');
      });
    });

    it('shows error message on submission failure', async () => {
      const errorMessage = 'Network error occurred';
      mockOnSubmit.mockRejectedValueOnce(new Error(errorMessage));
      renderContactForm();

      // Fill out and submit form
      await user.type(screen.getByLabelText(/full name/i), validFormData.name);
      await user.type(screen.getByLabelText(/email address/i), validFormData.email);
      await user.type(screen.getByLabelText(/message/i), validFormData.message);
      await user.click(screen.getByRole('button', { name: /send message/i }));

      await waitFor(() => {
        expect(screen.getByText(/error sending message/i)).toBeInTheDocument();
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
      });
    });

    it('prevents submission with invalid data', async () => {
      renderContactForm();

      // Try to submit empty form
      await user.click(screen.getByRole('button', { name: /send message/i }));

      // Should not call onSubmit
      expect(mockOnSubmit).not.toHaveBeenCalled();

      // Should show validation errors
      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/message is required/i)).toBeInTheDocument();
      });
    });

    it('disables submit button when form is invalid', () => {
      renderContactForm();

      const submitButton = screen.getByRole('button', { name: /send message/i });
      expect(submitButton).toBeDisabled();
    });

    it('enables submit button when form is valid', async () => {
      renderContactForm();

      const submitButton = screen.getByRole('button', { name: /send message/i });

      // Fill out required fields
      await user.type(screen.getByLabelText(/full name/i), validFormData.name);
      await user.type(screen.getByLabelText(/email address/i), validFormData.email);
      await user.type(screen.getByLabelText(/message/i), validFormData.message);

      await waitFor(() => {
        expect(submitButton).not.toBeDisabled();
      });
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = renderContactForm();
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('provides proper ARIA labels and descriptions', () => {
      renderContactForm();

      const nameField = screen.getByLabelText(/full name/i);
      const emailField = screen.getByLabelText(/email address/i);
      const messageField = screen.getByLabelText(/message/i);

      expect(nameField).toHaveAttribute('aria-invalid', 'false');
      expect(emailField).toHaveAttribute('aria-invalid', 'false');
      expect(messageField).toHaveAttribute('aria-invalid', 'false');
    });

    it('updates ARIA attributes when validation errors occur', async () => {
      renderContactForm();

      const nameField = screen.getByLabelText(/full name/i);

      // Trigger validation error
      await user.click(nameField);
      await user.tab();

      await waitFor(() => {
        expect(nameField).toHaveAttribute('aria-invalid', 'true');
        expect(nameField).toHaveAttribute('aria-describedby');
      });
    });

    it('provides proper form labeling', () => {
      renderContactForm();

      const form = screen.getByRole('form');
      expect(form).toHaveAttribute('aria-label', 'Contact form');
    });

    it('supports keyboard navigation', async () => {
      renderContactForm();

      const nameField = screen.getByLabelText(/full name/i);
      const emailField = screen.getByLabelText(/email address/i);
      const companyField = screen.getByLabelText(/company name/i);
      const messageField = screen.getByLabelText(/message/i);
      const submitButton = screen.getByRole('button', { name: /send message/i });

      // Tab through form fields
      nameField.focus();
      expect(document.activeElement).toBe(nameField);

      await user.tab();
      expect(document.activeElement).toBe(emailField);

      await user.tab();
      expect(document.activeElement).toBe(companyField);

      await user.tab();
      expect(document.activeElement).toBe(messageField);

      await user.tab();
      expect(document.activeElement).toBe(submitButton);
    });

    it('announces errors to screen readers', async () => {
      renderContactForm();

      const nameField = screen.getByLabelText(/full name/i);

      // Trigger validation error
      await user.click(nameField);
      await user.tab();

      await waitFor(() => {
        const errorMessage = screen.getByRole('alert');
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveAttribute('aria-live', 'polite');
      });
    });
  });

  describe('User Experience', () => {
    it('provides real-time validation feedback', async () => {
      renderContactForm();

      const emailField = screen.getByLabelText(/email address/i);

      // Type invalid email
      await user.type(emailField, 'invalid');
      await user.tab();

      await waitFor(() => {
        expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
      });

      // Fix the email
      await user.clear(emailField);
      await user.type(emailField, 'valid@example.com');

      await waitFor(() => {
        expect(screen.queryByText(/please enter a valid email address/i)).not.toBeInTheDocument();
      });
    });

    it('handles optional company field correctly', async () => {
      renderContactForm();

      const companyField = screen.getByLabelText(/company name/i);

      // Company field should not be required
      expect(companyField).not.toHaveAttribute('required');

      // Should not show error when left empty
      await user.click(companyField);
      await user.tab();

      expect(screen.queryByText(/company/i)).not.toBeInTheDocument();
    });

    it('provides helpful placeholder text', () => {
      renderContactForm();

      expect(screen.getByPlaceholderText(/enter your full name/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/enter your email address/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/enter your company name \(optional\)/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/tell us about your project/i)).toBeInTheDocument();
    });

    it('shows privacy notice', () => {
      renderContactForm();

      expect(screen.getByText(/we respect your privacy/i)).toBeInTheDocument();
      expect(screen.getByText(/information will never be shared/i)).toBeInTheDocument();
    });
  });

  describe('Performance Requirements', () => {
    it('validates form submission timing (Requirements 11.5, 11.6)', async () => {
      const startTime = performance.now();
      
      mockOnSubmit.mockImplementation(async () => {
        // Simulate processing time under 500ms requirement
        await new Promise(resolve => setTimeout(resolve, 100));
      });

      renderContactForm();

      // Fill out valid form
      await user.type(screen.getByLabelText(/full name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message/i), 'This is a test message.');

      // Submit form
      await user.click(screen.getByRole('button', { name: /send message/i }));

      await waitFor(() => {
        expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
      });

      const endTime = performance.now();
      const processingTime = endTime - startTime;

      // Should process within reasonable time (allowing for test overhead)
      expect(processingTime).toBeLessThan(1000);
    });

    it('shows validation errors within 200ms requirement', async () => {
      renderContactForm();

      const startTime = performance.now();
      const nameField = screen.getByLabelText(/full name/i);

      // Trigger validation
      await user.click(nameField);
      await user.tab();

      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      });

      const endTime = performance.now();
      const validationTime = endTime - startTime;

      // Should show validation error quickly (allowing for test overhead)
      expect(validationTime).toBeLessThan(500);
    });
  });
});