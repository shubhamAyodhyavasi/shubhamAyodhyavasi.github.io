import { useState, useEffect } from 'react';

/**
 * Custom hook that observes when an element enters the viewport.
 * Works as a drop-in replacement for framer-motion's useInView.
 */
const useInView = (ref, options = {}) => {
  const { once = true, margin = '0px' } = options;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin: margin, threshold: 0.1 }
    );

    observer.observe(element);
    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [ref, margin, once]);

  return inView;
};

export default useInView;
