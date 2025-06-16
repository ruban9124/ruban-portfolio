import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen, Briefcase, Layers } from 'lucide-react';

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
    <section id="experience" className="py-32 bg-gray-50 dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6"
          >
            <Layers className="w-4 h-4 mr-2" />
            Experience & Education
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              My
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Journey
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            My journey through professional experience, education, and continuous learning
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
              >
                <Briefcase className="w-8 h-8" />
              </motion.div>
              <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  
                  <div className="relative bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/20 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {exp.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {exp.company}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
              >
                <BookOpen className="w-8 h-8" />
              </motion.div>
              <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  
                  <div className="relative bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/20 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {edu.institution}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                        {edu.cgpa}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        edu.status === 'In Progress' 
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

            <div className="flex items-center mb-6">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
              >
                <Award className="w-8 h-8" />
              </motion.div>
              <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  
                  <div className="relative flex items-center p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <Award className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{cert}</span>
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