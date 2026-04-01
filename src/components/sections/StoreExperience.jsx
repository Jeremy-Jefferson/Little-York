import { motion } from 'framer-motion';
import { Section, Card, Icon } from '../ui';
import { brandStory, testimonials } from '../../data/storeData';

export default function StoreExperience() {
  return (
    <Section id="about" background="darker">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-6">
            {brandStory.headline}
          </h2>
          <p className="text-lg text-text-muted mb-8 leading-loose">
            {brandStory.story}
          </p>
          
          {/* Values with consistent spacing */}
          <div className="space-y-5">
            {brandStory.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="w-2 h-2 bg-accent rounded-full mr-4 mt-2 flex-shrink-0" />
                <span className="text-text-muted leading-relaxed">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-display font-semibold text-text mb-6">
            What Our Customers Say
          </h3>
          
          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="relative group"
                  whileHover={{ 
                    y: -4,
                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(40, 217, 93, 0.1)'
                  }}
                >
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 text-accent/20">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="star" className="text-accent w-4 h-4" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-text-muted mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author with avatar */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center">
                      {/* Avatar circle */}
                      <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mr-3 border border-accent/30">
                        <span className="text-accent font-semibold text-sm">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-accent font-semibold">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-text-dim flex items-center">
                          <Icon name="shield" className="w-3 h-3 mr-1 text-green-500" />
                          Verified Customer
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
