import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target, Sparkles, Code, Brain, Cloud, Globe, Heart, Users2, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Clock, value: '3+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
    { icon: Target, value: '15+', label: 'Projects Completed', color: 'from-purple-500 to-pink-500' },
    { icon: Users, value: '100%', label: 'Client Satisfaction', color: 'from-green-500 to-emerald-500' },
    { icon: Award, value: '5+', label: 'Certifications', color: 'from-orange-500 to-red-500' },
  ];

  const highlights = [
    { icon: Brain, title: 'AI Integration', desc: 'LangChain, OpenAI GPT-4, Custom AI Agents' },
    { icon: Cloud, title: 'Cloud Architecture', desc: 'AWS, GCP, DigitalOcean, Scalable Deployments' },
    { icon: Code, title: 'Full-Stack', desc: 'React, Flask, Node.js, Multi-tenant Systems' },
    { icon: Sparkles, title: 'Innovation', desc: 'SaaS Platforms, Automation, Modern Solutions' },
  ];

  const softSkills = [
    { icon: Users2, title: 'Team Collaboration & Leadership', desc: 'Managing freelance projects with multiple stakeholders' },
    { icon: Zap, title: 'Problem-Solving & Debugging', desc: 'Strong ability to troubleshoot and resolve issues efficiently' },
    { icon: Target, title: 'Project Management', desc: 'Successfully handled and delivered full-stack projects on schedule' },
    { icon: Heart, title: 'Client Communication', desc: 'Understanding client needs and ensuring satisfaction' },
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Tamil', level: 'Native' },
  ];

  const interests = [
    'AI Innovation',
    'SaaS Product Strategy',
    'Server Optimization',
    'System Automation'
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            About Me
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Crafting
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Digital Excellence
            </motion.span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80">
              {/* Rotating Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 rounded-full p-1"
              >
                <div className="w-full h-full bg-gray-50 dark:bg-black rounded-full" />
              </motion.div>

              {/* Main Avatar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute inset-2 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full overflow-hidden z-10"
              >
                <img
                  src="/image.jpg"
                  alt="Ruban Karthick V"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Elements */}
              {highlights.map(({ icon: Icon }, index) => {
                // Calculate positions for each corner
                const positions = [
                  { top: '-10%', left: '-10%' },  // Top Left
                  { top: '-10%', right: '-10%' }, // Top Right
                  { bottom: '-10%', left: '-10%' }, // Bottom Left
                  { bottom: '-10%', right: '-10%' }  // Bottom Right
                ];

                return (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className={`absolute w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex items-center justify-center shadow-xl border border-white/20 dark:border-white/10 z-0`}
                    style={positions[index]}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyan-500" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Full-Stack Developer & AI Innovator
              </h3>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Results-driven Full-Stack Developer, AI Integrator & Cloud Engineer with expertise in building scalable web apps, SaaS tools, automation bots, and cloud-native systems.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Proven ability to lead and deliver AI-powered platforms, manage secure deployments on AWS/DigitalOcean, and deliver solutions that enhance customer experience. Experienced in SaaS architecture, DevOps pipelines, and production-grade API integrations.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Currently pursuing BE in Electrical and Electronics Engineering while building cutting-edge SaaS platforms, automation tools, and AI integrations. Passionate about learning, problem-solving, and delivering global-ready products.
                </motion.p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-3 sm:p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500 mb-2 sm:mb-3" />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">{title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20"
        >
          {stats.map(({ icon: Icon, value, label, color }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="p-4 sm:p-6 md:p-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/20 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r ${color} rounded-xl sm:rounded-2xl flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2"
                >
                  {value}
                </motion.div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            Soft Skills & Leadership
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {softSkills.map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 sm:p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 dark:border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500 mb-3 sm:mb-4" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">{title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages & Interests Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mr-2 sm:mr-3" />
              Languages
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center p-3 sm:p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10"
                >
                  <span className="font-medium text-gray-900 dark:text-white">{lang.name}</span>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{lang.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mr-2 sm:mr-3" />
              Interests
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 sm:px-4 py-2 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-full text-red-600 dark:text-red-400 text-sm font-medium"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;