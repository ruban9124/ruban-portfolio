import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Ruban Karthick V
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Full-Stack Developer passionate about creating innovative solutions that make a difference. 
              Always ready to take on new challenges and build amazing things.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-gray-300 mb-6"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-red-500 fill-current" />
            </motion.div>
            <span>using</span>
            <Code className="w-5 h-5 text-blue-400" />
            <span>React & TypeScript</span>
            <Coffee className="w-5 h-5 text-yellow-600" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 pt-6"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Ruban Karthick V. All rights reserved.
              </p>
              
              <div className="flex space-x-6 text-sm text-gray-400">
                <motion.button
                  whileHover={{ color: '#3B82F6' }}
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Back to Top
                </motion.button>
                <span>•</span>
                <motion.a
                  whileHover={{ color: '#8B5CF6' }}
                  href="mailto:ruban9124@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  Say Hello
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <p className="text-xs text-gray-500">
              "Code is like humor. When you have to explain it, it's bad." - Cory House
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;