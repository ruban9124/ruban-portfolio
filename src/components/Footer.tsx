import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Layers, ExternalLink } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Phone,
      href: "tel:+917010947275",
      label: "Phone",
      color: "hover:text-green-500",
    },
    {
      icon: Mail,
      href: "mailto:hello@rubankarthick.com",
      label: "Email",
      color: "hover:text-red-500",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rubankarthick-v/",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: ExternalLink,
      href: "https://drive.google.com/drive/folders/1ceNZP3yDZdPKD_xjoyHrdezSalr2ZOKX?usp=drive_link",
      label: "Resume",
      color: "hover:text-purple-500",
    },
  ];

  return (
    <footer className="py-20 bg-white dark:bg-black relative overflow-hidden">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <Layers className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Let's Connect
          </motion.div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            Ruban Karthick V
          </h3>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Full-Stack Developer passionate about creating innovative solutions
            that make a difference. Always ready to take on new challenges and
            build amazing things.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
            {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />

                <div className="relative p-2 sm:p-3 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <Icon
                    size={18}
                    className={`sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300 ${color}`}
                  />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-white/10 dark:border-white/5 pt-6 sm:pt-8"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                © {currentYear} Ruban Karthick V. All rights reserved.
              </p>

              <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  Back to Top
                </motion.button>
                <span>•</span>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  href="mailto:hello@rubankarthick.com"
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  Say Hello
                </motion.a>
                <span>•</span>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  href="https://drive.google.com/drive/folders/1ceNZP3yDZdPKD_xjoyHrdezSalr2ZOKX?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  Resume
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 text-center"
          >
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
              "Code is like humor. When you have to explain it, it's bad." -
              Cory House
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
