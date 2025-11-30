'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { handleAnchorClick } from '@/lib/smooth-scroll';
import {
  ArrowDown, Calendar, CheckCircle, Download, Info, MessageSquare,
  Phone, PlayCircle, Rocket, Sparkles, Star, Trophy, Users, Video,
  Briefcase, GraduationCap, Award, TrendingUp, Building2, Target,
  FileText, GitBranch, Linkedin, BookOpen, Gift, Zap, Shield,
  Globe, Code, Cpu, Brain, Database, Lock, Palette, Clock
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 }
};

const tracks = [
  {
    name: 'Full Stack Development',
    duration: '6 months',
    price: 25000,
    originalPrice: 50000,
    description: 'Master MERN stack, APIs, and modern frameworks',
    features: ['React, Node.js, MongoDB', 'Real-world projects', 'Portfolio building', 'Job assistance'],
  },
  {
    name: 'Cloud Computing & DevOps',
    duration: '4 months',
    price: 20000,
    originalPrice: 40000,
    description: 'AWS, Azure, Docker, Kubernetes, and CI/CD pipelines',
    features: ['AWS, Azure, GCP', 'Docker & Kubernetes', 'CI/CD pipelines', 'Industry certifications'],
  },
  {
    name: 'AI & Machine Learning',
    duration: '6 months',
    price: 30000,
    originalPrice: 60000,
    description: 'Build intelligent systems with Python and TensorFlow',
    features: ['Python, TensorFlow', 'ML projects', 'Data science', 'AI applications'],
  },
  {
    name: 'Data Science',
    duration: '6 months',
    price: 28000,
    originalPrice: 56000,
    description: 'Analytics, visualization, and predictive modeling',
    features: ['Python, R, SQL', 'Data visualization', 'Machine learning', 'Portfolio projects'],
  },
  {
    name: 'Cybersecurity',
    duration: '6 months',
    price: 32000,
    originalPrice: 64000,
    description: 'Protect systems and networks from cyber threats',
    features: ['Ethical hacking', 'Security audits', 'Certifications', 'Real-world scenarios'],
  },
  {
    name: 'UI/UX Design',
    duration: '4 months',
    price: 18000,
    originalPrice: 36000,
    description: 'Create beautiful and user-friendly digital experiences',
    features: ['Figma, Sketch', 'User research', 'Prototyping', 'Design portfolio'],
  },
];

const features = [
  { icon: Award, title: 'Course Completion Certificate', text: 'Industry-recognized certificate upon course completion' },
  { icon: Briefcase, title: 'Internship Certificate', text: 'Get certified internship experience for your resume' },
  { icon: Rocket, title: 'Projects Building', text: 'Build 10+ real-world projects to showcase your skills' },
  { icon: Building2, title: 'Industrial Training', text: 'Hands-on training with industry-standard tools and practices' },
  { icon: Target, title: 'Placement Assistance', text: '100% placement assistance with 50+ hiring partners' },
  { icon: FileText, title: 'Resume Building', text: 'Professional resume templates and optimization guidance' },
  { icon: GitBranch, title: 'GitHub Optimization', text: 'GitHub profile optimization and portfolio showcase' },
  { icon: Linkedin, title: 'LinkedIn Optimization', text: 'LinkedIn profile optimization for better visibility' },
  { icon: Globe, title: 'Portfolio Creation', text: 'Personal portfolio website for every student' },
  { icon: Users, title: 'Internship Opportunities', text: 'Guaranteed paid internship with partner companies' },
  { icon: Briefcase, title: 'Placement Opportunities', text: 'Direct placement opportunities with top tech companies' },
  { icon: Zap, title: 'Freelancing Setup', text: 'Support to start freelancing and earn while learning' },
  { icon: Gift, title: 'Merit Scholarships', text: 'Scholarship opportunities for top-performing students' },
  { icon: PlayCircle, title: 'Live Online Classes', text: 'Interactive live classes with expert instructors' },
  { icon: Trophy, title: 'Certificate + Assessments', text: 'Industry certifications and skill assessments' },
  { icon: Code, title: 'Internship Simulation', text: 'Real-world internship simulation projects' },
  { icon: Target, title: 'Resume + Portfolio Prep', text: 'Complete resume and portfolio preparation' },
  { icon: Users, title: 'Mock Interviews', text: 'Mock interview sessions with industry experts' },
  { icon: Briefcase, title: 'Job Assistance', text: 'End-to-end job search and application support' },
  { icon: Users, title: '1:1 Mentorship', text: 'Personalized one-on-one mentorship sessions' },
  { icon: FileText, title: 'Resume Templates', text: 'Professional ATS-friendly resume templates' },
  { icon: BookOpen, title: 'Interview Question Bank', text: 'Comprehensive interview question bank and answers' },
  { icon: BookOpen, title: 'Free eBooks', text: 'Access to free eBooks and learning resources' },
  { icon: MessageSquare, title: 'Community Group Access', text: 'Join exclusive community for networking and support' },
];

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Software Engineer, TechCorp',
    text: 'CodeKids_Pro helped me transition from a non-tech background to a full-stack developer. The structured curriculum and internship support made all the difference.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400', // Indian professional male
  },
  {
    name: 'Priya Patel',
    role: 'Cloud Engineer, CloudTech',
    text: 'The DevOps course was excellent! I got placed before even completing the program. The instructors are industry experts who truly care about your success.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400', // Indian professional female
  },
  {
    name: 'Arjun Kumar',
    role: 'AI Engineer, AI Labs',
    text: 'Best investment I made in my career. The AI/ML track gave me hands-on experience with real projects, and the placement team helped me land my dream job.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', // Indian professional
  },
];

