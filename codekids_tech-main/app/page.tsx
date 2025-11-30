'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Rocket, Sparkles, Trophy, Users, BookOpen, Lightbulb, Star, 
  Code, Brain, Zap, Cpu, ChevronLeft, ChevronRight, CheckCircle, Award,
  ArrowRight, TrendingUp, Shield, Heart, Clock, Building2, GraduationCap,
  PlayCircle, Target, Laptop, Briefcase, MessageSquare, Globe, Network,
  ExternalLink, Handshake, Quote
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { handleAnchorClick } from '@/lib/smooth-scroll';

// Hero carousel slides
const heroSlides = [
  {
    title: 'AI & Machine Learning',
    description: 'Empowering students with cutting-edge AI education',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Robotics & Automation',
    description: 'Hands-on robotics training for future innovators',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Coding & Development',
    description: 'Building the next generation of software developers',
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'STEM Innovation Labs',
    description: 'State-of-the-art labs for experiential learning',
    image: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

// Programs overview
const programs = [
  {
    title: 'CodeKids Jr',
    description: 'Offline school programs for ages 6-17. Robotics, coding, and STEM camps with hands-on learning experiences.',
    icon: Rocket,
    color: 'from-pink-500 to-rose-500',
    href: '/codekids-jr',
    features: ['100+ Partner Schools', 'Hands-on Learning', 'Age 6-17'],
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageDescription: 'Students learning robotics and coding',
  },
  {
    title: 'CodeKids Pro',
    description: 'Online courses for graduates. Job-ready skills with placement assistance and industry projects.',
    icon: GraduationCap,
    color: 'from-purple-500 to-indigo-500',
    href: '/codekids-pro',
    features: ['95% Success Rate', 'Industry Projects', 'Job Placement'],
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageDescription: 'Professional coding and development training',
  },
];

// Gallery images
const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Robotics Workshop',
    category: 'Robotics',
  },
  {
    src: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Coding Session',
    category: 'Coding',
  },
  {
    src: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'AI & ML Training',
    category: 'AI/ML',
  },
  {
    src: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Drone Programming',
    category: 'Drones',
  },
  {
    src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Student Collaboration',
    category: 'Teamwork',
  },
  {
    src: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'STEM Innovation Lab',
    category: 'STEM',
  },
];

// Features
const features = [
  { icon: Users, title: '1,250+ Students', description: 'Trusted by students across India', color: 'from-green-500 to-emerald-500' },
  { icon: Star, title: '4.9/5 Rating', description: 'Highly satisfied parents and schools', color: 'from-yellow-500 to-orange-500' },
  { icon: Building2, title: '20+ Schools', description: 'Partnered with leading institutions', color: 'from-blue-500 to-cyan-500' },
  { icon: Trophy, title: '500+ Awards', description: 'Recognized excellence in education', color: 'from-purple-500 to-pink-500' },
];

// Key features
const keyFeatures = [
  { icon: Rocket, title: 'Hands-On Learning', description: 'Practical projects and real-world applications' },
  { icon: Code, title: 'Expert Instructors', description: 'Industry professionals and certified teachers' },
  { icon: Brain, title: 'Innovative Curriculum', description: 'Cutting-edge content aligned with industry needs' },
  { icon: Zap, title: 'Career Support', description: 'Placement assistance and career guidance' },
];

// Testimonials
const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Grade 8 Student',
    school: 'Delhi Public School',
    text: 'The robotics camp changed my perspective on technology. I built my first robot and now I want to become a robotics engineer!',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Priya Patel',
    role: 'Grade 10 Student',
    school: 'Ryan International School',
    text: 'Learning AI and coding through CodeKids has been amazing. The teachers are patient and make everything fun.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Mrs. Meera Kapoor',
    relation: 'Mother of Grade 7 student',
    text: 'My daughter has become more confident and curious about technology. CodeKids has truly transformed her interest in STEM.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Arjun Reddy',
    role: 'Grade 9 Student',
    school: 'Kendriya Vidyalaya',
    text: 'I participated in the drone racing competition and won second place! It was the best experience ever.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

