import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ResumeData } from "./types";


export const SECTION_HEADERS = {
  about: "Professional Summary",
  experience: "Professional Experience",
  projects: "Key Projects",
  skills: "Technical Skills",
  education: "Education",
  contact: "Contact",
} as const;

export const RESUME_DATA: ResumeData = {
  name: "David Silis",
  title: "Senior Software Engineer | Front-End & Full-Stack Developer",
  initials: "DS",
  location: "Mexico City, Mexico",
  locationLink: "https://www.google.com/maps/place/Ciudad+de+M%C3%A9xico",
  about:
    "Software engineer passionate about problem-solving, the web and tech in our daily life.",
  summary: `Results-driven Senior Software Engineer with ${new Date().getFullYear() - 2018}+ years of experience specializing in JavaScript, TypeScript, and modern web technologies. Proven expertise in developing scalable frontend architectures, cross-platform applications, and leading high-performance teams. 

Key highlights:
• Built and maintained systems serving 100K+ monthly users
• Reduced application bundle sizes by 30-40%, improving load times by 2+ seconds
• Led teams of 5+ developers while mentoring junior engineers to promotions
• Delivered products used by Fortune 500 companies in EdTech and FinTech`,
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
      }
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
      badges: ["Remote", "FinTech"],
      title: "Senior Front-end Developer",
      start: "2024",
      end: "2025",
      description: [
        "Increased organic traffic through SEO optimizations, reducing JavaScript bundle size by (Core Web Vitals score improved by 35%)",
        "Led development of new client portal features contributing to ARR growth through improved user retention and conversion",
        "Co-authored design system with reusable components, reducing development time.",
        "Established testing framework for design system components in React and React Native",
      ],
    },
    {
      company: "All Athlete Inc.",
      link: "https://www.allathlete.com/",
      badges: ["Remote", "Sports Tech"],
      title: "Senior Front-end Developer",
      start: "2023",
      end: "2024",
      description: [
        "Achieved 98% feature parity between web and iOS platforms, ensuring consistent UX.",
        "Delivered responsive features with 0 regression bugs, increasing mobile conversion rate.",
        "Mentored 1 intern to full-time for 6 months; conducted code reviews reducing technical debt.",
        "Collaborated with design team to implement UI specifications, improving brand consistency.",
      ],
    },
    {
      company: "Chegg",
      link: "https://www.chegg.com/",
      badges: ["Remote", "EdTech"],
      title: "Front-end Developer",
      start: "2021",
      end: "2023",
      description: [
        "Enhanced UI/UX for Chegg Writing Tools (grammar and plagiarism checker), contributing to and increase in daily active users.",
        "Reduced main app bundle size by 30% through tree shaking, code splitting, and lazy loading (LCP improved by 2.3s on mobile).",
        "Built test automation framework achieving 70%+ code coverage, reducing production bugs.",
        "Improved application performance by optimizing React rendering cycles, decreasing Time to Interactive and CLS.",
      ],
    },
    {
      company: "SUMA México",
      link: "https://www.sumamexico.com/",
      badges: ["On-site", "FinTech"],
      title: "Senior Full-Stack Developer",
      start: "2018",
      end: "2021",
      description: [
        "Architected and delivered identity verification platform processing 100K+ verifications monthly with 99.9% uptime using microservices and serverless architecture",
        "Designed 5+ RESTful APIs and internal dashboards.",
        "Led cross-functional team of 5 engineers, delivering projects 2 weeks ahead of schedule on average.",
        "Managed stakeholder relationships across 5+ enterprise clients, achieving 95% client satisfaction.",
        "Implemented CI/CD pipelines reducing deployment time from 4 hours to 15 minutes",
        "Optimized processing time by 40% by implementing caching and batch processing.",
      ],
    },
  ],
  // Organized skills by category for better ATS parsing
  skills: {
    languages: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "GraphQL",
    ],
    frameworks: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
    ],
    stateManagement: [
      "Redux",
      "Zustand",
      "React Query",
      "React Hook Form",
    ],
    testing: [
      "Jest",
      "react-testing-library",
      "TestCafe",
    ],
    cloudDevOps: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Serverless",
    ],
    databases: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
    ],
    tools: [
      "Git",
      "Figma",
      "Agile",
      "Scrum",
    ],
  },
  projects: [
    {
      title: "Earned Client Portal & Design System",
      techStack: ["React", "React Native", "Next.js", "TypeScript", "Jest", "Tailwind CSS"],
      description:
        "Implemented new portal features; co-authored reusable component design system reducing dev time. Bundle size reduction and test coverage.",
    },
    {
      title: "All Athlete Web Platform",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
      description:
        "Built responsive sports performance web platform with iOS feature parity. Features delivered, increase in mobile conversions.",
    },
    {
      title: "Chegg Writing Tools",
      techStack: ["React", "Next.js", "GraphQL", "TypeScript", "Jest", "TestCafe"],
      description:
        "Next-gen grammar and plagiarism checker with bundle size reduction, faster load times, test coverage, contributing to DAU growth.",
    },
    {
      title: "SUMA Identity Verification Platform",
      techStack: ["Node.js", "MongoDB", "Azure", "Kubernetes", "React", "Jest", "AWS"],
      description:
        "Core identity verification system processing 100K+ monthly verifications. 99.9% uptime, APIs, processing time reduction.",
    },
    {
      title: "Microservice Logging & Monitoring System",
      techStack: ["Node.js", "Docker", "Kubernetes", "MongoDB", "AWS Lambda", "CloudWatch"],
      description:
        "Built internal tooling for logging, alerting, and monitoring across microservices. Reduced incident response time.",
    },
    {
      title: "Custom ERP for Small Businesses",
      techStack: ["React", "Firebase", "Node.js", "TypeScript"],
      description:
        "Full-stack ERP with inventory, invoicing, and CRM modules. End-to-end delivery for small business clients.",
    },
  ],
} as const;