const faqs = [
  {
    q: 'What is included in the course fee?',
    a: 'The course fee includes all live classes, recorded sessions, assignments, projects, internship assistance, job placement support, certifications, and lifetime community access.',
  },
  {
    q: 'Do you offer EMI options?',
    a: 'Yes, we offer flexible EMI options with 0% interest. You can pay in monthly installments throughout the course duration.',
  },
  {
    q: 'Is the internship guaranteed?',
    a: 'Yes, we guarantee internship placement for all students who complete the course requirements. We have partnerships with 50+ companies.',
  },
  {
    q: 'What if I miss a class?',
    a: 'All classes are recorded and available for lifetime access. You can watch the recordings at your convenience and catch up with the instructors during office hours.',
  },
  {
    q: 'Do you provide job placement guarantee?',
    a: 'While we don\'t guarantee job placement, we provide extensive job placement assistance including resume building, mock interviews, and connections with 50+ hiring partners. Our success rate is 95%.',
  },
  {
    q: 'Can I switch tracks after enrollment?',
    a: 'Yes, you can switch tracks within the first month of enrollment. Contact your program coordinator to discuss the switch.',
  },
];

export default function CodeKidsProPricingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    track: '',
    experience: '',
    city: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Our team will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#0F1A30] via-[#050814] to-[#0F1A30]">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaC0yVjBoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-[#FF4B8F]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#7B3DFF]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 md:pt-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-cyan-900/80 dark:from-purple-950/90 dark:via-blue-950/90 dark:to-cyan-950/90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
              >
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Ages 18-26 • Career Transition • Job Ready</span>
              </motion.div>

              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading leading-tight">
                  Transform Your Career with{' '}
                  <span className="block bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">
                    CodeKids_Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed">
                  Industry-ready programs with guaranteed internships and job placement assistance. Start your tech career today!
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  'Offline Classes: ₹15K (3 months), ₹30K (6 months), ₹50K (1 year)',
                  'Online Crash Courses: ₹1,500 (30 hrs) & ₹3,000 (60 hrs)',
                  '100% Placement Assistance + Internship Guaranteed',
                  'Portfolio, Resume, GitHub & LinkedIn Optimization Included',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-lg"
                  >
                    <CheckCircle className="h-6 w-6 text-[#2ED0FF] flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#online-pricing"
                  onClick={(e) => handleAnchorClick(e, '#online-pricing')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 active:scale-95 animate-pulse"
                >
                  View Pricing & Tracks
                  <ArrowDown className="h-5 w-5" />
                </Link>
                <Link
                  href="#contact-form"
                  onClick={(e) => handleAnchorClick(e, '#contact-form')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-200 active:scale-95"
                >
                  Book Free Consultation
                  <Calendar className="h-5 w-5" />
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-2 text-sm text-blue-200"
              >
                <Sparkles className="h-4 w-4 text-[#FF4B8F]" />
                <span>Limited seats available. Enroll now to secure your spot!</span>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Graduates learning tech skills"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute bottom-6 left-6 right-6 glass-card p-6 bg-white/20 backdrop-blur-xl border border-white/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="h-6 w-6 text-white" />
                    <h3 className="text-xl font-bold text-white">95% Success Rate</h3>
                  </div>
                  <p className="text-white/90 text-sm">1000+ Students Placed • 50+ Hiring Partners</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Intro Section */}
      <section id="pricing-intro" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white">
              Simple, Transparent & Affordable Pricing
            </h2>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              One pricing model for all CodeKids_Pro courses — applicable to any course you choose. 50% OFF launch pricing available now!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['50% OFF Launch Offer', 'Internship Guaranteed', '100% Placement Assistance', 'Portfolio & Resume Building'].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF4B8F]/20 via-[#7B3DFF]/20 to-[#2ED0FF]/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Online Courses Pricing Section */}
      <section id="online-pricing" className="relative py-20 z-10 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F1A30] via-[#050814] to-[#0F1A30]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaC0yVjBoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 animate-grid" />
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FF4B8F]/20 via-[#7B3DFF]/20 to-[#2ED0FF]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, -100, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#2ED0FF]/20 via-[#FF4B8F]/20 to-[#7B3DFF]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            {/* Online Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2ED0FF]/30 via-[#7B3DFF]/30 to-[#FF4B8F]/30 border-2 border-[#2ED0FF]/50 backdrop-blur-xl mb-6 shadow-2xl"
            >
              <Video className="h-5 w-5 text-[#2ED0FF] animate-pulse" />
              <span className="text-white font-bold text-sm md:text-base">100% Online Live Classes • Ages 18-26</span>
              <Video className="h-5 w-5 text-[#FF4B8F] animate-pulse" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading text-white">
              Online Course Pricing <span className="block mt-2 bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">(Ages 18-26)</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed font-medium">
              Comprehensive online programs designed to make you job-ready. Same pricing for all courses.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF4B8F]/30 via-[#7B3DFF]/30 to-[#2ED0FF]/30 border-2 border-white/40 text-white font-bold text-base md:text-lg shadow-2xl backdrop-blur-xl mb-8"
            >
              <Sparkles className="h-6 w-6 text-[#FFC857] animate-spin-slow" />
              <span>🎉 50% OFF Launch Offer - Limited Time Only! 🎉</span>
              <Sparkles className="h-6 w-6 text-[#FFC857] animate-spin-slow" />
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* 3 Months Course */}
            <motion.div
              {...fadeInLeft}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <GlassCard className="relative h-full bg-gradient-to-br from-[#2ED0FF]/15 via-[#2ED0FF]/8 to-[#2ED0FF]/15 border-2 border-[#2ED0FF]/40 p-8 hover:border-[#2ED0FF]/70 hover:shadow-2xl hover:shadow-[#2ED0FF]/30 transition-all duration-500 overflow-hidden">
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#2ED0FF]/10 via-[#7B3DFF]/10 to-[#2ED0FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 0.5,
                  }}
                />

                {/* Discount Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -top-3 -right-3 z-20"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2ED0FF] to-[#7B3DFF] rounded-full blur-lg opacity-75 animate-pulse" />
                    <div className="relative px-5 py-2 rounded-full bg-gradient-to-r from-[#2ED0FF] to-[#7B3DFF] text-white text-sm font-bold shadow-2xl border-2 border-white/30">
                      50% OFF
                    </div>
                  </div>
                </motion.div>

                {/* Online Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#2ED0FF]/20 border border-[#2ED0FF]/50 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <Video className="h-3 w-3 text-[#2ED0FF]" />
                    <span className="text-[#2ED0FF] text-xs font-semibold">Online</span>
                  </div>
                </div>

                <div className="relative z-10 mb-6 mt-12">
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white group-hover:text-[#2ED0FF] transition-colors">3 Months Program</h3>
                  <p className="text-white/80 text-sm mb-6 font-medium">Perfect for getting started quickly</p>
                  
                  {/* Original Price */}
                  <div className="mb-3 p-3 rounded-lg bg-white/10 border border-white/20">
                    <p className="text-white/70 text-xs mb-1 font-medium">Original Price:</p>
                    <p className="text-xl text-white/60 line-through font-semibold">₹30,000</p>
                  </div>
                  
                  {/* Discount Badge */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mb-4 px-4 py-3 rounded-lg bg-gradient-to-r from-[#FF4B8F]/30 via-[#FFC857]/30 to-[#7B3DFF]/30 border-2 border-[#FFC857]/50 shadow-lg"
                  >
                    <p className="text-[#FFC857] text-sm font-bold mb-1 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      50% OFF - Limited Time Offer!
                    </p>
                    <p className="text-white text-xs font-semibold">Save ₹15,000 - Course provided at ₹15,000</p>
                  </motion.div>
                  
                  {/* Final Price */}
                  <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-[#2ED0FF]/20 to-[#7B3DFF]/20 border-2 border-[#2ED0FF]/40">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-5xl font-extrabold text-white drop-shadow-lg">₹15,000</span>
                    </div>
                    <p className="text-[#2ED0FF] text-sm font-bold mb-1 drop-shadow-md">Final Price After 50% Discount</p>
                    <p className="text-white/90 text-xs font-medium">per course • All CodeKids_Pro courses</p>
                  </div>
                </div>

                <ul className="relative z-10 space-y-3 mb-8">
                  {['Live Online Classes', 'Course Completion Certificate', 'Internship Certificate', '10+ Real-World Projects', 'Placement Assistance', 'Resume & Portfolio Building'].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 text-white/90 text-sm font-medium group-hover:text-white transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 text-[#2ED0FF] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href="#contact-form"
                  onClick={(e) => handleAnchorClick(e, '#contact-form')}
                  className="relative z-10 block w-full py-4 rounded-full bg-gradient-to-r from-[#2ED0FF] via-[#7B3DFF] to-[#2ED0FF] text-white font-bold text-center hover:shadow-2xl hover:shadow-[#2ED0FF]/50 transition-all duration-200 group-hover:scale-105 overflow-hidden active:scale-95"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#2ED0FF] via-[#7B3DFF] to-[#2ED0FF] opacity-0 group-hover:opacity-100"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Enroll Now - ₹15,000
                    <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </GlassCard>
            </motion.div>

            {/* 6 Months Course */}
            <motion.div
              {...fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              {/* Popular Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 z-30"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFC857] to-[#FF4B8F] rounded-full blur-xl opacity-75 animate-pulse" />
                  <div className="relative px-6 py-2 rounded-full bg-gradient-to-r from-[#FFC857] via-[#FF4B8F] to-[#7B3DFF] text-white text-xs font-bold shadow-2xl border-2 border-white/40">
                    ⭐ MOST POPULAR ⭐
                  </div>
                </div>
              </motion.div>

              <GlassCard className="relative h-full bg-gradient-to-br from-[#FF4B8F]/15 via-[#7B3DFF]/15 to-[#FF4B8F]/15 border-2 border-[#FF4B8F]/50 p-8 hover:border-[#FF4B8F]/80 hover:shadow-2xl hover:shadow-[#FF4B8F]/40 transition-all duration-500 overflow-hidden mt-6">
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FF4B8F]/10 via-[#7B3DFF]/10 to-[#FF4B8F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 0.5,
                  }}
                />

                {/* Best Value Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="absolute top-4 right-4 z-20"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF4B8F] to-[#7B3DFF] rounded-full blur-lg opacity-75 animate-pulse" />
                    <div className="relative px-4 py-2 rounded-full bg-gradient-to-r from-[#FF4B8F] to-[#7B3DFF] text-white text-xs font-bold shadow-2xl border-2 border-white/30">
                      BEST VALUE
                    </div>
                  </div>
                </motion.div>

                {/* Online Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FF4B8F]/20 border border-[#FF4B8F]/50 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <Video className="h-3 w-3 text-[#FF4B8F]" />
                    <span className="text-[#FF4B8F] text-xs font-semibold">Online</span>
                  </div>
                </div>

                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white group-hover:text-[#FF4B8F] transition-colors">6 Months Program</h3>
                  <p className="text-white/80 text-sm mb-6 font-medium">Most popular choice</p>
                  
                  {/* Original Price */}
                  <div className="mb-3 p-3 rounded-lg bg-white/10 border border-white/20">
                    <p className="text-white/70 text-xs mb-1 font-medium">Original Price:</p>
                    <p className="text-xl text-white/60 line-through font-semibold">₹60,000</p>
                  </div>
                  
                  {/* Discount Badge */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mb-4 px-4 py-3 rounded-lg bg-gradient-to-r from-[#FF4B8F]/30 via-[#FFC857]/30 to-[#7B3DFF]/30 border-2 border-[#FFC857]/50 shadow-lg"
                  >
                    <p className="text-[#FFC857] text-sm font-bold mb-1 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      50% OFF - Save ₹30,000!
                    </p>
                    <p className="text-white text-xs font-semibold">Course provided at discounted price</p>
                  </motion.div>
                  
                  {/* Final Price */}
                  <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-[#FF4B8F]/20 to-[#7B3DFF]/20 border-2 border-[#FF4B8F]/50">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-5xl font-extrabold text-white drop-shadow-lg">₹30,000</span>
                    </div>
                    <p className="text-[#FF4B8F] text-sm font-bold mb-1 drop-shadow-md">Final Price After 50% Discount</p>
                    <p className="text-white/90 text-xs font-medium">per course • All CodeKids_Pro courses</p>
                  </div>
                </div>

                <ul className="relative z-10 space-y-3 mb-8">
                  {['Everything in 3 months', 'Extended Industrial Training', '20+ Real-World Projects', 'Advanced Portfolio Building', 'GitHub & LinkedIn Optimization', 'Mock Interviews & Placement Prep', '1:1 Mentorship Sessions'].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 text-white/90 text-sm font-medium group-hover:text-white transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 text-[#FF4B8F] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href="#contact-form"
                  className="relative z-10 block w-full py-4 rounded-full bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] text-white font-bold text-center hover:shadow-2xl hover:shadow-[#FF4B8F]/50 transition-all group-hover:scale-105 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] opacity-0 group-hover:opacity-100"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Enroll Now - ₹30,000
                    <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </GlassCard>
            </motion.div>

            {/* 1 Year Course */}
            <motion.div
              {...fadeInRight}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <GlassCard className="relative h-full bg-gradient-to-br from-[#7B3DFF]/15 via-[#2ED0FF]/15 to-[#7B3DFF]/15 border-2 border-[#7B3DFF]/50 p-8 hover:border-[#7B3DFF]/80 hover:shadow-2xl hover:shadow-[#7B3DFF]/40 transition-all duration-500 overflow-hidden">
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#7B3DFF]/10 via-[#2ED0FF]/10 to-[#7B3DFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 0.5,
                  }}
                />

                {/* Comprehensive Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute top-4 right-4 z-20"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7B3DFF] to-[#2ED0FF] rounded-full blur-lg opacity-75 animate-pulse" />
                    <div className="relative px-4 py-2 rounded-full bg-gradient-to-r from-[#7B3DFF] to-[#2ED0FF] text-white text-xs font-bold shadow-2xl border-2 border-white/30">
                      COMPREHENSIVE
                    </div>
                  </div>
                </motion.div>

                {/* Online Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#7B3DFF]/20 border border-[#7B3DFF]/50 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <Video className="h-3 w-3 text-[#7B3DFF]" />
                    <span className="text-[#7B3DFF] text-xs font-semibold">Online</span>
                  </div>
                </div>

                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white group-hover:text-[#7B3DFF] transition-colors">1 Year Program</h3>
                  <p className="text-white/80 text-sm mb-6 font-medium">Complete career transformation</p>
                  
                  {/* Original Price */}
                  <div className="mb-3 p-3 rounded-lg bg-white/10 border border-white/20">
                    <p className="text-white/70 text-xs mb-1 font-medium">Original Price:</p>
                    <p className="text-xl text-white/60 line-through font-semibold">₹1,00,000</p>
                  </div>
                  
                  {/* Discount Badge */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mb-4 px-4 py-3 rounded-lg bg-gradient-to-r from-[#FF4B8F]/30 via-[#FFC857]/30 to-[#7B3DFF]/30 border-2 border-[#FFC857]/50 shadow-lg"
                  >
                    <p className="text-[#FFC857] text-sm font-bold mb-1 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      50% OFF - Save ₹50,000!
                    </p>
                    <p className="text-white text-xs font-semibold">Course provided at discounted price</p>
                  </motion.div>
                  
                  {/* Final Price */}
                  <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-[#7B3DFF]/20 to-[#2ED0FF]/20 border-2 border-[#7B3DFF]/50">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-5xl font-extrabold text-white drop-shadow-lg">₹50,000</span>
                    </div>
                    <p className="text-[#7B3DFF] text-sm font-bold mb-1">Final Price After 50% Discount</p>
                    <p className="text-blue-200 text-xs">per course • All CodeKids_Pro courses</p>
                  </div>
                </div>

                <ul className="relative z-10 space-y-3 mb-8">
                  {['Everything in 6 months', '30+ Real-World Projects', 'Paid Internship Opportunity', 'Guaranteed Job Placement', 'Advanced Certifications', 'Freelancing Setup & Support', 'Lifetime Career Support'].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 text-white/90 text-sm font-medium group-hover:text-white transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 text-[#7B3DFF] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href="#contact-form"
                  className="relative z-10 block w-full py-4 rounded-full bg-gradient-to-r from-[#7B3DFF] via-[#2ED0FF] to-[#FF4B8F] text-white font-bold text-center hover:shadow-2xl hover:shadow-[#7B3DFF]/50 transition-all group-hover:scale-105 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#7B3DFF] via-[#2ED0FF] to-[#FF4B8F] opacity-0 group-hover:opacity-100"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Enroll Now - ₹50,000
                    <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center space-y-4">
            <GlassCard className="bg-gradient-to-r from-[#2ED0FF]/10 via-[#7B3DFF]/10 to-[#FF4B8F]/10 border-2 border-white/20 p-6 backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white/90">
                <Info className="h-6 w-6 text-[#2ED0FF] flex-shrink-0" />
                <p className="text-sm md:text-base font-medium">
                  <span className="font-bold text-white">100% Online Live Classes</span> for ages 18-26. Pricing applies to all CodeKids_Pro courses. 50% discount valid for limited time. EMI options available with 0% interest.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Online Crash Courses Pricing Section */}
      <section id="crash-course-pricing" className="relative py-20 z-10 bg-gradient-to-br from-[#050814] to-[#0F1A30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">
              Online Crash Course <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-white/90 mb-6 font-medium">
              Fast-track programs for quick skill development. All courses are 100% online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {/* 30 Hours Crash Course */}
            <motion.div {...fadeInLeft}>
              <GlassCard className="relative h-full bg-gradient-to-br from-[#2ED0FF]/20 via-[#2ED0FF]/10 to-[#2ED0FF]/20 border-2 border-[#2ED0FF]/40 p-8 hover:scale-105 transition-transform duration-300 group">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#2ED0FF] to-[#7B3DFF] text-white text-xs font-semibold">
                  50% OFF
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">30 Hours Crash Course</h3>
                  <p className="text-white/80 text-sm mb-4 font-medium">2 hours/day • Complete in 15 days</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-white">₹1,500</span>
                    <span className="text-lg text-white/50 line-through font-semibold">₹3,000</span>
                  </div>
                  <p className="text-white/90 text-sm mb-4 font-semibold">50% OFF - Save ₹1,500!</p>
                  <p className="text-white/80 text-xs font-medium">per course</p>
                </div>

                <ul className="space-y-2 mb-8">
                  {['Live Online Classes (2 hrs/day)', 'Course Completion Certificate', 'Real-World Projects', 'Recorded Sessions', 'Doubt Clearing Sessions', 'GitHub Portfolio Setup'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/90 text-sm font-medium">
                      <CheckCircle className="h-4 w-4 text-[#2ED0FF] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact-form"
                  onClick={(e) => handleAnchorClick(e, '#contact-form')}
                  className="block w-full py-4 rounded-full bg-gradient-to-r from-[#2ED0FF] to-[#7B3DFF] text-white font-semibold text-center hover:shadow-xl hover:shadow-[#2ED0FF]/50 transition-all duration-200 group-hover:scale-105 active:scale-95"
                >
                  Enroll Now - ₹1,500
                </Link>
              </GlassCard>
            </motion.div>

            {/* 60 Hours Crash Course */}
            <motion.div {...fadeInRight}>
              <GlassCard className="relative h-full bg-gradient-to-br from-[#FF4B8F]/20 via-[#7B3DFF]/20 to-[#FF4B8F]/20 border-2 border-[#FF4B8F]/40 p-8 hover:scale-105 transition-transform duration-300 group">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF4B8F] to-[#2ED0FF] text-white text-xs font-semibold">
                  50% OFF
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">60 Hours Crash Course</h3>
                  <p className="text-white/80 text-sm mb-4 font-medium">2 hours/day • Complete in 30 days</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-white">₹3,000</span>
                    <span className="text-lg text-white/50 line-through font-semibold">₹6,000</span>
                  </div>
                  <p className="text-white/90 text-sm mb-4 font-semibold">50% OFF - Save ₹3,000!</p>
                  <p className="text-white/80 text-xs font-medium">per course</p>
                </div>

                <ul className="space-y-2 mb-8">
                  {['Everything in 30 hours course', 'Internship Certificate', '10+ Real-World Projects', 'Resume Building & Optimization', 'LinkedIn Profile Optimization', 'Interview Preparation', 'Placement Assistance'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-blue-200 text-sm">
                      <CheckCircle className="h-4 w-4 text-[#FF4B8F] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact-form"
                  onClick={(e) => handleAnchorClick(e, '#contact-form')}
                  className="block w-full py-4 rounded-full bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] text-white font-semibold text-center hover:shadow-xl hover:shadow-[#FF4B8F]/50 transition-all duration-200 group-hover:scale-105 active:scale-95"
                >
                  Enroll Now - ₹3,000
                </Link>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <GlassCard className="bg-gradient-to-r from-[#2ED0FF]/10 via-[#7B3DFF]/10 to-[#FF4B8F]/10 border-2 border-white/20 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-center gap-4 text-white/90">
                <Info className="h-5 w-5 text-[#2ED0FF] flex-shrink-0" />
                <p className="text-sm font-medium">All crash courses are 100% online. Pricing applies to any CodeKids_Pro course. 50% discount valid for limited time.</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Value Section */}
      <section id="value-section" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-white/90 font-medium">
              All included in your course fee — no hidden charges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center p-6 hover:scale-105 transition-transform">
                  <feature.icon className="h-12 w-12 text-[#2ED0FF] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 font-heading text-white">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed font-medium">{feature.text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">
              Success Stories from Our Alumni
            </h2>
            <p className="text-xl text-white/90 font-medium">
              Real people, real results — see how CodeKids_Pro transformed their careers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <GlassCard className="h-full p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-white/80 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#FFC857] fill-[#FFC857]" />
                    ))}
                  </div>
                  <p className="text-white/90 italic leading-relaxed font-medium">"{testimonial.text}"</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Link
              href="#contact-form"
              onClick={(e) => handleAnchorClick(e, '#contact-form')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 active:scale-95"
            >
              Start Your Career Journey
              <Rocket className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio & Resume Examples Section */}
      <section id="portfolio-examples" className="relative py-20 z-10 bg-gradient-to-br from-[#050814] to-[#0F1A30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">
              Portfolio, Resume & Profile <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Optimization</span>
            </h2>
            <p className="text-xl text-white/90 mb-6 font-medium">
              Get professional portfolio website, optimized resume, GitHub & LinkedIn profiles — all included!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Portfolio Website */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <GlassCard className="h-full p-6 hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-[#2ED0FF]/50">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#2ED0FF]/20 to-[#7B3DFF]/20">
                  <Image
                    src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Portfolio Website Example"
                    fill
                    className="object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="h-16 w-16 text-[#2ED0FF] opacity-80" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Portfolio Website</h3>
                <p className="text-white/90 text-sm mb-4 font-medium">Personal portfolio website showcasing your projects and skills</p>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-[#2ED0FF]" />
                    <span>Custom domain included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-[#2ED0FF]" />
                    <span>Mobile responsive design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-[#2ED0FF]" />
                    <span>SEO optimized</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            {/* Resume Templates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <GlassCard className="h-full p-6 hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-[#FF4B8F]/50">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#FF4B8F]/20 to-[#7B3DFF]/20">
                  <Image
                    src="https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Resume Template Example"
                    fill
                    className="object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-[#FF4B8F] opacity-80" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Resume Templates</h3>
                <p className="text-blue-200 text-sm mb-4">Professional ATS-friendly resume templates</p>
                <ul className="space-y-2 text-xs text-blue-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-[#FF4B8F]" />
                    <span>Multiple design options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-[#FF4B8F]" />
                    <span>ATS optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-[#FF4B8F]" />
                    <span>Industry-specific formats</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            {/* GitHub Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <GlassCard className="h-full p-6 hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-[#7B3DFF]/50">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#7B3DFF]/20 to-[#2ED0FF]/20">
                  <Image
                    src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="GitHub Profile Optimization"
                    fill
                    className="object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GitBranch className="h-16 w-16 text-[#7B3DFF] opacity-80" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading text-white">GitHub Optimization</h3>
                <p className="text-blue-200 text-sm mb-4">Optimized GitHub profile & portfolio showcase</p>
                <ul className="space-y-2 text-xs text-blue-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-[#7B3DFF]" />
                    <span>Profile README creation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-[#7B3DFF]" />
                    <span>Project showcase setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-[#7B3DFF]" />
                    <span>Contribution graph optimization</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            {/* LinkedIn Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <GlassCard className="h-full p-6 hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-[#2ED0FF]/50">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#2ED0FF]/20 to-[#FF4B8F]/20">
                  <Image
                    src="https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="LinkedIn Profile Optimization"
                    fill
                    className="object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Linkedin className="h-16 w-16 text-[#2ED0FF] opacity-80" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading text-white">LinkedIn Optimization</h3>
                <p className="text-blue-200 text-sm mb-4">Professional LinkedIn profile optimization</p>
                <ul className="space-y-2 text-xs text-blue-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-[#2ED0FF]" />
                    <span>Headline & summary optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-[#2ED0FF]" />
                    <span>Skills & endorsements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-[#2ED0FF]" />
                    <span>Network building strategies</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <GlassCard className="p-8 bg-gradient-to-r from-[#FF4B8F]/10 via-[#7B3DFF]/10 to-[#2ED0FF]/10 border-2 border-white/20">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <Code className="h-12 w-12 text-[#2ED0FF] mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">Portfolio Creation</h4>
                  <p className="text-white/90 text-sm font-medium">Personal website showcasing your projects</p>
                </div>
                <div className="text-center">
                  <FileText className="h-12 w-12 text-[#FF4B8F] mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">Resume Building</h4>
                  <p className="text-white/90 text-sm font-medium">Professional templates & optimization</p>
                </div>
                <div className="text-center">
                  <Target className="h-12 w-12 text-[#7B3DFF] mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">Profile Optimization</h4>
                  <p className="text-white/90 text-sm font-medium">GitHub & LinkedIn profile enhancement</p>
                </div>
              </div>
              <p className="text-white/90 mt-6 text-sm font-medium">
                All included in your course fee — we help you build a complete professional presence online!
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-2 border-white/20 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-[#2ED0FF]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/90 leading-relaxed font-medium">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="relative py-20 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <GlassCard className="bg-gradient-to-br from-[#FF4B8F]/20 via-[#7B3DFF]/20 to-[#2ED0FF]/20 border-2 border-[#FF4B8F]/40 p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">
                  Get Detailed Information & Enrollment
                </h2>
                <p className="text-xl text-white/90 font-medium">
                  Book a free consultation with our career advisor to choose the right track for you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2ED0FF]"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2ED0FF]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2ED0FF]"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Select Track *</label>
                    <select
                      name="track"
                      required
                      value={formData.track}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#2ED0FF]"
                    >
                      <option value="">Select a track</option>
                      {tracks.map((track, index) => (
                        <option key={index} value={track.name}>{track.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Experience Level</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#2ED0FF]"
                    >
                      <option value="">Select experience level</option>
                      <option value="fresher">Fresher</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2ED0FF]"
                      placeholder="Enter your city"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message / Questions</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#2ED0FF] resize-none"
                    placeholder="Tell us about your career goals and questions..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 active:scale-95"
                  >
                    Request Call & Detailed Info
                    <Phone className="h-5 w-5" />
                  </button>
                  <Link
                    href="/contact?type=demo"
                    prefetch={true}
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-200 active:scale-95"
                  >
                    Book Free Consultation
                    <Video className="h-5 w-5" />
                  </Link>
                </div>

                <p className="text-center text-white/90 text-sm font-medium">
                  Response within 24 hours. Our career advisor will help you choose the right track and answer all your questions.
                </p>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

