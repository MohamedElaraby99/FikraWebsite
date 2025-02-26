import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  Icon: LucideIcon;
  className?: string;
}

export function AnimatedIcon({ Icon, className = '' }: AnimatedIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      className={className}
    >
      <Icon className="w-6 h-6" />
    </motion.div>
  );
}