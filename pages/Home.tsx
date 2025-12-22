import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ExternalLink, Music2 } from 'lucide-react';
import { PROJECTS, SERVICES, PARTNERSHIP_TRACKS, PARTNER_INSTAGRAM_LINK, PARTNER_CREDITS_LINK, WHATSAPP_LINK } from '../constants';
import { ProjectCard } from '../components/ProjectCard';

export const Home: React.FC = () => {
  return (
    <div className="bg-black text-white relative">
      
      {/* Global Background Blobs for Glass Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-neutral-800/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[40vh] md:min-h-[55vh] flex items-center justify-center pt-24 md:pt-28 pb-4">
        <div className="relative text-center px-4 max-w-[95vw] mx-auto flex flex-col items-center">
          <h1 className="font-black uppercase tracking-tighter leading-[0.85] mb-3 animate-fade-up flex flex-col items-center w-full">
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem]">The Blueprint</span>
            {/* Middle line smaller on mobile to fit on one line */}
            <span className="text-3xl sm:text-6xl md:text-8xl lg:text-[9rem] xl:text-[11rem] text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 my-1 sm:my-0 whitespace-nowrap">For Independent</span>
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] text-blue-600">Success.</span>
          </h1>
          
          <p className="text-neutral-400 text-[10px] sm:text-xs md:text-sm max-w-xs sm:max-w-md mx-auto mb-4 md:mb-5 font-medium tracking-wide animate-fade-up delay-100 leading-tight">
            ON-TAPE specialises in 4K cinematography, artist development, and precision audio engineering. We craft the visual identity for the next generation of icons.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-2 w-full sm:w-auto animate-fade-up delay-200 px-8 sm:px-0">
            <Link 
              to="/projects" 
              className="px-5 py-2 md:px-6 md:py-2 bg-blue-600 text-white font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center text-[9px] md:text-[10px] shadow-[0_0_20px_rgba(48,49,248,0.3)] hover:shadow-[0_0_30px_rgba(48,49,248,0.5)]"
            >
              View Projects <Play className="ml-1.5 w-2 h-2 fill-current" />
            </Link>
            <Link 
              to="/contact"
              className="px-5 py-2 md:px-6 md:py-2 border border-neutral-700 text-white font-bold uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center text-[9px] md:text-[10px] bg-black/50 backdrop-blur-md"
            >
              Start Project
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview - Liquid Glass */}
      <section className="relative z-10 py-1 md:py-2">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          
          <div className="bg-black/80 backdrop-blur-md border border-white/5 shadow-2xl rounded-lg p-3 md:p-5 mb-2">
            <div className="flex justify-between items-end mb-2">
                <h2 className="text-sm md:text-xl font-black uppercase tracking-tight text-white leading-none">Selected Works</h2>
                <Link to="/projects" className="hidden md:flex items-center text-[9px] text-neutral-400 hover:text-blue-600 transition-colors uppercase font-bold tracking-widest">
                Explore More <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            
            <div className="mt-2 text-center md:hidden">
                <Link to="/projects" className="inline-flex items-center text-blue-600 font-bold uppercase text-[9px] tracking-widest">
                Explore More <ArrowRight className="ml-1 w-2 h-2" />
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Liquid Glass */}
      <section className="relative z-10 py-1 md:py-2">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
           <div className="bg-black/80 backdrop-blur-md border border-white/5 shadow-2xl rounded-lg p-3 md:p-5">
            <div className="mb-2">
                <h2 className="text-sm md:text-xl font-black uppercase tracking-tight mb-0.5 text-white leading-none">Our Expertise</h2>
                <p className="text-neutral-400 text-[8px] md:text-[9px] max-w-xl">Comprehensive media solutions engineered for the modern artist.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {SERVICES.slice(0, 3).map((service, index) => (
                <div key={index} className="p-2 md:p-3 border border-white/10 bg-black hover:bg-neutral-900 transition-all duration-300 group rounded-lg shadow-sm hover:shadow-md">
                    <div className="mb-1 text-neutral-500 group-hover:text-blue-600 transition-colors scale-75 md:scale-90 origin-left">{React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5" })}</div>
                    <h3 className="text-[9px] md:text-[10px] font-bold uppercase mb-0.5 text-white">{service.title}</h3>
                    <p className="text-neutral-500 text-[8px] leading-relaxed">{service.description}</p>
                </div>
                ))}
            </div>

            <div className="mt-2 text-center">
                <Link 
                to="/services" 
                className="inline-block px-3 py-1 md:px-4 md:py-1.5 border border-neutral-800 bg-black/50 text-neutral-400 text-[8px] md:text-[9px] font-bold uppercase tracking-widest hover:border-blue-600 hover:text-white transition-all rounded-full"
                >
                View All Services
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="relative z-10 py-1 md:py-2">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="bg-gradient-to-br from-neutral-900/80 to-black/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-lg overflow-hidden">
                <div className="p-3 md:p-4 border-b border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2">
                        <div>
                            <span className="text-blue-600 font-bold tracking-widest text-[8px] uppercase mb-0.5 block">Strategic Alliance</span>
                            <h2 className="text-lg md:text-3xl font-black uppercase tracking-tighter text-white mb-1 leading-none">
                                Partnerships
                            </h2>
                            <p className="text-neutral-400 max-w-2xl text-[8px] md:text-[10px] font-medium leading-relaxed mb-2">
                                To bring our studio, engineering, music production, and mix & mastering services to life with industry-leading quality, 
                                we have partnered with <span className="font-bold text-white">BRIDGE THE GAP</span>.
                            </p>
                            <a 
                                href={PARTNER_INSTAGRAM_LINK} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center text-[8px] font-bold uppercase tracking-widest text-white border-b border-blue-600 pb-0.5 hover:text-blue-600 transition-colors"
                            >
                                @THISISBTG <ExternalLink className="ml-1 w-2 h-2" />
                            </a>
                        </div>
                        <div className="bg-blue-600 text-white px-4 py-2 rounded text-center w-full md:w-auto shadow-[0_0_15px_rgba(48,49,248,0.3)]">
                             <p className="text-[7px] uppercase tracking-widest text-white/90 mb-0.5">Featured Producer</p>
                             <p className="text-base md:text-lg font-black uppercase leading-none mb-0.5">Eds</p>
                             <p className="text-[7px] text-white/90">ON-TAPE x BTG Team</p>
                        </div>
                    </div>
                </div>

                <div className="p-3 md:p-4 bg-neutral-900/30">
                     <h3 className="text-[8px] font-bold uppercase tracking-widest text-neutral-500 mb-2">Production Credits</h3>
                     {/* Compact grid for 8 items: 4 across on mobile, 8 across on desktop */}
                     <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-3">
                        {PARTNERSHIP_TRACKS.map((track, index) => (
                            <div key={index} className="group relative aspect-square bg-neutral-800 rounded-sm shadow-sm border border-white/5 overflow-hidden hover:shadow-md transition-all duration-300 hover:z-10 hover:scale-105 hover:border-blue-600/50">
                                {/* Album Art Background */}
                                <div className="absolute inset-0 bg-neutral-800">
                                     <img 
                                        src={track.image} 
                                        alt={`${track.artist} - ${track.title}`}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        loading="lazy"
                                        onError={(e) => {
                                            // Fallback if image fails
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                        }}
                                     />
                                     <div className="hidden w-full h-full flex items-center justify-center bg-neutral-800">
                                         <Music2 className="w-4 h-4 text-neutral-500" />
                                     </div>
                                </div>
                                
                                {/* Overlay Content - Only visible on hover to keep it clean */}
                                <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center backdrop-blur-sm">
                                    <p className="text-white font-bold text-[7px] leading-tight mb-0.5 line-clamp-2">{track.title}</p>
                                    <p className="text-neutral-400 text-[6px] uppercase tracking-wider line-clamp-1">{track.artist}</p>
                                </div>
                            </div>
                        ))}
                     </div>
                     
                     {/* Explore More Button for Credits */}
                     <div className="mt-4 text-center">
                        <a 
                            href={PARTNER_CREDITS_LINK}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center px-4 py-1.5 border border-neutral-700 bg-black/50 text-neutral-400 text-[9px] font-bold uppercase tracking-widest hover:border-blue-600 hover:text-white hover:bg-blue-600/10 transition-all rounded-full"
                        >
                            Explore More <ExternalLink className="ml-1.5 w-2 h-2" />
                        </a>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4 md:py-8 bg-blue-600 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-lg md:text-3xl font-black uppercase text-white mb-1 tracking-tighter leading-none">
            Don't Just Release.<br/>Make an Impact.
          </h2>
          <p className="text-white/80 text-[8px] md:text-[10px] mb-2 md:mb-3 max-w-lg mx-auto font-medium uppercase tracking-wide">
            Book now.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-4 py-2 md:px-6 md:py-2.5 bg-white text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-xl text-[8px] md:text-[9px] border border-transparent hover:border-black"
          >
            Submit Your Vision
          </Link>
        </div>
      </section>
    </div>
  );
};