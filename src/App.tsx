import { useState, useEffect } from 'react';
import {
  Moon,
  Sun,
  Menu,
  X,
  Heart,
  Stethoscope,
  Cpu,
  Code,
  Users,
  Microscope,
  Brain,
  Leaf,
  Thermometer,
  Wind,
  Pill,
  Eye,
  Zap,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Mail,
} from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDark(savedTheme === 'dark');
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 100) {
        navbar?.classList.add('shadow-lg');
      } else {
        navbar?.classList.remove('shadow-lg');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const button = e.currentTarget.querySelector('button[type="submit"]');
    if (button) {
      const original = button.innerHTML;
      button.innerHTML = '✓ Message Sent!';
      button.disabled = true;
      setTimeout(() => {
        button.innerHTML = original;
        button.disabled = false;
        e.currentTarget.reset();
      }, 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
      </div>
    );
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <nav
          id="navbar"
          className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 transition-all duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                YW
              </div>

              <div className="hidden md:flex space-x-8">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About', id: 'about' },
                  { label: 'Skills', id: 'skills' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Journey', id: 'timeline' },
                  { label: 'Contact', id: 'contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="relative hover:text-sky-600 transition-colors group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden pb-4 space-y-2">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About', id: 'about' },
                  { label: 'Skills', id: 'skills' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Journey', id: 'timeline' },
                  { label: 'Contact', id: 'contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="block w-full text-left py-2 hover:text-sky-600 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto text-center z-10">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                  <Heart size={64} className="text-sky-600" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Yugara Weerawardhana
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Biomedical Technology Specialist
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Pioneering the future of healthcare through innovative medical instrumentation and the integration of traditional wisdom with modern technology
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => handleNavClick('projects')}
                className="px-8 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View Projects
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="px-8 py-3 border-2 border-sky-600 text-sky-600 rounded-full font-semibold hover:bg-sky-600 hover:text-white transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/share/1BwSXKxoFR/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-sky-600 transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.9v-2.89h1.54V9.41c0-1.52.9-2.36 2.29-2.36.66 0 1.35.12 1.35.12v1.49h-.76c-.75 0-.98.47-.98.95v1.14h1.67l-.27 2.89h-1.4v6.99C18.34 21.12 22 16.99 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-sky-600 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-sky-600 transition-colors">
                <Github size={28} />
              </a>
              <a href="#" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-sky-600 transition-colors">
                <Twitter size={28} />
              </a>
              <a href="mailto:weerawardhana02@gmail.com" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-sky-600 transition-colors">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img src="/assets/profile.jpg" alt="Yugara Weerawardhana" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  As a dedicated <strong>Biomedical Technology</strong> undergraduate, I am passionate about revolutionizing healthcare through innovative medical instrumentation and diagnostic technologies. My expertise lies in bridging the gap between engineering excellence and clinical applications.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I specialize in developing sophisticated medical devices that enhance patient care and diagnostic accuracy. My unique approach integrates <strong>traditional indigenous medicine</strong> principles with cutting-edge biomedical technology, creating holistic healthcare solutions.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  {[
                    { icon: Microscope, label: 'Diagnostic Tech' },
                    { icon: Heart, label: 'Patient Care' },
                    { icon: Brain, label: 'Innovation' },
                    { icon: Leaf, label: 'Holistic Health' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="text-center p-4 rounded-xl bg-white dark:bg-slate-700 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <item.icon size={32} className="text-sky-600 mx-auto mb-2" />
                      <p className="font-semibold">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Cpu,
                  title: 'Biomedical Engineering',
                  skills: [
                    { name: 'Medical Instrumentation', level: 95 },
                    { name: 'Diagnostic Systems', level: 90 },
                    { name: 'Signal Processing', level: 88 },
                    { name: 'Biosensors', level: 85 },
                  ],
                },
                {
                  icon: Code,
                  title: 'Technical Skills',
                  skills: [
                    { name: 'MATLAB', level: 92 },
                    { name: 'Python', level: 88 },
                    { name: 'LabVIEW', level: 85 },
                    { name: 'Circuit Design', level: 90 },
                  ],
                },
                {
                  icon: Users,
                  title: 'Professional Skills',
                  skills: [
                    { name: 'Research & Analysis', level: 93 },
                    { name: 'Project Management', level: 87 },
                    { name: 'Team Collaboration', level: 91 },
                    { name: 'Technical Documentation', level: 89 },
                  ],
                },
              ].map((category, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <category.icon size={48} className="text-sky-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-2">
                          <span>{skill.name}</span>
                          <span className="font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                          <div
                            className="skill-bar h-full bg-gradient-to-r from-sky-600 to-cyan-600 rounded-full transition-all duration-1000"
                            style={{ width: '0%' }}
                            onAnimationStart={(e) => {
                              setTimeout(() => {
                                (e.target as HTMLElement).style.width = `${skill.level}%`;
                              }, 100);
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Projects & Research
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              Innovative medical device solutions and research initiatives
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'ECG Monitoring System',
                  desc: 'Advanced portable ECG device with real-time arrhythmia detection and cloud-based data analysis for remote patient monitoring.',
                  tags: ['Signal Processing', 'IoT'],
                },
                {
                  icon: Thermometer,
                  title: 'Smart Fever Detection',
                  desc: 'Non-contact infrared thermometry system with AI-powered fever pattern analysis for early disease detection in public spaces.',
                  tags: ['AI/ML', 'Thermal Imaging'],
                },
                {
                  icon: Wind,
                  title: 'Respiratory Monitor',
                  desc: 'Wearable respiratory rate monitor using impedance pneumography for continuous breathing pattern analysis and sleep apnea detection.',
                  tags: ['Wearables', 'Biosensors'],
                },
                {
                  icon: Pill,
                  title: 'Herbal Medicine Analyzer',
                  desc: 'Spectroscopy-based device for authenticating and analyzing indigenous herbal medicines, bridging traditional and modern healthcare.',
                  tags: ['Spectroscopy', 'Traditional Medicine'],
                },
                {
                  icon: Eye,
                  title: 'Retinal Imaging System',
                  desc: 'Affordable fundus camera with machine learning-based diabetic retinopathy screening for early detection in underserved communities.',
                  tags: ['Medical Imaging', 'Deep Learning'],
                },
                {
                  icon: Zap,
                  title: 'Pulse Oximetry Plus',
                  desc: 'Next-generation pulse oximeter with perfusion index monitoring and tissue oxygenation mapping for critical care applications.',
                  tags: ['Photoplethysmography', 'Critical Care'],
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-sky-50 to-emerald-50 dark:from-sky-900/10 dark:to-emerald-900/10 border border-sky-200 dark:border-sky-700 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">
                    <project.icon size={48} className="text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 font-semibold">
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Academic Journey
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              My educational pathway and achievements
            </p>

            <div className="relative border-l-2 border-sky-600 ml-4">
              {[
                {
                  year: '2025',
                  title: 'BHSc in Biomedical Technology',
                  org: 'Gampaha Wickramarachchi University of Indigenous Medicine',
                  desc: 'Specializing in medical instrumentation, diagnostic systems, and healthcare technology innovation. Focus on integrating traditional medicine with modern biomedical devices.',
                  badges: ['GPA: 3.8/4.0', "Dean's List"],
                },
                {
                  year: '2025',
                  title: 'Research Internship',
                  org: 'National Medical Research Institute',
                  desc: 'Conducted research on non-invasive glucose monitoring systems and contributed to the development of novel biosensor technologies for diabetes management.',
                  badges: ['Published Research'],
                },
                {
                  year: '2024',
                  title: 'Innovation Award',
                  org: 'National Biomedical Engineering Conference',
                  desc: 'Received the Best Student Innovation Award for developing a low-cost ECG monitoring device designed for resource-limited healthcare settings.',
                  badges: ['🏆 1st Place'],
                },
                {
                  year: '2025',
                  title: 'Certifications',
                  org: 'Professional Development',
                  desc: '',
                  items: [
                    'Medical Device Design & Regulation',
                    'Biomedical Signal Processing',
                    'Healthcare Data Analytics',
                    'ISO 13485 Medical Devices QMS',
                  ],
                },
              ].map((item, idx) => (
                <div key={idx} className="mb-10 ml-8 relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-sky-600 border-4 border-white dark:border-slate-900"></div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <span className="text-sm font-semibold text-sky-600">{item.year}</span>
                    <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{item.org}</p>
                    {item.desc && <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>}
                    {item.items && (
                      <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1 mt-2">
                        {item.items.map((i, idx) => (
                          <li key={idx}>{i}</li>
                        ))}
                      </ul>
                    )}
                    {item.badges && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.badges.map((badge, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              Let's collaborate on innovative healthcare solutions
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                {[
                    {
                    icon: Mail,
                    title: 'Email',
                    value: 'weerawardhana02@gmail.com',
                    color: 'sky',
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    value: '0764365905',
                    color: 'emerald',
                  },
                  {
                    icon: MapPin,
                    title: 'Location',
                    value: 'Hansagiri, Goyambokka, Tangalle.',
                    color: 'cyan',
                  },
                ].map((contact, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-${contact.color}-100 dark:bg-${contact.color}-900 rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <contact.icon className={`text-${contact.color}-600 text-xl`} size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{contact.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{contact.value}</p>
                    </div>
                  </div>
                ))}

                    <div className="pt-6">
                  <h3 className="font-bold mb-4">Connect on Social Media</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/share/1BwSXKxoFR/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.9v-2.89h1.54V9.41c0-1.52.9-2.36 2.29-2.36.66 0 1.35.12 1.35.12v1.49h-.76c-.75 0-.98.47-.98.95v1.14h1.67l-.27 2.89h-1.4v6.99C18.34 21.12 22 16.99 22 12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-700 focus:border-sky-600 dark:focus:border-sky-600 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-700 focus:border-sky-600 dark:focus:border-sky-600 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-700 focus:border-sky-600 dark:focus:border-sky-600 focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-700 focus:border-sky-600 dark:focus:border-sky-600 focus:outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="bg-slate-900 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400 mb-4">
              © 2025 Yugara Weerawardhana. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Innovating Healthcare Through Technology | Biomedical Engineering Excellence
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
