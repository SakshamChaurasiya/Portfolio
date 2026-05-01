import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ring follows mouse quickly
  const ringSpringConfig = { damping: 25, stiffness: 300 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  // Dot follows ring with more delay for smooth trailing effect
  const dotSpringConfig = { damping: 30, stiffness: 200 };
  const dotX = useSpring(ringX, dotSpringConfig);
  const dotY = useSpring(ringY, dotSpringConfig);

  // Glow follows with even more delay
  const glowSpringConfig = { damping: 35, stiffness: 150 };
  const glowX = useSpring(ringX, glowSpringConfig);
  const glowY = useSpring(ringY, glowSpringConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick !== null ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Cursor ring - follows mouse quickly */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary-500/50 dark:border-primary-400/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Main cursor dot - follows ring with delay */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 0.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Cursor glow effect - follows with most delay */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 bg-primary-500/10 dark:bg-primary-400/10 rounded-full pointer-events-none z-[9997] blur-xl"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 1.2 : 0.8,
          opacity: isHidden ? 0 : 0.6,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default CustomCursor;
