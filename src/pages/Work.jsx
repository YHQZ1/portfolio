import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function useTypewriter(text, speed = 80) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
}

export default function Work() {
  const { darkMode } = useTheme();
  const typedText = useTypewriter("Hey, I'm Uttkarsh!", 80);

  const projects = [
    {
      title: "VerQ",
      description:
        "A unified platform that streamlines the student placement journey from start to finish. By combining an AI-driven ATS resume scanner, personalized application tracking, and direct company outreach, it eliminates friction and empowers students to secure their ideal roles.",
      tags: ["Full-Stack", "AI Integration", "Real-time", "Scalable"],
      github: "https://github.com/About-Rudra/Verq",
      live: "https://verq-pi.vercel.app",
      image: "/images/verq.png",
    },
    {
      title: "Order Management System",
      description:
        "A robust desktop application built to streamline business operations. It provides a centralized system for managing customers, orders, and vendors, featuring real-time tracking and powerful data management capabilities for complete operational oversight.",
      tags: ["Desktop App", "Database Design", "CRUD Operations", "Enterprise"],
      github: "https://github.com/YHQZ1/Order-Management-System",
      live: "#",
      image: "/images/oms.png",
    },
    {
      title: "BitLink",
      description:
        "A modern, full-stack web application for streamlined link management. It allows users to shorten URLs, generate dynamic QR codes, and gain valuable insights through a real-time analytics dashboard, all within a clean and intuitive interface.",
      tags: ["URL Shortener", "Analytics", "QR Generation", "Real-time"],
      github: "https://github.com/YHQZ1/BitLink",
      live: "https://btlink.vercel.app/",
      image: "/images/bitlink.png",
    },
    {
      title: "Alumni Connect",
      description:
        "A fundraising platform that enables educational institutions to launch and promote donation campaigns. It connects schools with alumni and broader communities, facilitating secure contributions to support academic programs and campus development.",
      tags: ["Social Platform", "Mentorship", "Real-time Chat", "Community"],
      github: "https://github.com/YHQZ1/ISCKON-Alumni-Connect",
      live: "https://gradcircle.vercel.app/",
      image: "/images/gradcircle.png",
    },
    {
      title: "OneGov",
      description:
        "A centralized digital hub for modern community living. It seamlessly integrates key services including government, local commerce, transportation, and public safety, providing a personalized experience for every user through secure, role-based access.",
      tags: ["GovTech", "Multi-tenant", "Role-based", "Integrated Services"],
      github: "https://github.com/YHQZ1/OneGov",
      live: "https://one-gov.vercel.app/",
      image: "/images/onegov.png",
    },
    {
      title: "Anchor",
      description:
        "A unified student productivity platform that integrates directly with college systems to automate academic management. By automatically syncing assignments, tracking attendance thresholds, and providing actionable insights, it minimizes administrative effort and helps students stay organized and ahead of their deadlines.",
      tags: ["Productivity", "Dashboard", "Student Tech", "All-in-One"],
      github: "https://github.com/YHQZ1/Anchor",
      live: "https://anchor-dev.vercel.app/",
      image: "/images/anchor.png",
    },
  ];

  const technicalSkills = [
    {
      name: "Java",
      logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
      level: "Advanced",
      experience: "1 year",
      category: [
        "Backend Development",
        "Competitive Programming",
        "System Design",
      ],
    },
    {
      name: "C/C++",
      logo: "https://cdn.simpleicons.org/cplusplus/00599C",
      level: "Intermediate",
      experience: "2 years",
      category: [
        "System Programming",
        "Competitive Programming",
        "Performance Optimization",
      ],
    },
    {
      name: "JavaScript",
      logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
      level: "Advanced",
      experience: "1+ years",
      category: ["Full-stack Development", "Backend APIs", "Web Services"],
    },
    {
      name: "TypeScript",
      logo: "https://cdn.simpleicons.org/typescript/3178C6",
      level: "Intermediate",
      experience: "<1 year",
      category: [
        "Full-stack Applications",
        "Type-safe Backend Systems",
        "Frontend Development",
      ],
    },
    {
      name: "Python",
      logo: "https://cdn.simpleicons.org/python/3776AB",
      level: "Intermediate",
      experience: "2 years",
      category: ["Backend APIs", "Automation Scripts", "Web Services"],
    },
    {
      name: "Bash",
      logo: "https://cdn.simpleicons.org/gnubash/4EAA25",
      level: "Intermediate",
      experience: "1 year",
      category: ["DevOps Scripts", "System Administration", "CI/CD Automation"],
    },
    {
      name: "Node.js",
      logo: "https://cdn.simpleicons.org/nodedotjs/339933",
      level: "Advanced",
      experience: "1+ years",
      category: [
        "Backend Services",
        "API Development",
        "Server-side JavaScript",
      ],
    },
    {
      name: "Express.js",
      logo: "https://cdn.simpleicons.org/express/000000",
      darkLogo: "https://cdn.simpleicons.org/express/FFFFFF",
      level: "Advanced",
      experience: "1+ years",
      category: ["Backend Frameworks", "REST APIs", "Web Servers"],
    },
    {
      name: "FastAPI",
      logo: "https://cdn.simpleicons.org/fastapi/009688",
      level: "Intermediate",
      experience: "<1 year",
      category: [
        "High-performance APIs",
        "Python Backends",
        "Async Programming",
      ],
    },
    {
      name: "Flask",
      logo: "https://cdn.simpleicons.org/flask/000000",
      darkLogo: "https://cdn.simpleicons.org/flask/FFFFFF",
      level: "Intermediate",
      experience: "<1 year",
      category: ["Python Backend APIs", "Microservices", "Prototyping"],
    },
    {
      name: "Spring Boot",
      logo: "https://cdn.simpleicons.org/springboot/6DB33F",
      level: "Beginner",
      experience: "<1 year",
      category: [
        "Java Backend Framework",
        "Enterprise Applications",
        "Microservices",
      ],
    },
    {
      name: "REST APIs",
      logo: "https://media.licdn.com/dms/image/v2/D5612AQE0nEZrPGv0JA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679583758253?e=2147483647&v=beta&t=4QpsM1YKchLOfxVzpfFJAQWdkJ3vg3aKUWYL5tFVXXI",
      level: "Advanced",
      experience: "<1 year",
      category: ["API Design", "Backend Development", "Web Services"],
    },
    {
      name: "GraphQL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png",
      level: "Beginner",
      experience: "<1 year",
      category: ["API Design", "Backend Development", "Schema Modeling"],
    },
    {
      name: "ReactJS",
      logo: "https://cdn.simpleicons.org/react/61DAFB",
      level: "Advanced",
      experience: "1+ years",
      category: ["Frontend Development", "User Interface", "Web Applications"],
    },
    {
      name: "Next.js",
      logo: "https://cdn.simpleicons.org/nextdotjs/000000",
      darkLogo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
      level: "Advanced",
      experience: "<1 year",
      category: [
        "Full-stack Framework",
        "Server-side Rendering",
        "Frontend Development",
      ],
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      level: "Advanced",
      experience: "2+ years",
      category: ["Frontend Styling", "Responsive Design", "UI Development"],
    },
    {
      name: "SQL",
      logo: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
      level: "Advanced",
      experience: "2 years",
      category: ["Query Optimization", "Joins & Indexing", "Database Design"],
    },
    {
      name: "PL/SQL",
      logo: "https://www.oracle.com/a/ocom/img/pl-sql.svg",
      level: "Intermediate",
      experience: "<1 year",
      category: ["Stored Procedures", "Triggers", "Functions"],
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.simpleicons.org/postgresql/4169E1",
      level: "Advanced",
      experience: "2 years",
      category: ["Database Management", "Backend Systems", "Data Modeling"],
    },
    {
      name: "MongoDB",
      logo: "https://cdn.simpleicons.org/mongodb/47A248",
      level: "Intermediate",
      experience: "1+ years",
      category: [
        "NoSQL Databases",
        "Flexible Data Models",
        "Backend Development",
      ],
    },
    {
      name: "Prisma",
      logo: "https://cdn.simpleicons.org/prisma/2D3748",
      darkLogo: "https://cdn.simpleicons.org/prisma/FFFFFF",
      level: "Intermediate",
      experience: "<1 year",
      category: ["Database ORM", "Type-safe Queries", "Backend Development"],
    },
    {
      name: "Redis",
      logo: "https://www.svgrepo.com/show/303460/redis-logo.svg",
      level: "Advanced",
      experience: "<1 year",
      category: ["Caching", "Session Management", "Performance Optimization"],
    },
    {
      name: "Docker",
      logo: "https://cdn.simpleicons.org/docker/2496ED",
      level: "Intermediate",
      experience: "<1 year",
      category: ["Containerization", "Development Environments", "Deployment"],
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.simpleicons.org/kubernetes/326CE5",
      level: "Beginner",
      experience: "<1 year",
      category: [
        "Container Orchestration",
        "DevOps Infrastructure",
        "Scalable Systems",
      ],
    },
    {
      name: "AWS",
      logo: "https://avatars.githubusercontent.com/u/49037648?s=280&v=4",
      darkLogo:
        "https://i.scdn.co/image/ab6765630000ba8a49f81331af04ec3614a5a741",
      level: "Intermediate",
      experience: "<1 year",
      category: [
        "Cloud Infrastructure",
        "Deployment",
        "Scalable Backend Services",
      ],
    },
    {
      name: "Supabase",
      logo: "https://cdn.simpleicons.org/supabase/3FCF8E",
      level: "Advanced",
      experience: "1 year",
      category: [
        "Backend-as-a-Service",
        "Database Management",
        "Authentication",
      ],
    },
    {
      name: "Vercel",
      logo: "https://cdn.simpleicons.org/vercel/000000",
      darkLogo: "https://cdn.simpleicons.org/vercel/FFFFFF",
      level: "Advanced",
      experience: "1 year",
      category: [
        "Frontend Deployment",
        "Full-stack Applications",
        "Serverless Hosting",
      ],
    },
    {
      name: "Render",
      logo: "https://cdn.simpleicons.org/render/46E3B7",
      level: "Advanced",
      experience: "1 year",
      category: ["Backend Services", "API Hosting", "Microservices Deployment"],
    },
    {
      name: "Git",
      logo: "https://cdn.simpleicons.org/git/F05032",
      level: "Advanced",
      experience: "2+ years",
      category: ["Version Control", "Team Collaboration", "DevOps Workflow"],
    },
  ];

  const toolsAndWorkflow = [
    {
      name: "Postman",
      logo: "https://cdn.simpleicons.org/postman/FF6C37",
      level: "Advanced",
      experience: "1+ years",
      category: ["API Testing", "Documentation", "Development Workflow"],
    },
    {
      name: "Figma",
      logo: "https://cdn.simpleicons.org/figma/F24E1E",
      category: ["UI Collaboration", "Prototyping", "Design Handoff"],
    },
    {
      name: "Jira",
      logo: "https://cdn.simpleicons.org/jira/0052CC",
      category: ["Project Management", "Issue Tracking", "Sprint Planning"],
    },
    {
      name: "Notion",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
      category: ["Documentation", "Planning", "Knowledge Base"],
    },
    {
      name: "VS Code",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png",
      category: ["Code Editor", "Extensions", "Debugging"],
    },
    {
      name: "GitHub",
      logo: "https://cdn.simpleicons.org/github/181717",
      darkLogo: "https://cdn.simpleicons.org/github/FFFFFF",
      category: ["Project Boards", "Team Collaboration", "Issue Tracking"],
    },
    {
      name: "Chrome DevTools",
      logo: "https://cdn.simpleicons.org/googlechrome/4285F4",
      category: ["Debugging", "Performance Analysis", "Frontend Tools"],
    },
  ];

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#0a0a0a]" : "bg-[#fafafa]"
      } px-4 sm:px-6`}
    >
      <div className="max-w-8xl mx-auto px-2 sm:px-4 md:px-6 lg:px-12 xl:px-16 pt-24 sm:pt-28 md:pt-32 pb-10">
        <div className="mb-20 sm:mb-24 md:mb-32">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight mb-6 sm:mb-8 ${
              darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
            } tracking-tighter leading-[1.1]`}
          >
            {typedText}
            <span className="ml-1 animate-pulse">|</span>
          </h1>
          <p
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-[1.6] max-w-4xl ${
              darkMode ? "text-[#888]" : "text-[#666]"
            }`}
          >
            A computer science major passionate about building projects and
            turning ideas into clean, scalable code.
          </p>
        </div>

        <section className="mb-10 sm:mb-16 md:mb-20">
          <div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-6 sm:mb-8 relative inline-block group ${
                darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
              } tracking-tight leading-[1.2]`}
            >
              My Work
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full`}
              ></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-4 md:gap-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`border ${
                    darkMode
                      ? "border-[#1a1a1a] bg-[#0f0f0f]"
                      : "border-[#e8e8e8] bg-white"
                  } rounded-sm overflow-hidden flex flex-col`}
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <h3
                      className={`text-xl sm:text-2xl font-light mb-2 sm:mb-3 ${
                        darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                      } tracking-tight leading-[1.3]`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm leading-[1.6] mb-4 sm:mb-6 flex-1 ${
                        darkMode ? "text-[#888]" : "text-[#666]"
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full border ${
                            darkMode
                              ? "border-[#2a2a2a] bg-[#1a1a1a] text-[#888]"
                              : "border-[#e0e0e0] bg-[#f5f5f5] text-[#666]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 sm:gap-6 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 sm:gap-2 text-sm font-light ${
                          darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                        }`}
                      >
                        <FaGithub className="text-base sm:text-lg" />
                        <span className="relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                          Code
                        </span>
                      </a>
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1 sm:gap-2 text-sm font-light ${
                            darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                          }`}
                        >
                          <FaExternalLinkAlt className="text-sm sm:text-base" />
                          <span className="relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                            Live
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div
          className={`w-full h-px ${
            darkMode ? "bg-[#2a2a2a]" : "bg-[#e8e8e8]"
          } my-8 sm:my-10`}
        />

        <section className="mb-16 sm:mb-20">
          <div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-6 sm:mb-8 relative inline-block group ${
                darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
              } tracking-tight leading-[1.2]`}
            >
              Technical Skills
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full`}
              ></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 border ${
                    darkMode
                      ? "border-[#2a2a2a] bg-[#0f0f0f]"
                      : "border-[#e0e0e0] bg-white"
                  } rounded-sm`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <img
                      src={
                        darkMode && skill.darkLogo ? skill.darkLogo : skill.logo
                      }
                      alt={skill.name}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-lg sm:text-xl font-medium truncate leading-[1.3] ${
                          darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                        }`}
                      >
                        {skill.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className={`text-xs px-2 py-1 rounded-full border ${
                            darkMode
                              ? "border-[#8ab4f8] text-[#8ab4f8] bg-[#8ab4f8]/10"
                              : "border-[#4285f4] text-[#4285f4] bg-[#4285f4]/10"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm ${
                          darkMode ? "text-[#888]" : "text-[#666]"
                        }`}
                      >
                        Experience
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                        }`}
                      >
                        {skill.experience}
                      </span>
                    </div>
                    <div>
                      <span
                        className={`text-sm block mb-1 sm:mb-2 ${
                          darkMode ? "text-[#888]" : "text-[#666]"
                        }`}
                      >
                        Used in:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {skill.category.map((project, projectIndex) => (
                          <span
                            key={projectIndex}
                            className={`text-xs px-2 py-1 rounded border leading-[1.4] ${
                              darkMode
                                ? "border-[#2a2a2a] bg-[#1a1a1a] text-[#888]"
                                : "border-[#e0e0e0] bg-[#f5f5f5] text-[#666]"
                            }`}
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div
          className={`w-full h-px ${
            darkMode ? "bg-[#2a2a2a]" : "bg-[#e8e8e8]"
          } my-8 sm:my-10`}
        />

        <section className="mb-16 sm:mb-20">
          <div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-6 sm:mb-8 relative inline-block group ${
                darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
              } tracking-tight leading-[1.2]`}
            >
              Tools & Workflow
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full`}
              ></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4">
              {toolsAndWorkflow.map((tool, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 border ${
                    darkMode
                      ? "border-[#2a2a2a] bg-[#0f0f0f]"
                      : "border-[#e0e0e0] bg-white"
                  } rounded-sm`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <img
                      src={
                        darkMode && tool.darkLogo ? tool.darkLogo : tool.logo
                      }
                      alt={tool.name}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-lg sm:text-xl font-medium truncate leading-[1.3] ${
                          darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                        }`}
                      >
                        {tool.name}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <span
                      className={`text-sm block mb-1 sm:mb-2 ${
                        darkMode ? "text-[#888]" : "text-[#666]"
                      }`}
                    >
                      Used for:
                    </span>

                    <div className="flex flex-wrap gap-1">
                      {tool.category.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`text-xs px-2 py-1 rounded border leading-[1.4] ${
                            darkMode
                              ? "border-[#2a2a2a] bg-[#1a1a1a] text-[#888]"
                              : "border-[#e0e0e0] bg-[#f5f5f5] text-[#666]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div
          className={`w-full h-px ${
            darkMode ? "bg-[#2a2a2a]" : "bg-[#e8e8e8]"
          } my-8 sm:my-10`}
        ></div>
        <div className="text-center py-4 sm:py-5">
          <p
            className={`text-sm italic ${
              darkMode ? "text-[#666]" : "text-[#999]"
            }`}
          >
            My microservices talk to each other more politely than most humans
          </p>
        </div>
      </div>
    </main>
  );
}
