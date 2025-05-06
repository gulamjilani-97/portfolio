import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary-500 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="About Me" 
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Who am I?
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a Computer Science undergraduate with a keen interest in creating efficient, user-centric web solutions. Experienced in frontend development using React, JavaScript, and Bootstrap, along with backend logic in Python. Adept at translating real-world challenges into functional projects, from predictive sports analytics tools to financial record management. Always eager to learn and contribute to innovative, high-impact tech environments..
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I've been continuously learning and adapting 
              to new technologies. I'm particularly enthusiastic about React, Node.js, 
              and cloud technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[
                "Frontend Development",
                "Backend Development",
                "UI/UX Design",
                "Database Design",
                "API Development",
                "Performance Optimization",
                "Responsive Design"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <CheckCircle className="mr-2 text-primary-500" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When I'm not coding, you can find me  reading tech articles, 
              or experimenting with new technologies. I'm always open to new 
              challenges and opportunities to grow.
            </p>
            
            <a href="#contact" className="btn btn-primary">
              Let's Connect
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;