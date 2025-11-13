import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function useTypewriter(texts, speed = 80, delay = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[currentTextIndex][currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Wait, then move to next text
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentTextIndex, texts, speed, delay]);

  return displayText;
}

export default function Work() {
  const { darkMode } = useTheme();
  const typedText = useTypewriter(["Hey, I'm Uttkarsh!"], 80, 3000);

  const projects = [
    {
      title: "VerQ",
      description:
        "College placement automation platform built using MERN stack and Supabase. Features an AI-powered resume scorer (ATS Checker) to optimize student CVs.",
      tags: ["Full-Stack", "AI Integration", "Real-time", "Scalable"],
      github: "https://github.com/About-Rudra/Verq",
      live: "https://verq-pi.vercel.app",
      image: "/images/verq.png",
    },
    {
      title: "Order Management System",
      description:
        "Desktop-based Java Swing app integrated with JDBC for database operations. Enables efficient customer, order, and vendor management with real-time tracking.",
      tags: ["Desktop App", "Database Design", "CRUD Operations", "Enterprise"],
      github: "https://github.com/YHQZ1/Order-Management-System",
      live: "#",
      image: "/images/oms.png",
    },
    {
      title: "BitLink",
      description:
        "React & Supabase web app for URL shortening and QR code generation. Offers real-time link tracking and a clean, responsive UI.",
      tags: ["URL Shortener", "Analytics", "QR Generation", "Real-time"],
      github: "https://github.com/YHQZ1/BitLink",
      live: "https://btlink.vercel.app/",
      image: "/images/bitlink.png",
    },
    {
      title: "Alumni Connect",
      description:
        "A platform connecting students and alumni for mentorship and networking. Features user profiles, messaging, and event management.",
      tags: ["Social Platform", "Mentorship", "Real-time Chat", "Community"],
      github: "https://github.com/YHQZ1/ISCKON-Alumni-Connect",
      live: "https://gradcircle.vercel.app/",
      image: "/images/gradcircle.png",
    },
    {
      title: "OneGov",
      description:
        "Web platform integrating government services, local businesses, community events, transportation info, and emergency services with role-based access.",
      tags: ["GovTech", "Multi-tenant", "Role-based", "Integrated Services"],
      github: "https://github.com/YHQZ1/OneGov",
      live: "https://one-gov.vercel.app/",
      image: "/images/onegov.png",
    },
    {
      title: "Anchor",
      description:
        "Student productivity platform that centralizes assignments, deadlines, and attendance. All-in-one dashboard to stay organized.",
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
      category: ["Full-stack Applications", "Type-safe Backend Systems"],
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
      name: "AWS",
      logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
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
      category: ["Frontend Deployment", "Full-stack Applications"],
    },
    {
      name: "Render",
      logo: "https://cdn.simpleicons.org/render/46E3B7",
      level: "Advanced",
      experience: "1 year",
      category: ["Backend Services", "API Hosting", "Microservices Deployment"],
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
      category: ["Container Orchestration", "DevOps Infrastructure"],
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
      name: "Next.js",
      logo: "https://cdn.simpleicons.org/nextdotjs/000000",
      darkLogo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
      level: "Advanced",
      experience: "<1 year",
      category: ["Full-stack Framework", "Server-side Rendering"],
    },
    {
      name: "ReactJS",
      logo: "https://cdn.simpleicons.org/react/61DAFB",
      level: "Advanced",
      experience: "1+ years",
      category: ["Frontend Development", "User Interface", "Web Applications"],
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
      name: "Flask",
      logo: "https://cdn.simpleicons.org/flask/000000",
      darkLogo: "https://cdn.simpleicons.org/flask/FFFFFF",
      level: "Intermediate",
      experience: "<1 year",
      category: ["Python Backend APIs", "Microservices", "Prototyping"],
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
      category: ["API Design", "Backend Development", "Web Services"],
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
      name: "Spring Boot",
      logo: "https://cdn.simpleicons.org/springboot/6DB33F",
      level: "Beginner",
      experience: "<1 year",
      category: ["Java Backend Framework", "Enterprise Applications"],
    },
    {
      name: "Redis",
      logo: "https://www.svgrepo.com/show/303460/redis-logo.svg",
      level: "Advanced",
      experience: "<1 year",
      category: ["Caching", "Session Management", "Performance Optimization"],
    },
    {
      name: "Git/GitHub",
      logo: "https://cdn.simpleicons.org/github/181717",
      darkLogo: "https://cdn.simpleicons.org/github/FFFFFF",
      level: "Advanced",
      experience: "2+ years",
      category: ["Version Control", "Team Collaboration", "DevOps Workflow"],
    },
    {
      name: "Postman",
      logo: "https://cdn.simpleicons.org/postman/FF6C37",
      level: "Advanced",
      experience: "1+ years",
      category: ["API Testing", "Documentation", "Development Workflow"],
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      level: "Advanced",
      experience: "2+ years",
      category: ["Frontend Styling", "Responsive Design", "UI Development"],
    },
  ];

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#0a0a0a]" : "bg-[#fafafa]"
      } px-4 sm:px-6`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 pb-10">
        <div className="mb-20 sm:mb-24 md:mb-32">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight mb-6 sm:mb-8 ${
              darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
            } tracking-tighter leading-tight`}
          >
            {typedText}
            <span className="ml-1 animate-pulse">|</span>
          </h1>
          <p
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed ${
              darkMode ? "text-[#888]" : "text-[#666]"
            }`}
          >
            A computer science major{" "}
            <span className={darkMode ? "text-[#8ab4f8]" : "text-[#4285f4]"}>
              passionate
            </span>{" "}
            about building{" "}
            <span className={darkMode ? "text-[#f28b82]" : "text-[#ea4335]"}>
              cool projects
            </span>{" "}
            and turning{" "}
            <span className={darkMode ? "text-[#fdd663]" : "text-[#fbbc04]"}>
              ideas
            </span>{" "}
            into{" "}
            <span className={darkMode ? "text-[#81c995]" : "text-[#34a853]"}>
              code
            </span>
          </p>
        </div>

        <section className="mb-20 sm:mb-24 md:mb-32">
          <div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-6 sm:mb-8 ${
                darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
              } tracking-tight`}
            >
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
                      } tracking-tight`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1 ${
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
                        className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-light ${
                          darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                        }`}
                      >
                        <FaGithub className="text-sm sm:text-base" />
                        <span>Code</span>
                      </a>
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-light ${
                            darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                          }`}
                        >
                          <FaExternalLinkAlt className="text-xs sm:text-sm" />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-6 sm:mb-8 ${
                darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
              } tracking-tight`}
            >
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 border ${
                    darkMode
                      ? "border-[#2a2a2a] bg-[#0f0f0f]"
                      : "border-[#e0e0e0] bg-white"
                  } rounded-xl`}
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
                        className={`text-base sm:text-lg font-medium truncate ${
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
                        className={`text-xs sm:text-sm ${
                          darkMode ? "text-[#888]" : "text-[#666]"
                        }`}
                      >
                        Experience
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-medium ${
                          darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                        }`}
                      >
                        {skill.experience}
                      </span>
                    </div>
                    <div>
                      <span
                        className={`text-xs sm:text-sm block mb-1 sm:mb-2 ${
                          darkMode ? "text-[#888]" : "text-[#666]"
                        }`}
                      >
                        Used in:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {skill.category.map((project, projectIndex) => (
                          <span
                            key={projectIndex}
                            className={`text-xs px-2 py-1 rounded border ${
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
      </div>
    </main>
  );
}
