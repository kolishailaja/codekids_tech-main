'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Trophy, Calendar, Award, Users, Zap, Target, Star, Rocket, 
  ChevronLeft, ChevronRight, Clock, MapPin, DollarSign, PlayCircle,
  Code, Brain, Shield, TrendingUp, ArrowRight, CheckCircle
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const heroCarousel = [
  {
    title: 'National Coding Olympiad',
    description: 'Compete with the best coders from across India',
    image: 'https://images.pexels.com/photos/8923123/pexels-photo-8923123.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Robotics Championship',
    description: 'Build and compete with your robotic creations',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Tech Expo & Innovation Fair',
    description: 'Showcase your innovative projects to the world',
    image: 'https://images.pexels.com/photos/8438983/pexels-photo-8438983.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'AI Hackathon',
    description: 'Build AI solutions for real-world problems',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

const competitions = [
  {
    title: 'National Coding Olympiad',
    type: 'Competition',
    date: 'March 15, 2024',
    location: 'Online + 20 Cities',
    prize: '₹5,00,000',
    image: 'https://images.pexels.com/photos/8923123/pexels-photo-8923123.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Annual coding competition for students across India. Solve algorithmic challenges and showcase your coding skills.',
    skills: ['Algorithms', 'Data Structures', 'Problem Solving'],
    participants: '5000+',
    registration: 'Open',
  },
  {
    title: 'Robotics Championship',
    type: 'Competition',
    date: 'April 20, 2024',
    location: 'Delhi, Mumbai, Bangalore',
    prize: '₹3,00,000',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Build and compete with autonomous robots. Multiple categories for different age groups.',
    skills: ['Robotics', 'Programming', 'Electronics'],
    participants: '2000+',
    registration: 'Open',
  },
  {
    title: 'AI Innovation Challenge',
    type: 'Hackathon',
    date: 'May 10-12, 2024',
    location: 'Hyderabad',
    prize: '₹7,00,000',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '48-hour hackathon to build AI solutions for social and business problems.',
    skills: ['AI/ML', 'Python', 'Innovation'],
    participants: '1000+',
    registration: 'Open',
  },
  {
    title: 'Drone Racing Championship',
    type: 'Competition',
    date: 'June 5, 2024',
    location: 'Mumbai',
    prize: '₹2,00,000',
    image: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Test your drone programming and piloting skills in obstacle courses.',
    skills: ['Drone Control', 'Programming', 'Navigation'],
    participants: '800+',
    registration: 'Open',
  },
];

const hackathons = [
  {
    title: 'CodeKids AI Hackathon 2024',
    theme: 'AI for Education',
    date: 'May 10-12, 2024',
    duration: '48 Hours',
    location: 'Hyderabad',
    prize: '₹7,00,000',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Build AI-powered solutions to transform education and learning experiences.',
    tracks: ['EdTech', 'Personalized Learning', 'Assessment Tools'],
    participants: '500+',
  },
  {
    title: 'Tech Startups Hackathon',
    theme: 'Build for Impact',
    date: 'July 15-17, 2024',
    duration: '48 Hours',
    location: 'Bangalore',
    prize: '₹10,00,000',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Create startup-ready products and pitch to investors.',
    tracks: ['FinTech', 'HealthTech', 'Social Impact'],
    participants: '1000+',
  },
  {
    title: 'Cybersecurity Challenge',
    theme: 'Secure the Future',
    date: 'August 20-22, 2024',
    duration: '72 Hours',
    location: 'Delhi',
    prize: '₹5,00,000',
    image: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Protect systems and find vulnerabilities. Real-world cybersecurity challenges.',
    tracks: ['Ethical Hacking', 'Security Auditing', 'Incident Response'],
    participants: '600+',
  },
];

const upcomingEvents = [
  {
    title: 'Tech Expo 2024',
    date: 'March 25, 2024',
    location: 'Mumbai',
    image: 'https://images.pexels.com/photos/8438983/pexels-photo-8438983.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Annual showcase of student projects, innovations, and achievements.',
    type: 'Exhibition',
  },
  {
    title: 'Industry Mentorship Day',
    date: 'April 10, 2024',
    location: 'Online',
    image: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'One-on-one sessions with industry experts and career guidance.',
    type: 'Workshop',
  },
  {
    title: 'Innovation Summit',
    date: 'May 30, 2024',
    location: 'Delhi',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Keynote speeches, panel discussions, and networking opportunities.',
    type: 'Conference',
  },
];

export default function EventsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroCarousel.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-[90vh] min-h-[700px] overflow-hidden pt-20 md:pt-0">
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
              style={{ backgroundImage: `url(${heroCarousel[currentSlide].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-blue-900/85 to-pink-900/85 dark:from-purple-950/90 dark:via-blue-950/90 dark:to-pink-950/90" />
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
                <Trophy className="h-4 w-4" />
                <span className="text-sm font-medium">Competitions & Events</span>
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
                    Events &{' '}
                    <span className="block bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                      Competitions
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                    {heroCarousel[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-purple-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  <Trophy className="h-5 w-5" />
                  Register Now
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-900 transition-all">
                  <PlayCircle className="h-5 w-5" />
                  View Schedule
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroCarousel.length) % heroCarousel.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroCarousel.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroCarousel.map((_, index) => (
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

      {/* Competitions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
              Upcoming <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Competitions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Test your skills, win prizes, and showcase your talent
            </p>
          </motion.div>

          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {competitions.map((competition, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group h-full"
                  >
                    <GlassCard className="overflow-hidden h-full hover:scale-105 transition-transform duration-300">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={competition.image}
                          alt={competition.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold">
                          {competition.type}
                        </div>
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
                          {competition.registration}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-xl font-bold font-heading mb-1">{competition.title}</h3>
                          <p className="text-sm text-white/90 flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            Prize: {competition.prize}
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {competition.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {competition.location}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{competition.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {competition.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {competition.participants}
                          </span>
                        </div>
                        <button className="w-full py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold hover:from-primary/20 hover:to-accent/20 transition-all">
                          Register Now
                        </button>
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

      {/* Hackathons Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
              <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Hackathons</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build innovative solutions in 48-72 hours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <GlassCard className="overflow-hidden h-full hover:scale-105 transition-transform duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={hackathon.image}
                      alt={hackathon.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-500/90 text-white text-xs font-semibold">
                      Hackathon
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold font-heading mb-1">{hackathon.title}</h3>
                      <p className="text-sm text-white/90">{hackathon.theme}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {hackathon.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {hackathon.prize}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{hackathon.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hackathon.tracks.map((track, i) => (
                        <span key={i} className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                          {track}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {hackathon.participants} Participants
                      </span>
                    </div>
                    <button className="w-full py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold hover:from-primary/20 hover:to-accent/20 transition-all">
                      Join Hackathon
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
              Other <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Workshops, exhibitions, and networking opportunities
            </p>
          </motion.div>

          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {upcomingEvents.map((event, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group h-full"
                  >
                    <GlassCard className="overflow-hidden h-full hover:scale-105 transition-transform duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500/90 text-white text-xs font-semibold">
                          {event.type}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-xl font-bold font-heading mb-1">{event.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{event.description}</p>
                        <button className="w-full py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold hover:from-primary/20 hover:to-accent/20 transition-all">
                          Learn More
                        </button>
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
    </div>
  );
}
