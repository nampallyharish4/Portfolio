export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  category: string;
  status: string;
  duration: string;
  team: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}