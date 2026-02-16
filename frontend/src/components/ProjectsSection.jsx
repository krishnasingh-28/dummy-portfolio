import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { projectsData } from '../data/mock';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProjectsSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-element">
          <h2 className="section-heading">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projectsData.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-element glass-card rounded-xl p-7 group hover:border-cyan-500/30 transition-all duration-500 block"
              style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Folder size={22} className="text-cyan-400" />
                </div>
                <ExternalLink
                  size={18}
                  className="text-gray-600 group-hover:text-cyan-400 transition-colors duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
