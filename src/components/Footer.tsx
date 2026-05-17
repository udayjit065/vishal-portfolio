"use client";

import { Reveal } from "./Reveal";
import Magnetic from "./Magnetic";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/vishal-s-94648025b/" },
  { name: "Instagram", href: "https://www.instagram.com/vishal_sharma_pb35_/" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-brand-orange overflow-hidden">
      {/* Main CTA */}
      <div className="flex flex-col items-center justify-center py-28 md:py-40 px-[4vw]">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/50 mb-10 block text-center">
            Ready to collaborate?
          </span>
        </Reveal>

        <Magnetic>
          <motion.a
            href="mailto:vspangotra666@gmail.com"
            className="font-display text-[14vw] md:text-[12vw] font-bold text-white tracking-tighter leading-[0.8] hover:text-dark transition-colors duration-500 cursor-none block uppercase"
            data-cursor-text="Email"
          >
            Let&apos;s Talk
          </motion.a>
        </Magnetic>

        <Reveal delay={0.4}>
          <p className="text-lg text-white/60 mt-8 text-center max-w-md">
            Have a project in mind? Let&apos;s create something extraordinary
            together.
          </p>
        </Reveal>
      </div>

      {/* Info Grid */}
      <div className="px-[4vw] pb-10">
        <div className="border-t border-white/20 pt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">
              Email
            </p>
            <a
              href="mailto:vspangotra666@gmail.com"
              className="text-base font-bold text-white hover:text-dark transition-colors"
            >
              vspangotra666@gmail.com
            </a>
          </div>

          <div>
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">
              Phone
            </p>
            <a
              href="tel:+917973655352"
              className="text-base font-bold text-white hover:text-dark transition-colors"
            >
              +91 7973655352
            </a>
          </div>

          <div>
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">
              Social
            </p>
            <div className="flex flex-col gap-1.5">
              {socialLinks.map((link, i) => (
                <Magnetic key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-dark transition-colors w-fit"
                  >
                    {link.name} ↗
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">
              Location
            </p>
            <p className="text-base font-bold text-white">India</p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 text-center">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">
            © {new Date().getFullYear()} Vishal Sharma. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
