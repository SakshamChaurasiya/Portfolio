import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { staggerContainer, fadeInUp } from '../utils/animations';

const Experience = () => {
  const experiences = portfolioData.experience || [];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      
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
            <Briefcase size={28} />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-blue-500 to-primary-500 hidden md:block" />

          {experiences.length > 0 ? (
            experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-slate-50 dark:border-slate-950 transform -translate-x-1/2 hidden md:block shadow-lg" />

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className="glass-strong p-6 md:p-8 rounded-2xl shadow-premium border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Company & Role */}
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4">
                        {exp.company}
                      </p>

                      {/* Date & Location */}
                      <div className={`flex flex-wrap gap-4 mb-4 text-sm text-slate-600 dark:text-slate-400 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements/Responsibilities */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <ul className={`space-y-2 text-sm text-slate-600 dark:text-slate-400 ${
                          index % 2 === 0 ? 'md:text-right' : ''
                        }`}>
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Technologies */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className={`flex flex-wrap gap-2 mt-4 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-semibold border border-primary-100 dark:border-primary-900/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for timeline */}
                <div className="hidden md:block md:w-2/12" />
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={fadeInUp}
              className="text-center py-12"
            >
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                No experience data available. Add your experience in the portfolio data file.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
