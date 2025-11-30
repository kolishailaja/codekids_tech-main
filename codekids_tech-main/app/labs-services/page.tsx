'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Cpu, Zap, Brain, Cog, Settings, Wrench, Users, GraduationCap,
  ChevronLeft, ChevronRight, Award, Target, CheckCircle, ArrowRight,
  Shield, BookOpen, Rocket, Code, TrendingUp, PlayCircle, Calendar
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const heroCarousel = [
  {
    title: 'Robotics Lab',
    description: 'Complete robotics setup with kits and equipment',
    image: 'https://images.pexels.com/photos/8438983/pexels-photo-8438983.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'AI & ML Lab',
    description: 'Advanced AI and machine learning facilities',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Drone Lab',
    description: 'Professional drone racing and programming setup',
    image: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Maker Space',
    description: '3D printers, IoT kits, and innovation space',
    image: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

const labs = [
  { 
    name: 'Robotics Lab', 
    icon: Cpu, 
    description: 'Complete robotics setup with kits and equipment for hands-on learning',
    image: 'https://images.pexels.com/photos/8438983/pexels-photo-8438983.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500 to-cyan-500',
    features: ['Arduino kits', 'Sensors & actuators', 'Mechanical parts', 'Programming software'],
    equipment: ['Arduino boards', 'Motors & servos', 'Sensors', '3D printed parts'],
  },
  { 
    name: 'AI & ML Lab', 
    icon: Brain, 
    description: 'Advanced AI and machine learning facilities for data science projects',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-500 to-pink-500',
    features: ['GPU workstations', 'ML frameworks', 'Datasets', 'Cloud access'],
    equipment: ['NVIDIA GPUs', 'Python tools', 'Jupyter notebooks', 'Cloud platforms'],
  },
  { 
    name: 'Drone Lab', 
    icon: Zap, 
    description: 'Professional drone racing and programming setup with obstacle courses',
    image: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-cyan-500 to-blue-500',
    features: ['Racing drones', 'Programming tools', 'Obstacle courses', 'Flight simulators'],
    equipment: ['Quadcopters', 'Flight controllers', 'Cameras', 'FPV goggles'],
  },
  { 
    name: 'Maker Space', 
    icon: Cog, 
    description: '3D printers, IoT kits, and innovation space for creative projects',
    image: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500 to-emerald-500',
    features: ['3D printers', 'IoT kits', 'Electronics', 'Prototyping tools'],
    equipment: ['3D printers', 'Raspberry Pi', 'Arduino IoT', 'Soldering stations'],
  },
  {
    name: 'Coding Lab',
    icon: Code,
    description: 'Modern development environment with latest tools and frameworks',
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-indigo-500 to-purple-500',
    features: ['Laptops & workstations', 'IDE software', 'Version control', 'Cloud tools'],
    equipment: ['Development PCs', 'IDEs', 'Git repositories', 'Cloud access'],
  },
  {
    name: 'Electronics Lab',
    icon: Settings,
    description: 'Complete electronics testing and prototyping facility',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-orange-500 to-red-500',
    features: ['Oscilloscopes', 'Multimeters', 'Power supplies', 'Component library'],
    equipment: ['Test equipment', 'Soldering tools', 'Breadboards', 'Components'],
  },
];

const services = [
  {
    title: 'Lab Setup & Installation',
    description: 'Complete STEM lab setup with all equipment and infrastructure',
    icon: Wrench,
    image: 'https://images.pexels.com/photos/8438983/pexels-photo-8438983.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Equipment procurement', 'Installation & setup', 'Safety protocols', 'Training support'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Teacher Training',
    description: 'Comprehensive training programs for educators to teach STEM effectively',
    icon: GraduationCap,
    image: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Workshop sessions', 'Curriculum training', 'Hands-on practice', 'Ongoing support'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Curriculum Development',
    description: 'Customized curriculum aligned with school requirements and standards',
    icon: BookOpen,
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Age-appropriate content', 'Grade-wise modules', 'Assessment tools', 'Progress tracking'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Maintenance & Support',
    description: 'Regular maintenance and technical support for all lab equipment',
    icon: Shield,
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Regular servicing', 'Repair & replacement', 'Technical support', 'Software updates'],
    color: 'from-orange-500 to-red-500',
  },
];

const showcaseImages = [
  {
    title: 'Robotics Workshop',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Students building robots in our robotics lab',
  },
  {
    title: 'AI Lab Session',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Hands-on AI and machine learning training',
  },
  {
    title: 'Drone Programming',
    image: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Students programming drones for competitions',
  },
  {
    title: '3D Printing',
    image: 'https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Creating prototypes with 3D printing technology',
  },
  {
    title: 'Coding Session',
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Learning programming in our coding lab',
  },
  {
    title: 'Innovation Space',
    image: 'https://images.pexels.com/photos/8438983/pexels-photo-8438983.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Students working on innovative projects',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function LabsServicesPage() {
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
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-purple-900/85 to-pink-900/85 dark:from-indigo-950/90 dark:via-purple-950/90 dark:to-pink-950/90" />
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
                <Settings className="h-4 w-4" />
                <span className="text-sm font-medium">STEM Labs & Services</span>
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
                    STEM Labs &{' '}
                    <span className="block bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                      Services
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                    {heroCarousel[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?type=lab-setup"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-purple-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <Settings className="h-5 w-5" />
                  Request Lab Setup
                </Link>
                <Link
                  href="/labs-services#showcase"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-900 transition-all"
                >
                  <PlayCircle className="h-5 w-5" />
                  View Lab Tour
                </Link>
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

      {/* Labs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
              Our <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Labs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete STEM lab setup and teacher training solutions for schools
          </p>
        </motion.div>

          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
          {labs.map((lab, index) => (
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
                          src={lab.image}
                          alt={lab.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${lab.color} opacity-70 group-hover:opacity-80 transition-opacity`} />
                        <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${lab.color} flex items-center justify-center absolute top-4 right-4 shadow-lg group-hover:scale-110 transition-transform`}>
                          <lab.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-xl font-bold font-heading mb-1">{lab.name}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{lab.description}</p>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">Equipment:</h4>
                          <div className="flex flex-wrap gap-2">
                            {lab.equipment.slice(0, 3).map((item, i) => (
                              <span key={i} className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">Features:</h4>
                          <ul className="space-y-1">
                            {lab.features.slice(0, 3).map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link
                          href="/contact?type=lab-info"
                          className="w-full py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold hover:from-primary/20 hover:to-accent/20 transition-all inline-flex items-center justify-center"
                        >
                          Learn More
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

      {/* Services Section */}
      <section id="teachers" className="py-20 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
              Our <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete solutions for schools to set up and maintain STEM labs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
            <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
                className="group"
            >
                <GlassCard className="overflow-hidden h-full hover:scale-105 transition-transform duration-300">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="relative h-64 overflow-hidden order-2 md:order-1">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                    </div>
                    <div className="p-6 order-1 md:order-2">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{service.description}</p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact?type=service-info"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors text-sm"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
      </section>

      {/* Lab Showcase Gallery */}
      <section id="showcase" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 font-heading">
              Lab <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Showcase</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See our labs in action with real student projects
            </p>
          </motion.div>

          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {showcaseImages.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group h-full"
                  >
                    <GlassCard className="overflow-hidden h-full hover:scale-105 transition-transform duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-xl font-bold font-heading mb-1">{item.title}</h3>
                          <p className="text-sm text-white/90">{item.description}</p>
                        </div>
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
