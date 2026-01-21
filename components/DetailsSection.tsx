
import React from 'react';

export const DetailsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-32 px-6" id="details">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-black text-4xl md:text-6xl font-bold tracking-tight mb-12">Fine details.</h2>
          <div className="space-y-10">
            <div className="flex gap-8 border-b border-gray-200 pb-8">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-1">2.5 - 3 Hours</h4>
                <p className="text-gray-500">Comprehensive walk including a social debrief at a nearby cafe.</p>
              </div>
            </div>
            <div className="flex gap-8 border-b border-gray-200 pb-8">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-1">Small Groups</h4>
                <p className="text-gray-500">Limited to 8-12 participants for a truly intimate learning environment.</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-1">Tate Modern</h4>
                <p className="text-gray-500">Meeting point at the main entrance. Sessions start at 9:30am or 4pm for optimal light.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-12 rounded-[3rem] flex flex-col justify-center items-center text-center">
          <div className="mb-8">
            <svg width="60" height="60" viewBox="0 0 100 100" className="fill-white">
              <rect x="20" y="20" width="60" height="60" rx="15" fill="none" stroke="currentColor" strokeWidth="6" />
              <circle cx="50" cy="50" r="15" fill="currentColor" />
              <circle cx="70" cy="30" r="4" fill="currentColor" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-4">Perfect For...</h3>
          <ul className="text-xl text-gray-400 space-y-4 font-medium mb-12">
            <li>iPhone users maximizing their gear</li>
            <li>Beginner to intermediate photographers</li>
            <li>Content creators & social enthusiasts</li>
            <li>Anyone wanting a creative view of London</li>
          </ul>
          <div className="bg-white/10 p-8 rounded-3xl w-full">
            <h4 className="font-bold mb-4">What to bring</h4>
            <p className="text-gray-400">Fully charged iPhone, comfortable walking shoes, and weather-appropriate clothing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
