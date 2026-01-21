
import React, { useRef } from 'react';

const STOPS = [
  {
    name: "Tate Modern",
    desc: "Industrial textures and the iconic brick Switch House architecture.",
    url: "/images/tate-modern.png",
    label: "Stop 01"
  },
  {
    name: "Millennium Bridge",
    desc: "Capturing leading lines and the silver walkway towards the Thames.",
    url: "/images/millennium-bridge.jpg",
    label: "Stop 02"
  },
  {
    name: "St Paul's Reflection",
    desc: "The perfect shot: a mirror reflection of the grand cathedral dome.",
    url: "/images/st-pauls.jpg",
    label: "Stop 03"
  },
  {
    name: "Bloomberg Arcade",
    desc: "Modern rhythmic geometry and bronze-finned vertical architecture.",
    url: "/images/bloomberg.jpg",
    label: "Stop 04"
  },
  {
    name: "Bank Junction",
    desc: "The classical Royal Exchange meeting the city's modern glass giants.",
    url: "/images/bank-royal-exchange.jpg",
    label: "Stop 05"
  }
];

export const RouteTimeline: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-black py-40 overflow-hidden" id="route">
      <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="max-w-2xl">
          <h2 className="text-white text-5xl md:text-8xl font-bold tracking-tighter mb-6">The Route.</h2>
          <p className="text-gray-400 text-xl font-medium leading-relaxed">
            Five iconic stops carefully selected for their unique visual rhythm and photographic potential.
          </p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => scrollRef.current?.scrollBy({ left: -500, behavior: 'smooth' })}
            className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth={2} /></svg>
          </button>
          <button 
            onClick={() => scrollRef.current?.scrollBy({ left: 500, behavior: 'smooth' })}
            className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth={2} /></svg>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-12 overflow-x-auto hide-scrollbar px-[calc(50vw-min(50vw,1280px/2)-24px)] snap-x snap-mandatory pb-16"
      >
        {STOPS.map((stop, idx) => (
          <div 
            key={idx}
            className="flex-none w-[85vw] md:w-[600px] snap-center"
          >
            <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden relative mb-10 group bg-zinc-900 shadow-2xl">
              <img 
                src={stop.url} 
                alt={stop.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
              />
              <div className="absolute top-10 left-10">
                <span className="px-6 py-2 rounded-full bg-white/10 apple-blur border border-white/20 text-white font-bold tracking-widest text-xs uppercase">
                  {stop.label}
                </span>
              </div>
            </div>
            <div className="px-2">
              <h3 className="text-white text-3xl font-bold mb-4 tracking-tight">{stop.name}</h3>
              <p className="text-gray-500 font-medium text-xl leading-relaxed max-w-lg">{stop.desc}</p>
            </div>
          </div>
        ))}
        {/* End spacer */}
        <div className="flex-none w-[10vw]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gray-900 w-full mb-12"></div>
        <p className="text-gray-600 font-medium text-center">
          Starting at 9:30 AM — Meeting at Tate Modern main entrance.
        </p>
      </div>
    </section>
  );
};
