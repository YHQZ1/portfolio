import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Work() {
  const { darkMode } = useTheme();

  const projects = [
    {
      title: "VerQ",
      description:
        "College placement automation platform built using MERN stack and Supabase. Features an AI-powered resume scorer (ATS Checker) to optimize student CVs.",
      tags: ["React", "Node.js", "Supabase", "AI"],
      github: "https://github.com/About-Rudra/Verq",
      live: "https://verq-pi.vercel.app",
      image: "/verq.png",
    },
    {
      title: "Order Management System",
      description:
        "Desktop-based Java Swing app integrated with JDBC for database operations. Enables efficient customer, order, and vendor management with real-time tracking.",
      tags: ["Java", "Swing", "JDBC", "MySQL"],
      github: "https://github.com/YHQZ1/Order-Management-System",
      live: "#",
      image: "/oms.png",
    },
    {
      title: "BitLink",
      description:
        "React & Supabase web app for URL shortening and QR code generation. Offers real-time link tracking and a clean, responsive UI.",
      tags: ["React", "Supabase", "JavaScript"],
      github: "https://github.com/YHQZ1/BitLink",
      live: "https://btlink.vercel.app/",
      image: "/bitlink.png",
    },
    {
      title: "Alumni Connect",
      description:
        "A platform connecting students and alumni for mentorship and networking. Features user profiles, messaging, and event management.",
      tags: ["React", "Node.js", "Express", "Supabase"],
      github: "https://github.com/YHQZ1/ISCKON-Alumni-Connect",
      live: "https://gradcircle.vercel.app/",
      image: "/gradcircle.png",
    },
    {
      title: "OneGov",
      description:
        "Web platform integrating government services, local businesses, community events, transportation info, and emergency services with role-based access.",
      tags: ["React", "Node.js", "Express"],
      github: "https://github.com/YHQZ1/OneGov",
      live: "https://one-gov.vercel.app/",
      image: "/onegov.png",
    },
    {
      title: "Anchor",
      description:
        "Student productivity platform that centralizes assignments, deadlines, and attendance. All-in-one dashboard to stay organized.",
      tags: ["Next.js", "Supabase", "TypeScript"],
      github: "https://github.com/YHQZ1/Anchor",
      live: "https://anchor-dev.vercel.app/",
      image: "./anchor.png",
    },
  ];

  const technicalSkills = [
    {
      name: "Java",
      logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
      level: "Advanced",
      experience: "3+ years",
      projects: [
        "Order Management System",
        "Academic Projects",
        "Backend APIs",
      ],
    },
    {
      name: "C/C++",
      logo: "https://cdn.simpleicons.org/cplusplus/00599C",
      level: "Intermediate",
      experience: "2+ years",
      projects: ["System Programming", "Algorithms", "Academic Projects"],
    },
    {
      name: "JavaScript",
      logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
      level: "Advanced",
      experience: "3+ years",
      projects: ["VerQ", "BitLink", "Alumni Connect", "OneGov"],
    },
    {
      name: "TypeScript",
      logo: "https://cdn.simpleicons.org/typescript/3178C6",
      level: "Intermediate",
      experience: "2 years",
      projects: ["Anchor", "Current Projects", "Full-stack Apps"],
    },
    {
      name: "Python",
      logo: "https://cdn.simpleicons.org/python/3776AB",
      level: "Intermediate",
      experience: "2 years",
      projects: ["AI Components", "Automation Scripts", "Backend APIs"],
    },
    {
      name: "Bash",
      logo: "https://cdn.simpleicons.org/gnubash/4EAA25",
      level: "Intermediate",
      experience: "2 years",
      projects: ["DevOps Scripts", "Automation", "System Administration"],
    },
    {
      name: "SQL",
      logo: "https://cdn.simpleicons.org/postgresql/4169E1",
      level: "Intermediate",
      experience: "2+ years",
      projects: [
        "Database Design",
        "Query Optimization",
        "All Backend Projects",
      ],
    },
    {
      name: "AWS",
      logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
      level: "Intermediate",
      experience: "1+ year",
      projects: ["Cloud Deployment", "Infrastructure", "Side Projects"],
    },
    {
      name: "Supabase",
      logo: "https://cdn.simpleicons.org/supabase/3FCF8E",
      level: "Advanced",
      experience: "2 years",
      projects: ["VerQ", "BitLink", "Alumni Connect", "Anchor"],
    },
    {
      name: "Vercel",
      logo: "https://cdn.simpleicons.org/vercel/000000",
      darkLogo: "https://cdn.simpleicons.org/vercel/FFFFFF",
      level: "Advanced",
      experience: "2 years",
      projects: ["All Frontend Deployments", "Portfolio", "Web Apps"],
    },
    {
      name: "Render",
      logo: "https://cdn.simpleicons.org/render/46E3B7",
      level: "Intermediate",
      experience: "1+ year",
      projects: ["Backend Services", "API Hosting", "Microservices"],
    },
    {
      name: "Docker",
      logo: "https://cdn.simpleicons.org/docker/2496ED",
      level: "Intermediate",
      experience: "1+ year",
      projects: ["Containerization", "Local Development", "Deployment"],
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.simpleicons.org/kubernetes/326CE5",
      level: "Beginner",
      experience: "< 1 year",
      projects: ["Learning", "Orchestration Concepts"],
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.simpleicons.org/postgresql/4169E1",
      level: "Intermediate",
      experience: "2 years",
      projects: ["Backend APIs", "Full-stack Apps", "Data Management"],
    },
    {
      name: "MongoDB",
      logo: "https://cdn.simpleicons.org/mongodb/47A248",
      level: "Intermediate",
      experience: "1+ year",
      projects: ["NoSQL Projects", "Flexible Data Models"],
    },
    {
      name: "Prisma",
      logo: "https://cdn.simpleicons.org/prisma/2D3748",
      darkLogo: "https://cdn.simpleicons.org/prisma/FFFFFF",
      level: "Intermediate",
      experience: "1+ year",
      projects: ["Database ORM", "Type-safe Queries", "Backend APIs"],
    },
    {
      name: "Next.js",
      logo: "https://cdn.simpleicons.org/nextdotjs/000000",
      darkLogo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
      level: "Advanced",
      experience: "2 years",
      projects: ["Anchor", "Portfolio", "Full-stack Applications"],
    },
    {
      name: "ReactJS",
      logo: "https://cdn.simpleicons.org/react/61DAFB",
      level: "Advanced",
      experience: "3+ years",
      projects: ["VerQ", "BitLink", "Alumni Connect", "OneGov"],
    },
    {
      name: "Node.js",
      logo: "https://cdn.simpleicons.org/nodedotjs/339933",
      level: "Advanced",
      experience: "3+ years",
      projects: ["VerQ", "Alumni Connect", "OneGov", "Backend Services"],
    },
    {
      name: "Express.js",
      logo: "https://cdn.simpleicons.org/express/000000",
      darkLogo: "https://cdn.simpleicons.org/express/FFFFFF",
      level: "Advanced",
      experience: "3 years",
      projects: ["VerQ", "Alumni Connect", "OneGov", "REST APIs"],
    },
    {
      name: "Flask",
      logo: "https://cdn.simpleicons.org/flask/000000",
      darkLogo: "https://cdn.simpleicons.org/flask/FFFFFF",
      level: "Intermediate",
      experience: "1+ year",
      projects: ["Python APIs", "Microservices", "Prototyping"],
    },
    {
      name: "FastAPI",
      logo: "https://cdn.simpleicons.org/fastapi/009688",
      level: "Intermediate",
      experience: "1 year",
      projects: ["High-performance APIs", "Python Backends"],
    },
    {
      name: "Spring Boot",
      logo: "https://cdn.simpleicons.org/springboot/6DB33F",
      level: "Beginner",
      experience: "< 1 year",
      projects: ["Learning", "Java Backend Development"],
    },
    {
      name: "Redis",
      logo: "https://cdn.simpleicons.org/redis/DC382D",
      level: "Beginner",
      experience: "< 1 year",
      projects: ["Caching", "Session Management", "Learning"],
    },
    {
      name: "Git/GitHub",
      logo: "https://cdn.simpleicons.org/github/181717",
      darkLogo: "https://cdn.simpleicons.org/github/FFFFFF",
      level: "Advanced",
      experience: "3+ years",
      projects: ["All Projects", "Team Collaboration", "Version Control"],
    },
    {
      name: "Postman",
      logo: "https://cdn.simpleicons.org/postman/FF6C37",
      level: "Advanced",
      experience: "3 years",
      projects: ["API Testing", "Documentation", "Development Workflow"],
    },
    {
      name: "Tailwind",
      logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      level: "Advanced",
      experience: "2+ years",
      projects: ["Current Projects", "Portfolio", "BitLink", "All Frontends"],
    },
  ];

  return (
    <main
      className={`min-h-screen ${darkMode ? "bg-[#0a0a0a]" : "bg-[#fafafa]"}`}
    >
      <div className="max-w-8xl mx-auto px-8 lg:px-16 xl:px-24 pt-32 pb-10">
        <div className="mb-32">
          <h1
            className={`text-7xl md:text-8xl font-extralight mb-8 ${
              darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
            } tracking-tighter leading-none`}
          >
            Hey, I'm Uttkarsh!
          </h1>
          <p
            className={`text-2xl md:text-3xl font-light leading-relaxed ${
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

        <section className="mb-32">
          <div>
            <h2
              className={`text-5xl font-extralight mb-8 ${
                darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
              } tracking-tight`}
            >
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`border ${
                    darkMode
                      ? "border-[#1a1a1a] bg-[#0f0f0f]"
                      : "border-[#e8e8e8] bg-white"
                  } rounded-sm overflow-hidden flex flex-col`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className={`text-2xl font-light mb-3 ${
                        darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                      } tracking-tight`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed mb-6 flex-1 ${
                        darkMode ? "text-[#888]" : "text-[#666]"
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full border ${
                            darkMode
                              ? "border-[#2a2a2a] bg-[#1a1a1a] text-[#888]"
                              : "border-[#e0e0e0] bg-[#f5f5f5] text-[#666]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6 mt-auto">
                      <a
                        href={project.github}
                        className={`flex items-center gap-2 text-sm font-light ${
                          darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                        }`}
                      >
                        <FaGithub className="text-base" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        className={`flex items-center gap-2 text-sm font-light ${
                          darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                        }`}
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        <span>Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div>
            <h2
              className={`text-5xl font-extralight mb-8 ${
                darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
              } tracking-tight`}
            >
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-6 border ${
                    darkMode
                      ? "border-[#2a2a2a] bg-[#0f0f0f]"
                      : "border-[#e0e0e0] bg-white"
                  } rounded-xl`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={
                        darkMode && skill.darkLogo ? skill.darkLogo : skill.logo
                      }
                      alt={skill.name}
                      className="w-12 h-12"
                    />
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-lg font-medium truncate ${
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
                  <div className="space-y-3">
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
                        className={`text-sm block mb-2 ${
                          darkMode ? "text-[#888]" : "text-[#666]"
                        }`}
                      >
                        Used in:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {skill.projects.map((project, projectIndex) => (
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
