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
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-premium-lg dark:shadow-2xl dark:shadow-primary-900/10 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-500 group flex flex-col h-full relative"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-blue-500/0 group-hover:from-primary-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none z-10" />

      {/* Enhanced Abstract Image Placeholder */}
      <div className="w-full h-48 overflow-hidden relative bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-blue-500/20 to-purple-500/20 dark:from-primary-600/30 dark:via-blue-600/30 dark:to-purple-600/30 mix-blend-multiply dark:mix-blend-screen" />
        <div 
          className="absolute inset-0 opacity-50 dark:opacity-30 group-hover:scale-110 transition-transform duration-700 ease-[0.22,1,0.36,1]"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(20, 184, 166, 0.4) 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Animated shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none" />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow -mt-10 relative z-20">
        <motion.h3 
          className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, i) => (
            <motion.span 
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-semibold uppercase tracking-wider border border-primary-100 dark:border-primary-900/30 shadow-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-auto">
          {project.liveLink && (
            <motion.a
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveLink.startsWith('http') ? project.liveLink : `https://${project.liveLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group/link"
            >
              <ExternalLink size={18} className="group-hover/link:rotate-45 transition-transform duration-300" /> 
              Live Demo
            </motion.a>
          )}
          {project.githubLink && (
            <motion.a
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group/link"
            >
              <FaGithub size={18} className="group-hover/link:rotate-12 transition-transform duration-300" /> 
              Source
            </motion.a>
          )}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default ProjectCard;
