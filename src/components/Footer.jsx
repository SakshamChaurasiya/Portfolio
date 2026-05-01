import React from 'react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center text-slate-600 dark:text-slate-400">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          &copy; {currentYear} {portfolioData.hero.name}. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-slate-500">
          Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
