import React, { useState, useEffect, useRef } from 'react';
import { User, Briefcase, Award } from 'lucide-react';
import { aboutData } from '../data/mock';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = [
  <Briefcase size={22} className="text-cyan-400" />,
  <User size={22} className="text-purple-400" />,
  <Award size={22} className="text-blue-400" />,
];

const DURATION_MS = 1600;

const AboutSection = () => {
  const sectionRef = useScrollReveal();
  const statsRef = useRef(null);
  const [displayValues, setDisplayValues] = useState(
    aboutData.stats.map((s) => 0)
  );
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    let intervalId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasAnimated) return;
        setHasAnimated(true);

        const targets = aboutData.stats.map((s) =>
          typeof s.value === 'number' ? s.value : parseInt(s.value, 10) || 0
        );
        const start = performance.now();

        const tick = () => {
          const elapsed = performance.now() - start;
          const progress = Math.min(1, elapsed / DURATION_MS);
          setDisplayValues(
            targets.map((target) =>
              Math.min(target, Math.round(progress * target))
            )
          );
          if (progress < 1) intervalId = requestAnimationFrame(tick);
        };

        intervalId = requestAnimationFrame(tick);
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (intervalId != null) cancelAnimationFrame(intervalId);
    };
  }, [hasAnimated]);

  return (
    <section id="about" className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-element">
          <h2 className="section-heading">About Me</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 mt-16">
          {/* Text Content */}
          <div className="md:col-span-3 space-y-6">
            {aboutData.paragraphs.map((text, i) => (
              <p
                key={i}
                className="reveal-element text-gray-400 leading-relaxed text-lg"
                style={{ transitionDelay: `${(i + 1) * 0.15}s` }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Stats Cards */}
          <div ref={statsRef} className="md:col-span-2 flex flex-col gap-5">
            {aboutData.stats.map((stat, i) => (
              <div
                key={i}
                className="reveal-element glass-card p-6 rounded-xl flex items-center gap-5 group hover:border-cyan-500/30 transition-all duration-500"
                style={{ transitionDelay: `${(i + 1) * 0.2}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {iconMap[i]}
                </div>
                <div>
                  <div className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {displayValues[i]}{stat.suffix ?? ''}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
