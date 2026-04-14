"use client";

import Image from "next/image";

export default function About() {
  const experiences = [
    { years: "3.5+", label: "Years of Experience", detail: "Full-Stack Development" },
    { years: "20+", label: "Projects Delivered", detail: "Web, Mobile & Cloud" },
    { years: "10+", label: "Technologies Mastered", detail: "Frontend & Backend" },
  ];

  return (
    <section id="about" className="h-screen pt-20 px-6 bg-[#050505] text-white overflow-y-auto relative">
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <div className="max-w-5xl mx-auto pt-10 pb-20">
        {/* Header */}
        <div className="mb-14 opacity-0 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">About Me.</h2>
          <div className="w-10 h-[2px] bg-white/20"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          {/* Left — Bio */}
          <div className="flex-1 opacity-0 animate-slide-up" style={{ animationDelay: '0.15s' }}>
            <p className="text-neutral-400 font-light leading-[1.85] text-[16px] mb-6">
              I am a results-driven full-stack developer with <span className="text-white font-medium">3.5+ years</span> of 
              hands-on experience in building scalable web and mobile applications. I specialize in both 
              <span className="text-white font-medium"> frontend</span> and <span className="text-white font-medium">backend</span> development, 
              crafting high-performance systems with clean architecture and refined user interfaces.
            </p>
            <p className="text-neutral-400 font-light leading-[1.85] text-[16px] mb-6">
              Beyond development, I served as an <span className="text-white font-medium">IT Support Student Assistant at FSUU</span>, 
              where I managed laboratory systems, troubleshot hardware and software issues, and provided 
              technical guidance to faculty and students — strengthening my diagnostic skills and 
              deepening my understanding of enterprise IT operations.
            </p>
            <p className="text-neutral-500 font-light leading-[1.85] text-[15px]">
              I am passionate about pushing the boundaries of modern web technologies, contributing to 
              open-source communities, and continuously refining my craft to deliver digital experiences 
              that are both visually captivating and technically robust.
            </p>
          </div>

          {/* Right — Experience Timeline */}
          <div className="lg:w-[320px] shrink-0 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-6">Experience</h3>
            <div className="space-y-6">
              <div className="border-l border-white/10 pl-5">
                <span className="text-[11px] text-neutral-600 uppercase tracking-wider">2021 — Present</span>
                <h4 className="text-white font-medium mt-1">Full-Stack Developer</h4>
                <p className="text-neutral-500 text-sm font-light mt-1">Frontend & Backend Engineering — React, Next.js, Laravel, Node.js, PostgreSQL, Docker</p>
              </div>
              <div className="border-l border-white/10 pl-5">
                <span className="text-[11px] text-neutral-600 uppercase tracking-wider">2022 — 2024</span>
                <h4 className="text-white font-medium mt-1">IT Support — Student Assistant</h4>
                <p className="text-neutral-500 text-sm font-light mt-1">Father Saturnino Urios University — Lab management, hardware/software troubleshooting, tech support</p>
              </div>
              <div className="border-l border-white/10 pl-5">
                <span className="text-[11px] text-neutral-600 uppercase tracking-wider">2021 — Present</span>
                <h4 className="text-white font-medium mt-1">Freelance Developer</h4>
                <p className="text-neutral-500 text-sm font-light mt-1">Delivering end-to-end solutions for startups and small businesses — web apps, mobile apps, cloud deployment</p>
              </div>
              <div className="border-l border-white/10 pl-5">
                <span className="text-[11px] text-neutral-600 uppercase tracking-wider">2023</span>
                <h4 className="text-white font-medium mt-1">Software Engineering Lead</h4>
                <p className="text-neutral-500 text-sm font-light mt-1">NexGen — Led architecture design and sprint planning for enterprise-scale SaaS products</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.45s' }}>
          {experiences.map((exp, i) => (
            <div key={i} className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
              <span className="text-3xl md:text-4xl font-semibold text-white">{exp.years}</span>
              <p className="text-neutral-400 text-sm font-medium mt-2">{exp.label}</p>
              <p className="text-neutral-600 text-xs mt-1">{exp.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
