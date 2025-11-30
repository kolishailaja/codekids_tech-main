/**
 * Smooth scroll utility for anchor links
 */
export function smoothScrollToElement(elementId: string, offset = 80) {
  if (typeof window === 'undefined') return;

  const element = document.getElementById(elementId);
  if (!element) {
    // If element not found, try to navigate to the page first
    const hash = elementId;
    const [path, id] = hash.split('#');
    if (path && id) {
      window.location.href = `${path}#${id}`;
      setTimeout(() => smoothScrollToElement(id, offset), 100);
    }
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

/**
 * Handle anchor link clicks for smooth scrolling
 */
export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  offset = 80
) {
  // Handle both anchor-only links (#section) and full path with hash (/page#section)
  if (!href || (!href.startsWith('#') && !href.includes('#'))) {
    return; // Not an anchor link, let default behavior handle it
  }

  e.preventDefault();
  
  let elementId: string;
  if (href.startsWith('#')) {
    // Just an anchor link
    elementId = href.substring(1);
  } else {
    // Full path with hash, extract hash
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      elementId = href.substring(hashIndex + 1);
    } else {
      return; // No hash found
    }
  }
  
  smoothScrollToElement(elementId, offset);
  
  // Update URL without scrolling (already handled above)
  if (typeof window !== 'undefined' && window.history.pushState) {
    const hash = href.startsWith('#') ? href : `#${elementId}`;
    window.history.pushState(null, '', hash);
  }
}

