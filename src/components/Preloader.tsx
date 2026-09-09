import { useEffect, useState } from "react";
import { motion } from "motion/react";
import TrueFocus from "./TrueFocus";

interface PreloaderProps {
  onComplete: () => void;
}

type Phase = "loading" | "done";

const FOCUS_DURATION = 0.6; // seconds, per word
const FOCUS_PAUSE = 0.35; // seconds, between words
const COUNT_STEP_MS = 26; // ~2.6s to climb from 1 to 100

export default function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [count, setCount] = useState(1);

  // Count up from 1 to 100 — starts immediately, running alongside TrueFocus.
  useEffect(() => {
    if (phase !== "loading") return;
    if (count >= 100) {
      const timer = setTimeout(() => setPhase("done"), 400);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(
      () => setCount((c) => Math.min(c + 1, 100)),
      COUNT_STEP_MS
    );
    return () => clearTimeout(timer);
  }, [phase, count]);

  // Reveal the site once loading finishes.
  useEffect(() => {
    if (phase !== "done") return;
    const timer = setTimeout(onComplete, 500);
    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  // Lock scroll while the preloader is up.
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-reel-black px-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex w-full max-w-4xl flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <TrueFocus
            sentence="Film Maker"
            manualMode={false}
            blurAmount={8}
            borderColor="#7FA06B"
            glowColor="rgba(127, 160, 107, 0.55)"
            animationDuration={FOCUS_DURATION}
            pauseBetweenAnimations={FOCUS_PAUSE}
            className="mx-auto"
          />
        </motion.div>

        <div className="mt-6 min-h-[4.5rem] sm:mt-8 sm:min-h-[5.5rem]">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-center font-display text-6xl italic font-light tabular-nums text-paper sm:text-8xl"
            aria-live="polite"
            aria-label={`Loading, ${count} percent`}
          >
            {count}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}