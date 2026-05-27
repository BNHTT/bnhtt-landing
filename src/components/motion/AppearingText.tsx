import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";

interface AppearingTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  /** stagger per word, seconds */
  stagger?: number;
  once?: boolean;
}

/**
 * Animates a string word-by-word: each word rises from behind a mask.
 * Gives the editorial "headline reveal" used on premium portfolios.
 */
export function AppearingText({
  text,
  className,
  style,
  delay = 0,
  stagger = 0.05,
  once = true,
}: AppearingTextProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return (
      <span className={className} style={style}>
        {text}
      </span>
    );
  }

  return (
    <motion.span
      key={text}
      className={className}
      style={{ display: "inline-block", ...style }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
            paddingBottom: "0.15em",
            marginBottom: "-0.15em",
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: { y: "110%" },
              visible: {
                y: "0%",
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
