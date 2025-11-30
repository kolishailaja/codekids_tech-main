// SEO Metadata utilities for CodeKids Technologies

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  structuredData?: object;
}

// Generate Local Business Schema
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': 'https://codekids.tech/#organization',
    name: 'CodeKids Technologies Pvt. Ltd.',
    alternateName: 'CodeKids',
    url: 'https://codekids.tech',
    logo: 'https://codekids.tech/assest/codekids_finallogo.jpg',
    description: 'Leading EdTech platform offering coding courses for kids, robotics training, AI programs, and job-ready tech skills in India.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot no 264, Flat no 102 & 202, Road no 14, Swamy Ayyappa society',
      addressLocality: 'Madhapur',
      addressRegion: 'Telangana',
      postalCode: '500081',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.4486',
      longitude: '78.3908',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+918008937902',
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Telugu'],
      },
      {
        '@type': 'ContactPoint',
        email: 'codekidstech2025@gmail.com',
        contactType: 'Customer Support',
        areaServed: 'IN',
      },
    ],
    sameAs: [
      'https://www.instagram.com/codekids_pro',
      'https://www.instagram.com/codekids_jr',
      'https://www.youtube.com/channel/UCy4kLbgImBSWeYNAIjFDjIw',
      'https://www.youtube.com/channel/UCINCJJrKriFpOrzxP7reUBQ',
      'https://x.com/Codekids7682101',
      'https://www.facebook.com/profile.php?id=61583651787318',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'CodeKids Jr - Online Classes',
        description: 'Online coding classes for kids aged 6-16',
        price: '100',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'CodeKids Jr - Offline Classes',
        description: 'Offline coding classes for kids aged 6-16',
        price: '150',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'CodeKids Pro - 3 Months',
        description: 'Job-ready tech training program - 3 months',
        price: '15000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };
}

// Generate Course Schema
export function generateCourseSchema(courseName: string, description: string, provider: string = 'CodeKids Technologies') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: 'https://codekids.tech',
    },
    educationalCredentialAwarded: 'Certificate',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };
}

// Generate FAQ Schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate Article Schema
export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image || 'https://codekids.tech/assest/codekids_finallogo.jpg',
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.author || 'CodeKids Technologies',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CodeKids Technologies Pvt. Ltd.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://codekids.tech/assest/codekids_finallogo.jpg',
      },
    },
  };
}

// Generate Review Schema
export function generateReviewSchema(review: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  };
}
