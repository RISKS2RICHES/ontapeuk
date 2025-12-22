import React from 'react';
import { LOGO_IMAGE_URL } from '../constants.tsx';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
        <div className="w-10 h-10 overflow-hidden rounded-sm">
           <img 
            src={LOGO_IMAGE_URL} 
            alt="ON-TAPE Icon" 
            className="w-full h-full object-cover"
            onError={(e) => {
                e.currentTarget.style.display = 'none';
            }}
           />
        </div>
      <span className="text-2xl font-black tracking-tighter text-white">
        ON<span className="text-blue-600">-</span>TAPE<span className="text-blue-600">.</span>
      </span>
    </div>
  );
};