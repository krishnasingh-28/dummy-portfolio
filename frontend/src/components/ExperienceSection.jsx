import React from 'react';
import { Calendar, Building2 } from 'lucide-react';
import { experienceData } from '../data/mock';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ExperienceSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-element">
          <h2 className="section-heading">Experience</h2>
        </div>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-purple-500/20 to-transparent" />

          <div className="space-y-12">
            {experienceData.map((exp, i) => (
              <div
                key={i}
                className="reveal-element relative md:pl-24"
                style={{ transitionDelay: `${(i + 1) * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-5 top-2 w-7 h-7 rounded-full bg-black border-2 border-cyan-500/40 items-center justify-center z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                <div className="glass-card rounded-xl p-8 group hover:border-cyan-500/30 transition-all duration-500">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-gray-400">
                        <Building2 size={15} className="text-purple-400" />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={14} className="text-cyan-400/60" />
                      <span className="font-mono text-xs">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500/40 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
