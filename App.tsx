
import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { RouteTimeline } from './components/RouteTimeline';
import { DetailsSection } from './components/DetailsSection';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30 bg-black text-white">
      <Navbar scrolled={scrolled} />
      
      <main>
        {/* NEW HEADER: Derived from the requested "last part" style */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-12">
            See London.<br/>
            <span className="text-gray-500">Differently.</span>
          </h1>
          <div className="flex flex-col items-center gap-8">
            <button className="bg-white text-black px-12 py-5 rounded-full font-semibold text-xl hover:scale-105 transition-transform">
              Book Your Walk
            </button>
            <p className="text-gray-500 text-sm tracking-widest uppercase font-medium">Limited to 8-12 spots per session</p>
          </div>
        </section>
        
        {/* REFINED EXPERIENCE OVERVIEW - Rounded corners removed per request */}
        <section className="py-32 px-6 md:px-12 bg-white text-black relative z-10 shadow-2xl">
          <div className="max-w-4xl mx-auto space-y-10 text-center">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">The Walk</h2>
            <p className="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              A curated 2.5-hour journey through the heart of the capital.
            </p>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Explore the perfect blend of industrial textures and classical grandeur while mastering the lens always in your pocket.
            </p>
          </div>
        </section>

        {/* REDESIGNED ROUTE CAROUSEL WITH ATTACHED IMAGES */}
        <RouteTimeline />

        {/* BOOKING DETAILS */}
        <DetailsSection />

        {/* FINAL CALL TO ACTION */}
        <section className="py-40 bg-black text-center flex flex-col items-center justify-center">
          <div className="mb-12">
            <svg width="64" height="64" viewBox="0 0 100 100" className="fill-white opacity-20 mx-auto">
              <rect x="20" y="20" width="60" height="60" rx="15" fill="none" stroke="currentColor" strokeWidth="6" />
              <circle cx="50" cy="50" r="15" fill="currentColor" />
              <circle cx="70" cy="30" r="4" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">Ready to shoot?</h2>
          <button className="bg-white text-black px-12 py-5 rounded-full font-semibold text-xl hover:scale-105 transition-transform">
            Book Next Session
          </button>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-gray-900 bg-black text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 PIXVOY. Capture the moment.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
