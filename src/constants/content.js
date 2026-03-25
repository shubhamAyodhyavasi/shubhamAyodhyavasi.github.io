import content from './content.json';

// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// ─── Hero ─────────────────────────────────────────────────────
export const HERO = content.hero;

export const TYPING_TEXTS = [
  'Senior Frontend Engineer',
  'React & React Native Developer',
  'UI Architecture Specialist',
  'Mobile App Developer',
];

export const TECH_STACK = [
  ...content.skills.frontend,
  'TypeScript',
  'Redux',
  'Tailwind CSS',
];

// ─── Stats ────────────────────────────────────────────────────
export const STATS = [
  {
    value: 6,
    suffix: '+',
    label: 'Years Experience',
    description: 'Building web and mobile apps',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Web and mobile applications',
  },
  {
    value: 3,
    suffix: '+',
    label: 'Companies',
    description: 'Across product & service firms',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Tech Tools',
    description: 'Frontend ecosystem mastery',
  },
];

// ─── About Me ─────────────────────────────────────────────────
export const SUMMARY = content.summary;

export const ABOUT_QUICK_INFO = [
  { icon: '📍', label: 'Location', value: 'India' },
  { icon: '🎓', label: 'Education', value: content.education.degree },
  { icon: '✉️', label: 'Email', value: content.contact.email },
  { icon: '💼', label: 'Experience', value: '6+ Years' },
];

// ─── Skills ───────────────────────────────────────────────────
const SKILL_CATEGORY_LABELS = {
  frontend: 'Frontend',
  languages: 'Languages',
  stateManagement: 'State Management',
  styling: 'Styling',
  testing: 'Testing',
  tools: 'Tools',
};

export const SKILLS = Object.entries(content.skills).map(([key, items]) => ({
  category: SKILL_CATEGORY_LABELS[key] ?? key,
  items,
}));

// ─── Projects ─────────────────────────────────────────────────
export const PROJECTS = content.projects.map((p) => ({
  title: p.name,
  description: p.description,
  tags: p.tech,
  github: '#',
  demo: '#',
  featured: false,
}));

// ─── Experience ───────────────────────────────────────────────
export const EXPERIENCES = content.experience.map((e) => ({
  company: e.company,
  role: e.role,
  period: e.duration,
  type: 'Full-time',
  achievements: e.points,
  stack: [],
}));

// ─── Footer / Contact ─────────────────────────────────────────
export const CONTACT = content.contact;

export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/shubhamAyodhyavasi',
    hoverClass: 'hover:text-white',
  },
  {
    label: 'LinkedIn',
    href: content.contact.linkedin,
    hoverClass: 'hover:text-blue-400',
  },
  {
    label: 'Email',
    href: `mailto:${content.contact.email}`,
    hoverClass: 'hover:text-indigo-400',
  },
];

export const CONTACT_EMAIL = content.contact.email;
