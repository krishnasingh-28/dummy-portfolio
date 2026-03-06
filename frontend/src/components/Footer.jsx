import React from 'react';
import { Mail, Heart } from 'lucide-react';
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
              className="group w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              aria-label="GitHub"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                className="w-[18px] h-[18px] object-contain invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-[18px] h-[18px] object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              aria-label="LeetCode"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg"
                alt="LeetCode"
                className="w-[18px] h-[18px] object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} className="text-cyan-400" />
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
