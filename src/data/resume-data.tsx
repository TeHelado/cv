import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ResumeData } from "./types";

export const RESUME_DATA: ResumeData = {
  name: "David Silis",
  title: "Senior Software Engineer | Front-End & Full-Stack Developer",
  initials: "DS",
  location: "Mexico City, Mexico",
  locationLink: "https://www.google.com/maps/place/Ciudad+de+M%C3%A9xico",
  about:
    "Software engineer passionate about problem-solving, the web and tech in our daily life.",
  summary:
    "Results-driven software engineer with 6+ years of experience specializing in JavaScript, TypeScript, and modern web technologies. Proven expertise in developing scalable frontend architectures, cross-platform applications, and leading agile teams. Skilled in collaborating with global teams, optimizing performance, and building engaging user experiences using React, Next.js, and React Native. Passionate about crafting clean, maintainable code and delivering high-impact products.",
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
      company: "Earned",
      link: "https://www.earned.com/",
      badges: ["Remote"],
      title: "Senior Front-end Developer",
      start: "2024",
      end: "2025",
      description: [
        "Improved SEO and reduced JavaScript bundle size, boosting site performance.",
        "Developed new features for the client portal and React Native mobile app.",
        "Collaborated on a clean and consistent design system.",
      ],
    },
    {
      company: "All Athlete Inc.",
      link: "https://www.allathlete.com/",
      badges: ["Remote"],
      title: "Senior Front-end Developer",
      start: "2023",
      end: "2024",
      description: [
        "Maintained web and iOS feature parity.",
        "Delivered responsive and performant features.",
        "Led and coached an intern developer.",
      ],
    },
    {
      company: "Chegg",
      link: "https://www.chegg.com/",
      badges: ["Remote"],
      title: "Front-end Developer",
      start: "2021",
      end: "2023",
      description: [
        "Worked on Chegg Writing Tools (grammar and plagiarism checker).",
        "Enhanced UI and performance in React/Next.js environment.",
        "Reduced main app bundle size.",
        "Improved performance and user experience minimizing class names and applying techniques like tree shaking and lazy loading.",
      ],
    },
    {
      company: "SUMA México",
      link: "https://www.sumamexico.com/",
      badges: [],
      title: "Senior Full-Stack Developer",
      start: "2018",
      end: "2021",
      description: [
        "Developed identity verification platform with microservices and serverless architecture.",
        "Designed APIs, internal dashboards, and authentication flows.",
        "Led a team of 5 developers.",
      ],
    },
    {
      company: "Ember Desarrollo de Software",
      link: "",
      badges: [],
      title: "Senior Full-stack Developer",
      start: "2018",
      end: "2022",
      description: [
        "Led a team developing custom software for small and medium sized companies.",
        "Interfaced directly with stakeholders to define scope and deliverables.",
        "Worked on a variety of projects, including CRM, ERP, and custom software solutions.",
      ],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Tailwind CSS",
    "GraphQL",
    "Redux",
    "Zustand",
    "React Query",
    "React Hook Form",
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
    "Figma",
  ],
  projects: [
    {
      title: "Chegg Writing Tools",
      techStack: ["React", "Next.js", "GraphQL", "TypeScript"],
      description:
        "Helped build the next generation of Chegg's grammar and plagiarism checker tools, with performance optimization and clean UI implementation.",
    },
    {
      title: "Identity Verification Platform",
      techStack: ["Node.js", "MongoDB", "Azure", "Kubernetes", "React"],
      description:
        "Led development of core identity verification system using microservices and serverless architecture for real-time client onboarding.",
    },
    {
      title: "Earned Client Portal & Mobile App",
      techStack: ["React", "React Native", "Next.js", "TypeScript"],
      description:
        "Implemented new portal features and improved mobile UX. Collaborated with design to build a consistent design system for web and mobile.",
    },
    {
      title: "All Athlete Web Platform",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      description:
        "Developed a feature-rich sports performance web platform with responsive UI that mirrored iOS functionality and supported scalable growth.",
    },
    {
      title: "Microservice Logging & Monitoring System",
      techStack: ["Node.js", "Docker", "Kubernetes", "MongoDB", "AWS"],
      description:
        "Built internal tooling for logging, alerting, and monitoring across services in SUMA's platform using container orchestration and serverless functions.",
    },
    {
      title: "Custom ERP for Small Businesses",
      techStack: ["React", "Firebase", "Node.js", "TypeScript"],
      description:
        "Developed tailored ERP modules (inventory, invoices, customer management) for small businesses. Delivered end-to-end systems from UI to backend.",
    },
    {
      title: "CI/CD Automation Pipelines",
      techStack: [
        "GitHub Actions",
        "Docker",
        "TypeScript",
        "Next.js",
        "Azure DevOps",
      ],
      description:
        "Set up CI/CD pipelines for automated testing, builds and deployments across front-end and microservice repositories.",
    },
    {
      title: "Design System Library",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Figma"],
      description:
        "Collaborated with design and frontend teams to build a reusable UI component library with accessible, responsive components and documentation.",
    },
  ],
} as const;
