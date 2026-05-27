import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const SESSION_KEY = "bnhtt-preloaded";

/**
 * First-load intro: dark screen with a 0→100 counter, then a curtain lift.
 * Shows once per browser session. Always self-dismisses.
 */
export function Preloader() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(SESSION_KEY) !== "1";
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (reduced) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setActive(false);
      return;
    }

    const start = performance.now();
    const total = 1800;
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / total);
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem(SESSION_KEY, "1");
        // small pause at 100 before the curtain lifts
        setTimeout(() => setActive(false), 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reduced]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            className="font-['Inter',sans-serif] font-medium text-white tracking-tight"
            style={{ fontSize: "clamp(40px, 9vw, 120px)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            BNHTT
          </motion.span>
          <span className="absolute bottom-8 right-8 font-['IBM_Plex_Mono',monospace] text-white/60 text-sm">
            {count}%
          </span>
          <span className="absolute bottom-8 left-8 font-['IBM_Plex_Mono',monospace] text-white/40 text-xs tracking-widest uppercase">
            Loading
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
