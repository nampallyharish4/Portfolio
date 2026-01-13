import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useScrollEffect';

const Footer: React.FC = () => {
  const { scrollToTop } = useSmoothScroll();

  return (
    <footer className="py-12 relative overflow-hidden border-t border-white/5 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Nampally Harish</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Full-Stack Developer & UI Designer
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 rounded-xl glass-light hover:glass-ultra transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-xl glass-light hover:glass-ultra transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-xl glass-light hover:glass-ultra transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-4 rounded-2xl glass-medium hover:glass-ultra transition-all group shadow-xl"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
          <p>© 2025 Nampally Harish. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Build with <Heart className="w-4 h-4 text-red-500 fill-current" />{' '}
            using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
