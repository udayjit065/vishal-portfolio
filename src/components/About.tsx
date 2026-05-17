"use client";

import { Reveal } from "./Reveal";

const capabilities = [
  "UI/UX Design",
  "Web Applications",
  "Broadcast Graphics",
  "Brand Identity",
  "Full-Stack Interfaces",
  "Motion Design",
];

export default function About() {
  return (
    <section id="about" className="py-32 px-[4vw] bg-bg-warm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 max-w-[1400px] mx-auto">
        <div>
          <Reveal>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-grey/40 mb-10">
              About
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="font-display text-5xl md:text-6xl font-bold text-dark leading-[0.95] tracking-tight">
              Crafting digital <br />
              <span className="font-serif italic text-brand-blue">
                experiences
              </span>{" "}
              that <br />
              leave a mark.
            </h3>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg text-brand-grey/60 mt-10 max-w-lg leading-relaxed">
              I&apos;m Vishal Sharma, a designer passionate about creating
              beautiful, functional digital products. With experience in
              broadcast media and software design, I bring a unique perspective
              to every project.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center">
          <Reveal delay={0.3}>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-grey/40 mb-8">
              Capabilities
            </p>
          </Reveal>
          <div className="flex flex-col">
            {capabilities.map((cap, i) => (
              <Reveal key={i} delay={0.4 + i * 0.08}>
                <div className="flex items-center gap-4 py-5 border-b border-brand-grey/10 group cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-brand-blue group-hover:bg-brand-orange transition-colors duration-300 shrink-0" />
                  <span className="text-xl md:text-2xl font-semibold text-dark group-hover:translate-x-2 transition-transform duration-300">
                    {cap}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
