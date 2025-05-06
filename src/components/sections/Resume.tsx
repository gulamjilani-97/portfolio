import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Assistant Accountant",
    company: "CA Razzak & Associates",
    period: "Jan 2024 – Jun 2024",
    description: "Work",
    type: "work"
  },
  {
    id: 2,
    title: "Bachelors in Computer Science",
    company: "KC College of Arts, Commerce & Science, Mumbai",
    period: "2022 – 2025",
    description: "GPA: 9.60 / 10",
    type: "education"
  },
  {
    id: 3,
    title: "Higher Secondary Certificate (HSC) – Class 12",
    company: "KC College of Arts, Commerce & Science, Mumbai",
    period: "2021 – 2022",
    description: "Percentage: 66.6%",
    type: "education"
  },
  {
    id: 4,
    title: "Secondary School Certificate (SSC) – Class 10",
    company: "St. Xaviers High School",
    period: "2019 – 2020",
    description: "Percentage: 88.6%",
    type: "education"
  }
];



const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Resume & Experience</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
          A summary of my professional journey and educational background
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
  href="/shaikhgulamjilaniresume.pdf"
  download="shaikhgulamjilaniresume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
>
  Download Resume
</a>
          </motion.div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
          
          {/* Timeline items */}
          <div className="relative">
            {timelineItems.map((item, index) => (
              <motion.div 
                key={item.id}
                className={`mb-12 relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="md:w-1/2"></div>
                
                {/* Timeline icon */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-4 w-9 h-9 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-500 z-10 flex items-center justify-center">
                  <Briefcase size={16} className="text-primary-500" />
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-12 md:pr-12">
                  <div className="card p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                      <h3 className="text-xl font-bold text-black">
                        {item.title}
                      </h3>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-white-400 text-sm mt-2 md:mt-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-black font-medium mb-3">
                      {item.company}
                    </p>
                    <p className="text-black whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          
            
            
          
        </div>
      </div>
    </section>
  );
};

export default Resume;
