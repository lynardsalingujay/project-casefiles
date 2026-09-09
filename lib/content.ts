// Edit this file to update the site's content — nothing else needs to change.

export const profile = {
  name: "Lynard Salingujay",
  title: "Software Engineer",
  tagline: "Cross-stack engineer with a decade-plus in enterprise systems — now building in AI, automation, and modern web.",
  location: "Christchurch, New Zealand",
  email: "lynardsalingujay@icloud.com",
  github: "https://github.com/lynardsalingujay",
  linkedin: "https://linkedin.com/in/lynardsalingujay",
};

export const about = 
`I'm a software engineer with over 14 years of experience across banking,
financial services, and utilities — including roles at IBM, Standard
Chartered Bank, OCBC Bank, Rakuten Trade, and Gentrack. At Gentrack I
implemented platform requirements for major New Zealand utility clients
including Genesis and Mercury.

I moved to New Zealand in 2019 and completed a Master of Information
Technology at the Eastern Institute of Technology. These days I'm
rebuilding my stack for modern web development — this site itself is
part of that process.`
	;

export const skills = {
  stable: ["Python", "Java", "SQL", "PostgreSQL"],
  beta: ["TypeScript", "Angular"],
  experimental: ["Rust", "Go", "AI / LLM tooling", "RAG pipelines"],
  tools: ["Git", "Vim / Neovim", "Claude Code", "iTerm2"],
};

export type Project = {
  title: string;
  status: "Shipped" | "In progress" | "Learning";
  description: string;
  stack: string[];
  href?: string;
  demoHref?: string;
};

export const projects: Project[] = [
  {
    title: "This Portfolio",
    status: "Shipped",
    description:
      "This site — repo name project-casefiles — built to showcase my work and track what I'm currently learning. A dossier/case-file themed UI, statically typed end to end, deployed on Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    href: "https://github.com/lynardsalingujay/project-casefiles",
    demoHref: "https://lynardsalingujay.com",
  },
  {
    title: "SkyGuyver",
    status: "In progress",
    description:
      "An AI automation platform, primarily built as a vehicle for learning n8n workflows and applied AI/LLM concepts.",
    stack: ["n8n", "AI/LLM", "Automation"],
  },
  {
    title: "Shellingford",
    status: "In progress",
    description:
      "A native iPhone app for recording a daily journal spoken in Bisaya/Cebuano. Consolidates recordings by day and uploads them to an n8n workflow (hosted on Fly.io) that transcribes and translates to English.",
    stack: ["Swift", "iOS", "n8n", "AI/LLM"],
    href: "https://github.com/lynardsalingujay/shellingford-pipeline",
  },
  {
    title: "Voice Journal Assistant",
    status: "In progress",
    description:
      "A voice assistant built over an Obsidian daily journal using a RAG pipeline — covering embeddings, retrieval, and voice interfaces.",
    stack: ["RAG", "AI/LLM", "Voice"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    org: "Gentrack Ltd",
    period: "March 2022 - April 2026",
    summary:
      "Implemented platform requirements for major NZ utility clients (Genesis, Mercury) on Gentrack's proprietary utility platform.",
  },
  {
    role: "Senior Java Developer",
    org: "Rakuten Trade Sdn. Bhd.",
    period: "January 2017 - May 2019",
    summary:
      "Backend services on an online equity trading platform, split between Java and Python (Odoo ERP configuration and scripting). Mentored junior developers and set up local dev environments with Docker, Vagrant, and Ansible.",
  },
  {
    role: "IT Specialist",
    org: "OCBC Bank",
    period: "May 2016 - February 2017",
    summary:
      "Maintained a correspondence management system running daily batches of customer letters, plus production support and incident management for banking systems.",
  },
  {
    role: "Support Analyst",
    org: "Standard Chartered Bank",
    period: "November 2014 - March 2016",
    summary:
      "Oracle CRM support and incident management for banking operations, including on-call support.",
  },
  {
    role: "IT Specialist",
    org: "IBM Philippines Inc.",
    period: "May 2011 - September 2014",
    summary:
      "Front-end team on IBM Product Configurator (IPC), an internal enterprise application — built with Java, JSF, Dojo, and JavaScript. My first hands-on frontend work, well before TypeScript and Angular existed in their current form.",
  },
  {
    role: "Development Software Engineer",
    org: "NCR Inc.",
    period: "May 2007 - December 2010",
    summary:
      "Java developer on a team modernising legacy point-of-sale systems into Java-based applications, covering design, development, and testing.",
  },
];
