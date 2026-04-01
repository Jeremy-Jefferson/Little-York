import { motion } from 'framer-motion';

const variants = {
  default: 'card',
  elevated: 'card hover:shadow-card-hover hover:shadow-accent/10',
  bordered: 'bg-transparent border-2 border-border-strong rounded-xl p-6 transition-all duration-300 hover:border-accent/50',
  filled: 'bg-surface-card2 rounded-xl p-6 transition-all duration-300 hover:bg-surface-card'
};

export default function Card({
  children,
  variant = 'default',
  className = '',
  hover = true,
  ...props
}) {
  const baseClasses = variants[variant] || variants.default;
  const combinedClasses = `${baseClasses} ${className}`.trim();
  
  return (
    <motion.div
      className={combinedClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={hover ? { 
        y: -8, 
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(40, 217, 93, 0.1), 0 0 30px rgba(40, 217, 93, 0.05)'
      } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
}
