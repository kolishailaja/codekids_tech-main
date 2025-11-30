import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: true,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true,
});

const ChatbotLauncher = dynamic(() => import('@/components/ChatbotLauncher'), {
  ssr: false,
  loading: () => null,
});

const CROOptimizer = dynamic(() => import('@/components/CROOptimizer'), {
  ssr: false,
  loading: () => null,
});

const WebsiteLoader = dynamic(() => import('@/components/WebsiteLoader'), {
  ssr: false,
  loading: () => null,
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://codekids.tech'),
  title: {
    default: 'CodeKids Technologies | Best Coding Courses for Kids & Students | STEM Education India',
    template: '%s | CodeKids Technologies'
  },
  description: 'CodeKids Technologies offers the best coding courses for kids, robotics training for students, AI & ML programs, and job-ready tech skills. Leading STEM education platform in India for schools and colleges.',
  keywords: [
    'coding courses for kids',
    'robotics classes for students',
    'STEM education India',
    'coding classes for children',
    'AI courses for students',
    'machine learning courses',
    'full stack development course',
    'coding training online',
    'robotics training India',
    'programming courses for kids',
    'tech courses for students',
    'coding school online',
    'best coding institute India',
    'STEM programs for schools',
    'coding bootcamp India',
  ],
  authors: [{ name: 'CodeKids Technologies Pvt. Ltd.' }],
  creator: 'CodeKids Technologies',
  publisher: 'CodeKids Technologies Pvt. Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://codekids.tech',
    siteName: 'CodeKids Technologies',
    title: 'CodeKids Technologies | Best Coding Courses for Kids & Students',
    description: 'Best coding courses for kids, robotics training, AI programs, and job-ready tech skills.',
    images: [
      {
        url: '/assest/codekids_finallogo.jpg',
        width: 1200,
        height: 630,
        alt: 'CodeKids Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeKids Technologies | Best Coding Courses for Kids & Students',
    description: 'Best coding courses for kids, robotics training, AI programs, and job-ready tech skills.',
    images: ['/assest/codekids_finallogo.jpg'],
    creator: '@codekids_tech',
  },
  alternates: {
    canonical: 'https://codekids.tech',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-body`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <WebsiteLoader />
          <div className="relative min-h-screen bg-ck-hero">
            <Navbar />
            <main className="pt-20" role="main">
              {children}
            </main>
            <Footer />
            <ChatbotLauncher />
            <CROOptimizer showExitIntent={true} showUrgencyBanner={true} showTrustSignals={true} />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
