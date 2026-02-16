import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ContactSection = () => {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - stores in browser
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-element">
          <h2 className="section-heading">Get In Touch</h2>
        </div>

        <div className="reveal-element mt-6 mb-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Let's build something amazing together
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm always interested in hearing about new projects and opportunities in AI/ML.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info Cards */}
          <div className="md:col-span-2 space-y-5">
            <div
              className="reveal-element glass-card rounded-xl p-6 group hover:border-cyan-500/30 transition-all duration-500"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div
              className="reveal-element glass-card rounded-xl p-6 group hover:border-cyan-500/30 transition-all duration-500"
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Location</p>
                  <p className="text-sm text-gray-300">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="reveal-element glass-card rounded-xl p-8"
              style={{ transitionDelay: '0.3s' }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <CheckCircle size={48} className="text-cyan-400" />
                  <p className="text-white text-lg font-medium">Message Sent!</p>
                  <p className="text-gray-400 text-sm">Thank you for reaching out.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-gray-500 mb-1.5 block">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 mb-1.5 block">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1.5 block">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 px-8 py-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
