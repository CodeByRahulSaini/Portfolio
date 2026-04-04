export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
  type?: 'image' | 'video';
}

export interface Recommendation {
  name: string;
  designation: string;
  company: string;
  text: string;
  linkedin_url?: string;
  screenshot?: ImageAsset;
}

export interface Project {
  name: string;
  github?: string;
  live_link?: string;
  area?: string;
  summary: string;
  impact?: string;
  images?: ImageAsset[];
  videoUrl?: string;
  instagramEmbed?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  company_description?: string;
  bullet_points: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Award {
  title: string;
  description: string;
  company?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year?: string; // Optional if not in CV
  core_areas?: string;
}

export interface OpenSourceContribution {
  title: string;
  description: string;
  link: string;
  video?: string;
}

export interface PortfolioData {
  hero: {
    name: string;
    title: string;
    summary: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website?: string;
  };
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  awards: Award[];
  recommendations: Recommendation[];
  education: Education[];
  openSource?: OpenSourceContribution[];
}