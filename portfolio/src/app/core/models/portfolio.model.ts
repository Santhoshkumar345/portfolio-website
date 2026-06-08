export interface Portfolio {
  personal: Personal;
  stats: Stat[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  techStack: TechItem[];
  education: Education[];
  resume: Resume;
}

export interface Personal {
  profileImage: string;
  name: string;
  role: string;
  about: string;
  email: string;
  linkedin: SocialLink;
  github: SocialLink;
  naukri: SocialLink;
}

export interface SocialLink {
  image: string;
  url: string;
}

export interface Stat {
  title: string;
  value: string;
}

export interface Experience {
  role: string;
  company: string;
  years: string;
  project?: ExperienceProject[];
}

export interface ExperienceProject {
  name: string;
  description: string;
  techStack: string[];
}

export interface Project {
  name: string;
  image: string;
  details: string;
  projectUrl: string;
  repoUrl: string;
  techStack: string[];
}

export interface Certification {
  name: string;
  image: string;
  url: string;
}

export interface TechItem {
  name: string;
  image: string;
}

export interface Education {
  course: string;
  organisation: string;
  year: string;
}

export interface Resume {
  url: string;
}
