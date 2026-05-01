import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // EmailJS credentials should ideally be in .env file
    // Replace these with your actual IDs from EmailJS
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Have a question or want to work together? Leave a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 focus:shadow-[0_0_15px_rgba(20,184,166,0.2)] text-slate-900 dark:text-white transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 focus:shadow-[0_0_15px_rgba(20,184,166,0.2)] text-slate-900 dark:text-white transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 focus:shadow-[0_0_15px_rgba(20,184,166,0.2)] text-slate-900 dark:text-white transition-all duration-300 resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-medium shadow-md hover:shadow-primary-500/40 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                ) : status === 'success' ? (
                  <><CheckCircle size={20} /> Sent Successfully</>
                ) : status === 'error' ? (
                  <><AlertCircle size={20} /> Error Sending</>
                ) : (
                  <><Send size={20} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">Connect With Me</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                I'm currently available for freelance work and open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 mb-8">
                <div className="p-3 bg-primary-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-500">Email</p>
                  <a href={`mailto:${portfolioData.contact.email}`} className="text-lg font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {portfolioData.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 hover:shadow-md rounded-xl transition-colors border border-slate-200 dark:border-slate-700"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:shadow-md rounded-xl transition-colors border border-slate-200 dark:border-slate-700"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={portfolioData.contact.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-400 dark:hover:text-blue-400 hover:shadow-md rounded-xl transition-colors border border-slate-200 dark:border-slate-700"
              >
                <FaTwitter size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
