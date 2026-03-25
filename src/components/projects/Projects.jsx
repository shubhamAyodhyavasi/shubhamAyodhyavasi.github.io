import { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '../../hooks/useInView';
import { PROJECTS } from '../../constants/content';

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProjectCard = ({ project }) => (
  <motion.div
    variants={cardVariants}
    className="group relative bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/50 overflow-hidden transition-all duration-300 flex flex-col"
    whileHover={{ scale: 1.02, y: -6, boxShadow: '0 25px 50px -12px rgba(99,102,241,0.25)' }}
  >
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.12), transparent 70%)',
      }}
    />

    {project.featured && (
      <div className="absolute top-4 right-4 px-2 py-0.5 text-xs font-mono rounded bg-indigo-600/30 text-indigo-300 border border-indigo-500/30">
        Featured
      </div>
    )}

    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

      {(project.problem || project.solution || project.impact) && (
        <div className="space-y-3 mb-5 text-sm">
          {project.problem && (
            <div className="flex gap-2">
              <span className="text-red-400 font-semibold shrink-0 w-20">Problem:</span>
              <span className="text-slate-600 dark:text-slate-400">{project.problem}</span>
            </div>
          )}
          {project.solution && (
            <div className="flex gap-2">
              <span className="text-yellow-400 font-semibold shrink-0 w-20">Solution:</span>
              <span className="text-slate-600 dark:text-slate-400">{project.solution}</span>
            </div>
          )}
          {project.impact && (
            <div className="flex gap-2">
              <span className="text-green-400 font-semibold shrink-0 w-20">Impact:</span>
              <span className="text-slate-700 dark:text-slate-300 font-medium">{project.impact}</span>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600/50"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <motion.a
          href={project.github}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GitHubIcon /> GitHub
        </motion.a>
        <motion.a
          href={project.demo}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 hover:text-indigo-200 border border-indigo-500/30 text-sm font-medium transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLinkIcon /> Live Demo
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
          ref={ref}
        >
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Real-world systems built for scale, reliability, and business impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
