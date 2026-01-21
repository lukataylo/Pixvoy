
import React, { useRef } from 'react';

const CARDS = [
  {
    title: "The Industrial Soul",
    location: "Tate Modern",
    description: "Start at the heart of London's art scene, capturing brutalist lines and industrial textures.",
    url: "/images/tate-modern.png"
  },
  {
    title: "The Silver Line",
    location: "Millennium Bridge",
    description: "Master leading lines and perfect symmetry as we cross the Thames.",
    url: "/images/millennium-bridge.jpg"
  },
  {
    title: "Golden Hour Glow",
    location: "St Paul's Cathedral",
    description: "Learn to work with complex light and grand historic architecture.",
    url: "/images/st-pauls.jpg"
  },
  {
    title: "Minimalist Geometry",
    location: "Bloomberg Arcade",
    description: "Discover the hidden rhythms of modern glass and bronze facades.",
    url: "/images/bloomberg.jpg"
  },
  {
    title: "Historic Junctions",
    location: "Bank & Royal Exchange",
    description: "Finish at the iconic financial hub, capturing street photography in the twilight.",
    url: "/images/bank-royal-exchange.jpg"
  }
];

export const ImageCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#f5f5f7] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-black text-4xl md:text-6xl font-bold tracking-tight">Capturing the Capital.</h2>
        <p className="text-gray-500 text-xl font-medium mt-4">Every stop is a new lesson in light and form.</p>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto hide-scrollbar px-[calc(50vw-min(50vw,1280px/2)-24px)] snap-x snap-mandatory"
      >
        {CARDS.map((card, idx) => (
          <div 
            key={idx}
            className="flex-none w-[85vw] md:w-[600px] aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden relative group snap-center"
          >
            <img 
              src={card.url} 
              alt={card.location}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">{card.location}</span>
              <h3 className="text-white text-3xl font-bold mt-2">{card.title}</h3>
              <p className="text-gray-300 mt-4 leading-relaxed line-clamp-2 md:line-clamp-none">{card.description}</p>
            </div>
          </div>
        ))}
        {/* Padding card for scroll end */}
        <div className="flex-none w-24"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 flex justify-end gap-4">
        <button 
          onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};
