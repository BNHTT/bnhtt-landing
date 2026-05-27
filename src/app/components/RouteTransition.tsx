import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { motion, useReducedMotion } from "motion/react";

/**
 * Plays a curtain reveal each time the route changes. The new page is already
 * rendered underneath; the panel covers then lifts to read as a transition.
 * Skips the very first render (the Preloader owns the initial load).
 */
export function RouteTransition() {
  const location = useLocation();
  const reduced = useReducedMotion();
  const isFirst = useRef(true);

  useEffect(() => {
    isFirst.current = false;
  }, []);

  if (reduced) return null;

  return (
    <motion.div
      key={location.pathname}
      aria-hidden
      className="fixed inset-0 z-[9000] pointer-events-none bg-[#0a0a0a]"
      style={{ originY: 0 }}
      initial={isFirst.current ? false : { scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    />
  );
}
