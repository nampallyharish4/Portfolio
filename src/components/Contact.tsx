import React, { useState } from 'react';
import { Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Card3D from './Card3D';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nampallyharish5544@gmail.com&su=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          className="w-6 h-6"
          alt="Email"
        />
      ),
      label: 'Email',
      value: 'nampallyharish5544@gmail.com',
      href: 'mailto:nampallyharish5544@gmail.com',
    },
    {
      icon: (
        <div className="w-6 h-6 flex items-center justify-center bg-emerald-500 rounded-lg shadow-sm">
          <Phone className="w-4 h-4 text-white" />
        </div>
      ),
      label: 'Phone',
      value: '+91 8187033652',
      href: 'tel:+918187033652',
    },
    {
      icon: (
        <div className="w-6 h-6 flex items-center justify-center bg-rose-500 rounded-lg shadow-sm">
          <MapPin className="w-4 h-4 text-white" />
        </div>
      ),
      label: 'Location',
      value: 'Hyderabad, India',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden scene-3d">
      <div className="max-w-7xl mx-auto px-6 relative z-10 layer-3d">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent inline-block font-sans">
              Get In Touch
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <ScrollReveal direction="left" delay={200}>
              <Card3D maxTilt={6} scale={1.02} className="rounded-[2rem]">
                <div className="glass-strong p-10 rounded-[2rem] ambient-shadow">
                  <h3 className="text-3xl font-bold mb-8">
                    Contact Information
                  </h3>
                  <div className="space-y-8">
                    {contactInfo.map((info, i) => (
                      <Card3D
                        key={i}
                        maxTilt={10}
                        scale={1.03}
                        className="block rounded-xl"
                      >
                        <div className="flex items-center space-x-6 group p-2 -m-2 rounded-xl">
                          <div
                            className="w-12 h-12 flex items-center justify-center rounded-2xl glass-medium group-hover:glass-ultra transition-all text-blue-500"
                            style={{
                              boxShadow:
                                '0 8px 20px -8px rgba(59, 130, 246, 0.2)',
                            }}
                          >
                            {React.cloneElement(
                              info.icon as React.ReactElement,
                              { size: 20 },
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">
                              {info.label}
                            </p>
                            {info.href ? (
                              <a
                                href={info.href}
                                className="text-lg font-medium hover:text-blue-500 transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-lg font-medium">
                                {info.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </Card3D>
                    ))}
                  </div>

                  <div className="mt-12 pt-12 border-t border-white/10">
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
                      Social Connect
                    </h4>
                    <div className="flex space-x-4">
                      {[
                        {
                          icon: (
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                              className="w-6 h-6 dark:invert"
                              alt="Github"
                            />
                          ),
                          href: 'https://github.com/nampallyharish4',
                        },
                        {
                          icon: (
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                              className="w-6 h-6"
                              alt="Linkedin"
                            />
                          ),
                          href: 'https://www.linkedin.com/in/nampallyharish4/',
                        },
                        {
                          icon: (
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                              className="w-6 h-6"
                              alt="Twitter"
                            />
                          ),
                          href: '#',
                        },
                      ].map((social, i) => (
                        <Card3D
                          key={i}
                          maxTilt={15}
                          scale={1.1}
                          className="rounded-xl"
                        >
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-xl glass-light hover:glass-ultra transition-all block overflow-hidden"
                          >
                            {social.icon}
                          </a>
                        </Card3D>
                      ))}
                    </div>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={400}>
            <Card3D maxTilt={6} scale={1.02} className="rounded-[2.5rem]">
              <form
                onSubmit={handleSubmit}
                className="glass-ultra p-10 rounded-[2.5rem] border border-white/10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest px-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl glass-light border border-white/10 focus:glass-medium outline-none transition-all dark:bg-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest px-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl glass-light border border-white/10 focus:glass-medium outline-none transition-all dark:bg-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest px-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl glass-light border border-white/10 focus:glass-medium outline-none transition-all dark:bg-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest px-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl glass-light border border-white/10 focus:glass-medium outline-none transition-all resize-none dark:bg-transparent"
                  />
                </div>

                <Card3D maxTilt={6} scale={1.02} className="w-full rounded-2xl">
                  <button
                    type="submit"
                    className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-lg flex justify-center items-center gap-2 transition-all glow-effect"
                    style={{
                      boxShadow: '0 15px 35px -10px rgba(0,0,0,0.3)',
                    }}
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </Card3D>
              </form>
            </Card3D>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
