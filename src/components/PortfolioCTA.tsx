"use client";

import { Reveal } from "./Reveal";
import Magnetic from "./Magnetic";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioCTA() {
  return (
    <section className="relative py-32 md:py-40 px-[4vw] bg-bg-warm overflow-hidden">
      {/* Giant "Work" text in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[28vw] font-bold text-brand-orange/15 uppercase tracking-tighter leading-none">
          Work
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <p className="text-sm font-semibold text-brand-grey/50 mb-10 tracking-wider">
            Curious?... Check out my
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <Magnetic>
            <Link href="/work" className="group block">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                {/* Folder shape */}
                <div className="relative w-[280px] md:w-[340px] mx-auto">
                  {/* Folder tab */}
                  <div className="absolute -top-6 left-6 w-24 h-8 bg-brand-blue rounded-t-xl" />
                  {/* Folder body */}
                  <div className="relative bg-brand-blue rounded-2xl p-8 pt-6 shadow-2xl shadow-brand-blue/30 group-hover:shadow-brand-blue/50 transition-shadow duration-500">
                    {/* Files peeking out */}
                    <div className="absolute -top-3 left-8 right-8 h-16 bg-white/20 rounded-t-lg overflow-hidden">
                      <div className="flex gap-1 p-2">
                        <div className="w-full h-2 bg-white/30 rounded" />
                        <div className="w-full h-2 bg-white/20 rounded" />
                        <div className="w-full h-2 bg-white/25 rounded" />
                      </div>
                    </div>

                    {/* Folder content */}
                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-xs font-bold text-white/60 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        Portfolio
                      </span>
                      <motion.div
                        className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center"
                        whileHover={{ rotate: 45 }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-white"
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                    </div>

                    {/* File count */}
                    <p className="mt-4 text-white/40 text-xs font-semibold">
                      24 designs
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-10 text-lg font-medium text-brand-grey/50">
            View all my projects and designs
          </p>
        </Reveal>
      </div>
    </section>
  );
}
