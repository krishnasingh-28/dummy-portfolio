import React from 'react';
import { Brain, Code, Database } from 'lucide-react';
import { skillsData } from '../data/mock';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categoryIcons = {
  'Machine Learning & AI': <Brain size={24} className="text-cyan-400" />,
  'Programming Languages': <Code size={24} className="text-purple-400" />,
  'Data & Tools': <Database size={24} className="text-blue-400" />,
};

const SkillsSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" className="relative py-24 md:py-32" ref={sectionRef}>
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-element">
          <h2 className="section-heading">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {skillsData.map((category, i) => (
            <div
              key={i}
              className="reveal-element glass-card rounded-xl p-8 group hover:border-cyan-500/30 transition-all duration-500"
              style={{ transitionDelay: `${(i + 1) * 0.15}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {categoryIcons[category.category]}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
