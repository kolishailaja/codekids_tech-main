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
  // Only handle if it's an anchor link
  if (!href.startsWith('#')) return;

  e.preventDefault();
  
  const elementId = href.substring(1);
  smoothScrollToElement(elementId, offset);
  
  // Update URL without scrolling (already handled above)
  if (typeof window !== 'undefined' && window.history.pushState) {
    window.history.pushState(null, '', href);
  }
}

