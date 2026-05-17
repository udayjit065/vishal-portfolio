"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function HoverName({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.8 + delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="cursor-default"
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-end justify-start">
      {/* Full Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.6, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/hero.png"
          alt="Vishal Sharma"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </motion.div>

      {/* Name — single line with gradient like professional */}
      <div className="relative z-10 w-full px-[4vw] pb-10 md:pb-14">
        <HoverName>
          <h1 className="font-display text-[11vw] md:text-[9.5vw] font-bold leading-[0.9] tracking-tighter uppercase whitespace-nowrap">
            <span className="bg-gradient-to-r from-white via-brand-orange to-white bg-clip-text text-transparent">
              Vishal Sharma
            </span>
          </h1>
        </HoverName>

        {/* Subtitle row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.8 }}
          className="mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <p className="text-white/50 text-sm md:text-base font-semibold uppercase tracking-[0.2em]">
            Freelance Designer
          </p>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Available for projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
