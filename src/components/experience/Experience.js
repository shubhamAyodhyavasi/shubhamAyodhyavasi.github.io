import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '../../hooks/useInView';

const EXPERIENCES = [
  {
    company: 'Tech Corp India',
    role: 'Senior Backend Engineer',
    period: 'Jan 2023 – Present',
    type: 'Full-time',
    achievements: [
      'Architected microservices platform handling 100K+ daily transactions with 99.9% uptime',
      'Reduced AWS infrastructure costs by 80% ($40K/month) through right-sizing and automation',
      'Led a team of 5 engineers, mentoring juniors and driving quarterly OKRs',
      'Implemented distributed tracing with OpenTelemetry, reducing MTTR from 45 min to 8 min',
    ],
    stack: ['Go', 'AWS', 'Kubernetes', 'PostgreSQL', 'Kafka'],
  },
  {
    company: 'Startup XYZ',
    role: 'Backend Engineer',
    period: 'Jun 2021 – Dec 2022',
    type: 'Full-time',
    achievements: [
      'Built REST & GraphQL APIs serving 5M+ users with sub-100ms p95 latency',
      'Improved system performance by 50% through DB indexing and query optimization',
      'Designed multi-tenant SaaS architecture with schema-per-tenant isolation',
      'Integrated 3rd-party payment gateways processing $2M+ monthly transactions',
    ],
    stack: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    company: 'thirdEssential IT Solution',
    role: 'Full Stack Developer',
    period: 'Mar 2020 – May 2021',
    type: 'Full-time',
    achievements: [
      'Developed responsive web applications using React.js and Node.js',
      'Integrated REST APIs and improved frontend performance by 40%',
      'Collaborated with design team to deliver pixel-perfect UI implementations',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    company: 'WebOnlyWeb IT Solution',
    role: 'Frontend Developer',
    period: 'Aug 2019 – Feb 2020',
    type: 'Full-time',
    achievements: [
      'Delivered 10+ client websites with responsive design and cross-browser compatibility',
      'Implemented jQuery-based UI interactions and animations',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ExperienceItem = ({ exp, index }) => (
  <motion.div
    variants={itemVariants}
    className="relative pl-8 pb-12 last:pb-0"
  >
    {/* Timeline dot */}
    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-slate-950 z-10 ring-2 ring-indigo-500/30" />

    {/* Card */}
    <motion.div
      className="group ml-4 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/40 transition-all duration-300"
      whileHover={{ scale: 1.01, y: -2 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
            {exp.role}
          </h3>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-indigo-400 font-medium text-sm">{exp.company}</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-slate-500 text-xs px-2 py-0.5 rounded-full bg-slate-700/50">{exp.type}</span>
          </div>
        </div>
        <span className="text-slate-400 text-sm font-mono shrink-0 px-3 py-1 rounded-lg bg-slate-700/40">
          {exp.period}
        </span>
      </div>

      {/* Achievements */}
      <ul className="space-y-1.5 mb-4">
        {exp.achievements.map((a, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-400">
            <span className="text-indigo-400 mt-0.5 shrink-0">▹</span>
            <span>{a}</span>
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {exp.stack.map((s) => (
          <span
            key={s}
            className="px-2 py-0.5 text-xs font-mono rounded bg-slate-700 text-slate-300 border border-slate-600/50"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">Career</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">Work Experience</h2>
          <p className="mt-3 text-slate-400">4+ years building scalable backends and distributed systems.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-slate-700 to-transparent" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {EXPERIENCES.map((exp, i) => (
              <ExperienceItem key={exp.company} exp={exp} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
