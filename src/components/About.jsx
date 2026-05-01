import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { staggerContainer, fadeInUp, scaleUp } from '../utils/animations';

const About = () => {
  const { introduction, skills } = portfolioData.about;

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInUp} className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">Who I Am</motion.h3>
            <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              {introduction}
            </motion.p>
            <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              My core focus these days is building scalable backend architectures and dynamic frontends to provide exceptional digital experiences. Standard, pixel-perfect, and tailored to business needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">Tech Arsenal</h3>
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.span 
                  key={index}
                  variants={scaleUp}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 dark:hover:bg-primary-900/40 dark:hover:text-primary-300 dark:hover:border-primary-800 transition-colors shadow-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
