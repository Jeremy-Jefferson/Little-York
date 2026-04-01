import { motion } from 'framer-motion';
import { Section, Card, Icon } from '../ui';
import { categories } from '../../data/storeData';

export default function WhatWeCarry() {
  return (
    <Section id="products" background="dark">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          What We <span className="text-gradient">Carry</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle mx-auto"
        >
          Everything you need—from essentials to premium picks.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card 
              className="h-full text-center group cursor-pointer bg-gradient-to-br from-surface-card to-surface-card2"
              whileHover={{ 
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(40, 217, 93, 0.25), 0 0 40px rgba(40, 217, 93, 0.15)'
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {/* Icon with depth effect */}
              <div className="relative w-18 h-18 mx-auto mb-5">
                {/* Background glow */}
                <div className="absolute inset-0 bg-accent/10 rounded-xl blur-xl group-hover:bg-accent/20 transition-colors duration-300" />
                {/* Icon container */}
                <div className="relative w-18 h-18 bg-surface-card2 rounded-xl flex items-center justify-center group-hover:bg-accent-soft transition-colors duration-300 shadow-lg group-hover:scale-110">
                  <Icon 
                    name={category.icon} 
                    className="text-text-muted group-hover:text-accent transition-colors duration-300 w-9 h-9" 
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-text-dim">
                {category.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
