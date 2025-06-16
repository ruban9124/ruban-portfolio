import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen, Briefcase } from 'lucide-react';

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
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey through professional experience, education, and continuous learning
          </p>
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
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
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
                  className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
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
                        <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
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
              <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
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
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
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
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
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
                </motion.div>
              ))}
            </div>

            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
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
                  className="flex items-center p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg"
                >
                  <Award className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{cert}</span>
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