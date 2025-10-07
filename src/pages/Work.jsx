import { useTheme } from "../context/ThemeContext";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaExternalLinkAlt,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiExpress,
  SiSupabase,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/Work.css";
import {
  FaComment,
  FaUsers,
  FaGlobe,
  FaPuzzlePiece,
  FaSyncAlt,
} from "react-icons/fa";

export default function Work() {
  const { darkMode } = useTheme();

  const projects = [
    {
      title: "VerQ",
      description:
        "College placement automation platform built using MERN stack and Supabase. Features an AI-powered resume scorer (ATS Checker) to optimize student CVs. Streamlined placement process connecting students, recruiters, and placement cells.",
      tags: ["React", "Node.js", "Supabase", "AI", "Express"],
      github: "https://github.com/About-Rudra/Verq",
      live: "https://verq-pi.vercel.app",
      image: "/verq.png",
      accentColor: "#6366f1",
    },
    {
      title: "Order Management System",
      description:
        "Desktop-based Java Swing app integrated with JDBC for database operations. Enables efficient customer, order, and vendor management with real-time tracking, improving processing speed and vendor-user interactions.",
      tags: ["Java", "Swing", "JDBC", "MySQL"],
      github: "https://github.com/YHQZ1/Order-Management-System",
      live: "#",
      image: "/oms.png",
      accentColor: "#10b981",
    },
    {
      title: "BitLink",
      description:
        "React & Supabase web app for URL shortening and QR code generation. Offers real-time link tracking and a clean, responsive UI for efficient link sharing and management.",
      tags: ["React", "Supabase", "JavaScript", "QR Code"],
      github: "https://github.com/YHQZ1/BitLink",
      live: "https://btlink.vercel.app/",
      image:
        "https://influencermarketinghub.com/wp-content/uploads/2022/08/x-best-URL-Shortening-Services.png",
      accentColor: "#3b82f6",
    },
    {
      title: "Alumni Connect",
      description:
        "A platform connecting students and alumni for mentorship and networking. Features user profiles, messaging, and event management to foster community engagement and career growth.",
      tags: ["React", "Node.js", "Express", "Supabase"],
      github: "https://github.com/YHQZ1/ISCKON-Alumni-Connect",
      live: "https://gradcircle.vercel.app/",
      image:
        "/alumni-connect.png",
      accentColor: "#6366f1",
    },
    {
      title: "OneGov",
      description:
        "Developed a web platform integrating government services, local businesses, community events, transportation info, and emergency services with role-based access for citizens, businesses, and administrators.",
      tags: ["React", "Node.js", "Express", "Supabase"],
      github: "https://github.com/YHQZ1/OneGov",
      live: "https://one-gov.vercel.app/",
      image: "/onegov.png",
      accentColor: "#10b981",
    },
  ];

  const techSkills = [
    {
      name: "Java",
      level: 70,
      icon: <FaJava />,
      category: "language",
      color: "#f89820",
    },
    {
      name: "C++",
      level: 40,
      icon: <SiCplusplus />,
      category: "language",
      color: "#00599c",
    },
    {
      name: "C",
      level: 60,
      icon: <div className="c-icon">C</div>,
      category: "language",
      color: "#555555",
    },
    {
      name: "Python",
      level: 40,
      icon: <FaPython />,
      category: "language",
      color: "#3776ab",
    },
    {
      name: "JavaScript",
      level: 50,
      icon: <FaJs />,
      category: "language",
      color: "#f7df1e",
    },
    {
      name: "PL/SQL",
      level: 70,
      icon: <FaDatabase />,
      category: "language",
      color: "#f29111",
    },
    {
      name: "React",
      level: 50,
      icon: <FaReact />,
      category: "frontend",
      color: "#61dafb",
    },
    {
      name: "HTML",
      level: 80,
      icon: <FaHtml5 />,
      category: "frontend",
      color: "#e34f26",
    },
    {
      name: "CSS",
      level: 80,
      icon: <FaCss3Alt />,
      category: "frontend",
      color: "#1572b6",
    },
    {
      name: "Tailwind",
      level: 80,
      icon: <SiTailwindcss />,
      category: "frontend",
      color: "#38b2ac",
    },
    {
      name: "Node.js",
      level: 30,
      icon: <FaNode />,
      category: "backend",
      color: "#68a063",
    },
    {
      name: "Express",
      level: 30,
      icon: <SiExpress />,
      category: "backend",
      color: "#000000",
    },
    {
      name: "Flask",
      level: 40,
      icon: <FaPython />,
      category: "backend",
      color: "#000000",
    },
    {
      name: "SQLAlchemy",
      level: 40,
      icon: <FaPython />,
      category: "backend",
      color: "#336791",
    },

    {
      name: "MySQL",
      level: 90,
      icon: <SiMysql />,
      category: "database",
      color: "#4479a1",
    },
    {
      name: "PostgreSQL",
      level: 90,
      icon: <SiPostgresql />,
      category: "database",
      color: "#336791",
    },
    {
      name: "MongoDB",
      level: 60,
      icon: <SiMongodb />,
      category: "database",
      color: "#4DB33D",
    },
    {
      name: "Supabase",
      level: 60,
      icon: <SiSupabase />,
      category: "database",
      color: "#3ecf8e",
    },
    {
      name: "Git",
      level: 70,
      icon: <FaGitAlt />,
      category: "tool",
      color: "#f05032",
    },
    {
      name: "Docker",
      level: 50,
      icon: <SiDocker />,
      category: "tool",
      color: "#0db7ed",
    },
    {
      name: "AWS",
      level: 40,
      icon: <FaAws />,
      category: "tool",
      color: "#ff9900",
    },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 80, icon: <FaPuzzlePiece /> },
    { name: "Analytical Thinking", level: 85, icon: <FaGlobe /> },
    { name: "Adaptability", level: 100, icon: <FaSyncAlt /> },
    { name: "Communication", level: 90, icon: <FaComment /> },
    { name: "Teamwork", level: 90, icon: <FaUsers /> },
    { name: "Attention to Detail", level: 80, icon: <FaComment /> },
  ];

  return (
    <main className={`work-container ${darkMode ? "dark" : ""}`}>
      {/* Intro */}
      <div className="intro-content">
        <h1 className="intro-heading">Hey, I'm Uttkarsh!</h1>
        <h2 className="intro-subheading">
          CS major passionate about building{" "}
          <span className="highlight1">cool projects</span> and turning{" "}
          <span className="highlight2">ideas</span> into{" "}
          <span className="highlight3">code</span>.
        </h2>
      </div>

      {/* Projects */}
      <div className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="project-card"
              style={{ "--accent": project.accentColor }}
            >
              <div className="project-image-container">
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} className="project-link">
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-categories">
          {/* Technical Skills */}
          <div className="technical-skills">
            <h3 className="skills-subtitle">Technical Skills</h3>
            <div className="skills-grid">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="skill-card"
                  style={{
                    "--skill-color": skill.color,
                    "--card-bg": darkMode
                      ? "rgba(30, 30, 30, 0.7)"
                      : "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-level-container">
                      <span className="skill-percent">{skill.level}%</span>
                      <div className="skill-level-bar">
                        <motion.div
                          className="skill-level-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          style={{ backgroundColor: skill.color }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="soft-skills">
            <h3 className="skills-subtitle">Soft Skills</h3>
            <div className="soft-skills-container">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05 + techSkills.length * 0.05,
                  }}
                  className="soft-skill-item"
                >
                  <div
                    className="soft-skill-icon"
                    style={{ color: "var(--accent-color)" }}
                  >
                    {skill.icon}
                  </div>
                  <div className="soft-skill-content">
                    <span className="soft-skill-name">{skill.name}</span>
                    <div className="skill-dots">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`dot ${
                            i < Math.floor(skill.level / 20) ? "filled" : ""
                          }`}
                          style={{
                            background:
                              i < Math.floor(skill.level / 20)
                                ? `var(--accent-color)`
                                : `var(--skill-dot-empty)`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
