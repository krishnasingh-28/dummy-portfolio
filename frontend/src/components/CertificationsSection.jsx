import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certificationsData } from '../data/mock';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CertificationsSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="certifications" className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-element">
          <h2 className="section-heading">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {certificationsData.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-element glass-card rounded-xl p-7 group hover:border-purple-500/30 transition-all duration-500 block"
              style={{ transitionDelay: `${(i + 1) * 0.15}s` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                  <Award size={22} className="text-purple-400" />
                </div>
                <ExternalLink
                  size={16}
                  className="text-gray-600 group-hover:text-purple-400 transition-colors duration-300"
                />
              </div>

              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                {cert.title}
              </h3>

              <p className="text-sm text-gray-500 mb-4">{cert.issuer}</p>

              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Calendar size={13} />
                <span className="font-mono">{cert.period}</span>
              </div>

              <div className="mt-4 text-xs text-cyan-400/70 group-hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1">
                View Certificate
                <ExternalLink size={12} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
