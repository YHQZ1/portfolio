import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { toolsAndWorkflow } from "../data/tools";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import CommandPalette from "../components/CommandPalette";

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

const FILTERS = [
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Cloud",
  "Devops",
  "Machine Learning",
];

function SkillFilters({ darkMode, activeFilters, setActiveFilters }) {
  const toggleFilter = (tag) => {
    const normalized = tag.toLowerCase();

    setActiveFilters((prev) =>
      prev.includes(normalized)
        ? prev.filter((f) => f !== normalized)
        : [...prev, normalized]
    );
  };

  return (
    <div className="flex items-center gap-2 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide sm:flex-wrap sm:overflow-visible">
      {FILTERS.map((filter) => {
        const isActive = activeFilters.includes(filter.toLowerCase());

        return (
          <button
            key={filter}
            onClick={() => toggleFilter(filter.toLowerCase())}
            className={`
    px-3 py-1 text-sm rounded-sm border cursor-pointer select-none
    transition-none duration-200
    ${
      darkMode
        ? isActive
          ? "bg-[#f5f5f5] text-black border-[#f5f5f5]"
          : "border-[#2a2a2a] text-[#aaa] bg-[#111]"
        : isActive
        ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
        : "border-[#ddd] text-[#444] bg-white"
    }
    hover:scale-[1.04]
    hover:shadow-[0_2px_6px_rgba(0,0,0,0.15)]
    hover:border-current
  `}
          >
            {filter}
          </button>
        );
      })}

      {activeFilters.length > 0 && (
        <button
          onClick={() => setActiveFilters([])}
          className={`px-3 py-1 text-sm rounded-sm border transition-none cursor-pointer ${
            darkMode
              ? "border-[#2a2a2a] text-[#aaa] bg-[#111] hover:border-[#444]"
              : "border-[#ddd] text-[#444] bg-white hover:border-[#aaa]"
          }`}
        >
          Clear Filters ✕
        </button>
      )}
    </div>
  );
}

function SkillsGrid({ darkMode, activeFilters }) {
  const filteredSkills =
    activeFilters.length === 0
      ? skills
      : skills.filter((skill) =>
          activeFilters.every((tag) => skill.filterCategories.includes(tag))
        );

  if (filteredSkills.length === 0) {
    return (
      <div className="pt-10 text-center">
        <p
          className={`text-lg sm:text-xl font-light ${
            darkMode ? "text-[#888]" : "text-[#666]"
          }`}
        >
          Nothing here… looks like you’ve filtered me into a corner.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4">
      {filteredSkills.map((skill, index) => (
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
              src={darkMode && skill.darkLogo ? skill.darkLogo : skill.logo}
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
                {skill.category.map((tag, idx) => (
                  <span
                    key={idx}
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
        </div>
      ))}
    </div>
  );
}

export default function Work() {
  const { darkMode } = useTheme();
  const commands = [
    { label: "My Work", id: "my-work" },
    { label: "Technical Skills", id: "technical-skills" },
    { label: "Tools & Workflow", id: "tools-and-workflow" },
  ];

  const typedText = useTypewriter("Hey, I'm Uttkarsh!", 80);
  const [activeFilters, setActiveFilters] = useState([]);
  const [showShortcutHint, setShowShortcutHint] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setShowShortcutHint(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowShortcutHint(false);
      }, 1200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#0a0a0a]" : "bg-[#fafafa]"
      } px-4 sm:px-6`}
    >
      <div
        className={`
    fixed top-0 left-0 h-[2px] z-50
    ${
      darkMode
        ? "bg-white shadow-[0_0_6px_rgba(255,255,255,0.4)]"
        : "bg-black shadow-[0_0_6px_rgba(0,0,0,0.25)]"
    }
    transition-[width] duration-500 ease-out
  `}
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <CommandPalette darkMode={darkMode} commands={commands} />
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

        <section id="my-work" className="mb-10 sm:mb-16 md:mb-20">
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

        <section id="technical-skills" className="mb-16 sm:mb-20">
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

            <SkillFilters
              darkMode={darkMode}
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
            />

            <SkillsGrid darkMode={darkMode} activeFilters={activeFilters} />
          </div>
        </section>

        <div
          className={`w-full h-px ${
            darkMode ? "bg-[#2a2a2a]" : "bg-[#e8e8e8]"
          } my-8 sm:my-10`}
        />

        <section id="tools-and-workflow" className="mb-16 sm:mb-20">
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
      <div
        className={`
    fixed bottom-6 left-6 text-xs z-40
    px-2 py-1 rounded-md
    backdrop-blur-md
    ${
      darkMode
        ? "bg-white/10 border-white/20 text-white/80"
        : "bg-black/10 border-black/20 text-black/70"
    }
    transition-opacity duration-300
    ${showShortcutHint ? "opacity-100" : "opacity-0 pointer-events-none"}
    whitespace-nowrap
  `}
      >
        ⌘K / Ctrl+K to search
      </div>
    </main>
  );
}
