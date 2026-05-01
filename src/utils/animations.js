// Standard premium easing
export const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] }; // smooth snappy feel

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition 
  }
};

export const hoverButton = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
  tap: { scale: 0.95, transition: { duration: 0.1 } }
};
