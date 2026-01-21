
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 apple-blur border-b border-gray-800 h-14' : 'bg-transparent h-20'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 100 100" className="fill-white">
            <rect x="20" y="20" width="60" height="60" rx="15" fill="none" stroke="currentColor" strokeWidth="6" />
            <circle cx="50" cy="50" r="15" fill="currentColor" />
            <circle cx="70" cy="30" r="4" fill="currentColor" />
          </svg>
          <span className="font-bold text-lg tracking-tight uppercase">PIXVOY</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
          <a href="#route" className="hover:text-white transition-colors">The Route</a>
          <a href="#details" className="hover:text-white transition-colors">Details</a>
          <a href="#details" className="text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-500 transition-colors">Book Now</a>
        </div>

        <button className="md:hidden text-white" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
