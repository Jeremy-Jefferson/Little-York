import { motion } from 'framer-motion';

export default function Section({
  children,
  id,
  className = '',
  background = 'dark',
  padding = 'default',
  ...props
}) {
  const backgrounds = {
    dark: 'bg-surface-base',
    darker: 'bg-surface-elevated',
    gradient: 'bg-gradient-to-b from-surface-base via-surface-elevated to-surface-base',
    transparent: 'bg-transparent'
  };
  
  const paddings = {
    none: '',
    sm: 'py-12 md:py-16',
    default: 'py-16 md:py-24 lg:py-32',
    lg: 'py-24 md:py-32 lg:py-40'
  };
  
  const bgClass = backgrounds[background] || backgrounds.dark;
  const paddingClass = paddings[padding] || paddings.default;
  
  return (
    <section
      id={id}
      className={`relative ${bgClass} ${paddingClass} ${className}`.trim()}
      {...props}
    >
      <div className="grain-overlay" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}
