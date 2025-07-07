import React from 'react';
import { Heart, ArrowUp, Sparkles, Code } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useSmoothScroll } from '../hooks/useScrollEffect';

const Footer: React.FC = () => {
  const { scrollToTop } = useSmoothScroll();

  return (
    <footer id="footer" className="h-screen flex items-center justify-center relative bg-gradient-to-t from-gray-950 via-slate-900 to-gray-950 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transition-all duration-700"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transition-all duration-700"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 transition-all duration-700"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
        <ScrollReveal direction="up" duration={1000}>
          <div className="glass-ultra rounded-2xl p-8 relative overflow-hidden smooth-hover border-2 border-white/10 shadow-2xl shadow-card-light">
            <div className="absolute inset-0 shimmer-effect opacity-20"></div>
            
            <div className="relative text-center">
              <ScrollReveal direction="scale" delay={200} duration={1200}>
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-blue-400 mr-3 animate-pulse" />
                    <h3 className="text-4xl font-bold text-white">Nampally Harish</h3>
                    <Code className="w-8 h-8 text-purple-400 ml-3 animate-pulse animation-delay-2000" />
                  </div>
                  
                  <div className="glass-medium rounded-xl p-4 inline-block mb-4 smooth-hover border border-white/10 shadow-card-small">
                    <p className="text-gray-300 flex items-center justify-center text-lg">
                      Made with React & Tailwind CSS
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={400} duration={1000}>
                <div className="flex flex-col items-center space-y-4">
                  <div className="glass-light rounded-xl p-3 smooth-hover border border-white/5 shadow-card-small">
                    <p className="text-gray-300 text-base font-medium">
                      © 2025 Nampally Harish. All rights reserved.
                    </p>
                  </div>
                  
                  <button 
                    onClick={scrollToTop}
                    className="group glass-strong p-4 rounded-2xl hover:glass-ultra transition-all duration-700 hover:scale-125 hover:-rotate-12 relative overflow-hidden smooth-hover border border-white/10 shadow-card-medium"
                    aria-label="Scroll to top"
                  >
                    <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <ArrowUp className="w-6 h-6 text-white group-hover:-translate-y-2 group-hover:rotate-12 transition-all duration-500" />
                  </button>
                  
                  <div className="glass-medium rounded-lg p-3 smooth-hover border border-white/5 shadow-card-small">
                    <p className="text-gray-400 text-sm">
                      Thank you for visiting my portfolio!
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;