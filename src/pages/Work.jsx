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
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiExpress,
  SiSupabase,
  SiMysql,
  SiPostgresql,
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
        "A college placement automation platform that bridges the gap between students and companies. Built using the MERN stack (with Supabase instead of MongoDB), it connects students, recruiters, and the placement cell. It also features an AI-powered resume scorer (ATS Checker) to help students optimize their CVs.",
      tags: ["React", "Node.js", "Supabase", "AI", "Express"],
      github: "https://github.com/About-Rudra/Verq",
      live: "https://verq-pi.vercel.app",
      image: "/verq.png",
      accentColor: "#6366f1",
    },
    {
      title: "Order Management System",
      description:
        "A desktop-based Java application for managing orders between users and vendors. Developed using Java Swing for the frontend and JDBC for database operations, it links customers, orders, and vendors for streamlined processing and efficient order tracking.",
      tags: ["Java", "Swing", "JDBC", "MySQL"],
      github: "https://github.com/YHQZ1/Order-Management-System",
      live: "#",
      image: "/oms.png",
      accentColor: "#10b981",
    },
    {
      title: "BitLink",
      description:
        "A web app that shortens URLs and generates QR codes with a clean UI and real-time link tracking. Ideal for sharing and managing links efficiently. Built using React and Supabase with a focus on simplicity and utility.",
      tags: ["React", "Supabase", "JavaScript", "QR Code"],
      github: "#",
      live: "#",
      image:
        "https://influencermarketinghub.com/wp-content/uploads/2022/08/x-best-URL-Shortening-Services.png",
      accentColor: "#3b82f6",
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
  ];

  const softSkills = [
    { name: "Communication", level: 90, icon: <FaComment /> },
    { name: "Teamwork", level: 90, icon: <FaUsers /> },
    { name: "Networking", level: 80, icon: <FaGlobe /> },
    { name: "Problem Solving", level: 80, icon: <FaPuzzlePiece /> },
    { name: "Adaptability", level: 100, icon: <FaSyncAlt /> },
  ];

  return (
    <main className={`work-container ${darkMode ? "dark" : ""}`}>
      <div className="intro-content">
        <h1 className="intro-heading">Hey, I'm Uttkarsh!</h1>
        <h2 className="intro-subheading">
          Just a <span className="highlight1">CS major</span> who enjoys
          building <span className="highlight2">cool stuff</span> and turning{" "}
          <span className="highlight3">random ideas</span> into working{" "}
          <span className="highlight4">code.</span>
        </h2>
      </div>

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
                  <a
                    href={project.github}
                    className="project-link"
                    aria-label="GitHub repository"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    className="project-link"
                    aria-label="Live demo"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h2 className="skills-title">Skills</h2>

        <div className="skills-categories">
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
