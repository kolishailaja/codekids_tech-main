'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Target, Eye, Heart, Users, Award, Rocket, Code, GraduationCap, BookOpen, 
  Lightbulb, Zap, TrendingUp, CheckCircle, Star, Building2, Globe, 
  ChevronLeft, ChevronRight, Brain, Shield, Database, Palette, Cpu,
  Sparkles, ArrowRight, PlayCircle, Layers
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

// Hero carousel images
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
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'STEM Innovation Labs',
    description: 'State-of-the-art labs for experiential learning',
    image: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Carousel */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden pt-20 md:pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-cyan-900/80 dark:from-purple-950/90 dark:via-blue-950/90 dark:to-cyan-950/90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
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
                    Empowering the Next Generation with{' '}
                    <span className="block bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                      Future-Ready Skills
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
                    From school to college, CodeKids, CodeKids Jr and CodeKids Pro deliver a complete technology learning ecosystem across AI, Robotics, Coding, Data Science and STEM.
                  </p>
                  <p className="text-lg md:text-xl text-blue-200 mb-10 font-semibold italic">
                    We don&apos;t just teach technology – we build innovators.
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#get-demo"
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

        {/* Dots Indicator */}
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

      <div className="relative">
      <div className="absolute inset-0 z-0">
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 dark:opacity-3"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          {/* About Us Section */}
          <motion.section
            {...fadeInUp}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
                About <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Us</span>
              </h2>
            </div>

            <GlassCard className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    CodeKids Technologies is a pioneering EdTech organization dedicated to transforming how students learn technology. Through our divisions—CodeKids Jr for school students and CodeKids Pro for college learners & job seekers—we deliver structured, industry-ready programs that build real-world skills.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    Our ecosystem blends international academic expertise, hands-on STEAM learning, project-based methodologies and AI-powered digital tools. Students learn through virtual labs, interactive videos, robotics kits, internships and real-world capstone projects.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    We partner with schools, colleges and institutions across India to make technology learning accessible, relevant and future-ready.
                  </p>
                </div>
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Students learning technology"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  'Virtual Labs for AI, Coding, Robotics and Data Science',
                  'Animated concept videos and interactive learning modules',
                  'AI-based assessments and adaptive learning',
                  'STEM kits, robotics systems and IoT hardware',
                  'Mobile learning app for students and teachers',
                  'Internship simulations and project-based curriculum',
                  'Certified courses aligned with global tech standards',
                ].map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.section>

          {/* CodeKids Jr Section */}
          <motion.section
            {...fadeInUp}
            className="mb-20"
          >
            <GlassCard className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 rounded-2xl overflow-hidden order-2 md:order-1">
                  <Image
                    src="https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="CodeKids Jr - School Programs"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 to-transparent" />
                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4">
                    <BookOpen className="h-5 w-5 text-pink-500" />
                    <span className="text-sm font-medium text-pink-600 dark:text-pink-400">CodeKids Jr</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold font-heading">
                    Future-Ready Technology Education for Schools{' '}
                    <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">
                      (Grade 1–10)
                    </span>
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    CodeKids Jr is designed exclusively for schools, offering structured STEAM and technology education from Grade 1 to Grade 10. Using child-friendly learning modules, animations, hands-on kits and interactive assessments, students learn foundational to advanced concepts in technology.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    The program integrates seamlessly into school timetables and includes curated lesson plans, teacher training, worksheets, activities and annual project showcases.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'AI, Coding, Robotics & STEM curriculum for Grades 1–10',
                      'Animated concept videos & interactive activities',
                      'School-ready lesson plans and teacher handbooks',
                      'STEM kits & robotics hardware for hands-on learning',
                      'Technology exhibitions, competitions & project fairs',
                      'Child-safe mobile learning app',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/codekids-jr"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    Learn more about CodeKids Jr
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </GlassCard>
          </motion.section>

          {/* CodeKids Pro Section */}
          <motion.section
            {...fadeInUp}
            className="mb-20"
          >
            <GlassCard className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                    <GraduationCap className="h-5 w-5 text-purple-500" />
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">CodeKids Pro</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold font-heading">
                    Advanced Technology Programs for{' '}
                    <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">
                      College Students & Job Seekers
                    </span>
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    CodeKids Pro delivers industry-aligned programs for college students, engineering learners and early professionals. With specialized tracks in AI, Data Science, Full Stack Development, Cybersecurity, ML, Cloud, and Robotics, learners build job-ready portfolios through real-world projects.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    The program includes internship simulations, assessments, certifications and placements through industry partnerships.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Industry-aligned courses in AI, ML, DS, IoT and Software Engineering',
                      'Internship simulation programs',
                      'Project-based learning with GitHub portfolio development',
                      'Career guidance, mock interviews and certification prep',
                      'Expert mentors with global academic & industry experience',
                      'Placement support through industry collaborations',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/codekids-pro"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    Learn more about CodeKids Pro
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="CodeKids Pro - Career Programs"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/40 to-transparent" />
                </div>
              </div>
            </GlassCard>
          </motion.section>

          {/* Mission & Vision Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Mission */}
        <motion.div
              {...fadeInUp}
              id="mission"
            >
              <GlassCard className="h-full p-8 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Mission"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">Our Mission</h3>
                  <p className="leading-relaxed text-muted-foreground mb-4">
                    To build a generation of innovators by providing world-class technology education that is accessible, experiential and aligned with global industry standards.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    We aim to empower students with future-ready skills that enhance problem-solving, creativity, and confidence.
          </p>
                </div>
              </GlassCard>
        </motion.div>

            {/* Vision */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <GlassCard className="h-full p-8 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Vision"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">Our Vision</h3>
                  <p className="leading-relaxed text-muted-foreground mb-4">
                    To become India&apos;s leading K–12 and higher-education technology ecosystem by integrating AI-powered learning, hands-on STEM innovation and research-driven pedagogy into every institution.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    We aim to create future-ready citizens capable of shaping tomorrow&apos;s world.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Why CodeKids Section */}
          <motion.section
            {...fadeInUp}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
                Why <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">CodeKids?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A complete ecosystem from school to career
              </p>
            </div>

            <GlassCard className="p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
                <Image
                  src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Why CodeKids"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
            {
                      icon: Globe,
                      title: 'International Expertise',
                      description: 'Curriculum designed by experts with education and research experience from the USA and UK.',
                      color: 'from-blue-500 to-cyan-500',
                    },
                    {
                      icon: Layers,
                      title: 'School + College Programs',
                      description: 'CodeKids Jr and CodeKids Pro together cover learning from Grade 1 to Graduation.',
                      color: 'from-purple-500 to-pink-500',
                    },
                    {
                      icon: Brain,
                      title: 'Advanced Learning Tools',
                      description: 'Virtual labs, robotics kits, AI assessments, and a mobile learning app.',
                      color: 'from-pink-500 to-rose-500',
            },
            {
                      icon: Building2,
                      title: 'Institution-Ready Implementation',
                      description: 'We provide instructors, lesson plans, training and monitoring dashboards.',
                      color: 'from-green-500 to-teal-500',
                    },
                    {
                      icon: Rocket,
                      title: 'Hands-On Learning',
                      description: 'Activities, experiments, STEM kits, coding challenges and robotics work.',
                      color: 'from-orange-500 to-red-500',
                    },
                    {
                      icon: Code,
                      title: 'Real-World Projects',
                      description: 'Portfolio-building projects, capstones and internship simulations.',
                      color: 'from-indigo-500 to-purple-500',
                    },
                    {
                      icon: Star,
                      title: 'Trusted Leadership',
                      description: 'Led by academicians, researchers and technologists with decades of experience.',
                      color: 'from-yellow-500 to-orange-500',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
                      <div className="h-full p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all group">
                        <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <item.icon className="h-7 w-7 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-2 font-heading">{item.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              </GlassCard>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            id="get-demo"
            {...fadeInUp}
            className="mb-20"
          >
            <GlassCard className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border-2 border-primary/20">
              <PlayCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-4 font-heading">
                Get a Free Demo Class
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Experience how CodeKids transforms learning through hands-on activities, AI tools, robotics and STEM projects.
              </p>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Schools, colleges and students can book a free live session to explore our teaching model.
              </p>
              <Link
                href="/contact?type=demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all mb-8"
              >
                Book a Demo Session
                <ArrowRight className="h-5 w-5" />
              </Link>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  'Virtual lab demo',
                  'Robotics & AI hands-on session',
                  'Curriculum walkthrough',
                  'Implementation guidelines for institutions',
                ].map((bullet, index) => (
                  <div key={index} className="flex items-center gap-2 justify-center">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{bullet}</span>
                  </div>
          ))}
        </div>
            </GlassCard>
          </motion.section>

          {/* Founder Section */}
          <motion.section
            {...fadeInUp}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
                Our <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Founder</span>
              </h2>
            </div>

            <GlassCard className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  {/* Outer Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  {/* Main Image Container */}
                  <div className="relative h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 dark:border-white/5 group-hover:border-white/20 transition-all duration-500">
                    {/* Background Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B8F]/20 via-transparent to-[#2ED0FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    
                    {/* Image */}
                    <Image
                      src="/assest/prof-dn-reddy.jpg"
                      alt="Dr. D. N. Reddy - Founder"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      quality={95}
                      priority
                      onError={(e) => {
                        // Fallback if image doesn't exist yet
                        (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800';
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />
                    
                    {/* Decorative Badge - Top Right */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className="absolute top-6 right-6 z-30"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF4B8F] to-[#7B3DFF] rounded-full blur-lg opacity-60 animate-pulse" />
                        <div className="relative bg-gradient-to-r from-[#FF4B8F] to-[#7B3DFF] p-3 rounded-full shadow-xl">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Decorative Corner - Top Left */}
                    <motion.div
                      initial={{ opacity: 0, x: -20, y: -20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="absolute top-6 left-6 z-30"
                    >
                      <div className="w-16 h-16 border-2 border-white/30 rounded-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                    </motion.div>
                    
                    {/* Bottom Content Card */}
                    <div className="absolute bottom-0 left-0 right-0 z-30 p-6">
        <motion.div
                        initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="glass-card p-5 bg-white/10 dark:bg-black/30 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl group-hover:bg-white/15 dark:group-hover:bg-black/40 transition-all duration-500"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-1 w-12 bg-gradient-to-r from-[#FF4B8F] to-[#2ED0FF] rounded-full" />
                          <p className="text-white text-sm font-semibold uppercase tracking-wider">Visionary Leader & Educator</p>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                    </div>
                  </div>
                  
                  {/* Bottom Decorative Element */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#FF4B8F] to-transparent rounded-full blur-sm"
                  />
                </motion.div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 font-heading">
                      Dr. D. N. Reddy
                    </h3>
                    <p className="text-xl text-primary font-semibold mb-1">
                      Founder – CodeKids Technologies
                    </p>
                    <p className="text-muted-foreground font-medium">
                      Former Vice-Chancellor, JNTU Hyderabad
                    </p>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Dr. D. N. Reddy is a visionary academic leader and one of India&apos;s most respected figures in engineering and technological education. As the former Vice-Chancellor of JNTU Hyderabad, he has strengthened research, innovation and academic excellence across institutions.
                    </p>
                    <p className="leading-relaxed">
                      Through CodeKids Technologies, he aims to make advanced technology education accessible to every student—from early schooling to higher education.
                    </p>
                    <p className="leading-relaxed">
                      His mission is to prepare India&apos;s youth for AI, Robotics, Data Science and emerging-tech careers.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.section>

          {/* Team Section */}
          <motion.section
            {...fadeInUp}
          className="mb-20"
        >
            <div className="text-center mb-12">
              <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
                Our Expert <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Team</span>
            </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Global expertise building India&apos;s future innovators
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Ms. Swapna',
                  qualification: 'Ph.D (USA)',
                  role: 'Co-Founder | Research & Academic Innovation',
                  description: 'An accomplished researcher with global academic experience, specializing in STEM education, curriculum engineering and modern pedagogy.',
                  image: '/assest/swapna.jpg',
                  color: 'from-pink-500 to-rose-500',
                },
                {
                  name: 'Ravi Kalyan Reddy',
                  qualification: 'B.Tech, MS (UK)',
                  role: 'Tech Lead | AI & Software Engineering',
                  description: 'Expert in AI systems, digital platform development and scalable architectures for learning technologies.',
                  image: '/assest/ravi_kalyan_reddy.jpg',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  name: 'D. Sharavan Reddy',
                  qualification: 'B.Tech, MS (USA)',
                  role: 'Innovation Lead | Robotics & Emerging Technologies',
                  description: 'Specialist in Robotics, IoT and hands-on STEM innovation with a strong focus on building experiential learning models.',
                  image: '/assest/Sharavan_reddy.jpg',
                  color: 'from-purple-500 to-indigo-500',
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="h-full p-6 text-center group hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                    <div className="relative h-64 w-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                        onError={(e) => {
                          // Fallback if image doesn't exist yet
                          (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400';
                        }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                      <div className="absolute top-2 right-2">
                        <div className={`h-3 w-3 rounded-full bg-gradient-to-br ${member.color} shadow-lg`} />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-1 font-heading">{member.name}</h4>
                    <p className="text-sm text-primary font-semibold mb-2">{member.qualification}</p>
                    <p className="text-sm font-medium text-foreground mb-3">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Promise Section */}
          <motion.section
            {...fadeInUp}
          >
            <GlassCard className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
              <Heart className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-6 font-heading">
                The CodeKids <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Promise</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                We deliver globally benchmarked curriculum, expert mentors, real-world projects and advanced digital tools to empower learners across all ages.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                With CodeKids Jr and CodeKids Pro, we prepare students not just for today—but for the future of innovation.
              </p>
          </GlassCard>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
