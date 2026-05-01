import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import { cn } from '../utils/cn';
import { staggerContainer } from '../utils/animations';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // Extract all unique technologies from projects
  const allTechs = ['All', ...new Set(portfolioData.projects.flatMap(p => p.techStack))];
  
  // Filter projects based on selected tech
  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.techStack.includes(filter));

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Selected Works</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-10" />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {allTechs.slice(0, 6).map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(tech)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                  filter === tech 
                    ? "bg-primary-600 text-white shadow-md shadow-primary-500/30" 
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                )}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
