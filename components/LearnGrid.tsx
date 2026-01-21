
import React from 'react';

const SKILLS = [
  {
    category: "Photography",
    items: [
      "Composition (Rule of Thirds, Symmetry)",
      "Hidden iPhone settings",
      "Architectural & Street Photography",
      "Reflections & Light manipulation",
      "Long exposure using Live Photos"
    ],
    color: "from-blue-500/10 to-transparent"
  },
  {
    category: "Video",
    items: [
      "Cinematic mode mastery",
      "Time-lapse & Hyperlapse",
      "Vertical video for Social Media",
      "B-roll gathering techniques",
      "Stabilization workflows"
    ],
    color: "from-purple-500/10 to-transparent"
  },
  {
    category: "Post-Production",
    items: [
      "Quick editing mobile workflow",
      "Recommended apps & presets",
      "Instagram optimization tips",
      "Batch editing techniques",
      "Portrait depth control"
    ],
    color: "from-pink-500/10 to-transparent"
  }
];

export const LearnGrid: React.FC = () => {
  return (
    <section className="bg-black py-32 px-6" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Skills for the modern eye.</h2>
          <p className="text-gray-400 text-xl max-w-2xl">From the shutter click to the final share, we cover everything you need to create world-class mobile content.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className={`p-10 rounded-[2rem] bg-gradient-to-br ${skill.color} border border-gray-800 flex flex-col h-full`}>
              <h3 className="text-2xl font-bold mb-8">{skill.category}</h3>
              <ul className="space-y-4 flex-grow">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300">
                    <span className="text-blue-500 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
