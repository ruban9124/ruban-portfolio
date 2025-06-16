import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone, Download, Sparkles, Code, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Full-Stack Developer',
    'AI Integrator',
    'Cloud Engineer', 
    'SaaS Architect',
    'Automation Expert'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const title = titles[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText.length < title.length) {
        setCurrentText(title.slice(0, currentText.length + 1));
      } else if (isDeleting && currentText.length > 0) {
        setCurrentText(title.slice(0, currentText.length - 1));
      } else if (!isDeleting && currentText.length === title.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % titles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, titles]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, duration: 6 },
    { Icon: Zap, delay: 1, duration: 8 },
    { Icon: Sparkles, delay: 2, duration: 7 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-black">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, duration }, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan-400/30 dark:text-cyan-400/20"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
            }}
          >
            <Icon size={40} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to my digital space
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm{' '}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ruban
            </motion.span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            className="text-3xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="mr-4">I'm a</span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 font-bold min-w-[300px] text-left"
              key={currentText}
            >
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-cyan-400"
              >
                |
              </motion.span>
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Crafting innovative solutions with{' '}
            <span className="text-cyan-500 font-semibold">AI-powered platforms</span>,{' '}
            <span className="text-purple-500 font-semibold">scalable architectures</span>, and{' '}
            <span className="text-blue-500 font-semibold">cloud-native systems</span> that drive business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              />
              <span className="relative z-10 flex items-center">
                View My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.div>
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 rounded-2xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Get In Touch
              </span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { Icon: Phone, href: 'tel:+917010947275', label: 'Phone', color: 'hover:text-green-500' },
              { Icon: Mail, href: 'mailto:ruban9124@gmail.com', label: 'Email', color: 'hover:text-red-500' },
              { Icon: Linkedin, href: 'https://linkedin.com/in/ruban9124', label: 'LinkedIn', color: 'hover:text-blue-500' },
              { Icon: Github, href: 'https://github.com/ruban9124', label: 'GitHub', color: 'hover:text-purple-500' },
            ].map(({ Icon, href, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl text-gray-700 dark:text-gray-300 ${color} transition-all duration-300 border border-white/20 dark:border-white/10`}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;