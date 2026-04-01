import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Icon } from './index';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (e) {
        console.error('Error parsing cookie consent:', e);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (key) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowSettings(false);
    }
  };

  useEffect(() => {
    if (showSettings) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showSettings]);

  if (!showBanner) {
    return null;
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-surface-base border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Main Banner */}
              {!showSettings && (
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-accent-soft rounded-lg flex items-center justify-center mr-3">
                          <Icon name="shield" className="text-accent w-5 h-5" ariaLabel="Cookie consent" />
                        </div>
                        <h2
                          id="cookie-consent-title"
                          className="text-xl font-display font-bold text-text"
                        >
                          We Value Your Privacy
                        </h2>
                      </div>
                      <p
                        id="cookie-consent-description"
                        className="text-text-muted text-sm leading-relaxed"
                      >
                        We use cookies to enhance your browsing experience, serve personalized content,
                        and analyze our traffic. By clicking "Accept All", you consent to our use of
                        cookies. You can customize your preferences by clicking "Cookie Settings".
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowSettings(true)}
                        ariaLabel="Open cookie settings"
                      >
                        Cookie Settings
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={handleRejectAll}
                        ariaLabel="Reject all cookies"
                      >
                        Reject All
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleAcceptAll}
                        ariaLabel="Accept all cookies"
                      >
                        Accept All
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Settings Panel */}
              {showSettings && (
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-display font-bold text-text">Cookie Settings</h2>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-2 text-text-muted hover:text-text transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base rounded"
                      aria-label="Close cookie settings"
                    >
                      <Icon name="close" ariaLabel="Close" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Necessary Cookies */}
                    <div className="flex items-start justify-between p-4 bg-surface-card rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-text mb-1">Necessary Cookies</h3>
                        <p className="text-sm text-text-muted">
                          These cookies are essential for the website to function properly. They cannot
                          be disabled.
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="w-12 h-6 bg-accent rounded-full flex items-center justify-end px-1">
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-start justify-between p-4 bg-surface-card rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-text mb-1">Analytics Cookies</h3>
                        <p className="text-sm text-text-muted">
                          These cookies help us understand how visitors interact with our website by
                          collecting and reporting information anonymously.
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => handlePreferenceChange('analytics')}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.analytics
                              ? 'bg-accent justify-end'
                              : 'bg-surface-card2 justify-start'
                          }`}
                          aria-label={`${preferences.analytics ? 'Disable' : 'Enable'} analytics cookies`}
                          aria-pressed={preferences.analytics}
                        >
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </button>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-start justify-between p-4 bg-surface-card rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-text mb-1">Marketing Cookies</h3>
                        <p className="text-sm text-text-muted">
                          These cookies are used to track visitors across websites to display relevant
                          advertisements.
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => handlePreferenceChange('marketing')}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.marketing
                              ? 'bg-accent justify-end'
                              : 'bg-surface-card2 justify-start'
                          }`}
                          aria-label={`${preferences.marketing ? 'Disable' : 'Enable'} marketing cookies`}
                          aria-pressed={preferences.marketing}
                        >
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </button>
                      </div>
                    </div>

                    {/* Preference Cookies */}
                    <div className="flex items-start justify-between p-4 bg-surface-card rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-text mb-1">Preference Cookies</h3>
                        <p className="text-sm text-text-muted">
                          These cookies allow the website to remember choices you make and provide
                          enhanced, personalized features.
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => handlePreferenceChange('preferences')}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.preferences
                              ? 'bg-accent justify-end'
                              : 'bg-surface-card2 justify-start'
                          }`}
                          aria-label={`${preferences.preferences ? 'Disable' : 'Enable'} preference cookies`}
                          aria-pressed={preferences.preferences}
                        >
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-border">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleRejectAll}
                      ariaLabel="Reject all cookies"
                    >
                      Reject All
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handleAcceptSelected}
                      ariaLabel="Accept selected cookies"
                    >
                      Accept Selected
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleAcceptAll}
                      ariaLabel="Accept all cookies"
                    >
                      Accept All
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
