import React, { useState } from 'react';
import { SERVICES, PACKAGES, WHATSAPP_NUMBER } from '../constants';
import { ArrowRight, Check, MessageCircle, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

export const Services: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-12 bg-black text-white">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-neutral-900 to-black opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Packages Section */}
        <div className="mb-20 animate-fade-up">
            <div className="text-center mb-10">
                <span className="text-blue-600 font-bold tracking-widest text-[10px] uppercase mb-2 block">Pricing</span>
                <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
                    Production Packages
                </h1>
                <p className="text-neutral-400 text-xs max-w-lg mx-auto mb-4">
                    Transparent pricing for every stage of your career. 
                </p>
                <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-blue-600/30 px-4 py-2 rounded-sm">
                    <AlertCircle size={14} className="text-blue-600" />
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wide">
                        Payment takes place after contact, not via website
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PACKAGES.map((pkg, idx) => (
                    <div 
                        key={idx} 
                        className={`relative p-6 flex flex-col justify-between border ${pkg.highlight ? 'border-blue-600 bg-blue-900/20' : 'border-white/10 bg-neutral-900/50'} backdrop-blur-sm rounded-lg hover:bg-neutral-900 transition-colors duration-300`}
                    >
                        {pkg.highlight && (
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-bold uppercase px-2 py-1 rounded-bl-lg rounded-tr-lg">
                                Best Value
                            </div>
                        )}
                        <div>
                            <h3 className="text-lg font-black uppercase text-white mb-1">{pkg.name}</h3>
                            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">{pkg.price}</div>
                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-xs text-neutral-400 font-medium leading-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a 
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am interested in the ${pkg.name}`}
                            target="_blank"
                            rel="noreferrer"
                            className={`flex items-center justify-center gap-2 w-full py-3 rounded-sm font-bold uppercase text-[10px] tracking-widest transition-all ${pkg.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white text-black hover:bg-neutral-200'}`}
                        >
                            <MessageCircle size={16} /> Contact Now
                        </a>
                    </div>
                ))}
            </div>
        </div>

        {/* Expertise Header */}
        <div className="mb-8 animate-fade-up delay-100 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-neutral-500 font-bold tracking-widest text-[10px] uppercase mb-1 block">Services</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                Our <span className="text-blue-600">Expertise</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-[10px] md:text-xs max-w-sm text-right font-medium">
             We work with artists of all budgets if we see potential. We are open to all genres and visions.
          </p>
        </div>

        {/* Expandable Services List */}
        <div className="flex flex-col animate-fade-up delay-200">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
                <div 
                key={index} 
                className={`group border-b border-white/10 transition-colors duration-300 ${isExpanded ? 'bg-neutral-900/30' : 'hover:bg-neutral-900/20'}`}
                >
                <div 
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 md:py-8 cursor-pointer select-none"
                    onClick={() => toggleService(index)}
                >
                    <div className="flex items-center gap-6 md:w-1/2">
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">0{index + 1}</span>
                        <h3 className={`text-xl md:text-3xl font-black uppercase tracking-tight leading-none transition-colors ${isExpanded ? 'text-blue-600' : 'text-white group-hover:text-blue-600'}`}>
                            {service.title}
                        </h3>
                    </div>
                    
                    <div className="md:w-1/3 hidden md:block">
                        <p className="text-neutral-400 text-xs leading-relaxed font-medium line-clamp-1">
                            {service.description}
                        </p>
                    </div>

                    <div className="md:w-1/12 flex justify-end pr-2">
                        <div className={`p-2 rounded-full border border-white/10 transition-all duration-300 ${isExpanded ? 'bg-blue-600 text-white border-blue-600' : 'text-neutral-500 group-hover:text-white'}`}>
                            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                    </div>
                </div>

                {/* Expanded Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col md:flex-row gap-8 pl-0 md:pl-12">
                        <div className="md:w-1/2">
                            <p className="text-white text-sm leading-relaxed font-medium mb-4">
                                {service.details}
                            </p>
                            <p className="text-neutral-500 text-xs">
                                * Tailored to your project scope. Contact us to discuss specific requirements.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex items-center">
                            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to discuss ${service.title}`} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-white transition-colors">
                                Enquire about this service <ArrowRight size={14} className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};