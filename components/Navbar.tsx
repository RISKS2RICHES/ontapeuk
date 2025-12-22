import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { INSTAGRAM_LINK, WHATSAPP_LINK } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', isExternal: false },
    { name: 'Projects', path: '/projects', isExternal: false },
    { name: 'Services', path: '/services', isExternal: false },
    { name: 'Submit Your Vision', path: '/contact', isExternal: false },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <div className="p-1 rounded-sm">
                <Logo />
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-md text-xs md:text-sm font-bold uppercase tracking-wider transition-colors duration-200 text-neutral-400 hover:text-white hover:bg-blue-600/10"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-xs md:text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-blue-600'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a 
                href={INSTAGRAM_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noreferrer"
                  className="block px-3 py-2 rounded-md text-sm font-bold uppercase text-neutral-400 hover:text-white hover:bg-neutral-900"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-bold uppercase ${
                    isActive(link.path)
                      ? 'text-blue-600 bg-neutral-900'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
             <a 
                href={INSTAGRAM_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="block px-3 py-2 text-neutral-400 hover:text-blue-600"
              >
                Instagram
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};