import { motion } from 'framer-motion';
import { Icon } from '../ui';
import { storeInfo, hours, contact, social, navLinks } from '../../data/storeData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-base border-t border-border shadow-[0_-1px_20px_rgba(40,217,93,0.05)]" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-14 md:py-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src="/src/assets/images/LYLOGO.svg"
              alt={storeInfo.name}
              className="h-32 w-auto mb-4"
              loading="lazy"
              decoding="async"
            />
            <p className="text-text-muted mb-6 max-w-xs">{storeInfo.tagline}</p>
            {/* Social Links */}
            <div className="flex space-x-4" role="list" aria-label="Social media links">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-card rounded-lg flex items-center justify-center text-text-muted hover:text-accent hover:bg-accent-soft transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base"
                aria-label="Connect on LinkedIn"
                role="listitem"
              >
                <Icon name="linkedin" ariaLabel="LinkedIn" />
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-card rounded-lg flex items-center justify-center text-text-muted hover:text-accent hover:bg-accent-soft transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base"
                aria-label="View on GitHub"
                role="listitem"
              >
                <Icon name="github" ariaLabel="GitHub" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Quick Links</h4>
            <ul className="space-y-3" aria-label="Quick links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Location</h4>
            <address className="not-italic text-text-muted space-y-3">
              <p className="flex items-start">
                <Icon name="mapPin" className="mr-2 mt-1 flex-shrink-0 text-accent" ariaLabel="Address" />
                <span>{storeInfo.address.full}</span>
              </p>
              <p className="flex items-center">
                <Icon name="phone" className="mr-2 flex-shrink-0 text-accent" ariaLabel="Phone" />
                <a
                  href={contact.phoneLink}
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base rounded"
                >
                  {storeInfo.phone}
                </a>
              </p>
              <p className="flex items-center">
                <Icon name="mail" className="mr-2 flex-shrink-0 text-accent" ariaLabel="Email" />
                <a
                  href={contact.emailLink}
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base rounded"
                >
                  {storeInfo.email}
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Hours</h4>
            <div className="text-text-muted space-y-2">
              <p className="flex items-center">
                <Icon name="clock" className="mr-2 flex-shrink-0 text-accent" ariaLabel="Hours" />
                <span>{hours.summary}</span>
              </p>
              <p className="text-sm text-text-dim mt-4">{storeInfo.ageRequirement}</p>
            </div>
          </div>
        </div>

        {/* CTA Banner with enhanced visibility */}
        <div className="py-10 border-t border-border">
          <div className="text-center">
            <p className="text-lg md:text-xl font-display font-bold text-text mb-2">
              Stop by tonight — we're <span className="text-gradient">open late.</span>
            </p>
            <p className="text-text-muted text-sm">
              Quality flower, fair prices, and friendly service—right on Little York Road.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-dim text-sm">
            &copy; {currentYear} littleyorksmokeshop.com All rights reserved.
          </p>
          <p className="text-text-dim text-sm flex items-center">
            <Icon name="shield" className="mr-2 text-accent" ariaLabel="Age requirement" />
            {storeInfo.ageRequirement}
          </p>
          <a
            href="https://www.hungryghost.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim text-sm hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base rounded"
          >
            Created & built by Hungry Ghost DEV
          </a>
        </div>
      </div>
    </footer>
  );
}
