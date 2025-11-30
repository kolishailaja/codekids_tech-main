'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-28 sm:bottom-32 right-4 sm:right-6 md:right-8 z-40 p-3 sm:p-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.div>
          
          {/* Pulse ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-sm text-white text-xs font-semibold whitespace-nowrap pointer-events-none hidden sm:block"
          >
            Scroll to Top
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black/80" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

