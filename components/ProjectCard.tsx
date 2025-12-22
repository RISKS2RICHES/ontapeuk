import React from 'react';
import { Project } from '../types';
import { Youtube, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a 
      href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
      target="_blank" 
      rel="noreferrer"
      className="group relative w-full h-40 md:h-48 bg-neutral-900 border border-white/10 hover:border-blue-600 transition-all duration-300 flex flex-col justify-between p-4 md:p-6 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
        <Youtube className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-colors" />

      <div className="relative z-10">
        <h3 className="text-blue-600 font-bold text-[10px] md:text-sm uppercase tracking-widest mb-1">{project.artist}</h3>
        <p className="text-white font-black text-xl md:text-2xl uppercase leading-none group-hover:translate-x-1 transition-transform duration-300">
          {project.song}
        </p>
      </div>

      <div className="relative z-10 flex items-center text-[10px] md:text-xs text-neutral-500 font-bold uppercase tracking-wider group-hover:text-white transition-colors">
        Watch on YouTube <ExternalLink className="ml-2 w-3 h-3" />
      </div>
    </a>
  );
};