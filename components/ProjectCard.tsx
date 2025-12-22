import React from 'react';
import { Project } from '../types.ts';
import { Youtube, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Generate YouTube thumbnail URL
  const thumbnailUrl = project.thumbnail || `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`;

  return (
    <a 
      href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
      target="_blank" 
      rel="noreferrer"
      className="group relative w-full h-40 md:h-48 bg-neutral-900 border border-white/10 hover:border-blue-600 transition-all duration-300 flex flex-col justify-end p-4 md:p-6 overflow-hidden rounded-sm"
    >
      {/* Background Thumbnail with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={thumbnailUrl} 
          alt={`${project.artist} - ${project.song}`}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
        {/* Lighter gradient for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
      </div>

      <div className="absolute top-0 right-0 p-3 md:p-4 z-20">
        <Youtube className="w-8 h-8 md:w-10 md:h-10 text-white/80 group-hover:text-blue-600 transition-colors drop-shadow-md" />
      </div>

      <div className="relative z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-blue-500 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1 drop-shadow-sm">{project.artist}</h3>
        <div className="flex items-center justify-between">
            <p className="text-white font-black text-xl md:text-2xl uppercase leading-none drop-shadow-md">
            {project.song}
            </p>
            <ExternalLink className="w-4 h-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </a>
  );
};