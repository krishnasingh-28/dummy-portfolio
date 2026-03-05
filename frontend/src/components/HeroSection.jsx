import React, { useState, useEffect } from 'react';
import { ArrowDown, ExternalLink, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = personalInfo.typingWords[currentWordIndex];
    let timeout;

    if (!isDeleting && displayText === word) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % personalInfo.typingWords.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? word.substring(0, displayText.length - 1)
              : word.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Star field background */}
      <div className="stars-container absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-lg md:text-xl text-cyan-400 font-mono mb-4 tracking-wider">
            {personalInfo.tagline}
          </h2>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2">
            <span className="text-white">{personalInfo.name.split(' ')[0]}</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {personalInfo.name.split(' ')[1]}
            </span>
          </h1>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-2xl md:text-4xl font-bold mt-4 mb-8 h-12 md:h-14 flex items-center justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              {displayText}
            </span>
            <span className="typing-cursor text-cyan-400 ml-1">|</span>
          </div>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-3 font-medium leading-snug">
            {personalInfo.heroDescription}
          </p>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            {personalInfo.heroSubDescription}
          </p>
        </div>

        <div className="fade-in-up flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: '1s' }}>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
          >
            <ExternalLink size={18} />
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 text-gray-300 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
          >
            <Mail size={18} />
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in-up" style={{ animationDelay: '1.4s' }}>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
