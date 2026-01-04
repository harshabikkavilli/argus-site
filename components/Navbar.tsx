
import React, { useState, useEffect } from 'react';
import { Visibility, Star, Menu, Close } from './Icons';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Docs', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Community', href: '#' }
  ];

  return (
    <>
      <header className="fixed top-0 z-[60] w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/20">
              <Visibility className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">Argus</h1>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href={item.href}>
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white hover:bg-white/10 transition-all hover:border-white/20" href="#">
              <Star className="w-4 h-4" />
              <span>Star on GitHub</span>
              <span className="ml-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-gray-300">2.4k</span>
            </a>

            {/* Hamburger Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <Close className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {/* Background Dimmer */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Menu Panel - Slides down from under header */}
      <div className={`fixed top-20 left-0 w-full z-50 md:hidden transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full invisible'}`}>
        <div className="bg-background border-b border-white/10 px-6 py-8 shadow-2xl relative">
          {/* Grid pattern match */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,70,239,0.05),transparent_70%)] pointer-events-none"></div>
          
          <nav className="relative flex flex-col gap-5">
            {navItems.map((item, idx) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-medium text-gray-300 hover:text-white flex items-center justify-between group py-2"
              >
                <span>{item.name}</span>
                <svg className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </a>
            ))}
            <div className="pt-6 mt-4 border-t border-white/5">
              <a 
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-medium text-white hover:bg-white/10 transition-all hover:border-white/20" 
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500/20" />
                <span>Star on GitHub</span>
                <span className="ml-auto rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-gray-400">2.4k</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
