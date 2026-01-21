
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="/images/millennium-bridge.jpg" 
          alt="London Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-sm md:text-lg font-semibold uppercase tracking-[0.3em] mb-4 text-white/80">London Photography Walk</h1>
        <p className="text-5xl md:text-[8rem] font-bold tracking-tighter leading-none mb-8">
          Discover. <br/>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Capture.</span>
        </p>
        <p className="text-lg md:text-2xl font-medium text-gray-400 max-w-2xl mx-auto mb-12">
          Master the lens that's always in your pocket. Join a curated journey through London's visual icons.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors w-full md:w-auto">
            Book Session
          </button>
          <a href="#experience" className="text-blue-400 flex items-center gap-2 font-medium hover:underline">
            Watch the story 
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
