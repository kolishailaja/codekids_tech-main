'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  schema?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

export function SEOHead({
  title,
  description,
  keywords = [],
  ogImage = '/assest/codekids_finallogo.jpg',
  canonicalUrl,
  schema,
  noindex = false,
  nofollow = false,
}: SEOHeadProps) {
  const fullTitle = title.includes('CodeKids') ? title : `${title} | CodeKids Technologies`;
  const siteUrl = 'https://codekids.tech';
  const canonical = canonicalUrl || `${siteUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`;
  
  const defaultKeywords = [
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
  ];

  const allKeywords = Array.from(new Set([...defaultKeywords, ...keywords])).join(', ');

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="CodeKids Technologies" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="twitter:creator" content="@codekids_tech" />

      {/* Additional SEO Tags */}
      <meta name="author" content="CodeKids Technologies Pvt. Ltd." />
      <meta name="publisher" content="CodeKids Technologies Pvt. Ltd." />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="IN-TS" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.4486;78.3908" />
      <meta name="ICBM" content="17.4486, 78.3908" />

      {/* Structured Data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
}

