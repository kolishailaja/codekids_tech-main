'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '918008937902'; // +91 800 893 7902
const WHATSAPP_MESSAGE = 'Hello! I\'m interested in CodeKids Technologies. Can you please provide more information?';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Show when scrolling up or at top, hide when scrolling down significantly
          if (currentScrollY < lastScrollY || currentScrollY < 100) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 300) {
            setIsVisible(false);
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
            aria-label="Chat on WhatsApp"
          >
            {/* Main WhatsApp Button */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-2xl flex items-center justify-center cursor-pointer hover:from-green-600 hover:to-green-700 transition-all duration-300">
              <MessageCircle className="h-8 w-8 text-white" />
              
              {/* Pulse Animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-green-500"
                animate={{
                  scale: [1, 1.5, 1.5, 1],
                  opacity: [0.7, 0, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Tooltip on Hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium"
                >
                  Chat on WhatsApp
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900 dark:border-l-gray-800" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Notification Badge */}
            <motion.div
              className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              1
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

