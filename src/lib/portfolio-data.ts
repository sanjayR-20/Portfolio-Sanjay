export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  key: 'linkedin' | 'github' | 'instagram' | 'x' | 'pinterest' | 'discord' | 'mail';
};

export type Achievement = {
  title: string;
  event: string;
  year: string;
  location: string;
  description: string;
  image: string;
};

export type CommunityRole = {
  title: string;
  organization: string;
  description: string;
  tags: string[];
};

export type TechItem = {
  name: string;
  key:
    | 'java'
    | 'python'
    | 'javascript'
    | 'react'
    | 'html5'
    | 'css3'
    | 'tailwindcss'
    | 'flutter'
    | 'linux'
    | 'git'
    | 'nodedotjs'
    | 'mysql';
  href: string;
};

export const portfolio = {
  name: 'Sanjay R',
  role: 'Full Stack Developer',
  tagLine: 'Engineering practical systems that stay fast, reliable, and human-friendly at scale.',
  location: 'Karur, Tamil Nadu, India',
  email: 'sanjayr20606@gmail.com',
  githubUsername: 'sanjayR-20',
  linkedinUrl: 'https://linkedin.com/in/sanjayr20606',
  heroCopy:
    'I build production-focused web and mobile products with strong architecture, clear UX, and measurable outcomes. My work spans full-stack systems, intelligent workflows, and engineering-first delivery.',
  aboutQuote:
    'I prioritize usability and clarity. If you are looking for code that is built to function reliably in the real world, you are in the right place.',
  aboutBullets: [
    'Current Focus: B.Tech in Information Technology at M. Kumarasamy College of Engineering.',
    'Core Competencies: End-to-end application development, system design, and applied AI/ML.',
    'Project Scope: Inventory management systems, billing platforms, and AI-driven concepts.',
    'Preferred Tools: Flutter, Node.js, and scalable backend architectures.'
  ]
} as const;

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Community', href: '#community' },
  { label: 'Stack', href: '#stack' },
  { label: 'Connect', href: '#connect' }
];

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sanjayr20606', key: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/sanjayR-20', key: 'github' },
  { label: 'Instagram', href: 'https://instagram.com/sanjayr.20', key: 'instagram' },
  { label: 'X', href: 'https://x.com/sanjayr_20', key: 'x' },
  { label: 'Pinterest', href: 'https://pinterest.com/LesserLiving', key: 'pinterest' },
  { label: 'Discord', href: 'https://discord.gg/q9vBUuJ7', key: 'discord' },
  { label: 'Mail', href: 'mailto:sanjayr20606@gmail.com', key: 'mail' }
];

export const featuredRepoNames = [
  'Cracoe-Connect-Web',
  'ParkLink',
  'ResQvision',
  'invoice-generator',
  'SecureFace-Access',
  'School-Management-System'
];

export const achievements: Achievement[] = [
  {
    title: 'National Hackathon Winner',
    event: 'Fabriquathon 2026',
    year: '2026',
    location: 'SRM Valliammai College, Chennai',
    description:
      'Won a 24-hour national-level hackathon by shipping a complete concept under intense time constraints.',
    image: '/achievements/fabriquathon.svg'
  },
  {
    title: 'Appathon Champion',
    event: 'Gencraft 2025',
    year: '2025',
    location: 'M. Kumarasamy College of Engineering',
    description:
      'Built and presented an application prototype that won first place in the campus appathon challenge.',
    image: '/achievements/gencraft.svg'
  },
  {
    title: 'Web Development Winner',
    event: 'Trendz 2025',
    year: '2025',
    location: 'M. Kumarasamy College of Engineering',
    description:
      'Secured first place in the web development event with a polished, production-minded solution.',
    image: '/achievements/trendz.svg'
  },
  {
    title: 'Technical Quiz Winner',
    event: 'GDSC Technical Quiz',
    year: '2025',
    location: 'M. Kumarasamy College of Engineering',
    description: 'Won a technical quiz hosted by Google Student Developer Club at my college campus.',
    image: '/achievements/gdsc.svg'
  },
  {
    title: 'Magazine Publisher',
    event: "Stork's Quill",
    year: 'First Year',
    location: 'M. Kumarasamy College of Engineering',
    description:
      "Published the Freshmen Engineering magazine 'Stork's Quill', managing content and editorial execution.",
    image: '/achievements/storks-quill.svg'
  }
];

export const communities: CommunityRole[] = [
  {
    title: 'Compere Team Member',
    organization: 'M. Kumarasamy College of Engineering',
    description:
      'Actively host and coordinate stage communication for college events, improving audience engagement and event flow.',
    tags: ['Public Speaking', 'Event Coordination', 'Leadership']
  },
  {
    title: 'Developer',
    organization: 'Cracoe Startup Team',
    description:
      'Contributed to Cracoe Connect, a role-based enterprise governance and task-management platform built for team operations.',
    tags: ['Product Engineering', 'Team Collaboration', 'Startup Execution']
  }
];

export const techStack: TechItem[] = [
  { name: 'Java', key: 'java', href: 'https://www.java.com' },
  { name: 'Python', key: 'python', href: 'https://www.python.org' },
  { name: 'JavaScript', key: 'javascript', href: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { name: 'React', key: 'react', href: 'https://react.dev' },
  { name: 'HTML5', key: 'html5', href: 'https://developer.mozilla.org/docs/Web/HTML' },
  { name: 'CSS3', key: 'css3', href: 'https://developer.mozilla.org/docs/Web/CSS' },
  { name: 'Tailwind CSS', key: 'tailwindcss', href: 'https://tailwindcss.com' },
  { name: 'Flutter', key: 'flutter', href: 'https://flutter.dev' },
  { name: 'Linux', key: 'linux', href: 'https://www.kernel.org' },
  { name: 'Git', key: 'git', href: 'https://git-scm.com' },
  { name: 'Node.js', key: 'nodedotjs', href: 'https://nodejs.org' },
  { name: 'MySQL', key: 'mysql', href: 'https://www.mysql.com' }
];

export const linkedInSnapshot = {
  name: 'Sanjay R',
  headline: 'Software Developer | IT Undergraduate',
  intro:
    'Focused on scalable architecture, practical products, and clear engineering execution. Building systems that solve real constraints.',
  highlights: ['Profile', 'About', 'Followers'],
  note: 'LinkedIn limits public embeddable profile data. Open the full profile for live follower metrics.'
};
