// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Stats', href: '#stats' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// ─── Hero ─────────────────────────────────────────────────────
export const TYPING_TEXTS = [
  'Backend-Focused Software Engineer',
  'Microservices Architect',
  'AWS & Cloud Specialist',
  'High-Performance Systems Builder',
];

export const TECH_STACK = [
  'Node.js',
  'Go',
  'AWS',
  'Kubernetes',
  'PostgreSQL',
  'Redis',
  'Docker',
  'Kafka',
];

// ─── Stats ────────────────────────────────────────────────────
export const STATS = [
  {
    value: 4,
    suffix: '+',
    label: 'Years Experience',
    description: 'Building production systems',
  },
  {
    value: 5,
    suffix: 'M+',
    label: 'Users Impacted',
    description: 'Across all platforms',
  },
  {
    value: 80,
    suffix: '%',
    label: 'Cost Reduction',
    description: 'Through AWS optimization',
  },
  {
    value: 50,
    suffix: '%',
    label: 'Performance Gain',
    description: 'Via system architecture',
  },
];

// ─── About Me ─────────────────────────────────────────────────
export const ABOUT_QUICK_INFO = [
  { icon: '📍', label: 'Location', value: 'Indore, India' },
  { icon: '🎓', label: 'Education', value: 'B.Sc. Computer Science' },
  { icon: '✉️', label: 'Email', value: 'shubhamgupta279@gmail.com' },
  { icon: '💼', label: 'Experience', value: '4+ Years' },
];

export const SKILLS = [
  { category: 'Languages', items: ['Go', 'Node.js', 'Python', 'TypeScript', 'SQL'] },
  {
    category: 'Cloud & Infra',
    items: ['AWS (ECS, Lambda, RDS, S3)', 'Kubernetes', 'Docker', 'Terraform'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Elasticsearch'],
  },
  {
    category: 'Architecture',
    items: ['Microservices', 'Event-Driven', 'REST', 'GraphQL', 'gRPC'],
  },
];

// ─── Projects ─────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: 'Real-Time Order Management System',
    description:
      'High-throughput order processing system handling 100K+ orders/day with event-driven architecture.',
    problem: 'Legacy monolith causing 15s order delays and frequent downtime during peak sales.',
    solution: 'Rebuilt as microservices with Kafka event streaming and Redis caching layer.',
    impact: '99.9% uptime, 200ms average order latency, 80% infrastructure cost reduction.',
    tags: ['Node.js', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'AWS ECS'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Multi-Tenant SaaS API Platform',
    description:
      'Scalable REST & GraphQL API platform serving 5M+ users across enterprise tenants.',
    problem: 'Single-DB architecture causing cross-tenant data leaks and performance degradation.',
    solution:
      'Implemented schema-per-tenant isolation with connection pooling and query optimization.',
    impact: '5M+ users served, 50% query performance improvement, zero cross-tenant incidents.',
    tags: ['Go', 'GraphQL', 'PostgreSQL', 'AWS RDS', 'Kubernetes'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Cloud Cost Optimization Engine',
    description: 'Automated AWS resource right-sizing and scheduling tool for DevOps teams.',
    problem: '$50K/month wasted on over-provisioned EC2 instances and unused resources.',
    solution:
      'Built ML-based usage prediction with automated scaling policies and resource tagging.',
    impact: '80% cost reduction, saving $40K/month. Adopted by 3 enterprise clients.',
    tags: ['Python', 'AWS Lambda', 'CloudWatch', 'Terraform', 'ML'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'Distributed Cache Service',
    description:
      'High-performance caching layer with consistent hashing and automatic failover.',
    problem: 'Database bottleneck causing 500ms+ API response times under load.',
    solution:
      'Designed Redis cluster with consistent hashing, TTL strategies, and write-through caching.',
    impact: '10x cache hit ratio improvement, API p99 latency dropped from 500ms to 45ms.',
    tags: ['Go', 'Redis', 'gRPC', 'Prometheus', 'Grafana'],
    github: '#',
    demo: '#',
    featured: false,
  },
];

// ─── Experience ───────────────────────────────────────────────
export const EXPERIENCES = [
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

// ─── Footer / Contact ─────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/shubhamAyodhyavasi',
    hoverClass: 'hover:text-white',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/shubham-ayodhyavasi',
    hoverClass: 'hover:text-blue-400',
  },
  {
    label: 'Email',
    href: 'mailto:shubhamgupta279@gmail.com',
    hoverClass: 'hover:text-indigo-400',
  },
];

export const CONTACT_EMAIL = 'shubhamgupta279@gmail.com';
