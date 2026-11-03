// import { useEffect } from "react";
// import Lenis from "lenis";

// const SmoothScroll = () => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//       wheelMultiplier: 0.85,
//       touchMultiplier: 1.5,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       autoRaf: true,
//     });

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return null;
// };

// export default SmoothScroll;

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

const SmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoRaf: true,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll to top whenever the route changes
  useEffect(() => {
    lenisRef.current?.scrollTo(0, {
      immediate: true,
    });
  }, [location.pathname]);

  return null;
};

export default SmoothScroll;