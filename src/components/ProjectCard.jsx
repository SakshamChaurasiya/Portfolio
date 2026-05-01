import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { ease: [0.22, 1, 0.36, 1], duration: 0.6 }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 }
  }
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-2xl dark:shadow-primary-900/10 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-500 group flex flex-col h-full"
    >
      {/* Abstract Image Placeholder overlay */}
      <div className="w-full h-48 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20 dark:from-primary-600/30 dark:to-blue-600/30 mix-blend-multiply dark:mix-blend-screen" />
        <div 
          className="absolute inset-0 opacity-50 dark:opacity-30 group-hover:scale-110 transition-transform duration-700 ease-[0.22,1,0.36,1]"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(20, 184, 166, 0.4) 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none" />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow -mt-10 relative z-10">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-md text-xs font-semibold uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-auto">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ExternalLink size={18} /> Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <FaGithub size={18} /> Source
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
