import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Icon } from './index';

export default function AgeVerification() {
  const [isVerified, setIsVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user has already verified their age
    const hasVerified = localStorage.getItem('ageVerified');
    if (hasVerified === 'true') {
      setIsVerified(true);
    } else {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
    setShowModal(false);
  };

  const handleDeny = () => {
    // Redirect to a safe page or show message
    window.location.href = 'https://www.google.com';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      // Prevent closing modal with Escape key
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  if (isVerified) {
    return null;
  }

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="age-verification-title"
          aria-describedby="age-verification-description"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-surface-base border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative p-8 text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-accent-soft rounded-full flex items-center justify-center">
                <Icon name="shield" className="text-accent w-10 h-10" ariaLabel="Shield icon" />
              </div>

              {/* Title */}
              <h2
                id="age-verification-title"
                className="text-2xl font-display font-bold text-text mb-3"
              >
                Age Verification Required
              </h2>

              {/* Description */}
              <p
                id="age-verification-description"
                className="text-text-muted mb-6 leading-relaxed"
              >
                You must be 21 years or older to enter this website. Please verify your age to
                continue.
              </p>

              {/* Age requirement badge */}
              <div className="inline-flex items-center px-4 py-2 bg-accent-soft border border-accent/20 rounded-full mb-8">
                <Icon name="shield" className="mr-2 text-accent" ariaLabel="Age requirement" />
                <span className="text-accent font-semibold">21+ Valid ID Required</span>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleVerify}
                  className="flex-1 justify-center"
                  ariaLabel="Confirm you are 21 or older"
                >
                  I am 21 or older
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleDeny}
                  className="flex-1 justify-center"
                  ariaLabel="Confirm you are under 21"
                >
                  I am under 21
                </Button>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-text-dim mt-6">
                By entering this site, you agree to our terms of service and confirm you are of legal
                age.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
