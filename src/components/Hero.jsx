import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { portfolioData } from '../data/portfolio';
import { staggerContainer, fadeInUp, hoverButton } from '../utils/animations';

const Hero = () => {
  const { name, title, tagline } = portfolioData.hero;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6 md:px-12 relative">
      {/* Background Decorative Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen pointer-events-none" 
      />

      <motion.div 
        className="container mx-auto z-10 text-center max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp}>
          <span className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold tracking-wide mb-6 shadow-sm">
            Welcome to my portfolio
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
          variants={fadeInUp}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-500">{name}</span>
          <br className="hidden md:block"/> {title}
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          {tagline}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 cursor-pointer"
          variants={fadeInUp}
        >
          <motion.div variants={hoverButton} whileHover="hover" whileTap="tap" className="w-full sm:w-auto block">
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-medium shadow-lg hover:shadow-primary-500/50 transition-colors block text-center"
            >
              View My Projects
            </Link>
          </motion.div>
          <motion.div variants={hoverButton} whileHover="hover" whileTap="tap" className="w-full sm:w-auto block">
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              offset={-70} 
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 text-slate-800 dark:text-slate-200 font-medium transition-colors block text-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
