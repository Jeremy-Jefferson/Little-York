import { motion } from 'framer-motion';
import { Section, Card, Icon } from '../ui';
import { specials } from '../../data/storeData';

export default function FeaturedDeals() {
  return (
    <Section id="deals" background="gradient">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Featured <span className="text-gradient">Deals</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle mx-auto"
        >
          Save more on your favorites. Check back often—our specials rotate regularly.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {specials.map((special, index) => (
          <motion.div
            key={special.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card 
              variant="elevated" 
              className="h-full relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(40, 217, 93, 0.3), 0 0 40px rgba(40, 217, 93, 0.15)'
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {/* Badge with pulse animation */}
              <div className="absolute top-4 right-4">
                <motion.span
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0 rgba(40, 217, 93, 0)',
                      '0 0 0 4px rgba(40, 217, 93, 0.1)',
                      '0 0 0 0 rgba(40, 217, 93, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${
                    special.badge === 'Limited Time' 
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.2)]' 
                      : special.badge === 'Popular'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.2)]'
                      : special.badge === 'Today Only'
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]'
                      : 'bg-accent-soft text-accent border border-accent/30 shadow-[0_0_10px_rgba(40,217,93,0.2)]'
                  }`}>
                  {special.badge}
                </motion.span>
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 mb-4 bg-accent-soft rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="tag" className="text-accent w-6 h-6" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-text mb-2">
                {special.title}
              </h3>
              <p className="text-text-muted mb-4">
                {special.description}
              </p>
              
              {/* Stock subtext */}
              <p className="text-xs text-accent/80 mb-4 flex items-center">
                <Icon name="clock" className="w-3 h-3 mr-1" />
                Limited stock available
              </p>
              
              {/* Disclaimer */}
              <p className="text-xs text-text-dim mt-auto pt-4 border-t border-border">
                {special.disclaimer}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
