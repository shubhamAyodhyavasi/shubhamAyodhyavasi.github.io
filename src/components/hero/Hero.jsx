import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HERO, TYPING_TEXTS, TECH_STACK } from '../../constants/content';

const TypingText = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex];
    if (!deleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed === '') {
      setDeleting(false);
      setTextIndex((i) => (i + 1) % TYPING_TEXTS.length);
    } else {
      const speed = deleting ? 40 : 70;
      timeoutRef.current = setTimeout(() => {
        setDisplayed(
          deleting
            ? current.slice(0, displayed.length - 1)
            : current.slice(0, displayed.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, textIndex]);

  return (
    <span className="text-indigo-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const BlobBg = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div
      className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
      style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
    />
    <div
      className="absolute top-1/2 -right-32 w-80 h-80 rounded-full opacity-15 blur-3xl"
      style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
    />
    <div
      className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl"
      style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
    />
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }}
    />
  </div>
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      <BlobBg />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
        >
          {HERO.name.split(' ')[0]}{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)' }}
          >
            {HERO.name.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>

        {/* Typing title */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-3 min-h-[2em]"
        >
          <TypingText />
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {HERO.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={() => handleScroll('projects')}
            className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-indigo-600/25"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(99,102,241,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            {HERO.cta[0]}
          </motion.button>
          <motion.a
            href="#"
            className="px-8 py-3.5 rounded-xl border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold text-base transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {HERO.cta[1]}
          </motion.a>
        </motion.div>

        {/* Tech stack chips */}
        <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-2 justify-center">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-400 border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs font-mono">scroll down</span>
          <motion.div
            className="w-5 h-9 rounded-full border-2 border-slate-700 flex items-start justify-center p-1"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-indigo-400"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
