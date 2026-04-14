"use client";

import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const desktopProjects = projects.filter(p => !p.isMobile);
  const mobileProjects = projects.filter(p => p.isMobile);

  return (
    <section id="projects" className="h-screen pt-20 px-6 bg-[#050505] text-white relative overflow-y-auto">
      <div className="max-w-[1400px] mx-auto pt-10 pb-20">
        <div className="mb-16 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">Featured Projects.</h2>
          <p className="text-neutral-500 max-w-2xl font-light text-base md:text-lg">
            A curated selection of robust full-stack applications. Focusing on modern architecture, elegant UI, and comprehensive engineering.
          </p>
        </div>
        
        {/* Web & Full Stack Projects */}
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-10 snap-x snap-mandatory hide-scrollbar w-full px-4 md:px-0">
          {desktopProjects.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:bg-neutral-900 transition-colors duration-500 w-[260px] md:w-[320px] shrink-0 snap-center md:snap-start"
            >
              <div className="relative w-full aspect-video bg-neutral-950 overflow-hidden">
                {project.video ? (
                  <video 
                    src={project.video} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
              
              <div className="p-5 flex flex-col flex-1 relative">
                <h3 className="text-lg font-semibold text-white mb-1.5 tracking-wide">{project.title}</h3>
                <p className="text-neutral-400 mb-4 flex-1 text-xs leading-relaxed font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2.5 py-1 bg-white/5 text-neutral-300 text-[10px] font-medium rounded-full uppercase tracking-wider border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.reviews && project.reviews.length > 0 && (
                  <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/5">
                    <p className="text-[11px] text-neutral-300 font-light mb-2 italic">
                      "{project.reviews[0].comment}"
                    </p>
                    <div className="flex items-center justify-between">
                       <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-medium">{project.reviews[0].user}</span>
                       <div className="flex text-neutral-400 gap-0.5">
                         {[...Array(project.reviews[0].rating)].map((_, i) => (
                            <svg key={i} className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                         ))}
                       </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 mt-auto pt-2">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-white text-black font-medium rounded-md text-[11px] tracking-wide text-center hover:bg-neutral-200 transition-colors duration-300"
                    >
                      View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-transparent text-white border border-neutral-700 rounded-md font-medium text-[11px] tracking-wide text-center hover:bg-white/5 transition-colors duration-300"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Applications Section */}
        {mobileProjects.length > 0 && (
          <div className="mt-24 mb-16 relative">
            <div className="text-center flex flex-col items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Mobile Applications.</h2>
              <p className="text-neutral-500 max-w-2xl font-light text-base md:text-lg">
                High-performance, cross-platform mobile experiences with sleek native interfaces.
              </p>
            </div>

            <div className="flex flex-col gap-12 w-full px-4 md:px-0">
              {mobileProjects.map((project) => (
                <div key={project.id} className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-[2rem] p-6 md:p-10 flex flex-col lg:flex-row gap-8 overflow-hidden relative group">
                  
                  {/* Glassmorphism Background Accent */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  {/* Left Metadata Panel */}
                  <div className="flex-1 lg:max-w-md flex flex-col relative z-20">
                    <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">{project.title}</h3>
                    <p className="text-neutral-400 mb-8 font-light leading-relaxed text-sm md:text-base">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1.5 bg-white/5 text-neutral-300 text-[11px] font-medium rounded-full uppercase tracking-widest border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <div className="inline-block py-2.5 px-6 bg-white/5 text-neutral-400 font-medium rounded-full text-[11px] tracking-widest text-center uppercase border border-white/10 cursor-default">
                        Private Proprietary Application
                      </div>
                    </div>
                  </div>

                  {/* Right iPhone Gallery scroll container */}
                  <div className="flex-1 w-full lg:w-0 mt-8 lg:mt-0 relative z-20">
                    {/* Fade Edges for scroll */}
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#121212]/90 to-transparent z-30 pointer-events-none"></div>
                    
                    <div className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory hide-scrollbar">
                      {project.mobileImages?.map((img, i) => (
                        <div key={i} className="relative shrink-0 snap-center w-[220px] aspect-[9/19.5] bg-neutral-950 rounded-[2.5rem] border-[6px] border-[#252525] shadow-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 ease-out">
                          {/* iPhone Dynamic Island */}
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-4 bg-black rounded-full z-20"></div>
                          
                          <img 
                            src={img} 
                            alt={`${project.title} Screenshot ${i+1}`} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-20 flex justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-neutral-900 border border-white/10 text-white rounded-full font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300"
          >
            View More Projects
          </button>
        </div>
      </div>

      {/* Modal / Popup for Confidential Projects */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl relative text-center">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-400">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Additional Projects</h3>
            <p className="text-neutral-400 font-light leading-relaxed mb-8">
              I have developed several other large-scale applications and proprietary software systems. However, these projects are highly confidential and operate under strict Non-Disclosure Agreements (NDAs). 
              <br /><br />
              Please reach out directly if you would like to discuss my role and technical contributions to these systems.
            </p>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-full py-3 bg-white text-black font-medium rounded-xl hover:bg-neutral-200 transition-colors"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
