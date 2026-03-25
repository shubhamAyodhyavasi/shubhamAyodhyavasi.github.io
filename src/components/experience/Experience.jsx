import { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '../../hooks/useInView';
import { EXPERIENCES } from '../../constants/content';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ExperienceItem = ({ exp }) => (
  <motion.div variants={itemVariants} className="relative pl-8 pb-12 last:pb-0">
    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white dark:border-slate-950 z-10 ring-2 ring-indigo-500/30" />

    <motion.div
      className="group ml-4 p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/40 transition-all duration-300"
      whileHover={{ scale: 1.01, y: -2 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
            {exp.role}
          </h3>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">{exp.company}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="text-slate-500 text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700/50">
              {exp.type}
            </span>
          </div>
        </div>
        <span className="text-slate-500 dark:text-slate-400 text-sm font-mono shrink-0 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/40">
          {exp.period}
        </span>
      </div>

      <ul className="space-y-1.5 mb-4">
        {exp.achievements.map((a, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="text-indigo-400 mt-0.5 shrink-0">▹</span>
            <span>{a}</span>
          </li>
        ))}
      </ul>

      {exp.stack?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {exp.stack.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600/50"
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  </motion.div>
);

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-24 bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
            Career
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Work Experience</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            6+ years building scalable web and mobile applications.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-slate-700 to-transparent" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {EXPERIENCES.map((exp) => (
              <ExperienceItem key={exp.company} exp={exp} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
