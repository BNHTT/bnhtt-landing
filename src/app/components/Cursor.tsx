import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Custom cursor: a blend-difference ring that follows the pointer and grows
 * over interactive elements. Renders nothing meaningful on touch devices
 * (parent should avoid mounting it there).
 */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        "a, button, [data-cursor], input, textarea, [role='button']"
      );
      setHovering(interactive);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y, visible]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        mixBlendMode: "difference",
        backgroundColor: "#fff",
      }}
      animate={{
        width: hovering ? 56 : 16,
        height: hovering ? 56 : 16,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    />
  );
}
