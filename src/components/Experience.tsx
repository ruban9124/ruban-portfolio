import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Star, Target, Users } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Vseek Ventures',
      period: '2025 - Present',
      location: 'Coimbatore, India',
      description: 'Working as a Frontend Developer on innovative projects, contributing to the development of modern web applications and user interfaces.',
      achievements: [
        'Developing responsive and interactive user interfaces using modern frontend technologies',
        'Collaborating with cross-functional teams to deliver high-quality web applications',
        'Implementing best practices for code quality and user experience',
        'Contributing to the development of scalable and maintainable frontend solutions',
        'Working on cutting-edge projects that drive business growth and innovation'
      ]
    },
    {
      type: 'work',
      title: 'Full-Stack Developer & AI Integrator',
      company: 'Freelance',
      period: '2023 - 2025',
      location: 'Coimbatore, India',
      description: 'Delivered end-to-end solutions including multi-tenant e-commerce platforms, AI-powered chatbots, and cloud-native applications.',
      achievements: [
        'Built and deployed multi-tenant e-commerce platform serving 500+ users across 50+ stores',
        'Developed AI-powered Instagram DM bot processing 1000+ bookings with 95% accuracy',
        'Created Tailro scheduling system achieving 98% accuracy and 4.8/5 satisfaction rating',
        'Implemented face recognition attendance system with 99% accuracy for 200+ users',
        'Delivered food delivery platform processing 5000+ orders across 25+ restaurants'
      ]
    },
    {
      type: 'work',
      title: 'Freelance Electrical Engineer',
      company: 'Various Clients',
      period: '2021 - 2023',
      location: 'Coimbatore, India',
      description: 'Hands-on experience in repairing and maintaining electrical equipment including amplifiers, motors, and home appliances.',
      achievements: [
        'Gained practical experience in electrical troubleshooting and diagnostics',
        'Developed problem-solving skills in hardware diagnostics and repair',
        'Built foundation for technical understanding and precision work',
        'Enhanced attention to detail and precision in technical work',
        'Worked with various electrical equipment including amplifiers, motors, and home appliances'
      ]
    }
  ];

  const education = [
    {
      degree: 'BE Electrical And Electronics Engineering',
      institution: 'Karpagam Institute of Technology',
      period: '2022 - 2026',
      location: 'Coimbatore, India',
      cgpa: '7.52',
      status: 'In Progress'
    },
    {
      degree: 'Higher Secondary (Computer Science)',
      institution: 'Prema Matric HR Sec School',
      period: '2020 - 2022',
      location: 'Tamil Nadu, India',
      cgpa: 'SSLC: 71.6% | HSC: 73.0%',
      status: 'Completed'
    }
  ];

  const certifications = [
    'AWS Cloud Foundations – AWS Academy',
    'AWS Certified Solutions Architect (In Progress)',
    'Digital VLSI Testing – NPTEL, IIT Bombay',
    'Chatbot Engineering – Self-taught (Project Proven)',
    'OpenAI Developer Basics – Tailred training for API agents'
  ];

  const leadership = [
    {
      icon: Target,
      title: 'Project Leadership',
      description: 'Led 5+ client projects independently from planning to deployment with 100% client satisfaction'
    },
    {
      icon: Star,
      title: 'Product Development',
      description: 'Built and scaled a full-stack appointment booking system for Tailro, now used as a core company product'
    },
    {
      icon: Award,
      title: 'Client Excellence',
      description: 'Received 5-star reviews for freelance automation projects improving client workflows'
    },
    {
      icon: Users,
      title: 'Documentation',
      description: 'Documented Tailro\'s AI Agent Flow and Booking System for internal use'
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-12 md:py-12 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
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
            className="inline-flex items-center px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-400 text-xs sm:text-sm md:text-base font-medium mb-4 sm:mb-6"
          >
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
            Professional Journey
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Work
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent"
            >
              Experience
            </motion.span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Leadership & Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            Leadership & Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {leadership.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 sm:p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 dark:border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-500 mb-3 sm:mb-4" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-xs sm:text-sm md:text-base">{title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Professional Experience
            </h3>

            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-6 sm:pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:to-pink-500"
                >
                  <div className="absolute left-[-3px] top-0 w-2 h-2 rounded-full bg-purple-500" />
                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 dark:border-white/10 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                      <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">{exp.period}</span>
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">{exp.company} • {exp.location}</div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <span className="text-purple-500 mt-1.5">•</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Education & Certifications
            </h3>

            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-6 sm:pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-pink-500 before:to-red-500"
                >
                  <div className="absolute left-[-3px] top-0 w-2 h-2 rounded-full bg-pink-500" />
                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 dark:border-white/10 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <span className="text-sm text-pink-600 dark:text-pink-400 font-medium whitespace-nowrap">{edu.period}</span>
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</div>
                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">{edu.location}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">CGPA: {edu.cgpa}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${edu.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative pl-6 sm:pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-red-500 before:to-orange-500"
              >
                <div className="absolute left-[-3px] top-0 w-2 h-2 rounded-full bg-red-500" />
                <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 dark:border-white/10 p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {certifications.map((cert, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-red-500 mt-1.5">•</span>
                        {cert}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;