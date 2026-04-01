import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './index';

export default function MobileBottomNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Show bottom nav after scrolling past hero
      setIsVisible(window.scrollY > 300);

      // Update active section based on scroll position
      const sections = ['home', 'why-us', 'deals', 'products', 'visit', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: 'home', label: 'Home', href: '#home' },
    { id: 'products', icon: 'tag', label: 'Products', href: '#products' },
    { id: 'deals', icon: 'sparkles', label: 'Deals', href: '#deals' },
    { id: 'visit', icon: 'mapPin', label: 'Visit', href: '#visit' },
    { id: 'contact', icon: 'mail', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface-base/95 backdrop-blur-lg border-t border-border"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-around h-16 px-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base rounded-lg ${
                  activeSection === item.id
                    ? 'text-accent'
                    : 'text-text-muted hover:text-text'
                }`}
                aria-label={item.label}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <Icon
                  name={item.icon}
                  className={`w-5 h-5 mb-1 transition-transform duration-200 ${
                    activeSection === item.id ? 'scale-110' : ''
                  }`}
                  ariaLabel={item.label}
                />
                <span className="text-xs font-medium">{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 w-12 h-0.5 bg-accent rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
