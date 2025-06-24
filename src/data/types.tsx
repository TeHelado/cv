import { FunctionComponent } from "react";

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  title?: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: Contact;
  education: Education[];
  work: Work[];
  skills: string[];
  projects: Project[];
}

export interface Contact {
  email: string;
  tel: string;
  social: Social[];
}

export interface Social {
  name: string;
  url: string;
  icon: FunctionComponent<{ className: string }>;
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface Project {
  title: string;
  techStack: string[];
  description: string;
  link?: Link;
}

export interface Link {
  label: string;
  href: string;
}

export interface Work {
  company: string;
  link: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: string | string[];
}
