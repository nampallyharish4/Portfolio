import { ArrowUpRight } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useScrollEffect';

const Footer = () => {
  const { scrollToTop } = useSmoothScroll();
  return <footer className="site-footer"><span>© {new Date().getFullYear()} Nampally Harish</span><span>Designed & built with care</span><button onClick={scrollToTop}>Back to top <ArrowUpRight size={14} /></button></footer>;
};

export default Footer;
