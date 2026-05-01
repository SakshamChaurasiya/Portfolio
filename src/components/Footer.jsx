import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo/Name */}
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              {portfolioData.hero.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {portfolioData.hero.title}
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mb-6" />

          {/* Copyright */}
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 flex items-center justify-center gap-2">
            <span>&copy; {currentYear} {portfolioData.hero.name}.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </p>

          {/* Built with */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs text-slate-500 dark:text-slate-500 flex items-center justify-center gap-2 flex-wrap"
          >
            <span className="flex items-center gap-1">
              Built with <Heart size={12} className="text-red-500 animate-pulse-glow" /> using
            </span>
            <span className="flex items-center gap-1">
              <Code2 size={12} />
              React, Tailwind CSS & Framer Motion
            </span>
          </motion.p>

          {/* Back to top button */}
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 text-sm font-medium border border-slate-200 dark:border-slate-700"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
