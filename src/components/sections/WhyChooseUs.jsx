import { motion } from 'framer-motion';
import { Section, Card, Icon } from '../ui';
import { features } from '../../data/storeData';

export default function WhyChooseUs() {
  return (
    <Section id="why-us" background="darker">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Why Choose <span className="text-gradient">Little York</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle mx-auto"
        >
          We're not just another smoke shop. We're your neighbors, committed to quality and value.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card 
              className="h-full text-center group cursor-pointer"
              whileHover={{ 
                y: -6,
                boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(40, 217, 93, 0.2)'
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-accent-soft rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name={feature.icon} className="text-accent w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-text-muted">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
