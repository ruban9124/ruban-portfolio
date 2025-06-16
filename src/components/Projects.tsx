import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: 'Multi-Tenant E-Commerce Platform',
      shortDesc: 'Shopify-like platform for creating and managing online stores',
      fullDesc: 'A comprehensive multi-tenant e-commerce solution allowing users to create, manage, and scale their online businesses. Features include subdomain mapping, custom domain support, automated payments, and robust database isolation for security.',
      tech: ['React', 'Flask', 'Node.js', 'MySQL', 'Razorpay', 'Cloudflare R2', 'EC2', 'Docker'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Multi-tenant architecture with database isolation',
        'Subdomain & custom domain mapping',
        'Automated subscription billing with Razorpay',
        'Scalable media storage with Cloudflare R2',
        'Docker containerized deployment'
      ],
      metrics: { users: '500+', stores: '50+', uptime: '99.9%' }
    },
    {
      id: 2,
      title: 'AI-Powered Instagram DM Bot',
      shortDesc: 'Automated appointment booking through Instagram conversations',
      fullDesc: 'An intelligent chatbot that handles appointment scheduling through Instagram DMs using natural language processing. Users can seamlessly book appointments by providing their details through conversational AI.',
      tech: ['Python', 'instagrapi', 'Flask', 'AWS DynamoDB', 'NLP'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Natural language conversation flow',
        'Automated data extraction from user messages',
        'AWS DynamoDB for appointment storage',
        'Automated reminder system',
        'Multi-language support'
      ],
      metrics: { bookings: '1000+', accuracy: '95%', response: '<5s' }
    },
    {
      id: 3,
      title: 'Smart Scheduling System (Tailro)',
      shortDesc: 'AI-powered chatbot for real-time appointment scheduling',
      fullDesc: 'End-to-end AI-powered scheduling system using LangChain and natural language understanding. Deployed on DigitalOcean with custom domain configuration and integrated with Google Calendar API for seamless appointment management.',
      tech: ['Python', 'Flask', 'LangChain', 'AWS DynamoDB', 'DigitalOcean', 'Google Calendar API'],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'LangChain-powered conversation flow',
        'Real-time calendar integration',
        'Memory-driven user flow tracking',
        'Secure multi-endpoint API handling',
        'Custom domain with SSL configuration'
      ],
      metrics: { accuracy: '98%', response: '<3s', satisfaction: '4.8/5' }
    },
    {
      id: 4,
      title: 'Digital Attendance System',
      shortDesc: 'Face recognition-based attendance tracking for institutions',
      fullDesc: 'Advanced attendance management system using facial recognition technology. Features real-time logging, staff dashboard for monitoring, and secure database integration for accurate record keeping.',
      tech: ['PHP', 'JavaScript', 'MySQL', 'Face Recognition API'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Real-time face recognition',
        'Automated attendance logging',
        'Staff monitoring dashboard',
        'Course-wise attendance mapping',
        'Export functionality for reports'
      ],
      metrics: { accuracy: '99%', users: '200+', speed: '<2s' }
    },
    {
      id: 5,
      title: 'Advanced Food Delivery System',
      shortDesc: 'Full-stack food ordering platform with real-time tracking',
      fullDesc: 'Comprehensive food delivery platform with real-time order tracking, customizable menus, payment processing, and administrative dashboard for restaurant management.',
      tech: ['PHP', 'JavaScript', 'MySQL', 'AWS RDS', 'CloudFront'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Real-time order tracking',
        'Customizable restaurant menus',
        'Multiple payment gateway integration',
        'Admin dashboard for restaurant owners',
        'AWS CloudFront for fast content delivery'
      ],
      metrics: { orders: '5000+', restaurants: '25+', rating: '4.7/5' }
    },
    {
      id: 6,
      title: 'Dynamic Appointment CRM',
      shortDesc: 'Custom CRM for service-based businesses',
      fullDesc: 'Ongoing project for developing a comprehensive CRM system tailored for boutiques, salons, and service-based businesses. Features Google Login authentication, responsive design, and automated appointment tracking.',
      tech: ['PHP', 'Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Google Login authentication',
        'Customer data management',
        'Automated appointment tracking',
        'Client history tracking',
        'Responsive Bootstrap design'
      ],
      metrics: { status: 'In Progress', completion: '70%', launch: 'Q2 2025' }
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 md:py-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/4 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-full blur-3xl"
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
            <Layers className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Featured Projects
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Recent
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Projects
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4"
          >
            A showcase of innovative solutions I've built, from AI-powered platforms to scalable e-commerce systems
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />

              <div
                className="relative bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-cyan-600 dark:text-cyan-400 font-medium group-hover:underline">
                      View Details
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="inline-block ml-1"
                      >
                        →
                      </motion.span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-start justify-center p-4 md:p-8 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl max-w-4xl w-full my-20 border border-white/20 dark:border-white/10 z-[10000]"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div className="flex flex-col h-full">
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-[101]"
                        >
                          <X size={20} />
                        </motion.button>
                      </div>

                      <div className="flex-1 p-6 md:p-8">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                          {project.title}
                        </h3>

                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {project.fullDesc}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <motion.div
                              key={key}
                              whileHover={{ scale: 1.05 }}
                              className="text-center p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10"
                            >
                              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                                {value}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                                {key}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-3">
                            {project.features.map((feature, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start"
                              >
                                <Zap className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;