export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product catalog, shopping cart, and payment processing.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    demoUrl: "https://ecommerce-demo.example.com",
    sourceUrl: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects. Features include drag-and-drop interface, task categorization, reminders, and team collaboration.",
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    demoUrl: "https://taskapp-demo.example.com",
    sourceUrl: "https://github.com/yourusername/task-management-app"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that displays current weather and forecasts for any location. Utilizes weather APIs and features animated visualizations.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["JavaScript", "React", "Chart.js", "API Integration"],
    demoUrl: "https://weather-demo.example.com",
    sourceUrl: "https://github.com/yourusername/weather-dashboard"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Framer Motion. Features smooth animations, responsive design, and dark/light theme toggle.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    demoUrl: "https://portfolio-demo.example.com",
    sourceUrl: "https://github.com/yourusername/portfolio-website"
  }
];