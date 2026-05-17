"use client";

import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function ExperiencePage() {
  return (
    <>
      <CustomCursor />
      <main className="relative min-h-screen bg-bg-warm">
        <Navbar />
        <div className="pt-28" />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
