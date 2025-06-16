import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Bot, 
  Cpu,
  Zap,
  Sparkles,
  Layers,
  Shield,
  Globe
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React (Vite)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Python (Flask)', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'PHP', level: 85 },
        { name: 'REST APIs', level: 95 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'AWS (EC2, S3, RDS)', level: 85 },
        { name: 'DigitalOcean', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Linux/VPS', level: 90 },
      ]
    },
    {
      title: 'AI & Automation',
      icon: Bot,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'LangChain', level: 85 },
        { name: 'OpenAI GPT-4', level: 90 },
        { name: 'Python Automation', level: 95 },
        { name: 'Telegram Bots', level: 90 },
      ]
    },
    {
      title: 'Databases',
      icon: Cpu,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'AWS DynamoDB', level: 85 },
        { name: 'AWS RDS', level: 85 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Postman', level: 95 },
        { name: 'VS Code', level: 95 },
        { name: 'Cloudflare', level: 85 },
      ]
    }
  ];

  const additionalTech = [
    'Razorpay', 'Stripe', 'PayPal', 'Bootstrap', 'JWT Authentication',
    'SSL/TLS', 'Nginx', 'Selenium', 'BeautifulSoup', 'HuggingFace',
    'n8n', 'Caddy', 'Google Calendar API', 'Instagram API'
  ];

  return (
    <section id="skills" className="py-32 bg-white dark:bg-black relative overflow-hidden">
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
            Technical Expertise
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Skills &
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Technologies
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Comprehensive expertise across the full technology stack, from frontend frameworks to cloud infrastructure
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              <div className="relative bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                  >
                    <category.icon size={28} />
                  </motion.div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="text-sm text-cyan-600 dark:text-cyan-400 font-bold"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="relative w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} relative`}
                        >
                          <motion.div
                            animate={{ x: [-10, 10, -10] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-white/20 rounded-full"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Additional Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {additionalTech.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(6, 182, 212, 0.3)"
                }}
                className="group px-6 py-3 bg-gradient-to-r from-white/50 to-gray-50/50 dark:from-white/5 dark:to-gray-800/50 
                          backdrop-blur-sm rounded-2xl text-gray-700 dark:text-gray-300 font-medium shadow-lg
                          border border-white/20 dark:border-white/10 hover:border-cyan-500/30 
                          hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 cursor-default"
              >
                <motion.span
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId={`tech-bg-${index}`}
                  />
                </motion.span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;