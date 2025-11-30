'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, Star, Shield, TrendingUp, Brain, Users, CheckCircle, Award,
  BookOpen, Target, Zap, Rocket, ArrowRight, PlayCircle, ChevronLeft, ChevronRight,
  Lock, Clock, GraduationCap, Calendar, MapPin, Phone, Mail
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const heroCarousel = [
  {
    title: 'Build Confidence & Skills',
    description: 'Watch your child grow through hands-on learning',
    image: 'https://images.pexels.com/photos/8613094/pexels-photo-8613094.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Future-Ready Education',
    description: 'Prepare for careers that don\'t exist yet',
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Safe Learning Environment',
    description: 'Trained instructors and proper supervision',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Track Progress',
    description: 'Regular updates on your child\'s development',
    image: 'https://images.pexels.com/photos/8438983/pexels-photo-8438983.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

const benefits = [
  { 
    icon: Star, 
    title: 'Build Confidence', 
    description: 'Watch your child grow through hands-on learning and project-based activities that boost self-esteem.',
    image: 'https://images.pexels.com/photos/8613094/pexels-photo-8613094.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-yellow-500 to-orange-500',
  },
  { 
    icon: Brain, 
    title: 'Future Skills', 
    description: 'Prepare for careers that don\'t exist yet with cutting-edge STEM education.',
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500 to-cyan-500',
  },
  { 
    icon: Shield, 
    title: 'Safe Environment', 
    description: 'Trained instructors and proper supervision ensure your child\'s safety at all times.',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500 to-emerald-500',
  },
  { 
    icon: TrendingUp, 
    title: 'Track Progress', 
    description: 'Regular updates and detailed reports on your child\'s development and achievements.',
    image: 'https://images.pexels.com/photos/8438983/pexels-photo-8438983.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    title: 'Achievement Recognition',
    description: 'Certificates, badges, and recognition for milestones and accomplishments.',
    image: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a community of parents and students passionate about STEM education.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-pink-500 to-rose-500',
  },
];

const parentTestimonials = [
  {
    name: 'Mrs. Meera Kapoor',
    relation: 'Mother of Grade 7 student',
    text: 'My daughter has become more confident and curious about technology. CodeKids has truly transformed her interest in STEM. She now wants to pursue engineering!',
    rating: 5,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    child: 'Anika Kapoor',
    program: 'Robotics Club',
  },
  {
    name: 'Mr. Rajesh Kumar',
    relation: 'Father of Grade 9 student',
    text: 'Excellent program with hands-on learning. My son now spends his free time building projects instead of just playing games. Highly recommend!',
    rating: 5,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    child: 'Rohit Kumar',
    program: 'Coding Camp',
  },
  {
    name: 'Dr. Sunita Rao',
    relation: 'Mother of Grade 10 student',
    text: 'The robotics program has helped my daughter discover her passion. She now wants to pursue engineering and is excelling in her STEM subjects.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    child: 'Priya Rao',
    program: 'AI & ML Club',
  },
  {
    name: 'Mr. Vikram Singh',
    relation: 'Father of Grade 8 student',
    text: 'Best investment in my child\'s future. The instructors are patient, knowledgeable, and make learning fun. My son loves going to CodeKids!',
    rating: 5,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    child: 'Arjun Singh',
    program: 'Drone Tech Camp',
  },
];

const programs = [
  {
    title: 'CodeKids Jr - School Programs',
    description: 'Comprehensive STEM education integrated into school curriculum',
    features: ['Age-appropriate curriculum', 'In-school setup', 'Qualified instructors', 'Regular progress reports'],
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/codekids-jr',
  },
  {
    title: 'Seasonal Tech Camps',
    description: 'Intensive learning experiences during school breaks',
    features: ['2-week programs', 'Hands-on projects', 'Small group sizes', 'Take-home projects'],
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/codekids-jr',
  },
  {
    title: 'Year-Round Tech Clubs',
    description: 'Weekly sessions for continuous skill development',
    features: ['Weekly sessions', 'Project-based learning', 'Competition preparation', 'Portfolio building'],
    image: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/codekids-jr',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function ParentsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroCarousel.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
            <div className="absolute inset-0 bg-gradient-to-br from-pink-700/85 via-purple-700/85 to-blue-700/85 dark:from-pink-950/90 dark:via-purple-950/90 dark:to-blue-950/90" />
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
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium">For Parents</span>
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
                    For <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                      Parents
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                    {heroCarousel[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-purple-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  <Heart className="h-5 w-5" />
                  Schedule a Consultation
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-900 transition-all">
                  <PlayCircle className="h-5 w-5" />
                  Watch Parent Stories
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
              Why Parents <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Choose Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Give your child the skills they need to succeed in tomorrow&apos;s world
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <GlassCard className="overflow-hidden h-full hover:scale-105 transition-transform duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${benefit.color} opacity-70 group-hover:opacity-80 transition-opacity`} />
                    <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center absolute top-4 right-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <benefit.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 font-heading">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
              What <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Parents Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by parents across India
            </p>
          </motion.div>

          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {parentTestimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    <GlassCard className="h-full hover:scale-105 transition-transform duration-300">
                      <div className="relative h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="text-center mb-4">
                        <Heart className="h-8 w-8 mx-auto mb-2 text-primary" />
                      </div>
                      <div className="flex gap-1 justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic text-center leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                      <div className="border-t border-border pt-4 text-center">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.relation}</p>
                        <p className="text-xs text-primary mt-1">{testimonial.child} - {testimonial.program}</p>
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

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
              Our <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the program that best fits your child&apos;s needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <GlassCard className="overflow-hidden h-full hover:scale-105 transition-transform duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold font-heading mb-1">{program.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={program.link}
                      className="inline-flex items-center gap-2 w-full justify-center py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold hover:from-primary/20 hover:to-accent/20 transition-all"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
          >
            <GlassCard className="p-8 md:p-12 text-center">
              <Heart className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-4 font-heading">
                Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our team is here to help you understand our programs and answer any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+918008937902"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
                <a
                  href="mailto:codekidstech2025@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  <Mail className="h-5 w-5" />
                  Email Us
                </a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
