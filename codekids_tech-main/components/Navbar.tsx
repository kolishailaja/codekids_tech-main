'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { smoothScrollToElement } from '@/lib/smooth-scroll';

const menuGroups = {
  Programs: [
    { label: 'CodeKids_Jr (For Schools)', href: '/codekids-jr' },
    { label: 'CodeKids_Pro (For Graduates)', href: '/codekids-pro' },
    { label: 'Labs & Services', href: '/labs-services' },
    { label: 'Events & Competitions', href: '/events' },
  ],
  Pricing: [
    { label: 'CodeKids_JR Pricing', href: '/codekids-jr/pricing' },
    { label: 'CodeKids_Pro Pricing', href: '/codekids-pro/pricing' },
  ],
  'For Schools': [
    { label: 'JR Program Overview', href: '/codekids-jr' },
    { label: 'STEM Labs', href: '/labs-services' },
    { label: 'Teacher Training', href: '/labs-services#teachers' },
  ],
  'For Students': [
    { label: 'Pro Tracks', href: '/codekids-pro' },
    { label: 'Internships & Projects', href: '/codekids-pro#projects' },
    { label: 'Events & Hackathons', href: '/events' },
  ],
  Resources: [
    { label: 'For Parents', href: '/parents' },
    { label: 'FAQs', href: '/codekids-jr#faq' },
    { label: 'About CodeKids', href: '/about' },
  ],
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Throttled scroll handler for better performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle anchor link navigation with smooth scrolling
  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Close mobile menu on link click
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);

    // Handle anchor links
    if (href.startsWith('#')) {
      e.preventDefault();
      const elementId = href.substring(1);
      
      // If on different page, navigate first then scroll
      if (pathname !== '/') {
        router.push(`/#${elementId}`);
        setTimeout(() => smoothScrollToElement(elementId), 300);
      } else {
        smoothScrollToElement(elementId);
      }
    } else if (href.includes('#')) {
      // Handle cross-page anchor links
      const [path, hash] = href.split('#');
      if (pathname !== path) {
        e.preventDefault();
        router.push(href);
        setTimeout(() => smoothScrollToElement(hash), 300);
      }
    }
  }, [router, pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#0F1419]/80 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            prefetch={true}
            className="flex items-center gap-3 group"
          >
            <div className="relative h-12 w-12 rounded-xl overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
              <Image
                src="/assest/codekids_finallogo.jpg"
                alt="CodeKids"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-xl font-bold font-heading text-foreground">
              Code<span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Kids</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {Object.entries(menuGroups).map(([groupName, items]) => (
              <div
                key={groupName}
                className="relative"
                onMouseEnter={() => setOpenDropdown(groupName)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                  {groupName}
                  <ChevronDown className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {openDropdown === groupName && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#0F1419] backdrop-blur-xl shadow-xl border border-border rounded-xl p-2 z-[60]"
                    >
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          prefetch={!item.href.startsWith('#')}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/codekids-jr"
              prefetch={true}
              onClick={(e) => handleLinkClick(e, '/codekids-jr')}
              className="px-6 py-2.5 text-sm font-semibold rounded-full bg-ck-gradient-main text-white hover:shadow-lg hover:scale-105 transition-all duration-200 active:scale-95"
            >
              For Schools
            </Link>
            <Link
              href="/codekids-pro"
              prefetch={true}
              onClick={(e) => handleLinkClick(e, '/codekids-pro')}
              className="px-6 py-2.5 text-sm font-semibold rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 active:scale-95"
            >
              For Graduates
            </Link>
            <ThemeToggle />
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-[#0F1419]/95 backdrop-blur-xl border-t border-border"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
              {Object.entries(menuGroups).map(([groupName, items]) => (
                <div key={groupName}>
                  <h3 className="font-semibold text-foreground mb-2">{groupName}</h3>
                  <div className="space-y-2 pl-4">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch={!item.href.startsWith('#')}
                        onClick={(e) => {
                          handleLinkClick(e, item.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Link
                  href="/codekids-jr"
                  prefetch={true}
                  onClick={(e) => {
                    handleLinkClick(e, '/codekids-jr');
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-6 py-3 text-center font-semibold rounded-full bg-ck-gradient-main text-white transition-all duration-200 active:scale-95"
                >
                  For Schools
                </Link>
                <Link
                  href="/codekids-pro"
                  prefetch={true}
                  onClick={(e) => {
                    handleLinkClick(e, '/codekids-pro');
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-6 py-3 text-center font-semibold rounded-full border-2 border-primary text-primary transition-all duration-200 active:scale-95"
                >
                  For Graduates
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
