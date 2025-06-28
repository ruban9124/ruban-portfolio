import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Bot, Cpu, Zap, Layers, Settings } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React (Vite)", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python (Flask)", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "PHP", level: 85 },
        { name: "REST APIs", level: 95 },
        { name: "Pyrogram", level: 90 },
        { name: "JWT Authentication", level: 85 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "AWS (EC2, S3, RDS)", level: 85 },
        { name: "DigitalOcean", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Linux/VPS", level: 90 },
        { name: "Google Cloud", level: 80 },
        { name: "Heroku/Render", level: 85 },
      ],
    },
    {
      title: "AI & Automation",
      icon: Bot,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "LangChain", level: 85 },
        { name: "OpenAI GPT-4", level: 90 },
        { name: "Python Automation", level: 95 },
        { name: "Telegram Bots", level: 90 },
        { name: "HuggingFace", level: 80 },
        { name: "BeautifulSoup", level: 80 },
      ],
    },
    {
      title: "Databases",
      icon: Cpu,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "AWS DynamoDB", level: 85 },
        { name: "AWS RDS", level: 85 },
        { name: "PhpMyAdmin (Tool)", level: 90 },
        { name: "MongoDB Compass (Tool)", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Postman", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Cloudflare", level: 85 },
        { name: "n8n", level: 80 },
        { name: "Kubernetes", level: 70 },
      ],
    },
  ];

  const additionalTech = [
    // Payment Gateways
    "Razorpay", "Stripe", "PayPal",

    // AWS Services
    "S3", "RDS", "DynamoDB", "EC2", "Lambda", "CloudFront",

    // Cloudflare Services
    "Cloudflare R2", "Cloudflare CDN", "Cloudflare Workers",
    "Cloudflare Pages", "Cloudflare DNS", "Cloudflare SSL",

    // APIs & Integrations
    "Google Calendar API", "Tailro API", "Telegram Bots",

    // Security & Networking
    "SSL/TLS", "JWT Authentication", "DNS/IP Management",
    "Load Balancing", "Firewalls",

    // Development Tools
    "Bootstrap", "React", "Nginx", "BeautifulSoup",

    // Automation & Workflow
    "n8n", "Pyrogram", "Python Automation",

    // Version Control & CI/CD
    "Git", "GitHub", "GitLab", "CI/CD Pipelines",

    // Other Technologies
    "Agile Development", "SaaS Lifecycle", "End-to-End Development",
    "MVP Launch", "Backend Architecture", "RESTful API",
    "B2B Automation", "Scalable Web Architecture", "Load Balancing",
    "Caching", "Database Optimization", "Data Security", "Encryption",
    "Hashing", "Kubernetes (Basic)", "cPanel", "Server Management"
  ];

  const toolsAndTechnologies = [
    {
      category: "Development Tools",
      items: ["Visual Studio Code", "Postman", "Git", "GitHub", "GitLab"]
    },
    {
      category: "Database Tools",
      items: ["PhpMyAdmin", "MongoDB Compass", "MySQL Workbench"]
    },
    {
      category: "Server & Deployment",
      items: ["Docker", "AWS EC2", "GCP", "DigitalOcean", "Heroku", "Render", "Koyeb"]
    },
    {
      category: "AI Dev Tools",
      items: ["LangChain", "OpenAI Platform", "Tailro AI Agent", "HuggingFace"]
    },
    {
      category: "Workflow Automation",
      items: ["n8n", "Python Scripts", "Telegram Bots", "Web Scraping"]
    }
  ];

  return (
    <section
      id="skills"
      className="py-12 sm:py-12 md:py-12 bg-white dark:bg-black relative overflow-hidden"
    >
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
            Technical Expertise
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Skills &
            </motion.span>{" "}
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
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4"
          >
            Comprehensive expertise across the full technology stack, from
            frontend frameworks to cloud infrastructure
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
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

              <div className="relative bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-6 sm:mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                  >
                    <category.icon size={24} className="sm:w-7 sm:h-7" />
                  </motion.div>
                  <h3 className="ml-4 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>

                      <div className="relative w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 sm:h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut",
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

        {/* Tools & Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Tools & Technologies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {toolsAndTechnologies.map((toolCategory, index) => (
              <motion.div
                key={toolCategory.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-white/10"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-cyan-500" />
                  {toolCategory.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {toolCategory.items.map((tool, toolIndex) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + toolIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-medium"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {additionalTech.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                className="group px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-white/50 to-gray-50/50 dark:from-white/5 dark:to-gray-800/50 
                          backdrop-blur-sm rounded-xl text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium
                          border border-white/20 dark:border-white/10 hover:border-cyan-500/30 
                          hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 cursor-default
                          shadow-sm"
              >
                <motion.span className="relative" whileHover={{ scale: 1.02 }}>
                  {tech}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
