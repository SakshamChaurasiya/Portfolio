import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { staggerContainer, fadeInUp, scaleUp } from '../utils/animations';

const About = () => {
  const { introduction, skills } = portfolioData.about;

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-blue-500 text-white mb-6 shadow-lg"
          >
            <Code2 size={28} />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="flex items-start gap-3">
              <div className="mt-1 p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-3">Who I Am</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  {introduction}
                </p>
              </div>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed pl-14">
              My core focus these days is building scalable backend architectures and dynamic frontends to provide exceptional digital experiences. Standard, pixel-perfect, and tailored to business needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong p-8 rounded-2xl shadow-premium border border-slate-200 dark:border-slate-800 relative overflow-hidden"
          >
            {/* Decorative corner gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full" />
            
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse-glow" />
              Tech Arsenal
            </h3>
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
                  className="relative px-4 py-2.5 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-semibold border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-md transition-all duration-300 cursor-default group"
                >
                  <span className="relative z-10">{skill}</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-blue-500/0 group-hover:from-primary-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300" />
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
