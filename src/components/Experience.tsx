"use client";

import { Reveal } from "./Reveal";

const experiences = [
  {
    role: "Graphic Designer",
    company: "Rozana Spokesman",
    period: "Nov 2025 — Present",
    description:
      "Leading visual design for broadcast media and digital platforms.",
  },
  {
    role: "Software Designer Trainee",
    company: "Vausem Technologies",
    period: "Feb — May 2025",
    description:
      "Focused on UI/UX research and full-stack interface development.",
  },
];

export default function Experience() {
  return (
    <section className="py-32 px-[4vw] bg-bg-grey">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 max-w-[1400px] mx-auto">
        <div>
          <Reveal>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-grey/40 mb-10">
              Experience
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <h3 className="font-display text-5xl md:text-7xl font-bold text-dark leading-[0.9] tracking-tight">
              A journey of <br />
              <span className="font-serif italic text-brand-blue">
                growth & design
              </span>
              .
            </h3>
          </Reveal>
        </div>

        <div className="flex flex-col gap-10 md:gap-12 mt-4 md:mt-0 md:pt-10">
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={0.2 + i * 0.2}>
              <div className="border-b border-brand-grey/10 pb-10 last:border-0 group">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                  <h4 className="font-display text-2xl font-bold text-dark uppercase tracking-tight">
                    {exp.role}
                  </h4>
                  <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full uppercase tracking-wider shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xl font-semibold text-brand-grey/80 mb-3">
                  {exp.company}
                </p>
                <p className="text-brand-grey/50 max-w-md leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
