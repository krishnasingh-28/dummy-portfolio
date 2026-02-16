import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-lg font-bold text-white hover:text-cyan-400 transition-colors duration-300">
              {personalInfo.name.split(' ')[0]}
              <span className="text-cyan-400">.</span>
            </a>
            <p className="text-sm text-gray-600 mt-1">
              AI/ML Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-xs text-gray-600 flex items-center gap-1">
            Built with <Heart size={12} className="text-cyan-500/50" /> by {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
