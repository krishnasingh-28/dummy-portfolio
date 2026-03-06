import React, { useState } from 'react';
import { skillsData } from '../data/mock';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categories = ["All", "Machine Learning & AI", "Programming", "Data", "Tools"];

const SkillsSection = () => {
  const sectionRef = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? skillsData
    : skillsData.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-element">
          <h2 className="section-heading">Technical Skills</h2>
        </div>

        {/* Filter Tabs - immediate visual feedback */}
        <div className="reveal-element flex flex-wrap justify-center gap-3 mt-12" style={{ transitionDelay: '0.15s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm rounded-lg border transition-all duration-150 ${
                activeFilter === cat
                  ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400'
                  : 'bg-white/[0.03] border-white/[0.06] text-gray-500 hover:text-gray-300 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid - loads immediately when filter changes (no reveal delay) */}
        <div key={activeFilter} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-14 skills-grid-immediate">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="skill-card glass-card rounded-xl p-5 flex flex-col items-center text-center group hover:border-cyan-500/30 transition-all duration-300 opacity-100"
            >
              <div className="skill-card-icon-wrap w-14 h-14 rounded-xl bg-white/[0.04] flex items-center justify-center mb-4 group-hover:bg-white/[0.08] transition-all duration-300 overflow-hidden">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className={`w-9 h-9 object-contain ${skill.logoLight ? 'skill-logo-light' : ''}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-2xl font-bold text-cyan-400">${skill.name.charAt(0)}</span>`;
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {skill.name}
              </h3>
              <span className="text-[11px] text-gray-600 mt-1">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
