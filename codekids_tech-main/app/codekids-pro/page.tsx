'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Code, Cloud, Shield, Database, Palette, Cpu, Briefcase, GraduationCap, 
  CheckCircle, Rocket, Users, Award, TrendingUp, Star, Zap, Target,
  Building2, Calendar, DollarSign, BookOpen, Laptop, Brain, Layers,
  ChevronLeft, ChevronRight, ArrowRight, PlayCircle
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const heroCarousel = [
  {
    title: 'Full Stack Development',
    description: 'Master MERN stack, APIs, and modern frameworks',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Cloud Computing & DevOps',
    description: 'AWS, Azure, Docker, Kubernetes, and CI/CD pipelines',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Build intelligent systems with Python and TensorFlow',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Data Science',
    description: 'Analytics, visualization, and predictive modeling',
    image: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

const tracks = [
  { 
    name: 'Full Stack Development', 
    icon: Code, 
    color: 'from-blue-500 to-cyan-500', 
    duration: '6 months',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Master frontend, backend, and database technologies to build complete web applications',
    skills: ['React, Node.js', 'MongoDB, PostgreSQL', 'REST APIs', 'Deployment'],
  },
  { 
    name: 'Cloud Computing', 
    icon: Cloud, 
    color: 'from-purple-500 to-pink-500', 
    duration: '4 months',
    image: 'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Deploy scalable cloud solutions on AWS, Azure, and Google Cloud Platform',
    skills: ['AWS, Azure, GCP', 'Docker & Kubernetes', 'Serverless', 'CI/CD'],
  },
  { 
    name: 'DevOps Engineering', 
    icon: Cpu, 
    color: 'from-orange-500 to-red-500', 
    duration: '5 months',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Automate deployment pipelines and manage infrastructure as code',
    skills: ['Jenkins, GitLab CI', 'Terraform, Ansible', 'Monitoring', 'Kubernetes'],
  },
  { 
    name: 'Cybersecurity', 
    icon: Shield, 
    color: 'from-green-500 to-teal-500', 
    duration: '6 months',
    image: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Protect systems and networks from cyber threats and vulnerabilities',
    skills: ['Ethical Hacking', 'Penetration Testing', 'Security Audits', 'Risk Management'],
  },
  { 
    name: 'Data Science', 
    icon: Database, 
    color: 'from-indigo-500 to-purple-500', 
    duration: '6 months',
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Extract insights from data using Python, SQL, and machine learning',
    skills: ['Python, R', 'SQL, NoSQL', 'Machine Learning', 'Data Visualization'],
  },
  { 
    name: 'UI/UX Design', 
    icon: Palette, 
    color: 'from-pink-500 to-rose-500', 
    duration: '4 months',
    image: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Create beautiful and user-friendly digital experiences',
    skills: ['Figma, Sketch', 'User Research', 'Prototyping', 'Design Systems'],
  },
];

const internships = [
  {
    title: 'Tech Startup Internship',
    company: 'StartupHub',
    duration: '3 months',
    type: 'Paid',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Work on real products with startup teams',
  },
  {
    title: 'Enterprise Development',
    company: 'TechCorp Solutions',
    duration: '6 months',
    type: 'Paid + Stipend',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Build enterprise-scale applications',
  },
  {
    title: 'AI Research Assistant',
    company: 'Innovation Labs',
    duration: '4 months',
    type: 'Paid',
    image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Contribute to cutting-edge AI research',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    duration: '3 months',
    type: 'Paid',
    image: 'https://images.pexels.com/photos/8438983/pexels-photo-8438983.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Build client projects from scratch',
  },
];

const projects = [
  {
    title: 'E-Commerce Platform',
    tech: 'MERN Stack',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Full-featured online shopping platform with payment integration',
    github: '#',
  },
  {
    title: 'AI Chatbot',
    tech: 'Python, TensorFlow',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Intelligent chatbot using NLP and machine learning',
    github: '#',
  },
  {
    title: 'Cloud Analytics Dashboard',
    tech: 'AWS, React, Python',
    image: 'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Real-time data visualization and analytics platform',
    github: '#',
  },
  {
    title: 'Mobile Banking App',
    tech: 'React Native, Node.js',
    image: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Secure mobile banking application with biometric auth',
    github: '#',
  },
];

const features = [
  { icon: Laptop, title: 'Live instructor-led online classes', description: 'Interactive sessions with industry experts' },
  { icon: Code, title: 'Real-world projects and capstones', description: 'Build portfolio-worthy applications' },
  { icon: Briefcase, title: 'Internship opportunities', description: 'Get hands-on experience with top companies' },
  { icon: BookOpen, title: 'Resume and LinkedIn optimization', description: 'Stand out to recruiters' },
  { icon: Users, title: 'Mock interviews and soft skills', description: 'Ace your technical and HR rounds' },
  { icon: Target, title: 'Job placement assistance', description: 'Connect with hiring partners' },
];

const stats = [
  { icon: TrendingUp, label: 'Success Rate', value: '95%', color: 'from-green-500 to-emerald-500' },
  { icon: Briefcase, label: 'Job Offers', value: '500+', color: 'from-blue-500 to-cyan-500' },
  { icon: Building2, label: 'Industry Partners', value: '50+', color: 'from-purple-500 to-pink-500' },
  { icon: DollarSign, label: 'Avg. Salary Hike', value: '80%', color: 'from-orange-500 to-red-500' },
  { icon: Users, label: 'Students Placed', value: '1000+', color: 'from-indigo-500 to-purple-500' },
  { icon: Star, label: 'Alumni Rating', value: '4.9/5', color: 'from-yellow-500 to-orange-500' },
];

export default function CodeKidsProPage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroCarousel.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-[90vh] min-h-[700px] overflow-hidden pt-20 md:pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroCarousel[currentHeroSlide].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-blue-900/85 to-cyan-900/85 dark:from-purple-950/90 dark:via-blue-950/90 dark:to-cyan-950/90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 z-10" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto text-white text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 border border-white/30"
            >
              <GraduationCap className="h-4 w-4" />
                <span className="text-sm font-medium">Online • Ages 18-26 • Job-Ready Training</span>
            </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight">
              Learn Today. Intern Soon.{' '}
              <span className="block text-cyan-300">Get Job-Ready.</span>
            </h1>
                  <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                    {heroCarousel[currentHeroSlide].description}
            </p>
                </motion.div>
              </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#pro-apply-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-purple-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Apply Now
                  <Rocket className="h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-900 transition-all">
                  <PlayCircle className="h-5 w-5" />
                  Watch Demo
              </button>
            </div>
          </motion.div>
          </div>
        </div>

        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + heroCarousel.length) % heroCarousel.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroCarousel.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroCarousel.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentHeroSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Section with Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
              Choose Your <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Tech Track</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-relevant programs designed to make you job-ready with hands-on projects and real-world experience
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={track.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <GlassCard className="h-full overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={track.image}
                      alt={track.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${track.color} opacity-60 group-hover:opacity-80 transition-opacity`} />
                    <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center absolute top-4 right-4 shadow-lg`}>
                      <track.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold font-heading">{track.name}</h3>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {track.duration}
                    </span>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{track.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {track.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button className="w-full py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold hover:from-primary/20 hover:to-accent/20 transition-all">
                      Learn More
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-6 font-heading">
                Everything You Need to{' '}
                <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Succeed</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don&apos;t just teach technology. We prepare you for your career with comprehensive support at every step.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <feature.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Learning experience"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
              </div>
              <GlassCard className="p-8 mt-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Live Classes', value: '500+ hrs' },
                    { label: 'Projects', value: '10+' },
                    { label: 'Certifications', value: '6+' },
                    { label: 'Placement Support', value: '100%' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internships Carousel */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
              Internship <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world experience with top companies during your program
            </p>
          </motion.div>

          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {internships.map((internship, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <GlassCard className="h-full overflow-hidden hover:scale-105 transition-transform duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={internship.image}
                          alt={internship.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
                          {internship.type}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h4 className="font-bold text-lg mb-1">{internship.title}</h4>
                          <p className="text-sm text-white/80">{internship.company}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                            {internship.duration}
                          </span>
                          <Calendar className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{internship.description}</p>
                        <Link
                          href="/contact?type=internship"
                          className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold hover:from-primary/20 hover:to-accent/20 transition-all inline-flex items-center justify-center"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </GlassCard>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
              Student <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects built by our students that showcase their skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <GlassCard className="overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-semibold">
                      {project.tech}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-bold text-xl mb-2">{project.title}</h4>
                      <p className="text-sm text-white/90">{project.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <Link
                      href={project.github}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      View on GitHub
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
          <GlassCard className="p-8">
            <h2 className="text-foreground text-3xl font-bold mb-2 font-heading text-center">
              Apply for <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">CodeKids_Pro</span>
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Start your journey to a successful tech career
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Age *</label>
                  <input
                    type="number"
                    min="18"
                    max="26"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Track *</label>
                <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select a track</option>
                  {tracks.map((track) => (
                    <option key={track.name}>{track.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell us about your goals</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="What do you hope to achieve with this program?"
                />
              </div>

              <button
                type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Submit Application
              </button>
            </form>
          </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
