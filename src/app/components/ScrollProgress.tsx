import { motion, useScroll, useSpring } from "motion/react";

/** Thin progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[8000] h-[3px] origin-left bg-[#455CE9]"
      style={{ scaleX }}
    />
  );
}
