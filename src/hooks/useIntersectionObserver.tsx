import { RefObject, useEffect, useState } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersectionObserver = (ref: RefObject<Element>, options: IntersectionObserverOptions) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // this array destructuring is to get the first element of the array similar to what we do in useState

      /* const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // rest of the function
            }, options); 
        */
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      } else {
        setIsVisible(false);
      }
      // setIsVisible(entry.isIntersecting);
    }, options);

    const elementRef = ref.current;
    if (elementRef) {
      observer.observe(elementRef);
    }

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [ref, options]);

  return isVisible;
};

export default useIntersectionObserver;
