"use client";

import { Reveal } from "./Reveal";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Rozana Spokesman",
    category: "Broadcast Graphics",
    tag: "Electronic Media",
    image: "/work/1.png",
    color: "#ffbc95",
  },
  {
    title: "New Era of Sound",
    category: "UI/UX Design",
    tag: "Landing Page",
    image: "/work/2.png",
    color: "#2e54fe",
  },
  {
    title: "Food Hunt",
    category: "Web App",
    tag: "Design",
    image: "/work/3.png",
    color: "#f99e76",
  },
  {
    title: "Vyugen Papers",
    category: "Full-Stack",
    tag: "Interface",
    image: "/work/4.png",
    color: "#96908c",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);

  return (
    <motion.div
      ref={container}
      style={{ scale }}
      className="group relative w-full mb-10 md:mb-20 last:mb-0"
      data-cursor-text="View"
    >
      <Reveal width="100%" delay={index * 0.1}>
        <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-[2vw] bg-bg-grey">
          <motion.div style={{ y }} className="relative w-full h-[120%]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
          </motion.div>
        </div>

        <div className="mt-6 md:mt-8 flex justify-between items-start px-1">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: project.color }}
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-grey/40">
                {project.category}
              </span>
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-dark tracking-tight">
              {project.title}
            </h3>
          </div>
          <div className="glass px-4 py-2 rounded-full text-sm font-bold text-brand-grey mt-2">
            {project.tag}
          </div>
        </div>
      </Reveal>
    </motion.div>
  );
}

export default function SelectedWorks() {
  return (
    <section className="py-24 md:py-32 px-[4vw] bg-white">
      <div className="flex items-end justify-between mb-16 md:mb-24">
        <div>
          <Reveal>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-grey/40 mb-4">
              Selected Works
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-display text-4xl md:text-6xl font-bold text-dark tracking-tight leading-[0.95]">
              Creating high-end <br />
              <span className="font-serif italic text-brand-grey">
                digital experiences
              </span>
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.3}>
          <span className="hidden md:block text-sm font-bold text-brand-grey/40 uppercase tracking-widest">
            04 Projects
          </span>
        </Reveal>
      </div>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
