import React, { useState } from 'react';
import { BudgetOption, FormData } from '../types';
import { Sparkles, Send, Loader2, Mail, MapPin, Instagram } from 'lucide-react';
import { refineConcept } from '../services/gemini';
import { INSTAGRAM_LINK } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    instagram: '',
    songName: '',
    budget: BudgetOption.UNDER_1000,
    location: '',
    deadline: '',
    concept: '',
    referenceLinks: '',
    notes: ''
  });

  const [isEnhancing, setIsEnhancing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEnhanceConcept = async () => {
    if (!formData.concept || formData.concept.length < 5) {
      alert("Please enter a rough concept first.");
      return;
    }
    
    setIsEnhancing(true);
    const enhanced = await refineConcept(formData.concept, formData.songName, formData.name);
    setFormData(prev => ({ ...prev, concept: enhanced }));
    setIsEnhancing(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = "Vision";
    const body = `Name: ${formData.name}
Email: ${formData.email}
Instagram: ${formData.instagram}
Song Name: ${formData.songName}
Budget: ${formData.budget}
Location: ${formData.location}
Deadline: ${formData.deadline}
Reference Links: ${formData.referenceLinks}

Concept / Vision:
${formData.concept}
`.trim();

    window.location.href = `mailto:admin@on-tape.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen pt-20 md:pt-28 pb-12 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column: Info */}
            <div className="lg:col-span-2 animate-fade-up">
                <h1 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-6 leading-[0.9]">
                    Submit <br/> Your <span className="text-blue-600">Vision</span>
                </h1>
                <p className="text-neutral-600 text-sm font-medium mb-10 leading-relaxed">
                    Ready to elevate your visual identity? Provide us with the details of your project. Serious enquiries only.
                </p>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Direct Contact</h3>
                        <a href="mailto:admin@on-tape.com" className="flex items-center text-lg font-bold text-black hover:text-blue-600 transition-colors">
                            <Mail className="w-5 h-5 mr-3" /> admin@on-tape.com
                        </a>
                    </div>
                    <div>
                        <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Studio Base</h3>
                        <div className="flex items-center text-lg font-bold text-black">
                            <MapPin className="w-5 h-5 mr-3" /> London, United Kingdom
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Socials</h3>
                        <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="flex items-center text-lg font-bold text-black hover:text-blue-600 transition-colors">
                            <Instagram className="w-5 h-5 mr-3" /> @ontape.uk
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-3 animate-fade-up delay-100">
                <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 p-6 md:p-10 shadow-2xl shadow-black/5 space-y-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white border-b-2 border-neutral-200 focus:border-blue-600 px-0 py-3 text-sm font-bold text-black focus:outline-none transition-colors placeholder:font-normal"
                        placeholder="Full Name"
                        required
                    />
                    </div>
                    
                    <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Email Address *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border-b-2 border-neutral-200 focus:border-blue-600 px-0 py-3 text-sm font-bold text-black focus:outline-none transition-colors placeholder:font-normal"
                        placeholder="name@example.com"
                        required
                    />
                    </div>

                    <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Instagram</label>
                    <input
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        className="w-full bg-white border-b-2 border-neutral-200 focus:border-blue-600 px-0 py-3 text-sm font-bold text-black focus:outline-none transition-colors placeholder:font-normal"
                        placeholder="@username"
                    />
                    </div>

                    <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Song Name *</label>
                    <input
                        type="text"
                        name="songName"
                        value={formData.songName}
                        onChange={handleChange}
                        className="w-full bg-white border-b-2 border-neutral-200 focus:border-blue-600 px-0 py-3 text-sm font-bold text-black focus:outline-none transition-colors placeholder:font-normal"
                        placeholder="Track Title"
                        required
                    />
                    </div>

                    <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Budget (GBP) *</label>
                    <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-white border-b-2 border-neutral-200 focus:border-blue-600 px-0 py-3 text-sm font-bold text-black focus:outline-none transition-colors appearance-none"
                        required
                    >
                        {Object.values(BudgetOption).map((option) => (
                        <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    </div>

                    <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-white border-b-2 border-neutral-200 focus:border-blue-600 px-0 py-3 text-sm font-bold text-black focus:outline-none transition-colors placeholder:font-normal"
                        placeholder="City / Area"
                    />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Target Deadline</label>
                    <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        className="w-full bg-white border-b-2 border-neutral-200 focus:border-blue-600 px-0 py-3 text-sm font-bold text-black focus:outline-none transition-colors placeholder:font-normal"
                    />
                </div>

                <div className="space-y-1 pt-4">
                    <div className="flex justify-between items-center mb-1">
                        <label className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Video Concept / Vision *</label>
                        <button 
                            type="button"
                            onClick={handleEnhanceConcept}
                            disabled={isEnhancing}
                            className="flex items-center text-[10px] text-neutral-600 hover:text-black transition-colors uppercase tracking-wider bg-white px-2 py-1 border border-neutral-200 rounded-full hover:bg-neutral-100"
                        >
                            {isEnhancing ? <Loader2 className="w-3 h-3 mr-1 animate-spin" /> : <Sparkles className="w-3 h-3 mr-1" />}
                            {isEnhancing ? 'Enhancing...' : 'Enhance with AI'}
                        </button>
                    </div>
                    <textarea
                    name="concept"
                    value={formData.concept}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white border border-neutral-200 p-4 text-sm font-medium text-black focus:border-blue-600 focus:outline-none transition-colors resize-none placeholder:font-normal"
                    placeholder="Describe your vision..."
                    required
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Reference Links</label>
                    <input
                    type="text"
                    name="referenceLinks"
                    value={formData.referenceLinks}
                    onChange={handleChange}
                    className="w-full bg-white border-b-2 border-neutral-200 focus:border-blue-600 px-0 py-3 text-sm font-bold text-black focus:outline-none transition-colors placeholder:font-normal"
                    placeholder="YouTube / Instagram Links"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-5 bg-black hover:bg-blue-600 text-white font-black uppercase tracking-widest text-sm transition-all transform hover:-translate-y-1 shadow-lg flex justify-center items-center mt-6"
                >
                    Send Enquiry <Send className="ml-2 w-4 h-4" />
                </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};