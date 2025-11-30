export function calculateExperience(dateString) {
  const start = new Date(dateString);
  const now = new Date();

  const diffMs = now - start;
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365);

  if (diffYears < 1) return "<1 year";

  const wholeYears = Math.floor(diffYears);

  if (wholeYears === 1) return "1 year";

  return `${wholeYears} years`;
}

export const technicalSkills = [
  {
    name: "Java",
    logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    level: "Advanced",
    experienceStart: "2025-01",
    category: [
      "Backend Development",
      "Competitive Programming",
      "System Design",
    ],
    filterCategories: ["languages"],
  },
  {
    name: "C/C++",
    logo: "https://cdn.simpleicons.org/cplusplus/00599C",
    level: "Intermediate",
    experienceStart: "2024-01",
    category: [
      "System Programming",
      "Competitive Programming",
      "Performance Optimization",
    ],
    filterCategories: ["languages"],
  },
  {
    name: "JavaScript",
    logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
    level: "Advanced",
    experienceStart: "2024-07",
    category: ["Full-stack Development", "Backend APIs", "Web Services"],
    filterCategories: ["languages", "frontend", "backend"],
  },
  {
    name: "TypeScript",
    logo: "https://cdn.simpleicons.org/typescript/3178C6",
    level: "Intermediate",
    experienceStart: "2025-10",
    category: [
      "Full-stack Applications",
      "Type-safe Backend Systems",
      "Frontend Development",
    ],
    filterCategories: ["languages", "frontend", "backend"],
  },
  {
    name: "Python",
    logo: "https://cdn.simpleicons.org/python/3776AB",
    level: "Intermediate",
    experienceStart: "2023-07",
    category: ["Backend APIs", "Automation Scripts", "Web Services"],
    filterCategories: ["languages", "backend"],
  },
  {
    name: "Bash",
    logo: "https://cdn.simpleicons.org/gnubash/4EAA25",
    level: "Intermediate",
    experienceStart: "2024-08",
    category: ["DevOps Scripts", "System Administration", "CI/CD Automation"],
    filterCategories: ["devops", "languages"],
  },
  {
    name: "Node.js",
    logo: "https://cdn.simpleicons.org/nodedotjs/339933",
    level: "Advanced",
    experienceStart: "2024-10",
    category: ["Backend Services", "API Development", "Server-side JavaScript"],
    filterCategories: ["backend"],
  },
  {
    name: "Express.js",
    logo: "https://cdn.simpleicons.org/express/000000",
    darkLogo: "https://cdn.simpleicons.org/express/FFFFFF",
    level: "Advanced",
    experienceStart: "2024-10",
    category: ["Backend Frameworks", "REST APIs", "Web Servers"],
    filterCategories: ["backend"],
  },
  {
    name: "FastAPI",
    logo: "https://cdn.simpleicons.org/fastapi/009688",
    level: "Intermediate",
    experienceStart: "2025-06",
    category: ["High-performance APIs", "Python Backends", "Async Programming"],
    filterCategories: ["backend"],
  },
  {
    name: "REST APIs",
    logo: "https://media.licdn.com/dms/image/v2/D5612AQE0nEZrPGv0JA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679583758253?e=2147483647&v=beta&t=4QpsM1YKchLOfxVzpfFJAQWdkJ3vg3aKUWYL5tFVXXI",
    level: "Advanced",
    experienceStart: "2024-10",
    category: ["API Design", "Backend Development", "Web Services"],
    filterCategories: ["backend"],
  },
  {
    name: "GraphQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png",
    level: "Beginner",
    experienceStart: "2025-10",
    category: ["API Design", "Backend Development", "Schema Modeling"],
    filterCategories: ["backend"],
  },
  {
    name: "ReactJS",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
    level: "Advanced",
    experienceStart: "2024-09",
    category: ["Frontend Development", "User Interface", "Web Applications"],
    filterCategories: ["frontend"],
  },
  {
    name: "Next.js",
    logo: "https://cdn.simpleicons.org/nextdotjs/000000",
    darkLogo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
    level: "Advanced",
    experienceStart: "2025-10",
    category: [
      "Full-stack Framework",
      "Server-side Rendering",
      "Frontend Development",
    ],
    filterCategories: ["frontend", "backend"],
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    level: "Advanced",
    experienceStart: "2025-07",
    category: ["Frontend Styling", "Responsive Design", "UI Development"],
    filterCategories: ["frontend"],
  },
  {
    name: "SQL",
    logo: "/images/sql-logo.png",
    level: "Advanced",
    experienceStart: "2025-02",
    category: ["Query Optimization", "Joins & Indexing", "Database Design"],
    filterCategories: ["languages", "database"],
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.simpleicons.org/postgresql/4169E1",
    level: "Advanced",
    experienceStart: "2025-03",
    category: ["Database Management", "Backend Systems", "Data Modeling"],
    filterCategories: ["database", "backend"],
  },
  {
    name: "MongoDB",
    logo: "https://cdn.simpleicons.org/mongodb/47A248",
    level: "Intermediate",
    experienceStart: "2024-10",
    category: [
      "NoSQL Databases",
      "Flexible Data Models",
      "Backend Development",
    ],
    filterCategories: ["database", "backend"],
  },
  {
    name: "Prisma",
    logo: "https://cdn.simpleicons.org/prisma/2D3748",
    darkLogo: "https://cdn.simpleicons.org/prisma/FFFFFF",
    level: "Intermediate",
    experienceStart: "2025-09",
    category: ["Database ORM", "Type-safe Queries", "Backend Development"],
    filterCategories: ["database", "backend"],
  },
  {
    name: "Redis",
    logo: "https://www.svgrepo.com/show/303460/redis-logo.svg",
    level: "Advanced",
    experienceStart: "2025-09",
    category: ["Caching", "Session Management", "Performance Optimization"],
    filterCategories: ["database", "backend"],
  },
  {
    name: "Linux",
    logo: "https://cdn.simpleicons.org/linux/FCC624",
    level: "Intermediate",
    experienceStart: "2025-01",
    category: ["System Administration", "Shell Scripting", "Server Management"],
    filterCategories: ["devops"],
  },
  {
    name: "Docker",
    logo: "https://cdn.simpleicons.org/docker/2496ED",
    level: "Intermediate",
    experienceStart: "2025-06",
    category: ["Containerization", "Development Environments", "Deployment"],
    filterCategories: ["devops"],
  },
  {
    name: "Kubernetes",
    logo: "https://cdn.simpleicons.org/kubernetes/326CE5",
    level: "Beginner",
    experienceStart: "2025-09",
    category: [
      "Container Orchestration",
      "DevOps Infrastructure",
      "Scalable Systems",
    ],
    filterCategories: ["devops"],
  },
  {
    name: "AWS EC2",
    logo: "https://a.b.cdn.console.awsstatic.com/a/v1/RHSMMGZKYJXPPNI2IOC6Z63HJEW4FD5ZYMKJSXD7HQ5IPUTQR2TQ/icon/d88319dfa5d204f019b4284149886c59-7d586ea82f792b61a8c87de60565133d.svg",
    level: "Intermediate",
    experienceStart: "2025-07",
    category: ["Server Hosting", "Backend Deployment", "Cloud Infrastructure"],
    filterCategories: ["cloud", "backend"],
  },
  {
    name: "AWS RDS",
    logo: "https://a.b.cdn.console.awsstatic.com/a/v1/6JW3RZSXOZ4EFR2HZBU6IIOCUZEIFKRK6JZDCUDHQVQXRMAORYWQ/icon/1d374ed2a6bcf601d7bfd4fc3dfd3b5d-c9f69416d978016b3191175f35e59226.svg",
    level: "Intermediate",
    experienceStart: "2025-07",
    category: [
      "Managed Databases",
      "PostgreSQL Hosting",
      "Production Backends",
    ],
    filterCategories: ["cloud", "database"],
  },
  {
    name: "AWS S3",
    logo: "https://a.b.cdn.console.awsstatic.com/a/v1/DKY2SIL5N3MJQCULDNOQE7TKLNQIUXRSOHBJKJGQAHLZO7TLH3TQ/icon/c0828e0381730befd1f7a025057c74fb-43acc0496e64afba82dbc9ab774dc622.svg",
    level: "Beginner",
    experienceStart: "2025-09",
    category: ["Object Storage", "Static Assets", "File Management"],
    filterCategories: ["cloud"],
  },
  {
    name: "Supabase",
    logo: "https://cdn.simpleicons.org/supabase/3FCF8E",
    level: "Advanced",
    experienceStart: "2025-02",
    category: ["Backend-as-a-Service", "Database Management", "Authentication"],
    filterCategories: ["database", "backend", "cloud"],
  },
  {
    name: "Vercel",
    logo: "https://cdn.simpleicons.org/vercel/000000",
    darkLogo: "https://cdn.simpleicons.org/vercel/FFFFFF",
    level: "Advanced",
    experienceStart: "2025-01",
    category: [
      "Frontend Deployment",
      "Full-stack Applications",
      "Serverless Hosting",
    ],
    filterCategories: ["cloud", "frontend"],
  },
  {
    name: "Render",
    logo: "https://cdn.simpleicons.org/render/46E3B7",
    level: "Advanced",
    experienceStart: "2025-01",
    category: ["Backend Services", "API Hosting", "Microservices Deployment"],
    filterCategories: ["cloud", "backend"],
  },
  {
    name: "Git",
    logo: "https://cdn.simpleicons.org/git/F05032",
    level: "Advanced",
    experienceStart: "2024-10",
    category: ["Version Control", "Team Collaboration", "DevOps Workflow"],
    filterCategories: ["devops"],
  },
];

export const skills = technicalSkills.map((skill) => ({
  ...skill,
  experience: calculateExperience(skill.experienceStart),
}));
