import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '../../hooks/useInView';

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const SOCIAL_LINKS = [
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/shubhamAyodhyavasi', color: 'hover:text-white' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com/in/shubham-ayodhyavasi', color: 'hover:text-blue-400' },
  { icon: <EmailIcon />, label: 'Email', href: 'mailto:shubhamgupta279@gmail.com', color: 'hover:text-indigo-400' },
];

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800">
      {/* Top CTA strip */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="py-16 text-center"
      >
        <div className="max-w-2xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to Opportunities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Let's Build Something{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              Amazing
            </span>
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            I'm currently open to backend engineering and full-stack roles. If you have an
            interesting project or an opportunity, feel free to reach out.
          </p>
          <motion.a
            href="mailto:shubhamgupta279@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px -5px rgba(99,102,241,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            <EmailIcon /> Say Hello
          </motion.a>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-mono">
            &lt;SA /&gt; — Backend Engineer · Indore, India
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`text-slate-500 ${link.color} transition-colors`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Shubham Ayodhyavasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
