import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animationType?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scale" | "none";
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animationType = "fadeInUp",
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px 0px", // Start animation 50px before element enters viewport
  });

  const animationVariants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    none: {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    },
  };

  const selectedVariant = animationVariants[animationType];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={{
        duration: 0.5, // Reduced from 0.8 to 0.5 for faster animations
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Smoother easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
