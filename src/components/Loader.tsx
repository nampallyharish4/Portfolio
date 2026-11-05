import { useEffect, useState } from 'react';

const Loader = () => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 850);
    return () => window.clearTimeout(timer);
  }, []);
  return <div className={`page-loader ${done ? 'page-loader-done' : ''}`} aria-hidden={done}><div className="loader-inner"><span>NH</span><p>Loading a little world</p><div className="loader-track"><i /></div></div></div>;
};

export default Loader;
