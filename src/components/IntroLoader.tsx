"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 2800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-brand-orange flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <span className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight">
              Vishal
            </span>
            <div className="w-3 h-3 rounded-full bg-white" />
            <span className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight">
              Sharma
            </span>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
            className="h-[2px] bg-white/50 mt-8"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
