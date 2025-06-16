import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Calendar, Users, Database, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions I've built, from AI-powered platforms to scalable e-commerce systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
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
                  <span className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                    View Details →
                  </span>
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
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div>
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>

                      <div className="p-8">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                          {project.title}
                        </h3>
                        
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {project.fullDesc}
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                {value}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                                {key}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 
                                          text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium"
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