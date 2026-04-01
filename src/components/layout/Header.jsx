import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Icon, StoreStatus } from '../ui';
import { storeInfo, navLinks, contact } from '../../data/storeData';
import logo from '../../assets/images/LYLOGO.svg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
      closeMobileMenu();
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
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
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ease-out ${
        isScrolled
          ? 'bg-surface-base/60 backdrop-blur-md shadow-md shadow-black/30 border-b border-white/10'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2"
            aria-label={`${storeInfo.name} - Home`}
          >
            <img
              src={logo}
              alt={storeInfo.name}
              className="h-12 md:h-16 w-auto"
              loading="lazy"
              decoding="async"
            />
          </a>

          {/* Store Status - Desktop */}
          <div className="hidden lg:block">
            <StoreStatus />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-muted hover:text-accent transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              href={contact.directions}
              icon={<Icon name="mapPin" ariaLabel="Location" />}
              ariaLabel="Get directions to store"
            >
              Directions
            </Button>
            <Button
              variant="primary"
              size="sm"
              href={contact.phoneLink}
              icon={<Icon name="phone" ariaLabel="Phone" />}
              ariaLabel="Call store"
            >
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-muted hover:text-text transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base rounded"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} ariaLabel={isMobileMenuOpen ? 'Close menu icon' : 'Open menu icon'} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-base/98 backdrop-blur-lg border-t border-border"
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4" aria-label="Mobile navigation links">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="text-text-muted hover:text-accent transition-colors duration-300 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base rounded"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-border">
                <Button
                  variant="secondary"
                  href={contact.directions}
                  icon={<Icon name="mapPin" ariaLabel="Location" />}
                  className="w-full justify-center"
                  ariaLabel="Get directions to store"
                >
                  Get Directions
                </Button>
                <Button
                  variant="primary"
                  href={contact.phoneLink}
                  icon={<Icon name="phone" ariaLabel="Phone" />}
                  className="w-full justify-center"
                  ariaLabel="Call store"
                >
                  Call Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
