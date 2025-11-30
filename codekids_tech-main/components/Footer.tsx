'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { smoothScrollToElement } from '@/lib/smooth-scroll';

const footerLinks = {
  'About CodeKids': [
    { label: 'Our Story', href: '/about' },
    { label: 'Mission & Vision', href: '/about#mission' },
    { label: 'Impact', href: '/about#impact' },
    { label: 'Contact Us', href: '/contact' },
  ],
  Programs: [
    { label: 'CodeKids_Jr', href: '/codekids-jr' },
    { label: 'CodeKids_Pro', href: '/codekids-pro' },
    { label: 'STEM Labs', href: '/labs-services' },
    { label: 'Events & Competitions', href: '/events' },
  ],
  'For Schools': [
    { label: 'Partnership Process', href: '/codekids-jr#partnership' },
    { label: 'Teacher Training', href: '/labs-services#teachers' },
    { label: 'Request Demo', href: '/contact' },
    { label: 'Download Brochure', href: '#' },
  ],
  'For Students': [
    { label: 'Pro Tracks', href: '/codekids-pro' },
    { label: 'Apply Now', href: '/codekids-pro#apply' },
    { label: 'For Parents', href: '/parents' },
    { label: 'FAQs', href: '/codekids-jr#faq' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61583651787318', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/codekids_pro?igsh=YWk5ZTZpcW55cTM0', label: 'Instagram (CodeKids_Pro)' },
  { icon: Instagram, href: 'https://www.instagram.com/codekids_jr?igsh=MXdwZmw3bzA3MXplNQ==', label: 'Instagram (CodeKids_Jr)' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/Codekids7682101', label: 'Twitter (X)' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCy4kLbgImBSWeYNAIjFDjIw', label: 'YouTube (CodeKids_Jr)' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCINCJJrKriFpOrzxP7reUBQ', label: 'YouTube (CodeKids_Pro)' },
];

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Handle anchor links
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (hash) {
        if (pathname !== path && path) {
          e.preventDefault();
          router.push(href);
          setTimeout(() => smoothScrollToElement(hash), 300);
        } else if (pathname === path || !path) {
          e.preventDefault();
          smoothScrollToElement(hash);
          router.push(href);
        }
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/20 border-t border-primary/20 mt-20">
      <div className="absolute top-0 left-0 right-0 h-1 bg-ck-gradient-main" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" prefetch={true} className="flex items-center gap-3 mb-4 transition-all duration-200 active:scale-95">
              <div className="relative h-14 w-14 rounded-xl overflow-hidden ring-2 ring-primary/30">
                <Image
                  src="/assest/codekids_finallogo.jpg"
                  alt="CodeKids"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-2xl font-bold font-heading text-foreground">
                Code<span className="bg-gradient-to-r from-[#FF4B8F] via-[#7B3DFF] to-[#2ED0FF] bg-clip-text text-transparent">Kids</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Empowering the next generation with cutting-edge STEM education. From in-school programs to job-ready tech training.
            </p>

            <div className="glass-card p-4 space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href="mailto:codekidstech2025@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 active:scale-95">
                    codekidstech2025@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <a href="tel:+918008937902" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 active:scale-95">
                    +91 800 893 7902
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Plot no 264, Flat no 102 & 202, Road no 14, Swamy Ayyappa society, Madhapur, 500081 Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-4 font-heading">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      prefetch={!link.href.startsWith('#') && !link.href.includes('#')}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 active:scale-95"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href === '#' ? undefined : href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (href === '#') {
                    e.preventDefault();
                  }
                }}
                className="h-10 w-10 rounded-full bg-secondary hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ cursor: href === '#' ? 'not-allowed' : 'pointer' }}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} CodeKids Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-2 justify-center md:justify-end">
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 active:scale-95" onClick={(e) => e.preventDefault()}>
                Privacy Policy
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 active:scale-95" onClick={(e) => e.preventDefault()}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
