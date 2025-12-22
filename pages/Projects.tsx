import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS, INSTAGRAM_LINK } from '../constants';
import { ArrowUpRight, Instagram } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-8 bg-black text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12 border-b border-white/10 pb-8 animate-fade-up">
          <span className="text-blue-600 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-2 block">Portfolio</span>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-[0.9]">
            Selected <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Productions</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl text-xs md:text-sm font-medium leading-relaxed">
            A curated selection of our visual work. We focus on creating high-impact visuals that define artist identities.
          </p>
        </div>

        {/* Project Grid - Tighter and smaller as requested */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16 animate-fade-up delay-200">
          {PROJECTS.map((project) => (
            <div key={project.id} className="h-40 md:h-48">
                 <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Instagram CTA - Clean and centered */}
        <div className="flex flex-col items-center justify-center pt-8 border-t border-white/10 animate-fade-up delay-300">
            <p className="text-neutral-400 text-[10px] md:text-xs uppercase tracking-widest mb-4">View our latest daily releases</p>
            <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-neutral-900 border border-white/10 hover:border-blue-600 hover:bg-blue-600/10 text-white transition-all duration-300 rounded-sm"
            >
                <Instagram size={18} className="group-hover:text-blue-600 transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest">Explore More on Instagram</span>
                <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
        </div>
      </div>
    </div>
  );
};