// Strategic Collaborations
const collaborations = [
  {
    name: 'CodingJr',
    logo: '/assest/coding_jr_logo.png',
    url: 'https://www.codingjr.online/',
    tagline: 'AI, Robotics & Coding for Schools',
    description: 'CodingJr is an Edu-Tech company specialising in delivering integrated technology curricula to schools in the fields of Artificial Intelligence, Robotics, Data Science, and Coding for young learners. Their ecosystem includes Virtual Labs, Animated Presentations, a Learning Mobile App, and AI-Based Assessments. CodingJr empowers schools to digitize and implement technology seamlessly, enhancing the learning experience for students across Grades 1–10.',
    features: [
      'Virtual labs for coding & robotics',
      'Animated video lessons',
      'AI-based adaptive assessments',
      'Mobile learning app for students',
      'Integrated school curriculum',
    ],
    cta: {
      label: 'Visit CodingJr',
      link: 'https://www.codingjr.online/',
    },
    color: 'from-pink-500 to-rose-500',
    icon: Rocket,
  },
  {
    name: 'Coding Pro',
    logo: '/assest/coding_pro.png',
    url: 'https://codingpro.online/',
    tagline: 'Advanced Tech Programs for College Students',
    description: 'Coding Pro is a leading Edu-Tech platform offering advanced and industry-aligned technology courses for Engineering and Degree students. Their programs include App Development, Web Development, Game Development, Artificial Intelligence, Cyber Security, IoT, Networking, and more. Coding Pro has also developed the world\'s first Generative AI Visual HR Tool, helping students and professionals enhance their employability.',
    features: [
      'Advanced AI & ML courses',
      'Full-stack development programs',
      'Cybersecurity & IoT training',
      'Offline & online training models',
      'World\'s first generative AI visual HR tool',
    ],
    cta: {
      label: 'Visit Coding Pro',
      link: 'https://codingpro.online/',
    },
    color: 'from-purple-500 to-indigo-500',
    icon: GraduationCap,
  },
  {
    name: 'CodeKids Technologies',
    logo: '/assest/codekids_finallogo.jpg',
    tagline: 'Unified Technology Learning Ecosystem',
    description: 'Through its collaboration with CodingJr and Coding Pro, CodeKids Technologies offers a complete learning pathway from school to college — integrating foundational STEM education with advanced, industry-ready technology training. Together, we deliver India\'s most comprehensive future-skills education ecosystem.',
    features: [
      'School to Career Learning Pathway',
      'AI, Robotics, Coding & STEM',
      'Industry-ready advanced tech programs',
      'Digital tools, virtual labs & AI assessment',
      'Internship simulations & projects',
    ],
    color: 'from-cyan-500 to-blue-500',
    icon: Handshake,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-[90vh] min-h-[700px] overflow-hidden pt-20 md:pt-0">
        {/* Floating Orbs Background */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-3xl z-0"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl z-0"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-cyan-900/80 dark:from-purple-950/90 dark:via-blue-950/90 dark:to-cyan-950/90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
            
            {/* Parallax Effect Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl text-white"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 border border-white/30"
              >
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Future-Ready Education</span>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight">
                    Best Coding Courses for{' '}
                    <span className="block bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                      Kids & Students
                </span>
              </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                    {heroSlides[currentSlide].description}
                  </p>
                  <p className="text-lg md:text-xl text-white/80 mb-10 font-semibold italic">
                    We don&apos;t just teach technology – we build innovators.
              </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-purple-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Get a Free Demo Class
                  <PlayCircle className="h-5 w-5" />
                </Link>
                <Link
                  href="/codekids-jr"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-900 transition-all"
                >
                  Explore Our Programs
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Indicators / Statistics */}
      <section className="py-16 bg-gradient-to-b from-transparent to-secondary/20 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl"
              style={{
                left: `${(i * 10) % 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <GlassCard className="p-8 hover:scale-110 transition-transform duration-300 shadow-xl hover:shadow-2xl border border-border/50 hover:border-primary/30 bg-gradient-to-b from-secondary/50 to-secondary/30">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-6 shadow-xl relative overflow-hidden group-hover:shadow-2xl`}
                  >
                    <feature.icon className="h-8 w-8 text-white relative z-10" />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 blur-xl`}
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text"
                  >
                    {feature.title}
                  </motion.div>
                  <div className="text-sm font-medium text-muted-foreground leading-relaxed">{feature.description}</div>
                  
                  {/* Decorative Sparkle */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      rotate: [0, 180, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <Sparkles className="h-5 w-5 text-primary/50" />
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-foreground">
              Our <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From school to college, we offer comprehensive coding and STEM education designed to nurture the next generation of innovators and tech leaders across all age groups.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <GlassCard className="overflow-hidden h-full hover:scale-105 transition-transform duration-300 shadow-xl">
                  <div className={`relative h-64 overflow-hidden group-hover:scale-110 transition-transform duration-700`}>
                    {/* Background Image */}
                    {program.image && (
                      <Image
                        src={program.image}
                        alt={program.imageDescription || program.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                        unoptimized
                      />
                    )}
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
                    
                    {/* Floating Icon */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-8 left-8 h-20 w-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/30 z-10"
                    >
                      <program.icon className="h-10 w-10 text-white" />
                    </motion.div>

                    {/* Floating Particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/40 rounded-full"
                        style={{
                          left: `${20 + (i * 10)}%`,
                          top: `${30 + (i * 5)}%`,
                        }}
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                      <h3 className="text-3xl font-bold mb-2 font-heading drop-shadow-lg">{program.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">{program.description}</p>
                    </div>

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                      animate={{
                        x: ['-200%', '200%'],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: 'linear',
                      }}
                    />
                  </div>
                  <div className="p-8 bg-gradient-to-b from-secondary/50 to-secondary/30">
                    <div className="space-y-3 mb-6">
                      {program.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground font-medium">{feature}</span>
                        </motion.div>
                      ))}
                </div>
                <Link
                      href={program.href}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold hover:from-primary/20 hover:to-accent/20 transition-all w-full group/link shadow-lg hover:shadow-xl"
                >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                  </div>
              </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border border-primary/20 mb-6"
            >
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Student Activities</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-foreground">
              Learning in <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See our students exploring, creating, and innovating through hands-on learning experiences
            </p>
            </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-xl"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={90}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 inline-block mb-2">
                    <span className="text-xs font-semibold text-white">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading mb-1">{item.title}</h3>
                </div>
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
                <Link
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold hover:from-primary/20 hover:to-accent/20 transition-all border border-primary/20 shadow-lg hover:shadow-xl"
                >
              <Sparkles className="h-4 w-4" />
              View More Activities
              <ArrowRight className="h-4 w-4" />
                </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-foreground">
              Why Choose <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">CodeKids</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Excellence in technology education with proven results. We combine cutting-edge curriculum, expert instructors, and hands-on learning to deliver transformative educational experiences.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <GlassCard className="p-8 h-full hover:scale-105 transition-transform duration-300 text-center">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 font-heading text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-pink-500/20 border border-yellow-500/30 mb-6"
            >
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold text-foreground">Trusted by Thousands</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-foreground">
              What Students & Parents <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from our amazing community of students, parents, and educators
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <GlassCard className="p-6 h-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-border/50 hover:border-primary/30">
                  {/* Avatar with Glow Effect */}
                  <div className="relative mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative h-16 w-16 rounded-full overflow-hidden mx-auto mb-3 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all"
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                        quality={90}
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    <div className="text-center">
                      <div className="font-semibold text-foreground text-lg mb-1">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role || testimonial.relation}
                        {testimonial.school && (
                          <>
                            <br />
                            <span className="text-xs">{testimonial.school}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  {testimonial.rating && (
                    <div className="flex gap-1 justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                        >
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                        </motion.div>
                      ))}
                    </div>
                  )}
                  
                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                    <p className="text-muted-foreground italic text-sm leading-relaxed relative z-10">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="h-4 w-4 text-primary/30" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Collaborations */}
      <section className="py-20 bg-gradient-to-b from-transparent to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaC0yVjBoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border border-primary/20 mb-6"
            >
              <Handshake className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Strategic Partnerships</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-foreground">
              Our Strategic <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Collaborations</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              CodeKids Technologies proudly collaborates with two leading EdTech innovators — CodingJr and Coding Pro — to deliver a complete technology learning ecosystem from school to college.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborations.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group h-full"
              >
                <GlassCard className="overflow-hidden h-full hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-primary/30">
                  {/* Header with Gradient Background */}
                  <div className={`relative h-48 bg-gradient-to-br ${partner.color} overflow-hidden`}>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
                    
                    {/* Logo or Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="h-28 w-28 md:h-32 md:w-32 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center relative overflow-hidden border border-white/30 shadow-lg group/logo"
                      >
                        {partner.logo ? (
                          <div className="relative w-full h-full p-3 md:p-4">
                            <Image
                              src={partner.logo}
                              alt={`${partner.name} logo`}
                              fill
                              className="object-contain group-hover/logo:scale-110 transition-transform duration-300"
                              sizes="(max-width: 768px) 112px, 128px"
                              quality={95}
                              unoptimized
                            />
                          </div>
                        ) : (
                          <partner.icon className="h-12 w-12 md:h-14 md:w-14 text-white" />
                        )}
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 blur-xl" />
                      </motion.div>
                    </div>

                    {/* Floating Particles */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 font-heading text-foreground group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary mb-4">{partner.tagline}</p>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-4">
                      {partner.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {partner.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                      {partner.features.length > 3 && (
                        <div className="text-xs text-muted-foreground pl-6">
                          + {partner.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    {partner.cta ? (
                      <a
                        href={partner.cta.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold hover:from-primary/20 hover:to-accent/20 transition-all group/btn"
                      >
                        {partner.cta.label}
                        <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-primary font-semibold">
                        <Handshake className="h-4 w-4" />
                        Unified Ecosystem
                      </div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Together, we deliver India&apos;s most comprehensive future-skills education ecosystem.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold hover:from-primary/20 hover:to-accent/20 transition-all border border-primary/20"
            >
              <Handshake className="h-4 w-4" />
              Learn More About Our Collaborations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 border border-white/30"
            >
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Start Your Journey Today</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Ready to Transform{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Your Future?
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
              Join thousands of students learning cutting-edge technology skills. Get started with a free demo class today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-purple-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <MessageSquare className="h-5 w-5" />
                Contact Us
              </Link>
              <Link
                href="/codekids-jr/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-900 transition-all"
              >
                View Pricing
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
