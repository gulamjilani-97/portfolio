import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300">
            Here are some of the skills and technologies I've been working with
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * groupIndex, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                {skillGroup.category}
              </h3>
              
              <div className="space-y-5">
                {skillGroup.items.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;