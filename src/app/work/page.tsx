"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/work/1.png", span: "row-span-2" },
  { src: "/work/2.png", span: "row-span-3" },
  { src: "/work/3.png", span: "row-span-3" },
  { src: "/work/4.png", span: "row-span-3" },
  { src: "/work/5.png", span: "row-span-3" },
  { src: "/work/6.png", span: "row-span-2" },
  { src: "/work/7.png", span: "row-span-2" },
  { src: "/work/8.png", span: "row-span-3" },
  { src: "/work/9.png", span: "row-span-3" },
  { src: "/work/10.png", span: "row-span-3" },
  { src: "/work/11.jpeg", span: "row-span-1" },
  { src: "/work/12.jpeg", span: "row-span-1" },
  { src: "/work/13.jpeg", span: "row-span-1" },
  { src: "/work/14.jpeg", span: "row-span-1" },
  { src: "/work/15.jpeg", span: "row-span-1" },
  { src: "/work/16.jpeg", span: "row-span-1" },
  { src: "/work/17.jpeg", span: "row-span-1" },
  { src: "/work/18.jpeg", span: "row-span-1" },
  { src: "/work/19.jpeg", span: "row-span-1" },
  { src: "/work/20.jpeg", span: "row-span-1" },
  { src: "/work/21.jpeg", span: "row-span-1" },
  { src: "/work/22.jpeg", span: "row-span-1" },
  { src: "/work/23.jpeg", span: "row-span-1" },
  { src: "/work/24.jpeg", span: "row-span-1" },
];

export default function WorkPage() {
  return (
    <>
      <CustomCursor />
      <main className="relative min-h-screen bg-bg-warm">
        <Navbar />

        {/* Page Header */}
        <section className="pt-32 pb-16 px-[4vw]">
          <Reveal>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-dark tracking-tight leading-[0.9]">
              Selected{" "}
              <span className="font-serif italic text-brand-blue">Works</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-brand-grey/60 max-w-xl">
              A collection of projects spanning broadcast graphics, web design,
              branding, and full-stack interfaces.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-orange" />
              <span className="text-sm font-bold text-brand-grey/40 uppercase tracking-widest">
                {images.length} Designs
              </span>
            </div>
          </Reveal>
        </section>

        {/* Masonry Grid Gallery */}
        <section className="px-[4vw] pb-20">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
            {images.map((img, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.4)}>
                <motion.div
                  className="mb-4 md:mb-6 break-inside-avoid group relative overflow-hidden rounded-2xl bg-bg-grey"
                  data-cursor-text="View"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Image
                    src={img.src}
                    alt={`Design ${i + 1}`}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                  {/* Hover overlay number */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="glass px-3 py-1.5 rounded-full text-xs font-bold text-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
