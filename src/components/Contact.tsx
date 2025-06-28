import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, ExternalLink, Layers } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      if (!formRef.current) return;

      const result = await emailjs.sendForm(
        'service_9el7qqg',
        'template_xcd1e47',
        formRef.current,
        'AMGjZ9rCDRtoJ7HYc'
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7010947275',
      link: 'tel:+917010947275'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@rubankarthick.com',
      link: 'mailto:hello@rubankarthick.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Coimbatore, Tamil Nadu, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ruban9124/',
      color: 'hover:text-blue-600'
    },
    {
      icon: ExternalLink,
      name: 'Resume',
      url: 'https://drive.google.com/drive/folders/1ceNZP3yDZdPKD_xjoyHrdezSalr2ZOKX?usp=drive_link',
      color: 'hover:text-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-12 md:py-12 bg-gray-50 dark:bg-black relative overflow-hidden">
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
            Get In Touch
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let's
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Connect
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 sm:space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                info.link ? (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />

                    <div className="relative flex items-center p-4 sm:p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 sm:p-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl mr-3 sm:mr-4"
                      >
                        <info.icon size={20} className="sm:w-6 sm:h-6" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors text-sm sm:text-base">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ) : (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl transition-all duration-300" />

                    <div className="relative flex items-center p-4 sm:p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 transition-all duration-300">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 sm:p-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl mr-3 sm:mr-4"
                      >
                        <info.icon size={20} className="sm:w-6 sm:h-6" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="group relative block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />

                    <div className="relative p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                      <social.icon size={24} className={`text-gray-600 dark:text-gray-300 ${social.color}`} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />

              <div className="relative p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-300">
                <h4 className="text-xl font-bold mb-2">Joined at Vseek Ventures</h4>
                <p className="opacity-90">
                  Successfully joined as a Frontend Developer at Vseek Ventures.
                  Excited to contribute to innovative projects and continue growing professionally.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />

            <form ref={formRef} onSubmit={handleSubmit} className="relative bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Message
              </h3>

              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-xl ${submitStatus.type === 'success'
                  ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                  : 'bg-red-500/10 text-red-600 dark:text-red-400'
                  }`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="Project Discussion"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center">
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;