import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Textarea } from '@/components/ui';
import { contactService } from '@/services/contactService';
import type { ContactFormData, ContactFormState } from '@/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const [ref, isVisible] = useIntersectionObserver<HTMLFormElement>();
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [formState, setFormState] = useState<ContactFormState>({
    status: 'idle',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    const nameError = contactService.validateField('name', formData.name);
    if (nameError) newErrors.name = nameError;

    const emailError = contactService.validateField('email', formData.email);
    if (emailError) newErrors.email = emailError;

    const messageError = contactService.validateField('message', formData.message);
    if (messageError) newErrors.message = messageError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormState({ status: 'loading', message: '' });

    const result = await contactService.submitContactForm(formData);
    setFormState(result);

    if (result.status === 'success') {
      setFormData(initialFormData);
    }
  };

  return (
    <motion.form
      ref={ref}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
    >
      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
        </div>

        <Input
          label="Subject"
          name="subject"
          placeholder="What's this about?"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
        />

        <Textarea
          label="Message"
          name="message"
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
        />

        {formState.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg text-sm font-medium ${
              formState.status === 'success'
                ? 'bg-green-100 text-green-700'
                : formState.status === 'error'
                ? 'bg-red-100 text-red-700'
                : ''
            }`}
          >
            {formState.message}
          </motion.div>
        )}

        <Button
          type="submit"
          size="lg"
          isLoading={formState.status === 'loading'}
          className="w-full md:w-auto"
        >
          Send Message
        </Button>
      </div>
    </motion.form>
  );
}
