'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Kids Learning Robotics',
    description: 'Students building robots and learning coding',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
  {
    title: 'Drone Programming',
    description: 'Young minds exploring drone technology',
    image: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
  {
    title: 'Coding Workspace',
    description: 'Future developers at work',
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-8 left-8 right-8 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2 font-heading">
              {slides[currentSlide].title}
            </h3>
            <p className="text-sm md:text-base text-gray-200">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="absolute top-6 right-6 glass-card px-4 py-2 z-10">
        <div className="flex gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-ck-gradient">1000+</div>
            <div className="text-xs text-muted-foreground">Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-ck-gradient">20+</div>
            <div className="text-xs text-muted-foreground">Schools</div>
          </div>
        </div>
      </div>
    </div>
  );
}
