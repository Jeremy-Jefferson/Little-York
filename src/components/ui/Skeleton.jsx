import { motion } from 'framer-motion';

export default function Skeleton({
  className = '',
  variant = 'default',
  width = 'full',
  height = 'auto',
  ariaLabel = 'Loading content',
  ...props
}) {
  const variants = {
    default: 'bg-surface-card',
    text: 'bg-surface-card rounded',
    circle: 'bg-surface-card rounded-full',
    card: 'bg-surface-card rounded-xl',
  };

  const widths = {
    full: 'w-full',
    '1/2': 'w-1/2',
    '1/3': 'w-1/3',
    '2/3': 'w-2/3',
    '1/4': 'w-1/4',
    '3/4': 'w-3/4',
  };

  const heights = {
    auto: 'h-4',
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-16',
    '2xl': 'h-24',
  };

  const baseClasses = variants[variant] || variants.default;
  const widthClass = widths[width] || widths.full;
  const heightClass = heights[height] || heights.auto;

  return (
    <motion.div
      className={`${baseClasses} ${widthClass} ${heightClass} ${className}`.trim()}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      role="status"
      aria-label={ariaLabel}
      aria-busy="true"
      {...props}
    >
      <span className="sr-only">{ariaLabel}</span>
    </motion.div>
  );
}
