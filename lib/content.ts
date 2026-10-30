// Edit this file to update the site's content — nothing else needs to change.

export const profile = {
  name: "Lynard Salingujay",
  title: "Software Engineer",
  tagline:
    "Language-agnostic engineer with a decade-plus in enterprise systems — I learn whatever stack the problem needs, from Java to TypeScript to AI and automation.",
  location: "Christchurch, New Zealand",
  email: "lynardsalingujay@icloud.com",
  github: "https://github.com/lynardsalingujay",
  linkedin: "https://linkedin.com/in/lynardsalingujay",
};

export const about = `
I’m a software engineer and support analyst with more than a decade of experience across banking, financial services, utilities, and point-of-sale systems. I started at NCR modernising legacy point-of-sale systems into Java applications, then worked at IBM on the IBM Product Configurator, an internal enterprise application, and in banking at Standard Chartered and OCBC. At Rakuten Trade, a start-up online investing company, I built backend services for the trading platform. Most recently I spent four years at Gentrack, a billing systems company, implementing billing platform requirements for major New Zealand utility clients including Genesis and Mercury.

I moved to New Zealand in 2019 and completed a Master of Information Technology at the Eastern Institute of Technology. These days I’m rebuilding my stack for modern web development — this site itself is part of that process.
`;

export const skills = {
  stable: ["Python", "Java", "SQL", "PostgreSQL"],
  beta: [
    "TypeScript",
    "React",
    "Next.js",
    "Spring Boot",
    "Angular",
    "Swift",
    "iOS",
  ],
  experimental: ["Rust", "Go", "AI / LLM tooling", "RAG pipelines"],
  tools: [
    "Git",
    "Docker",
    "AWS (EC2, S3)",
    "Postman",
    "n8n",
    "Vercel",
    "VS Code",
    "Vim / Neovim",
    "Claude Code",
  ],
};

export type Project = {
  title: string;
  status: "Shipped" | "In progress" | "Learning";
  description: string;
  stack: string[];
  href?: string;
  demoHref?: string;
  links?: { label: string; href: string }[];
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
    status: "Shipped",
    description:
      "A native iPhone app for recording a daily voice journal in English. Recordings are consolidated by day and sent to an n8n workflow (hosted on Fly.io) that transcribes them, cleans up the grammar, tags each entry, and files a Markdown note into an Obsidian vault via a home server.",
    stack: ["Swift", "iOS", "n8n", "AI/LLM", "Python"],
    href: "https://github.com/lynardsalingujay/shellingford-pipeline",
  },
  {
    title: "Chat Journal Assistant",
    status: "Shipped",
    description:
      'A Telegram chat assistant over my Obsidian daily journal. Ask a question like "when did I last interview with a company?" and it answers from my own entries, using a RAG pipeline: embeddings, pgvector search, and n8n workflows.',
    stack: [
      "RAG",
      "Telegram",
      "n8n",
      "Supabase",
      "pgvector",
      "Python",
      "AI/LLM",
    ],
  },
  {
    title: "Project Task Flow",
    status: "Learning",
    description:
      "A task manager app split into a Java Spring backend and an Angular frontend — my current learning project for modern Java Spring and Angular, built as a clean-slate exercise rather than a rework of prior projects.",
    stack: ["Java", "Spring", "Angular", "TypeScript"],
    links: [
      {
        label: "API repo",
        href: "https://github.com/lynardsalingujay/taskflow-api",
      },
      {
        label: "Angular repo",
        href: "https://github.com/lynardsalingujay/taskflow-angular",
      },
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    org: "Gentrack Ltd",
    period: "March 2022 - April 2026",
    summary:
      "Software engineer on Gentrack's proprietary billing platform, delivering requirements for major NZ utility clients such as Genesis and Mercury.",
    bullets: [
      "Customised Gentrack's proprietary billing platform for NZ/AU utility companies using GenBasic.",
      "Gathered requirements directly with clients such as Genesis Energy to implement platform enhancements.",
      "Maintained high-volume transaction processing related to customer data and billing operations.",
      "Documented system behaviours and integration specifications for both technical and non-technical teams.",
      "Maintained and tested RESTful APIs with Postman.",
    ],
  },
  {
    role: "Senior Java Developer",
    org: "Rakuten Trade Sdn. Bhd.",
    period: "January 2017 - May 2019",
    summary:
      "Backend developer on Rakuten Trade, a start-up online equity trading platform in Malaysia. The work was mainly Python on an extended Odoo ERP core, with integrations into trading and settlement operations.",
    bullets: [
      "Developed and maintained Python code for the backend online trading system on an extended Odoo ERP platform.",
      "Created documentation and design cases, including data flow and sequence diagrams, for all processes.",
      "Created Ansible playbooks and Dockerfiles to set up development environments.",
      "Mentored junior developers through code reviews and pair programming.",
    ],
  },
  {
    role: "IT Specialist",
    org: "OCBC Bank",
    period: "May 2016 - February 2017",
    summary:
      "Application production support for banking systems in Kuala Lumpur, Malaysia, plus maintenance of the correspondence management system that runs daily batches of customer letters.",
    bullets: [
      "Provided application-level production support for banking systems, resolving escalated issues including system failures and integration problems.",
      "Performed root cause analysis and coordinated with internal teams and vendors to restore service and prevent recurrence.",
      "Maintained the correspondence management system and executed batch data corrections.",
    ],
  },
  {
    role: "Support Analyst",
    org: "Standard Chartered Bank",
    period: "November 2014 - March 2016",
    summary:
      "Support analyst on the Oracle CRM platform in a high-volume banking environment in Kuala Lumpur, Malaysia, covering incident resolution and daily batch job monitoring.",
    bullets: [
      "Delivered ongoing end-to-end BAU support for the Oracle CRM platform, resolving incident tickets.",
      "Investigated issues and recommended appropriate actions, including root cause analysis and stability monitoring.",
      "Provided primary and secondary support on a weekly basis to monitor the daily batch jobs.",
      "Analysed the impact of changes on the production environment.",
    ],
  },
  {
    role: "IT Specialist",
    org: "IBM Philippines Inc.",
    period: "May 2011 - September 2014",
    summary:
      "Java front-end developer on the IBM Product Configurator (IPC), an internal enterprise application, in Cebu City, Philippines. My first hands-on frontend work, well before TypeScript and Angular existed in their current form.",
    bullets: [
      "Worked as a Java front-end developer in an Agile team, building front-end components for IPC with Java Server Faces (JSF), Dojo, and JavaScript.",
      "Collaborated with product owners, testers, and other software engineers to deliver high-quality software.",
      "Developed a metrics logging and web services application for the Blue Harmony project of IPC.",
      "Implemented a progress indicator as part of the UI performance enhancements.",
      "Developed a cache clear mechanism using the Java Caching System.",
      "Fixed bugs and supported the production environment, often investigating and resolving issues independently.",
      "Built internal monitoring and reporting tools that gave the operations team better visibility into system performance.",
    ],
  },
  {
    role: "Software Development Engineer",
    org: "NCR Inc.",
    period: "May 2007 - December 2010",
    summary:
      "Software development engineer on point-of-sale software for EMEA retail customers, including Aldi, in Cebu City, Philippines.",
    bullets: [
      "Re-engineered the existing HTML-based system into a Java application for the Advanced Retail Solution (ARS) project, modernising legacy point-of-sale systems.",
      "Integrated SOAP and REST web services to extend system capabilities.",
      "Fixed bugs and improved application performance.",
      "Supported solution development activities to improve business processes.",
    ],
  },
];
