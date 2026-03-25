import { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '../../hooks/useInView';
import { SKILLS } from '../../constants/content';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">Skills</h2>
          <p className="mt-3 text-slate-400">Technologies and tools I work with every day.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/40 transition-colors"
            >
              <h3 className="text-slate-200 font-semibold text-sm mb-3">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
