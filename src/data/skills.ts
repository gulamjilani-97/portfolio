export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0-100
  icon?: string;
}

export const skills: Skill[] = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "JavaScript", proficiency: 95 },
      { name: "HTML/CSS", proficiency: 90 },
      { name: "Tailwind CSS", proficiency: 85 },
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", proficiency: 80 },
      { name: "Express", proficiency: 85 },
      { name: "MongoDB", proficiency: 75 },
      { name: "SQL", proficiency: 70 },
      { name: "GraphQL", proficiency: 65 },
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", proficiency: 90 },
      { name: "Docker", proficiency: 70 },
      { name: "Jest", proficiency: 75 },
      { name: "Webpack", proficiency: 65 },
      { name: "CI/CD", proficiency: 60 },
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving", proficiency: 90 },
      { name: "Communication", proficiency: 85 },
      { name: "Teamwork", proficiency: 95 },
      { name: "Time Management", proficiency: 80 },
      { name: "Adaptability", proficiency: 90 },
    ]
  }
];