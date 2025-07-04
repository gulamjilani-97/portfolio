import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          className="max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300">
            Feel free to reach out if you have any questions or want to work together
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-md"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Contact Information
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                <MapPin size={20} />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-700 dark:text-gray-300 mt-1">📍 Mira Road, Thane-401107</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                <Mail size={20} />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                <a 
                  href="mailto:shaikhgulamjilani02@gmail.com"
                  className="text-gray-700 dark:text-gray-300 mt-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  shaikhgulamjilani02@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                <Phone size={20} />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                <a 
                  href="tel:+918369642668"
                  className="text-gray-700 dark:text-gray-300 mt-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                 +91 83696 42668
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 text-center">Follow Me</h4>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/gulamjilani-97" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/gulamjilani-shaikh-952538362" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
