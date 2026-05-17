"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Magnetic from "./Magnetic";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "Experience", href: "/experience" },
];

const socialLinks = [
  { name: "Email", href: "mailto:vspangotra666@gmail.com" },
  { name: "in", href: "https://www.linkedin.com/in/vishal-s-94648025b/" },
];

function AnimatedLink({
  text,
  href,
  isExternal,
}: {
  text: string;
  href: string;
  isExternal?: boolean;
}) {
  const letterVariants = {
    initial: { y: 0 },
    hover: (i: number) => ({
      y: -3,
      transition: {
        type: "spring" as const,
        stiffness: 500,
        damping: 20,
        delay: i * 0.03,
      },
    }),
  };

  const Comp = isExternal ? motion.a : motion(Link);

  return (
    <Magnetic>
      <Comp
        href={href}
        className="relative px-5 py-2 rounded-full text-sm font-bold text-brand-grey hover:text-dark transition-colors uppercase block"
        initial="initial"
        whileHover="hover"
      >
        <span className="flex">
          {text.split("").map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={letterVariants}
              custom={i}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      </Comp>
    </Magnetic>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 100);
  });

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3, duration: 0.8 }}
      className="fixed top-6 left-0 w-full z-50 px-[4vw] flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-brand-blue" />
        <Link
          href="/"
          className="font-display font-bold text-lg tracking-tight text-white mix-blend-difference"
        >
          Vishal<span className="opacity-40">.</span>Sharma
        </Link>
      </div>

      <div
        className={`flex gap-1 p-1.5 rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-white/60 backdrop-blur-xl shadow-lg"
            : "bg-white/10 backdrop-blur-md"
        }`}
      >
        {navLinks.map((link, i) => (
          <AnimatedLink key={i} text={link.name} href={link.href} />
        ))}
      </div>

      <div className="hidden md:flex gap-4">
        {socialLinks.map((link, i) => (
          <Magnetic key={i}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              className="text-sm font-bold text-white/50 hover:text-white transition-colors mix-blend-difference"
            >
              {link.name}
            </a>
          </Magnetic>
        ))}
      </div>
    </motion.nav>
  );
}
