import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useInView from '../../hooks/useInView';

const STATS = [
  { value: 4, suffix: '+', label: 'Years Experience', description: 'Building production systems' },
  { value: 5, suffix: 'M+', label: 'Users Impacted', description: 'Across all platforms' },
  { value: 80, suffix: '%', label: 'Cost Reduction', description: 'Through AWS optimization' },
  { value: 50, suffix: '%', label: 'Performance Gain', description: 'Via system architecture' },
];

const CountUp = ({ target, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const increment = target / steps;
    const interval = (duration * 1000) / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="stats" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Subtle gradient line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #6366f1, transparent)' }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              className="group relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/40 transition-all duration-300 text-center overflow-hidden"
              whileHover={{ scale: 1.03, y: -4 }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.15), transparent 70%)' }}
              />
              <div
                className="text-4xl sm:text-5xl font-extrabold mb-2"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-slate-400 text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
