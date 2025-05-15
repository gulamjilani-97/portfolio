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
    title: "Zentropay – Personal Budget & Finance Manager",
    description: "Zentropay is a modern, responsive web application built with React and TypeScript, designed to help users efficiently manage personal finances. From tracking income and expenses to generating visual reports and managing budgets, Zentropay makes financial planning simple and accessible.",
    image: "/assets/zentropay.jpg",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "ESLint"],
    demoUrl: "https://zentropay1.vercel.app",
    sourceUrl: "https://github.com/gulamjilani-97/zentropay1"
  },
  {
    id: 2,
    title: "ProAnalyst – Football Analysis Platform",
    description: "ProAnalyst is a multi-faceted football analysis platform combining machine learning, web development, and static content to deliver insightful tools for Premier League enthusiasts. Features include starting lineup prediction, fixture display, and machine learning integration using a Random Forest model.",
    image: "/assets/pro.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "Django", "Python", "Machine Learning"],
    sourceUrl: "https://github.com/gulamjilani-97/ProAnalyst"
  }
];
