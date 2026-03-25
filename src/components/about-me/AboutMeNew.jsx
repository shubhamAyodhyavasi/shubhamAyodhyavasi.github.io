import { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '../../hooks/useInView';
import { SKILLS, ABOUT_QUICK_INFO, SUMMARY } from '../../constants/content';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const AboutMe = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
            Who I Am
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">About Me</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10"
        >
          {/* Left: Avatar + quick facts */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-6">
            <div className="relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-center">
              <div
                className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              >
                SA
              </div>
              <h3 className="text-white font-bold text-lg">Shubham Ayodhyavasi</h3>
              <p className="text-indigo-400 text-sm mt-1">Frontend Engineer · 6 YOE</p>
              <div className="mt-4 flex items-center justify-center gap-2 text-green-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 space-y-3">
              {ABOUT_QUICK_INFO.map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-slate-400 w-20 shrink-0">{item.label}</span>
                  <span className="text-slate-200">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio + Skills */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50"
            >
              <h3 className="text-white font-semibold mb-3">My Story</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{SUMMARY}</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {SKILLS.map((skill) => (
                <motion.div
                  key={skill.category}
                  variants={itemVariants}
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/40 transition-colors"
                >
                  <h4 className="text-slate-300 font-medium text-sm mb-2">{skill.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-slate-700 text-slate-300 border border-slate-600/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
