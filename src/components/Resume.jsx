import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-6">
            <FileText size={32} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">My Resume</h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Want to know more about my experience, education, and technical skills? Download my complete resume below to get the full picture.
          </p>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={portfolioData.hero.resumeLink}
            download={`${portfolioData.hero.name.replace(/\s+/g, '_')}_Resume.pdf`}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-medium shadow-lg hover:shadow-primary-500/50 transition-colors"
          >
            <Download size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            Download Resume (PDF)
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
