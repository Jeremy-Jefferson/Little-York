import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Card, Button, Icon } from '../ui';
import { storeInfo, contact } from '../../data/storeData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setErrors({});

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <Section id="contact" background="dark">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Get in <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle mx-auto"
        >
          Have a question or feedback? We'd love to hear from you.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card 
            className="h-full"
            whileHover={{ 
              y: -4,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(40, 217, 93, 0.1)'
            }}
          >
            <h3 className="text-2xl font-display font-semibold text-text mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <Icon name="mapPin" className="text-accent w-6 h-6" ariaLabel="Address" />
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">Address</h4>
                  <address className="not-italic text-text-muted">{storeInfo.address.full}</address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <Icon name="phone" className="text-accent w-6 h-6" ariaLabel="Phone" />
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">Phone</h4>
                  <a
                    href={contact.phoneLink}
                    className="text-text-muted hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base rounded"
                  >
                    {storeInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <Icon name="mail" className="text-accent w-6 h-6" ariaLabel="Email" />
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">Email</h4>
                  <a
                    href={contact.emailLink}
                    className="text-text-muted hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base rounded"
                  >
                    {storeInfo.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <Icon name="clock" className="text-accent w-6 h-6" ariaLabel="Hours" />
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">Hours</h4>
                  <p className="text-text-muted">Open Daily 9AM - 12AM</p>
                </div>
              </div>
            </div>


          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card 
            className="h-full"
            whileHover={{ 
              y: -4,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(40, 217, 93, 0.1)'
            }}
          >
            <h3 className="text-2xl font-display font-semibold text-text mb-6">
              Send us a Message
            </h3>

            {submitStatus === 'success' && (
              <div
                className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                role="alert"
                aria-live="polite"
              >
                <p className="text-green-500 flex items-center">
                  <Icon name="shield" className="mr-2" ariaLabel="Success" />
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    className={`w-full px-4 py-3 bg-surface-card border rounded-lg text-text placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:shadow-[0_0_25px_rgba(40,217,93,0.2)] transition-all duration-200 ease-out ${
                      errors.name ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    className={`w-full px-4 py-3 bg-surface-card border rounded-lg text-text placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:shadow-[0_0_25px_rgba(40,217,93,0.2)] transition-all duration-200 ease-out ${
                      errors.email ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface-card border border-border rounded-lg text-text placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:shadow-[0_0_25px_rgba(40,217,93,0.2)] transition-all duration-200 ease-out"
                    placeholder="(713) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    className={`w-full px-4 py-3 bg-surface-card border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:shadow-[0_0_25px_rgba(40,217,93,0.2)] transition-all duration-200 ease-out appearance-none cursor-pointer ${
                      errors.subject ? 'border-red-500' : 'border-border'
                    }`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1.5em 1.5em',
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="products">Product Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-sm text-red-500" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  className={`w-full px-4 py-3 bg-surface-card border rounded-lg text-text placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:shadow-[0_0_25px_rgba(40,217,93,0.2)] transition-all duration-200 ease-out resize-none ${
                    errors.message ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Ask about product availability, deals, or general questions..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full justify-center shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-[1.02] hover:brightness-110 transition-all duration-200 ease-out"
                ariaLabel={isSubmitting ? 'Sending message' : 'Send message'}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
