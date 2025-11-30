'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Rocket, Sparkles, Trophy, Users, BookOpen, Lightbulb, Star, 
  Code, Brain, Zap, Cpu, CheckCircle, Award,
  ArrowRight, TrendingUp, Shield, Heart, Clock, Building2, GraduationCap,
  PlayCircle, Target, Laptop, Briefcase, MessageSquare, Globe, Network,
  Handshake
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const programs = [
  {
    title: 'CodeKids Jr',
    description: 'Offline school programs for ages 6-17. Robotics, coding, and STEM camps with hands-on learning experiences.',
    icon: Rocket,
    color: 'from-pink-500 to-rose-500',
    href: '/codekids-jr',
    features: ['100+ Partner Schools', 'Hands-on Learning', 'Age 6-17', 'Offline Programs'],
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageDescription: 'Students learning robotics and coding',
    badge: 'For Schools',
  },
  {
    title: 'CodeKids Pro',
    description: 'Online courses for graduates. Job-ready skills with placement assistance and industry projects.',
    icon: GraduationCap,
    color: 'from-purple-500 to-indigo-500',
    href: '/codekids-pro',
    features: ['95% Success Rate', 'Industry Projects', 'Job Placement', 'Online Learning'],
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageDescription: 'Professional coding and development training',
    badge: 'For Graduates',
  },
];

const features = [
  { icon: Users, title: '1,250+ Students', description: 'Trusted by students across India', color: 'from-green-500 to-emerald-500' },
  { icon: Star, title: '4.9/5 Rating', description: 'Highly satisfied parents and schools', color: 'from-yellow-500 to-orange-500' },
  { icon: Building2, title: '20+ Schools', description: 'Partnered with leading institutions', color: 'from-blue-500 to-cyan-500' },
  { icon: Trophy, title: '500+ Awards', description: 'Recognized excellence in education', color: 'from-purple-500 to-pink-500' },
];

const keyFeatures = [
  { icon: Rocket, title: 'Hands-On Learning', description: 'Practical projects and real-world applications' },
  { icon: Code, title: 'Expert Instructors', description: 'Industry professionals and certified teachers' },
  { icon: Brain, title: 'Innovative Curriculum', description: 'Cutting-edge content aligned with industry needs' },
  { icon: Zap, title: 'Career Support', description: 'Placement assistance and career guidance' },
];

export default function CodeKidsPage() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Component initialization
    } catch (err) {
      console.error('Error in CodeKidsPage:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  }, []);

  // Error boundary fallback
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Page</h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-cyan-900/80 dark:from-purple-950/90 dark:via-blue-950/90 dark:to-cyan-950/90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

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

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight">
                CodeKids{' '}
                <span className="block bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                Empowering the next generation with cutting-edge technology education. From school to career, we build innovators.
              </p>
              <p className="text-lg md:text-xl text-white/80 mb-10 font-semibold italic">
                We don&apos;t just teach technology – we build innovators.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#programs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-purple-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Explore Our Programs
                  <PlayCircle className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-900 transition-all"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators / Statistics */}
      <section className="py-16 bg-gradient-to-b from-transparent to-secondary/20 relative overflow-hidden">
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
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section id="programs" className="py-20">
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
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground z-10">
                      {program.badge}
                    </div>
                    
                    {/* Floating Icon */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-8 left-8 h-20 w-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/30 z-10"
                    >
                      <program.icon className="h-10 w-10 text-white" />
                    </motion.div>

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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 relative overflow-hidden">
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
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-900 transition-all"
              >
                View Programs
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

