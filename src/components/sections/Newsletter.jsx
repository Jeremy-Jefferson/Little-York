import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Button, Icon } from '../ui';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError(null);
    setIsSubmitting(true);

    // Simulate newsletter signup
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setEmail('');

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <Section id="newsletter" background="gradient" padding="sm">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 bg-accent-soft rounded-full flex items-center justify-center">
            <Icon name="mail" className="text-accent w-8 h-8" ariaLabel="Email icon" />
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-display font-bold text-text mb-3">
            Get <span className="text-gradient">$5 Off</span> Your Next Visit
          </h2>

          {/* Description */}
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            Sign up for exclusive deals, new arrivals, and local specials.
          </p>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div
              className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
              role="alert"
              aria-live="polite"
            >
              <p className="text-green-500 flex items-center justify-center">
                <Icon name="shield" className="mr-2" ariaLabel="Success" />
                Thank you for subscribing! Check your email for your $5 coupon.
              </p>
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            aria-label="Newsletter signup form"
          >
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="newsletter-email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                onKeyDown={handleKeyDown}
                required
                aria-describedby={error ? 'newsletter-error' : undefined}
                aria-invalid={error ? 'true' : 'false'}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 bg-surface-card border rounded-lg text-text placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:shadow-[0_0_20px_rgba(40,217,93,0.15)] transition-all duration-300 ${
                  error ? 'border-red-500' : 'border-border'
                }`}
              />
              {error && (
                <p id="newsletter-error" className="mt-1 text-sm text-red-500 text-left" role="alert">
                  {error}
                </p>
              )}
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="whitespace-nowrap shadow-lg shadow-accent/20 hover:shadow-accent/30"
              ariaLabel={isSubmitting ? 'Subscribing' : 'Subscribe to newsletter'}
            >
              {isSubmitting ? 'Subscribing...' : 'Get $5 Off'}
            </Button>
          </form>

          {/* Disclaimer */}
          <p className="text-xs text-text-dim mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </motion.div>
      </div>
    </Section>
  );
}
