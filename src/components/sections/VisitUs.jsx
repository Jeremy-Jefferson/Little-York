import { motion } from 'framer-motion';
import { Section, Card, Button, Icon } from '../ui';
import { storeInfo, hours, contact } from '../../data/storeData';

export default function VisitUs() {
  return (
    <Section id="visit" background="gradient" padding="lg">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Visit <span className="text-gradient">Us</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle mx-auto"
        >
          Stop by and see us. We're open late, seven days a week.
        </motion.p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Location Info */}
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
            {/* Address */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text mb-4 flex items-center">
                <Icon name="mapPin" className="mr-3 text-accent" />
                Location
              </h3>
              <address className="not-italic text-text-muted text-lg">
                {storeInfo.address.full}
              </address>
            </div>
            
            {/* Hours */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text mb-4 flex items-center">
                <Icon name="clock" className="mr-3 text-accent" />
                Hours
              </h3>
              {/* Open Daily label */}
              <p className="text-sm text-accent font-semibold mb-3 flex items-center">
                <Icon name="clock" className="w-4 h-4 mr-1" />
                Open Daily
              </p>
              <div className="space-y-2">
                {hours.detailed.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="text-text font-medium">{item.day}</span>
                    <span className="text-text-muted">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Age Requirement */}
            <div className="mb-8 p-4 bg-accent-soft border border-accent/20 rounded-lg">
              <p className="text-accent font-semibold flex items-center">
                <Icon name="shield" className="mr-2" />
                {storeInfo.ageRequirement}
              </p>
            </div>
            
            {/* Contact */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text mb-4 flex items-center">
                <Icon name="phone" className="mr-3 text-accent" />
                Contact
              </h3>
              <div className="space-y-2">
                <a 
                  href={contact.phoneLink}
                  className="text-text-muted hover:text-accent transition-colors text-lg block"
                >
                  {storeInfo.phone}
                </a>
                <a 
                  href={contact.emailLink}
                  className="text-text-muted hover:text-accent transition-colors text-lg block"
                >
                  {storeInfo.email}
                </a>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                href={contact.directions}
                icon={<Icon name="mapPin" />}
                className="flex-1 justify-center shadow-lg shadow-accent/20 hover:shadow-accent/30"
              >
                Get Directions
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={contact.phoneLink}
                icon={<Icon name="phone" />}
                className="flex-1 justify-center"
              >
                Call Now
              </Button>
            </div>
          </Card>
        </motion.div>
        
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card 
            className="h-full p-0 overflow-hidden"
            whileHover={{ 
              y: -4,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(40, 217, 93, 0.1)'
            }}
          >
            {/* Embedded Google Map */}
            <div className="relative w-full h-full min-h-[400px]">
              <iframe
                src={contact.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Little York Smoke Shop Location"
                className="absolute inset-0"
              />
              
              {/* Fallback overlay for loading */}
              <div className="absolute inset-0 flex items-center justify-center bg-surface-card2 pointer-events-none opacity-0 transition-opacity duration-300" id="map-loading">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-accent-soft rounded-full flex items-center justify-center animate-pulse">
                    <Icon name="mapPin" className="text-accent w-10 h-10" />
                  </div>
                  <p className="text-text-muted">
                    Loading map...
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
