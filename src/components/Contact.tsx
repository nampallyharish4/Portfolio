import React, { useState } from 'react';
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  User,
  AtSign,
  CheckCircle,
  Clock,
  Heart,
} from 'lucide-react';
import { ContactForm } from '../types';
import ScrollReveal from './ScrollReveal';
import { useParallax } from '../hooks/useScrollEffect';

const Contact: React.FC = () => {
  const parallaxOffset = useParallax(0.1);

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare email content
      const subject = `New Contact Form Message from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `.trim();

      // Open email client
      const mailtoLink = `mailto:nampallyharish5544@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Email Me',
      subtitle: 'Quick Response',
      value: 'nampallyharish5544@gmail.com',
      description: 'I typically respond within 24 hours',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      action: () => window.open('mailto:nampallyharish5544@gmail.com'),
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Call Me',
      subtitle: 'Direct Contact',
      value: '+91 8187033652',
      description: 'Available Mon-Fri, 9 AM - 6 PM IST',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      action: () => window.open('tel:+918187033652'),
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Location',
      subtitle: 'Based in',
      value: 'Hyderabad, India',
      description: 'Open to remote collaboration worldwide',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      action: () => {},
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: 'GitHub',
      username: '@nampallyharish4',
      url: 'https://github.com/nampallyharish4',
      description: 'View my code repositories',
      color: 'text-gray-700 dark:text-gray-200',
      hoverColor: 'group-hover:text-gray-900 dark:group-hover:text-white',
    },
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: 'LinkedIn',
      username: '@nampallyharish4',
      url: 'https://www.linkedin.com/in/nampallyharish4/',
      description: 'Connect professionally',
      color: 'text-blue-600 dark:text-blue-400',
      hoverColor: 'group-hover:text-blue-700 dark:group-hover:text-blue-300',
    },
    {
      icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: 'Twitter',
      username: '@nampallyharish6',
      url: 'https://twitter.com/nampallyharish6',
      description: 'Follow for tech updates',
      color: 'text-sky-500 dark:text-sky-400',
      hoverColor: 'group-hover:text-sky-600 dark:group-hover:text-sky-300',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-10 sm:py-16 md:py-20 bg-slate-50 dark:bg-gray-950"
    >
      {/* Enhanced Background with parallax */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-700"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 dark:via-black/20 to-transparent transition-colors duration-700"></div>

      {/* Floating background elements with parallax */}
      <div
        className="absolute top-10 left-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full filter blur-3xl opacity-50 transition-colors duration-700"
        style={{
          transform: `translateY(${parallaxOffset * 0.5}px) rotate(${
            parallaxOffset * 0.1
          }deg)`,
        }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-32 sm:w-52 md:w-72 h-32 sm:h-52 md:h-72 bg-gradient-to-br from-pink-200/30 to-rose-200/30 dark:from-pink-500/5 dark:to-rose-500/5 rounded-full filter blur-3xl opacity-50 transition-colors duration-700"
        style={{
          transform: `translateY(${parallaxOffset * 0.7}px) rotate(${
            -parallaxOffset * 0.1
          }deg)`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Enhanced Header */}
        <ScrollReveal direction="up" duration={1000}>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
              <div className="glass-medium section-heading-light rounded-2xl p-4 sm:p-6 md:p-8 smooth-hover border-2 border-black/10 dark:border-white/10 shadow-card-light">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-500">
                  Get In Touch
                </h2>
              </div>
            </div>
            <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
              <div className="glass-light rounded-xl p-4 sm:p-6 max-w-4xl smooth-hover border border-black/10 dark:border-white/5 shadow-card-small">
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 transition-colors duration-500">
                  Ready to bring your ideas to life? Let's discuss your project
                  and create something amazing together.
                </p>
              </div>
            </div>

            {/* Response Time Indicator */}
            <ScrollReveal direction="up" delay={200} duration={1000}>
              <div className="flex justify-center">
                <div className="glass-medium rounded-xl p-3 sm:p-4 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    <span className="font-medium">
                      Quick Response Guaranteed
                    </span>
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Enhanced Contact Form - Left Side */}
          <ScrollReveal direction="left" delay={200} duration={1000}>
            <div className="glass-ultra rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden smooth-hover h-full border-2 border-black/10 dark:border-white/5 shadow-card-light">
              <div className="absolute inset-0 shimmer-effect opacity-20"></div>

              <div className="relative h-full flex flex-col">
                <ScrollReveal direction="up" delay={400} duration={1000}>
                  <div className="glass-medium rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 text-center smooth-hover border border-black/10 dark:border-white/5 shadow-card-small">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-500 mb-2">
                      Send Me a Message
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      Fill out the form below and I'll get back to you as soon
                      as possible
                    </p>
                  </div>
                </ScrollReveal>

                {/* Success Message */}
                {isSubmitted && (
                  <ScrollReveal direction="scale" duration={800}>
                    <div className="glass-medium rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border-2 border-green-300 dark:border-green-600 smooth-hover shadow-card-medium">
                      <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                        <div className="text-center">
                          <h4 className="font-semibold text-sm sm:text-base text-green-700 dark:text-green-300">
                            Message Sent Successfully!
                          </h4>
                          <p className="text-xs sm:text-sm text-green-600 dark:text-green-400">
                            Thank you for reaching out. I'll respond within 24
                            hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6 flex-1 flex flex-col"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <ScrollReveal direction="up" delay={600} duration={1000}>
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 transition-colors duration-500"
                        >
                          Your Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                            <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-500 transition-colors duration-500" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 glass-strong rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:glass-ultra transition-all duration-500 text-sm sm:text-base text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small"
                          />
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={700} duration={1000}>
                      <div className="relative">
                        <label
                          htmlFor="email"
                          className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 transition-colors duration-500"
                        >
                          Email Address *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                            <AtSign className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-500 transition-colors duration-500" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 glass-strong rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:glass-ultra transition-all duration-500 text-sm sm:text-base text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 smooth-hover border border-black/10 dark:border-white/5 shadow-card-small"
                          />
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  <ScrollReveal direction="up" delay={800} duration={1000}>
                    <div className="relative flex-1">
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 transition-colors duration-500"
                      >
                        Your Message *
                      </label>
                      <div className="relative h-full">
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 pointer-events-none">
                          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-500 transition-colors duration-500" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full h-full min-h-[150px] sm:min-h-[200px] pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 glass-strong rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:glass-ultra transition-all duration-500 text-sm sm:text-base text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none smooth-hover border border-black/10 dark:border-white/5 shadow-card-small"
                        />
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={900} duration={1000}>
                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className={`w-full flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-700 relative overflow-hidden group smooth-hover border border-black/10 dark:border-white/10 shadow-card-light ${
                        isSubmitting || isSubmitted
                          ? 'opacity-70 cursor-not-allowed'
                          : 'hover:scale-105'
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-center">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 sm:mr-3"></div>
                            <span className="text-sm sm:text-base">
                              Sending Message...
                            </span>
                          </>
                        ) : isSubmitted ? (
                          <>
                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                            <span className="text-sm sm:text-base">
                              Message Sent!
                            </span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-500" />
                            <span className="text-sm sm:text-base">
                              Send Message
                            </span>
                          </>
                        )}
                      </div>
                    </button>
                  </ScrollReveal>
                </form>
              </div>
            </div>
          </ScrollReveal>

          {/* Enhanced Contact Information - Right Side - Equal Height */}
          <ScrollReveal direction="right" delay={300} duration={1000}>
            <div className="glass-ultra rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden smooth-hover h-full border-2 border-black/10 dark:border-white/5 shadow-card-light">
              <div className="absolute inset-0 shimmer-effect opacity-20"></div>

              <div className="relative h-full flex flex-col">
                <ScrollReveal direction="up" delay={500} duration={1000}>
                  <div className="glass-medium rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 text-center smooth-hover border border-black/10 dark:border-white/5 shadow-card-small">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-500 mb-2">
                      Contact Methods
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      Choose your preferred way to reach out
                    </p>
                  </div>
                </ScrollReveal>

                <div className="flex-1 flex flex-col justify-center space-y-6 sm:space-y-8">
                  {/* Contact Methods */}
                  <div className="space-y-4 sm:space-y-6">
                    {contactMethods.map((method, index) => (
                      <ScrollReveal
                        key={index}
                        direction="up"
                        delay={600 + index * 100}
                        duration={1000}
                      >
                        <div
                          onClick={method.action}
                          className={`group p-4 sm:p-6 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 smooth-hover cursor-pointer ${method.bgColor} border-2 border-black/10 dark:border-white/5 shadow-card-small`}
                        >
                          <div className="flex items-start space-x-3 sm:space-x-4">
                            <div
                              className={`p-2 sm:p-3 rounded-lg ${method.color} bg-white/50 dark:bg-black/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-black/10 dark:border-white/5 shadow-card-small`}
                            >
                              {method.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-bold text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                                  {method.title}
                                </h4>
                                <span
                                  className={`text-xs px-2 py-1 rounded-full ${method.color} bg-white/50 dark:bg-black/20 font-medium border border-black/10 dark:border-white/5 shadow-card-small`}
                                >
                                  {method.subtitle}
                                </span>
                              </div>
                              <p
                                className={`font-semibold text-xs sm:text-sm mb-1 ${method.color}`}
                              >
                                {method.value}
                              </p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {method.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>

                  {/* Social Media Links */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {socialLinks.map((social, index) => (
                      <ScrollReveal
                        key={index}
                        direction="scale"
                        delay={900 + index * 100}
                        duration={1000}
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col items-center p-3 sm:p-4 glass-strong rounded-lg sm:rounded-xl hover:glass-ultra transition-all duration-200 hover:scale-105 hover:-rotate-1 relative overflow-hidden smooth-hover border border-black/10 dark:border-white/5 shadow-card-small"
                        >
                          <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                          <div
                            className={`p-2 sm:p-3 rounded-lg ${social.color} ${social.hoverColor} group-hover:scale-110 group-hover:rotate-12 transition-all duration-200 mb-2 border border-black/10 dark:border-white/5 shadow-card-small`}
                          >
                            {social.icon}
                          </div>
                          <h5 className="font-bold text-gray-800 dark:text-gray-100 text-xs mb-1 transition-colors duration-500 text-center">
                            {social.name}
                          </h5>
                          <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 text-center">
                            {social.username}
                          </p>
                        </a>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
