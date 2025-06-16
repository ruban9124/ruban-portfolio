import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Developing and delivering full-stack applications including e-commerce platforms, AI-powered tools, and automation solutions.',
      achievements: [
        'Built AI agent booking solution with Tailro API integration',
        'Delivered 15+ projects with 100% client satisfaction',
        'Specialized in scalable SaaS architecture and automation',
        'Managed secure production deployments on AWS/DigitalOcean'
      ]
    },
    {
      type: 'work',
      title: 'Freelance Electrical Engineer',
      company: 'Various Clients',
      period: '2021 - 2022',
      location: 'Coimbatore, India',
      description: 'Hands-on experience in repairing and maintaining electrical equipment including amplifiers, motors, and home appliances.',
      achievements: [
        'Gained practical experience in electrical troubleshooting',
        'Developed problem-solving skills in hardware diagnostics',
        'Built foundation for technical understanding',
        'Enhanced attention to detail and precision'
      ]
    }
  ];

  const education = [
    {
      degree: 'BE Electrical And Electronics Engineering',
      institution: 'Karpagam Institute of Technology',
      period: '2022 - 2026',
      location: 'Coimbatore, India',
      cgpa: '7.31',
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
    'OpenAI Developer Basics – Tailored training for API agents'
  ];

  return (
    <section id="experience" className="py-20 sm:py-24 md:py-32 bg-gray-50 dark:bg-black relative overflow-hidden">
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
            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Professional Journey
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
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
                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">{exp.company}</div>
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

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Education
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
                      <span className="text-sm text-pink-600 dark:text-pink-400 font-medium">{edu.period}</span>
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">{edu.institution}</div>
                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      <span className="text-purple-600 dark:text-purple-400 font-medium">{edu.cgpa}</span>
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs ${edu.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;