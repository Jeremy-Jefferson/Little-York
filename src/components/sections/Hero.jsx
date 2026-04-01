import { motion } from 'framer-motion';
import { Button, Icon } from '../ui';
import { storeInfo, contact, trustSignals } from '../../data/storeData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-base via-surface-elevated to-surface-base">
        <div className="grain-overlay" aria-hidden="true" />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(40, 217, 93, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(40, 217, 93, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Atmospheric Background Pattern */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(40, 217, 93, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(75, 46, 115, 0.2) 0%, transparent 40%),
                radial-gradient(circle at 40% 80%, rgba(40, 217, 93, 0.1) 0%, transparent 45%),
                radial-gradient(circle at 90% 90%, rgba(75, 46, 115, 0.15) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        {/* Smoke-like Effect */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-dark/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, -10, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 4,
            }}
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          />
        </div>

        {/* Decorative elements */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-dark/5 rounded-full blur-3xl"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 md:pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6"
              role="list"
              aria-label="Store features"
            >
              {trustSignals.map((signal, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1.5 bg-surface-card/80 border border-border rounded-full text-sm text-text-muted"
                  role="listitem"
                >
                  <Icon name={signal.icon} className="mr-2 text-accent" ariaLabel={signal.text} />
                  {signal.text}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-text mb-6 leading-tight"
            >
              Your Neighborhood Smoke Shop.{' '}
              <span className="text-gradient">Open Late. Priced Right.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-text-muted mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Serving Houston with quality flower, accessories, and fair prices—open late so you can stop by when it works for you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                href={contact.directions}
                icon={<Icon name="mapPin" ariaLabel="Location" />}
                ariaLabel="Get directions to store"
              >
                Get Directions
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={contact.phoneLink}
                icon={<Icon name="phone" ariaLabel="Phone" />}
                ariaLabel="Call store"
              >
                Call Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Area - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            {/* Product showcase grid */}
            <div className="relative max-w-lg mx-auto">
              {/* Logo with glow effect and radial gradient background */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex items-center justify-center mt-5 mb-8"
              >
                {/* Radial gradient background behind logo - softer glow */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle, rgba(40, 217, 93, 0.12) 0%, rgba(40, 217, 93, 0.04) 35%, transparent 65%)',
                    filter: 'blur(50px)',
                  }}
                />
                {/* Logo with glow */}
                <div className="relative">
                  <div 
                    className="absolute inset-0 bg-accent/15 rounded-full blur-3xl"
                    style={{ transform: 'scale(1.3)' }}
                  />
                  <img
                    src="/src/assets/images/LYLOGO.svg"
                    alt={storeInfo.name}
                    className="relative h-[28rem] w-auto drop-shadow-[0_0_25px_rgba(40,217,93,0.25)]"
                  />
                </div>
              </motion.div>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with parallax effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-border-strong rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
