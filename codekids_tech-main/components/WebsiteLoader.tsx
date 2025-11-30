'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Sparkles, Rocket, Code, Brain, Star, Zap, Cpu, Target, Lightbulb } from 'lucide-react';

export default function WebsiteLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  const loadingMessages = [
    'Initializing...',
    'Loading assets...',
    'Preparing experience...',
    'Almost ready...',
  ];

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let messageInterval: NodeJS.Timeout;
    let messageIndex = 0;
    
    // Progress animation with smoother increments
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        // Slower progress for smoother animation
        return Math.min(prev + Math.random() * 8 + 2, 100);
      });
    }, 80);

    // Loading message rotation
    messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % loadingMessages.length;
      setLoadingText(loadingMessages[messageIndex]);
    }, 800);

    // Loader timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
      setProgress(100);
      if (progressInterval) clearInterval(progressInterval);
      if (messageInterval) clearInterval(messageInterval);
    }, 3500);

    return () => {
      clearTimeout(timer);
      if (progressInterval) clearInterval(progressInterval);
      if (messageInterval) clearInterval(messageInterval);
    };
  }, []);

  // Increased particles for more visual impact
  const particles = Array.from({ length: 24 }, (_, i) => i);
  const geometricShapes = Array.from({ length: 8 }, (_, i) => i);
  const floatingIcons = [
    { icon: Sparkles, delay: 0, size: 14 },
    { icon: Rocket, delay: 0.3, size: 12 },
    { icon: Code, delay: 0.6, size: 11 },
    { icon: Brain, delay: 0.9, size: 13 },
    { icon: Star, delay: 1.2, size: 10 },
    { icon: Zap, delay: 1.5, size: 12 },
    { icon: Cpu, delay: 1.8, size: 11 },
    { icon: Target, delay: 2.1, size: 12 },
  ];

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        >
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#1A1F2E] to-[#0F1419]">
            {/* Animated Grid Pattern with Pulse */}
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaC0yVjBoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"
            />
            
            {/* Enhanced Floating Gradient Orbs with More Movement */}
            <motion.div
              animate={{
                x: [0, 150, -50, 0],
                y: [0, 100, 150, 0],
                scale: [1, 1.4, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#FF4B8F]/30 via-[#7B3DFF]/25 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -150, 50, 0],
                y: [0, -120, -80, 0],
                scale: [1, 1.5, 1.3, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#2ED0FF]/30 via-[#7B3DFF]/25 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, 200, -100, 0],
                y: [0, -200, 100, 0],
                scale: [1, 1.3, 1.1, 1],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-br from-[#FFC857]/25 via-[#FF4B8F]/20 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -100, 150, 0],
                y: [0, 180, -100, 0],
                scale: [1, 1.2, 1.4, 1],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#7B3DFF]/20 via-[#2ED0FF]/25 to-transparent rounded-full blur-3xl"
            />
          </div>

          {/* Enhanced Floating Particles with Trails */}
          {particles.map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 8 + 3,
                height: Math.random() * 8 + 3,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -150, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0.8, 0],
                scale: [0, 1.2, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeInOut',
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] rounded-full blur-sm shadow-lg shadow-[#FF4B8F]/50" />
            </motion.div>
          ))}

          {/* Geometric Shapes Animation */}
          {geometricShapes.map((i) => {
            const shapes = ['circle', 'square', 'triangle'];
            const shape = shapes[i % 3];
            const positions = [
              { top: '10%', left: '10%' },
              { top: '10%', right: '10%' },
              { bottom: '10%', left: '10%' },
              { bottom: '10%', right: '10%' },
              { top: '20%', left: '50%' },
              { bottom: '20%', right: '50%' },
              { top: '50%', left: '5%' },
              { top: '50%', right: '5%' },
            ];
            const pos = positions[i % 8];
            
            return (
              <motion.div
                key={i}
                className="absolute"
                style={pos}
                animate={{
                  rotate: [0, 360, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 5 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'easeInOut',
                }}
              >
                {shape === 'circle' && (
                  <div className="w-16 h-16 rounded-full border-2 border-[#FF4B8F]/30 bg-gradient-to-br from-[#FF4B8F]/10 to-transparent" />
                )}
                {shape === 'square' && (
                  <div className="w-12 h-12 rotate-45 border-2 border-[#2ED0FF]/30 bg-gradient-to-br from-[#2ED0FF]/10 to-transparent" />
                )}
                {shape === 'triangle' && (
                  <div 
                    className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-[#7B3DFF]/30"
                    style={{ opacity: 0.3 }}
                  />
                )}
              </motion.div>
            );
          })}

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Enhanced Rotating Rings with More Layers */}
            <div className="relative">
              {/* Outer Ring 1 - Enhanced */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-20 rounded-full border-4 border-transparent border-t-[#FF4B8F] border-r-[#7B3DFF] opacity-70"
              />
              
              {/* Outer Ring 2 - Enhanced */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-24 rounded-full border-4 border-transparent border-b-[#2ED0FF] border-l-[#FFC857] opacity-50"
              />

              {/* New Outer Ring 3 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-28 rounded-full border-2 border-transparent border-t-[#FF4B8F]/40 border-r-[#7B3DFF]/40 border-b-[#2ED0FF]/40 border-l-[#FFC857]/40 opacity-40"
              />

              {/* Middle Ring - Enhanced */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-12 rounded-full border-3 border-transparent border-t-[#7B3DFF] border-l-[#2ED0FF] opacity-90"
              />

              {/* Inner Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6 rounded-full border-2 border-transparent border-t-[#FF4B8F] border-r-[#2ED0FF] opacity-80"
              />

              {/* Enhanced Inner Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-16 rounded-full bg-gradient-to-r from-[#FF4B8F]/40 via-[#7B3DFF]/40 to-[#2ED0FF]/40 blur-3xl"
              />
              
              {/* Additional Glow Layers */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -inset-20 rounded-full bg-gradient-to-r from-[#FFC857]/30 via-[#FF4B8F]/30 to-[#2ED0FF]/30 blur-3xl"
              />

              {/* Logo Container - Enhanced */}
              <motion.div
                initial={{ scale: 0.3, opacity: 0, rotate: -360 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.2, type: 'spring', bounce: 0.4 }}
                className="relative z-10"
              >
                {/* Enhanced Shimmer Effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-3xl"
                  style={{ transform: 'skewX(-20deg)' }}
                />

                <div className="relative h-48 w-48 rounded-3xl bg-white/15 backdrop-blur-2xl p-8 flex items-center justify-center border-2 border-white/30 shadow-2xl overflow-hidden">
                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B8F]/20 via-[#7B3DFF]/20 to-[#2ED0FF]/20 rounded-3xl" />
                  
                  {/* Animated Border Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] opacity-30"
                    style={{
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      padding: '2px',
                    }}
                  />

                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Image
                      src="/assest/codekids_finallogo.jpg"
                  alt="CodeKids Logo"
                      width={160}
                      height={160}
                      className="rounded-2xl shadow-2xl relative z-10"
                      priority
                      unoptimized
                    />
                  </motion.div>
                </div>

                {/* Enhanced Floating Icons with More Variety */}
                {floatingIcons.map((item, index) => {
                  const positions = [
                    { className: 'absolute -top-12 -right-12', gradient: 'from-[#FF4B8F] to-[#7B3DFF]' },
                    { className: 'absolute -bottom-12 -left-12', gradient: 'from-[#2ED0FF] to-[#7B3DFF]' },
                    { className: 'absolute top-1/2 -left-16', gradient: 'from-[#FFC857] to-[#FF4B8F]' },
                    { className: 'absolute top-1/2 -right-16', gradient: 'from-[#7B3DFF] to-[#2ED0FF]' },
                    { className: 'absolute -top-8 left-1/2 -translate-x-1/2', gradient: 'from-[#FF4B8F] to-[#FFC857]' },
                    { className: 'absolute -bottom-8 left-1/2 -translate-x-1/2', gradient: 'from-[#2ED0FF] to-[#FF4B8F]' },
                    { className: 'absolute top-1/4 -right-20', gradient: 'from-[#7B3DFF] to-[#FFC857]' },
                    { className: 'absolute bottom-1/4 -left-20', gradient: 'from-[#FFC857] to-[#2ED0FF]' },
                  ];
                  const pos = positions[index % 8];
                  
                  return (
                    <motion.div
                      key={index}
                      animate={{
                        rotate: index % 2 === 0 ? 360 : -360,
                        scale: [1, 1.2, 1],
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 8 + index * 0.5,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: item.delay,
                      }}
                      className={pos.className}
                    >
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.4, 0.7, 0.4],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className={`absolute inset-0 bg-gradient-to-br ${pos.gradient} rounded-full blur-xl`}
                        />
                        <div className={`relative rounded-full bg-gradient-to-br ${pos.gradient} flex items-center justify-center shadow-lg`} style={{ width: `${item.size * 0.25}rem`, height: `${item.size * 0.25}rem` }}>
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
              </div>
            </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Enhanced Loading Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-20 text-center"
            >
              {/* Main Title with Enhanced Animation */}
              <motion.h2
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-2"
              >
                <span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] via-[#2ED0FF] to-[#FFC857] bg-clip-text text-transparent" style={{ backgroundSize: '200% auto' }}>
                Loading Your Future...
                </span>
              </motion.h2>

              {/* Loading Status Text */}
              <motion.p
                key={loadingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white/70 text-sm md:text-base mt-2 font-medium"
              >
                {loadingText}
              </motion.p>

              {/* Enhanced Progress Bar */}
              <div className="w-80 md:w-96 h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20 mt-8 shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] via-[#2ED0FF] to-[#FFC857] rounded-full relative overflow-hidden shadow-lg"
                >
                  {/* Enhanced Shimmer Effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  />
                  
                  {/* Progress Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-[#FF4B8F]/50 via-[#7B3DFF]/50 to-[#2ED0FF]/50 blur-sm"
                  />
                </motion.div>
              </div>

              {/* Enhanced Progress Percentage */}
              <motion.p
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-white text-lg md:text-xl mt-4 font-bold font-heading"
              >
                {Math.round(Math.min(progress, 100))}%
              </motion.p>

              {/* Enhanced Animated Dots */}
              <div className="mt-8 flex gap-4 justify-center items-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 1, 0.5],
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: 'easeInOut',
                    }}
                    className="relative"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.25,
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-[#FF4B8F] to-[#2ED0FF] rounded-full blur-md"
                    />
                    <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] shadow-lg" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Corner Decorations with More Effects */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute top-10 left-10 w-24 h-24 border-2 border-[#FF4B8F]/30 rounded-full bg-gradient-to-br from-[#FF4B8F]/10 to-transparent backdrop-blur-sm"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute bottom-10 right-10 w-32 h-32 border-2 border-[#2ED0FF]/30 rounded-full bg-gradient-to-br from-[#2ED0FF]/10 to-transparent backdrop-blur-sm"
          />
            <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute top-10 right-10 w-16 h-16 border-2 border-[#7B3DFF]/30 rounded-full bg-gradient-to-br from-[#7B3DFF]/10 to-transparent backdrop-blur-sm"
            />
            <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              rotate: { duration: 18, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute bottom-10 left-10 w-20 h-20 border-2 border-[#FFC857]/30 rounded-full bg-gradient-to-br from-[#FFC857]/10 to-transparent backdrop-blur-sm"
            />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
