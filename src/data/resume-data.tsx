import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ResumeData } from "./types";

export const RESUME_DATA: ResumeData = {
  name: "David Silis",
  initials: "DS",
  location: "Mexico City, Mexico",
  locationLink: "https://www.google.com/maps/place/Ciudad+de+M%C3%A9xico",
  about:
    "Software engineer passionate about problem-solving, the web and tech in our daily life.",
  summary:
    "I specialize in JavaScript, TypeScript and web related technologies. I have experience working with companies from all around the world. I am passionate about building products and leading teams.",
  avatarUrl: "",
  personalWebsiteUrl: "https://silis.dev",
  contact: {
    email: "gmdsilis@gmail.com",
    tel: "+525559628491",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/TeHelado",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/david-p%C3%A9rez-silis-1468a1142/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad La Salle",
      degree:
        "Engineer's Degree in Cybernetics Engineering and Computational Systems",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "All Athlete Inc.",
      link: "https://www.allathlete.com/",
      badges: ["Remote"],
      title: "Senior Front-end Developer",
      start: "2023",
      end: "2024",
      description:
        "Worked on the main website to maintain feature parity with their iOS app. Technologies: React, TypeScript, Next.js",
    },
    {
      company: "Chegg",
      link: "https://www.chegg.com/",
      badges: ["Remote"],
      title: "Front-end Developer",
      start: "2021",
      end: "2023",
      description:
        "As part of the writing-tools team, I worked on the development of the new version of the Chegg Writing Tools, which included their grammar & plagiarism checker. Technologies: React, TypeScript, Next.js, GraphQL",
    },
    {
      company: "SUMA México",
      link: "https://www.sumamexico.com/",
      badges: [],
      title: "Senior Full-Stack Developer",
      start: "2018",
      end: "2021",
      description:
        "Developed the core infrastructure of the client's identity verification platform including multiple microservices, serverless functions, database model, APIs, and various dashboards, among others. Technologies: React, Node.js, Mongodb, Oauth2, Azure, Kubernetes, Docker",
    },
    {
      company: "Ember Desarrollo de Software",
      link: "",
      badges: [],
      title: "Senior Full-stack Developer",
      start: "2018",
      end: "2022",
      description:
        "Created on demand, tailored software for small and medium sized companies, led a small team of developers and was in direct contact with clients and stakeholders. Technologies: React, Node.js, Firebase.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "React Native",
    "Node.js",
    "GraphQL",
    "Redux",
    "Serverless",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "MySQL",
    "Git",
    "CI/CD",
    "Jest",
    "Agile",
    "Scrum",
  ],
  projects: [],
} as const;
