import { motion } from 'motion/react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Globe, 
  Terminal, 
  Mail, 
  Github, 
  Linkedin, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  Star,
  GraduationCap,
  Calendar,
  Briefcase
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Data Definitions ---

const SKILLS = {
  wordpress: [
    "Theme Customization",
    "Plugin Integration",
    "Elementor/Gutenberg",
    "WooCommerce Basics",
    "WP CLI",
  ],
  frontend: [
    "HTML5 / Semantic Tags",
    "CSS3 / Tailwind / SASS",
    "JavaScript (ES6+)",
    "Responsive Design",
    "React Basics",
  ],
  backend: [
    "PHP Basics",
    "MySQL / Database Management",
    "cPanel / Hosting Setup",
    "Git / Version Control",
  ],
  soft: [
    "Problem Solving",
    "Attention to Detail",
    "Clear Communication",
    "Self-Learner Mindset",
  ]
};

const PROJECTS = [
  {
    title: "E-Commerce Shoe Store",
    desc: "A fully functional WooCommerce store with custom localized shipping rules and payment gateway integration.",
    tech: ["WordPress", "WooCommerce", "Elementor", "Custom CSS"],
    role: "Lead Developer (Freelance)",
    link: "#",
    image: "https://picsum.photos/seed/wp1/800/600"
  },
  {
    title: "Tech Blog Hub",
    desc: "A high-performance blog platform with dynamic content filtering and SEO-optimized architecture.",
    tech: ["Gutenberg Blocks", "ACF", "PHP", "Tailwind"],
    role: "Full Build",
    link: "#",
    image: "https://picsum.photos/seed/wp2/800/600"
  },
  {
    title: "Real Estate Directory",
    desc: "Custom directory site with advanced filtering for properties and agent dashboard.",
    tech: ["WordPress", "JetEngine", "Javascript", "Leaflet.js"],
    role: "Frontend Developer",
    link: "#",
    image: "https://picsum.photos/seed/wp3/800/600"
  }
];

const EXPERIENCE = [
  {
    title: "Self-Employed Freelancer",
    company: "Upwork / Direct Clients",
    period: "2023 - Present",
    desc: "Developing custom WordPress sites for small businesses, focusing on site speed optimization and mobile responsiveness.",
    highlights: ["Improved site loading speeds by 40% on average", "Maintained 5-star client rating"]
  },
  {
    title: "Junior Web Developer Intern",
    company: "Local Tech Agency",
    period: "May 2023 - Aug 2023",
    desc: "Assisted in maintaining 20+ WordPress installations and implementing UI changes based on Figma designs.",
    highlights: ["Fixed 50+ UI bugs across various projects", "Learned Git-based staging workflow"]
  }
];

