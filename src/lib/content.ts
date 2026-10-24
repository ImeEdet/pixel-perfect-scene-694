/**
 * Central content file for the portfolio.
 * Edit the values below to update the whole site — no component changes needed.
 */

export const profile = {
  name: "Ime Akanimo Edet",
  roles: "Software Engineering Graduate | Customer Service | IT Support | Creative Developer",
  intro:
    "I'm a Software Engineering graduate who enjoys solving problems, communicating with people, and creating useful digital experiences. My background combines technical knowledge, customer-facing experience, and a passion for learning.",
};

export const aboutParagraphs = [
  "I hold a Bachelor of Science in Software Engineering from Topfaith University, Nigeria (2025), and my journey so far has stretched across IT operations, customer service, technical support, and teaching. Each role taught me something different — how systems work, how people think, and how to keep calm and helpful when things go wrong.",
  "Outside of formal work, I enjoy exploring technology and building creative applications. I'm drawn to language learning, fiction writing, and digital creativity — and I love projects where logic meets imagination.",
  "The values that guide me are simple: adaptability, problem-solving, communication, and continuous learning. I care about doing things properly, explaining things clearly, and always leaving room to grow.",
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    company: "Niger Delta Development Commission (NDDC)",
    role: "Corps Member — IT Department",
    period: "February 2026 – Present",
    current: true,
    bullets: [
      "Provide technical support to staff.",
      "Troubleshoot software, hardware, and network issues.",
      "Support IT operations and supervise interns.",
    ],
  },
  {
    company: "Start Innovation Hub",
    role: "Team Lead — Developer Interns",
    period: "August 2025 – November 2025",
    bullets: [
      "Mentored junior developers.",
      "Guided interns through Python programming.",
      "Conducted code reviews and technical problem-solving sessions.",
    ],
  },
  {
    company: "National Identity Management Commission (NIMC)",
    role: "Customer Service Intern",
    period: "March 2024 – August 2024",
    bullets: [
      "Assisted hundreds of applicants with NIN registration and verification.",
      "Responded to customer inquiries and resolved complaints.",
      "Explained documentation requirements and registration procedures.",
    ],
  },
  {
    company: "Start Innovation Hub",
    role: "Customer Service & Instructor Intern",
    period: "August 2023 – December 2023",
    bullets: [
      "Taught introductory HTML and CSS.",
      "Responded to customer inquiries.",
      "Conducted follow-up calls with prospective customers.",
    ],
  },
];

export const education = {
  school: "Topfaith University",
  degree: "Bachelor of Science in Software Engineering",
  years: "2021 – 2025",
};

export type Project = {
  title: string;
  description: string;
  demoUrl: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "XYZ Foods",
    description:
      "A restaurant application demo created using Lovable, demonstrating digital food-service application design.",
    demoUrl: "https://xyzfoods.lovable.app",
    image: "/project-xyz-foods.png",
  },
  {
    title: "Story Muse Magic",
    description:
      "A creative writing application designed to support storytelling, brainstorming, and idea generation.",
    demoUrl: "https://story-muse-magic.lovable.app",
    image: "/project-story-muse.png",
  },
];

export const skillCategories: { title: string; blurb: string; skills: string[] }[] = [
  {
    title: "Customer & Communication",
    blurb: "Making every interaction count",
    skills: [
      "Customer Service",
      "Customer Inquiries",
      "Prospect Follow-Up Calls",
      "Complaint Resolution",
      "Effective Communication",
    ],
  },
  {
    title: "Technical",
    blurb: "Building and keeping things running",
    skills: [
      "Python",
      "HTML & CSS",
      "IT Support",
      "Troubleshooting",
      "Microsoft Office",
      "Data Capture & Verification",
    ],
  },
  {
    title: "Leadership",
    blurb: "Helping others do their best work",
    skills: ["Team Mentorship", "Problem-Solving", "Technical Instruction", "Collaboration"],
  },
  {
    title: "Creative",
    blurb: "Where logic meets imagination",
    skills: [
      "Application Prototyping",
      "Creative Writing",
      "Digital Storytelling",
      "AI-Assisted Development",
    ],
  },
];

export const contact = {
  heading: "Let's Connect",
  message:
    "I'm always open to connecting, collaborating, and exploring opportunities where I can contribute my skills and continue learning.",
  email: "menobltd@gmail.com",
  // Replace these empty values with full profile URLs when ready, e.g.
  // linkedin: "https://www.linkedin.com/in/your-handle"
  linkedin: "",
  github: "",
  // Replace public/Ime-Edet-CV.pdf with an updated PDF using the same file name.
  cvPath: "/Ime-Edet-CV.pdf",
};
