"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const sections = ["Home", "About", "Stack", "Projects", "Contact"] as const;
type Section = (typeof sections)[number];

export default function Home() {
  const [active, setActive] = useState<Section>("Home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNav = (section: Section) => {
    if (section === active) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(section);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <main className="h-screen overflow-hidden bg-[#050505] relative">
      {/* Fixed Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNav("Home")}
              className="font-semibold text-lg tracking-wide text-white hover:opacity-80 transition-opacity"
            >
              Portfolio.
            </button>
            <div className="flex items-center gap-1">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleNav(section)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    active === section
                      ? "text-white bg-white/10"
                      : "text-neutral-500 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Single Viewport Section */}
      <div className={`h-screen ${isTransitioning ? "slide-exit" : "slide-enter"}`}>
        {active === "Home" && <Hero />}
        {active === "About" && <About />}
        {active === "Stack" && <TechStack />}
        {active === "Projects" && <Projects />}
        {active === "Contact" && <Contact />}
      </div>
    </main>
  );
}