const EDUCATION = [
  {
    school: "University of Technology",
    degree: "B.S. in Computer Science",
    year: "2020 - 2024",
    desc: "Focus on Web Technologies and Databases.",
  },
  {
    school: "WordPress Mastery Academy",
    degree: "Certified WP Developer",
    year: "2023",
    desc: "Intensive 6-month course covering PHP, ACF, and Enterprise WP hosting.",
  }
];

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    text: "Alex was incredibly fast and precise with our blog redesign. He understood our brand immediately and delivered a site that actually converts.",
    stars: 5
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    text: "For a junior, his technical depth in WordPress is impressive. He doesn't just use plugins; he knows how they work under the hood.",
    stars: 5
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white p-4 rounded-2xl border border-slate-100 shadow-sm' : ''}`}>
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900 group flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white">
            <Code2 size={20} />
          </div>
          ALEX<span className="text-blue-600 transition-colors group-hover:text-blue-500">.DEV</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 md:hidden shadow-xl"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-700"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6 border border-blue-100">
            Available for Hire
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.05]">
            Junior WordPress <br />
            <span className="text-blue-600">Developer Specialist.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            I build scalable, high-performance, and custom WordPress solutions that help businesses grow online. Bridging the gap between creative design and technical excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:-translate-y-1"
            >
              Get In Touch
              <ChevronRight size={20} />
            </a>
            <button 
              className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all hover:border-slate-300 shadow-sm"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200/60 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-sm">
                  <img src={`https://picsum.photos/seed/face${i}/100/100`} alt="Client" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-slate-900">5+ Successful Projects</p>
              <p className="text-slate-500 font-medium">Delivered with high performance scores</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl">
            <img 
              src="https://picsum.photos/seed/alexprofile/800/800" 
              alt="Alex - WordPress Developer" 
              className="w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -left-8 bg-white p-5 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-slate-50"
          >
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
              <Code2 size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Clean Code</p>
              <p className="text-sm font-bold text-slate-900 leading-tight">Pixel Perfect Implementation</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-8 -right-8 bg-white p-5 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-slate-50"
          >
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
              <Globe size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Optimization</p>
              <p className="text-sm font-bold text-slate-900 leading-tight">90+ Lighthouse Score</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em]">About Me</h2>
              <h3 className="text-4xl font-bold text-slate-900 leading-tight">Bridging the Gap Between Code and Growth.</h3>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a Junior WordPress Developer with a deep-seated passion for creating efficient, user-centric web experiences. Unlike many junior developers who rely solely on ready-made templates, I pride myself on understanding the core of WordPress—the PHP, the database structure, and the CSS that makes things pop.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="mt-1 p-2.5 bg-blue-50 text-blue-600 rounded-xl h-fit border border-blue-100">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Detail Oriented</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">Every pixel matters in a conversion-focused design.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 p-2.5 bg-blue-50 text-blue-600 rounded-xl h-fit border border-blue-100">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Fast Learner</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">Constantly updating skills with latest WP trends.</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-8 shadow-sm">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-blue-600">01+</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Years Exp</span>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-blue-600">15+</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Projects</span>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div className="flex flex-col flex-1 pl-2">
                <p className="text-xs font-semibold italic text-slate-500 leading-relaxed">
                  \"Alex doesn't just build websites; he builds solutions that solve real business problems.\"
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 relative">
             <div className="space-y-6">
               <img src="https://picsum.photos/seed/setup1/400/500" alt="Work Setup" className="rounded-3xl shadow-lg border-4 border-white" referrerPolicy="no-referrer" />
               <img src="https://picsum.photos/seed/setup2/400/300" alt="Coding" className="rounded-3xl shadow-lg border-4 border-white" referrerPolicy="no-referrer" />
             </div>
             <div className="space-y-6 pt-12">
               <img src="https://picsum.photos/seed/setup3/400/300" alt="Meeting" className="rounded-3xl shadow-lg border-4 border-white" referrerPolicy="no-referrer" />
               <img src="https://picsum.photos/seed/setup4/400/500" alt="Success" className="rounded-3xl shadow-lg border-4 border-white" referrerPolicy="no-referrer" />
             </div>
             <div className="absolute -z-10 -bottom-10 -right-10 w-80 h-80 bg-blue-50/50 rounded-full blur-[80px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Tech Stack</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Mastering the Modern WordPress Eco-system.</h3>
          <p className="text-slate-600 font-medium">I combine the power of WordPress with modern frontend tools to deliver sites that are fast, secure, and incredibly easy to manage.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* WP category */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl group"
          >
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Globe size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-6">WordPress</h4>
            <div className="space-y-4">
              {SKILLS.wordpress.map((s) => (
                <div key={s} className="group/item">
                   <div className="flex justify-between mb-1.5 Items-center">
                     <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{s}</span>
                     <span className="text-[10px] font-bold text-blue-600">90%</span>
                   </div>
                   <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                     <div className="bg-blue-600 h-full w-[90%] rounded-full" />
                   </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Frontend Category */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl group"
          >
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Code2 size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-6">Frontend</h4>
            <div className="space-y-4">
              {SKILLS.frontend.map((s) => (
                <div key={s} className="group/item">
                   <div className="flex justify-between mb-1.5 items-center">
                     <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{s}</span>
                     <span className="text-[10px] font-bold text-blue-600">85%</span>
                   </div>
                   <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                     <div className="bg-blue-500 h-full w-[85%] rounded-full" />
                   </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend / Tools Category */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl group"
          >
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Terminal size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-6">Backend & Tools</h4>
            <div className="space-y-4">
              {SKILLS.backend.map((s) => (
                <div key={s} className="group/item">
                   <div className="flex justify-between mb-1.5 items-center">
                     <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{s}</span>
                     <span className="text-[10px] font-bold text-blue-600">75%</span>
                   </div>
                   <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                     <div className="bg-emerald-500 h-full w-[75%] rounded-full" />
                   </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Category */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl group"
          >
            <div className="w-14 h-14 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Cpu size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-6">Growth Qualities</h4>
            <div className="space-y-4">
              {SKILLS.soft.map((s) => (
                <div key={s} className="group/item">
                   <div className="flex justify-between mb-1.5 items-center">
                     <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{s}</span>
                     <span className="text-[10px] font-bold text-blue-600">95%</span>
                   </div>
                   <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                     <div className="bg-violet-500 h-full w-[95%] rounded-full" />
                   </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 p-12 rounded-[3rem] shadow-2xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 opacity-10 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
            </svg>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Portfolio</h2>
              <h3 className="text-4xl font-bold text-white">Featured Case Studies.</h3>
            </div>
            <a href="#" className="flex items-center gap-2 text-blue-400 font-bold hover:gap-3 transition-all shrink-0">
              View All Work <ChevronRight size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                className="bg-white/5 p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all group flex flex-col h-full"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg h-48 bg-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <div className="p-2.5 bg-white text-slate-900 rounded-full">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 px-2.5 py-1 rounded-lg border border-blue-400/20">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-6">{project.desc}</p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{project.role}</span>
                  <button className="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Case Study <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:sticky lg:top-32 h-fit">
            <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Experience</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Career Timeline & Growth.</h3>
            <p className="text-slate-600 font-medium mb-12">My professional journey is focused on delivering high-impact solutions while continuously expanding my technical horizon.</p>
            <div className="space-y-6">
               <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-4">Education</h4>
               {EDUCATION.map((edu, idx) => (
                 <div key={idx} className="flex gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                   <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl h-fit">
                     <GraduationCap size={24} />
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">{edu.year}</p>
                     <p className="font-bold text-slate-900 text-lg">{edu.degree}</p>
                     <p className="text-xs text-slate-500 font-medium">{edu.school}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12 relative">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 w-px h-full bg-slate-200 ml-[22px]" />

            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-14"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-11 h-11 rounded-[1.25rem] bg-white border-2 border-slate-100 shadow-sm flex items-center justify-center -ml-[5px] z-10 transition-colors group-hover:border-blue-600">
                  <Briefcase size={20} className="text-blue-600" />
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-1">{exp.title}</h4>
                      <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest px-5 py-2 bg-slate-50 rounded-full w-fit">
                      <Calendar size={14} className="text-blue-500" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">{exp.desc}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-slate-700 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                        <span className="font-semibold">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold text-slate-900">What Partners Say.</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col justify-between shadow-sm transition-all hover:shadow-xl"
            >
              <div className="space-y-8">
                <div className="flex gap-1.5">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={14} className="fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-xl text-slate-700 leading-relaxed font-medium italic">
                  "{t.text}"
                </p>
              </div>
              <div className="mt-10 flex items-center gap-5 pt-8 border-t border-slate-200/50">
                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-200 shadow-inner">
                  <img src={`https://picsum.photos/seed/t${idx}/100/100`} alt={t.name} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg leading-tight">{t.name}</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-[3.5rem] p-12 lg:p-20 text-white relative flex flex-col items-center text-center overflow-hidden">
          {/* Decor */}
          <div className="absolute top-0 right-0 p-32 opacity-10 pointer-events-none rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /><rect width="20" height="16" x="2" y="4" rx="2" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mb-16">
            <h2 className="text-[10px] font-bold text-blue-200 uppercase tracking-[0.3em] mb-6">Let's Work Together</h2>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Ready to transform your WordPress project?</h3>
            <p className="text-xl text-blue-100 font-medium">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 w-full relative z-10">
            <div className="flex flex-col gap-6 items-start text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                 <div className="p-8 bg-black/10 rounded-3xl border border-white/10 flex flex-col gap-4 group hover:bg-black/20 transition-all">
                   <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                     <Mail size={24} />
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">Email Me</p>
                     <p className="text-lg font-bold">hello@alex.dev</p>
                   </div>
                 </div>
                 <div className="p-8 bg-black/10 rounded-3xl border border-white/10 flex flex-col gap-4 group hover:bg-black/20 transition-all">
                   <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                     <Linkedin size={24} />
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">Linkedin</p>
                     <p className="text-lg font-bold">/in/alexrivera-wp</p>
                   </div>
                 </div>
              </div>
              <div className="p-8 bg-blue-700/50 rounded-3xl border border-white/10 w-full flex items-center gap-6">
                 <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg shrink-0">
                    <img src="https://picsum.photos/seed/alexface/200/200" alt="Alex" referrerPolicy="no-referrer" />
                 </div>
                 <div>
                    <h4 className="font-bold text-xl">Arjay Rivera</h4>
                    <p className="text-sm font-medium text-blue-200">Junior WordPress Developer</p>
                 </div>
                 <div className="ml-auto hidden md:block">
                   <div className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider animate-pulse">
                     <div className="w-2 h-2 bg-white rounded-full" />
                     Available Now
                   </div>
                 </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl text-slate-900 border border-slate-100 text-left">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2">Your Name</label>
                     <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2">Email Address</label>
                     <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2">How can I help?</label>
                     <textarea rows={3} placeholder="Let's talk about your vision..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors resize-none" />
                   </div>
                </div>
                <button className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-200">
                  Send Message
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-slate-50 border-t border-slate-200 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-xl font-bold tracking-tight text-slate-900 group flex items-center gap-2">
            <div className="bg-slate-900 p-1.5 rounded-lg text-white group-hover:bg-blue-600 transition-colors">
              <Code2 size={20} />
            </div>
            ALEX<span className="text-blue-600 transition-colors">.DEV</span>
          </a>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4">Junior WordPress Specialist</p>
          <p className="text-sm text-slate-500 mt-2 font-medium">© 2026 Alex Dev. All rights reserved.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-4">
           <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Social Hub</h4>
           <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm hover:shadow-md">
              <Github size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm hover:shadow-md">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Available for Hire</span>
          </div>
          <div className="flex flex-col gap-1">
             <a href="mailto:hello@alex.dev" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">hello@alex.dev</a>
             <p className="text-xs font-medium text-slate-500 tracking-tighter">+1 (555) WP-DEV-01</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-600 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
