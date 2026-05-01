import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { staggerContainer, fadeInUp, hoverButton } from '../utils/animations';

const Hero = () => {
  const { name, title, tagline } = portfolioData.hero;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6 md:px-12 relative">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen" 
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen" 
        />
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            x: [0, 15, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl opacity-40 mix-blend-multiply dark:mix-blend-screen" 
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <motion.div 
        className="container mx-auto z-10 text-center max-w-5xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold tracking-wide shadow-sm border border-primary-200/50 dark:border-primary-800/50">
            <Sparkles size={16} className="animate-pulse-glow" />
            Welcome to my portfolio
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
          variants={fadeInUp}
        >
          Hi, I'm{' '}
          <span className="relative inline-block">
            <span className="gradient-text">{name}</span>
            <motion.span
              className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-blue-500/20 blur-xl -z-10"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
          <br className="hidden md:block" />
          <span className="text-slate-700 dark:text-slate-300">{title}</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          variants={fadeInUp}
        >
          {tagline}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 cursor-pointer mb-16"
          variants={fadeInUp}
        >
          <motion.div 
            variants={hoverButton} 
            whileHover="hover" 
            whileTap="tap" 
            className="w-full sm:w-auto block group"
          >
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="relative w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold shadow-lg hover:shadow-primary-500/50 transition-all duration-300 block text-center overflow-hidden"
            >
              <span className="relative z-10">View My Projects</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={hoverButton} 
            whileHover="hover" 
            whileTap="tap" 
            className="w-full sm:w-auto block group"
          >
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              offset={-70} 
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 text-slate-800 dark:text-slate-200 font-semibold transition-all duration-300 block text-center glass-strong hover:shadow-lg"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
