import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ExternalLink, Music2 } from 'lucide-react';
import { PROJECTS, SERVICES, PARTNERSHIP_TRACKS, PARTNER_INSTAGRAM_LINK, PARTNER_CREDITS_LINK, WHATSAPP_LINK } from '../constants.tsx';
import { ProjectCard } from '../components/ProjectCard.tsx';

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
            <span className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl block">The Blueprint</span>
            {/* Middle line smaller on mobile to fit on one line */}
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 my-1 sm:my-0 whitespace-nowrap block">For Independent</span>
            <span className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-600 block">Success.</span>
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
      <section className="relative z-10 py-2 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-black/80 backdrop-blur-md border border-white/5 shadow-2xl rounded-lg p-5 md:p-8 mb-4">
            <div className="flex justify-between items-end mb-4">
                <h2 className="text-base md:text-2xl font-black uppercase tracking-tight text-white leading-none">Selected Works</h2>
                <Link to="/projects" className="hidden md:flex items-center text-[10px] md:text-xs text-neutral-400 hover:text-blue-600 transition-colors uppercase font-bold tracking-widest">
                Explore More <ArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            
            <div className="mt-4 text-center md:hidden">
                <Link to="/projects" className="inline-flex items-center text-blue-600 font-bold uppercase text-[10px] tracking-widest">
                Explore More <ArrowRight className="ml-1.5 w-3 h-3" />
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Liquid Glass */}
      <section className="relative z-10 py-2 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-black/80 backdrop-blur-md border border-white/5 shadow-2xl rounded-lg p-5 md:p-8">
            <div className="mb-4">
                <h2 className="text-base md:text-2xl font-black uppercase tracking-tight mb-1 text-white leading-none">Our Expertise</h2>
                <p className="text-neutral-400 text-[10px] md:text-xs max-w-xl">Comprehensive media solutions engineered for the modern artist.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SERVICES.slice(0, 3).map((service, index) => (
                <div key={index} className="p-4 md:p-5 border border-white/10 bg-black hover:bg-neutral-900 transition-all duration-300 group rounded-lg shadow-sm hover:shadow-md">
                    <div className="mb-2 text-neutral-500 group-hover:text-blue-600 transition-colors origin-left">{React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6 md:w-7 md:h-7" })}</div>
                    <h3 className="text-[10px] md:text-xs font-bold uppercase mb-1 text-white">{service.title}</h3>
                    <p className="text-neutral-500 text-[10px] md:text-[11px] leading-relaxed">{service.description}</p>
                </div>
                ))}
            </div>

            <div className="mt-4 text-center">
                <Link 
                to="/services" 
                className="inline-block px-5 py-2 md:px-6 md:py-2.5 border border-neutral-800 bg-black/50 text-neutral-400 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:border-blue-600 hover:text-white transition-all rounded-full"
                >
                View All Services
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="relative z-10 py-2 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-neutral-900/80 to-black/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-lg overflow-hidden">
                <div className="p-5 md:p-8 border-b border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div>
                            <span className="text-blue-600 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-1 block">Strategic Alliance</span>
                            <h2 className="text-xl md:text-4xl font-black uppercase tracking-tighter text-white mb-2 leading-none">
                                Partnerships
                            </h2>
                            <p className="text-neutral-400 max-w-2xl text-[10px] md:text-xs font-medium leading-relaxed mb-3">
                                To bring our studio, engineering, music production, and mix & mastering services to life with industry-leading quality, 
                                we have partnered with <span className="font-bold text-white">BRIDGE THE GAP</span>.
                            </p>
                            <a 
                                href={PARTNER_INSTAGRAM_LINK} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-white border-b border-blue-600 pb-0.5 hover:text-blue-600 transition-colors"
                            >
                                @THISISBTG <ExternalLink className="ml-1.5 w-3 h-3" />
                            </a>
                        </div>
                        <div className="bg-blue-600 text-white px-5 py-3 md:px-6 md:py-4 rounded text-center w-full md:w-auto shadow-[0_0_20px_rgba(48,49,248,0.3)]">
                             <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/90 mb-1">Featured Producer</p>
                             <p className="text-xl md:text-2xl font-black uppercase leading-none mb-1">Eds</p>
                             <p className="text-[9px] md:text-[10px] text-white/90">ON-TAPE x BTG Team</p>
                        </div>
                    </div>
                </div>

                <div className="p-5 md:p-8 bg-neutral-900/30">
                     <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Production Credits</h3>
                     {/* Text Only List for Credits */}
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                        {PARTNERSHIP_TRACKS.map((track, index) => (
                            <div key={index} className="flex flex-col justify-center p-3 md:p-4 bg-neutral-800/50 border border-white/5 rounded-sm hover:border-blue-600/50 transition-colors group">
                                <p className="text-white font-bold text-[10px] md:text-xs uppercase leading-tight truncate group-hover:text-blue-500 transition-colors" title={track.title}>
                                    {track.title}
                                </p>
                                <p className="text-neutral-500 text-[9px] md:text-[10px] uppercase tracking-wider truncate" title={track.artist}>{track.artist}</p>
                            </div>
                        ))}
                     </div>

                     {/* Streaming Platforms */}
                     <div className="border-t border-white/5 pt-4 pb-2">
                         <p className="text-[9px] md:text-[10px] text-neutral-600 uppercase tracking-widest text-center mb-4">Available on all major platforms</p>
                         <div className="flex justify-center items-center gap-8 md:gap-12">
                             {/* Spotify */}
                             <a href="#" className="text-neutral-500 hover:text-[#1DB954] transition-colors" aria-label="Spotify">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 fill-current"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.32 9.779-.66 13.439 1.56.48.3.6.84.301 1.26zm.12-3.36C15.222 8.4 8.822 8.16 5.142 9.3c-.599.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.2-1.26 11.281-1.02 15.721 1.62.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                             </a>
                             {/* Apple Music Logo (Accurate) */}
                             <a href="#" className="text-neutral-500 hover:text-[#FA243C] transition-colors" aria-label="Apple Music">
                                <svg viewBox="0 0 384 512" className="h-6 md:h-7 w-auto fill-current">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
                                </svg>
                             </a>
                             {/* SoundCloud */}
                             <a href="#" className="text-neutral-500 hover:text-[#FF5500] transition-colors" aria-label="SoundCloud">
                                <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-12 md:h-12 fill-current"><path d="M11.52 6.162c-2.43 0-4.62.96-6.18 2.51l.36.36c1.47-1.46 3.52-2.36 5.82-2.36 2.37 0 4.49.96 5.99 2.5l.36-.36c-1.57-1.61-3.8-2.65-6.35-2.65zM23.996 11.255c-.067-2.345-1.956-4.225-4.309-4.225-.337 0-.665.041-.983.109C17.78 3.09 14.197.001 9.94.001 5.347.001 1.517 3.518.847 8.026.331 8.356 0 8.925 0 9.563v9.873c0 .867.703 1.57 1.57 1.57h20.856c.867 0 1.57-.703 1.57-1.57v-8.181zM2.873 19.382h-1.3v-8.24h1.3v8.24zm2.668 0h-1.3v-9.522h1.3v9.522zm2.668 0h-1.3v-12.01h1.3v12.01zm2.669 0h-1.3V5.592h1.3v13.79zm2.669 0h-1.3V7.276h1.3v12.106zm8.851 0h-4.832V9.308h.277c2.618 0 4.742 2.124 4.742 4.742 0 .11-.005.218-.016.326l-.171 4.998z"/></svg>
                             </a>
                             {/* Deezer */}
                             <a href="#" className="text-neutral-500 hover:text-[#00C7F2] transition-colors" aria-label="Deezer">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 fill-current"><path d="M12.915 13.978h4.526V18.5h-4.526zM7.34 13.978h4.524V18.5H7.34zm11.152 0H23.02V18.5h-4.527zM1.765 13.978h4.525V18.5H1.765zm5.575-5.545h4.524v4.523H7.34zm5.575 0h4.526v4.523h-4.526zm5.577 0H23.02v4.523h-4.527zM7.34 2.887h4.524v4.524H7.34zm5.575 0h4.526v4.524h-4.526zm5.577 0H23.02v4.524h-4.527z"/></svg>
                             </a>
                         </div>
                     </div>
                     
                     {/* Explore More Button for Credits */}
                     <div className="mt-6 text-center">
                        <a 
                            href={PARTNER_CREDITS_LINK}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center px-5 py-2 md:px-6 md:py-2.5 border border-neutral-700 bg-black/50 text-neutral-400 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:border-blue-600 hover:text-white hover:bg-blue-600/10 transition-all rounded-full"
                        >
                            Explore More <ExternalLink className="ml-2 w-3 h-3" />
                        </a>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 bg-blue-600 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-4xl font-black uppercase text-white mb-2 tracking-tighter leading-none">
            Don't Just Release.<br/>Make an Impact.
          </h2>
          <p className="text-white/80 text-[10px] md:text-xs mb-4 md:mb-5 max-w-lg mx-auto font-medium uppercase tracking-wide">
            Book now.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-6 py-3 md:px-8 md:py-3.5 bg-white text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-xl text-[10px] md:text-xs border border-transparent hover:border-black"
          >
            Submit Your Vision
          </Link>
        </div>
      </section>
    </div>
  );
};