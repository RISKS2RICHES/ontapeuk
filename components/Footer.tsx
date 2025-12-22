import React from 'react';
import { Logo } from './Logo';
import { INSTAGRAM_LINK, WHATSAPP_LINK } from '../constants';
import { Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-6 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          <div className="col-span-1 lg:col-span-2">
            <div className="inline-block p-1 rounded-sm mb-3">
                <Logo />
            </div>
            <p className="text-neutral-400 max-w-md text-xs leading-relaxed font-medium">
              Based in the UK, operating globally. ON-TAPE bridges the gap between sonic potential and visual reality. 
              We do not just record; we engineer careers.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/projects" className="text-neutral-400 hover:text-blue-600 transition-colors text-xs font-bold uppercase tracking-wider">Our Work</Link></li>
              <li><Link to="/services" className="text-neutral-400 hover:text-blue-600 transition-colors text-xs font-bold uppercase tracking-wider">Services</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-blue-600 transition-colors text-xs font-bold uppercase tracking-wider">Submit Vision</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Connect</h4>
            <a 
              href={INSTAGRAM_LINK} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center group text-neutral-400 hover:text-blue-600 transition-colors text-xs font-bold uppercase tracking-wider"
            >
              <Instagram size={16} className="mr-2" />
              <span>@ontape.uk</span>
              <ArrowRight size={12} className="ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-[10px] uppercase tracking-wider">
            &copy; {new Date().getFullYear()} ON-TAPE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span className="text-neutral-500 text-[10px] uppercase tracking-wider">Est. 2024 London</span>
          </div>
        </div>
      </div>
    </footer>
  );
};