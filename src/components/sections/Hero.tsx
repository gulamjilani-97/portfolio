import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-200 to-secondary-300 dark:from-secondary-700 dark:to-secondary-800 -z-10" />
      
      <div className="container mx-auto px-4 font-mono text-black dark:text-white">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-primary-light/10 dark:bg-primary-light/20 text-black dark:text-white text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            👋 Hello, I'm
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Shaikh Gulamjilani
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-6 text-black dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg max-w-2xl mb-8 text-black/70 dark:text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly applications with modern technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a 
              href="https://github.com/gulamjilani-97" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          <a href="#about" className="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
