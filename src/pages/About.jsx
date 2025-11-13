import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

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

export default function About() {
  const { darkMode } = useTheme();
  const typedText = useTypewriter(["About"], 80, 3000);

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#0a0a0a]" : "bg-[#fafafa]"
      } px-4 sm:px-6`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 pb-10">
        {/* Hero Section with Image and Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-20 mb-16 sm:mb-20">
          {/* Left: Large Image */}
          <div className="order-1 lg:order-1 lg:col-span-1">
            <div
              className={`border ${
                darkMode
                  ? "border-[#1a1a1a] bg-[#0f0f0f]"
                  : "border-[#e8e8e8] bg-white"
              } rounded-sm overflow-hidden h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]`}
            >
              <img
                src="/images/ProfilePicture.jpg"
                alt="Uttkarsh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Bio Content */}
          <div className="order-2 lg:order-2 lg:col-span-2 flex flex-col justify-center">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight mb-8 sm:mb-10 md:mb-12 ${
                darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
              } tracking-tighter leading-tight`}
            >
              {typedText}
              <span className="ml-1 animate-pulse">|</span>
            </h1>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <p
                className={`text-base sm:text-lg md:text-xl leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                <span
                  className={`font-medium ${
                    darkMode ? "text-[#8ab4f8]" : "text-[#4285f4]"
                  }`}
                >
                  Hey, I'm Uttkarsh
                </span>
                , a Computer Science undergrad passionate about{" "}
                <span
                  className={`font-medium ${
                    darkMode ? "text-[#8ab4f8]" : "text-[#4285f4]"
                  }`}
                >
                  software engineering
                </span>{" "}
                and building systems that scale. I thrive on solving complex
                problems with clean, efficient solutions.
              </p>

              <p
                className={`text-base sm:text-lg md:text-xl leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                My core skills are in{" "}
                <span
                  className={`font-medium ${
                    darkMode ? "text-[#81c995]" : "text-[#34a853]"
                  }`}
                >
                  full-stack development
                </span>
                , along with growing expertise in{" "}
                <span
                  className={`font-medium ${
                    darkMode ? "text-[#fdd663]" : "text-[#fbbc04]"
                  }`}
                >
                  DevOps
                </span>{" "}
                and{" "}
                <span
                  className={`font-medium ${
                    darkMode ? "text-[#f28b82]" : "text-[#ea4335]"
                  }`}
                >
                  Cloud
                </span>
                . I love bringing ideas to life — from crafting smooth frontends
                to deploying resilient backends.
              </p>

              <p
                className={`text-base sm:text-lg md:text-xl leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                I actively practice{" "}
                <span
                  className={`font-medium ${
                    darkMode ? "text-[#f28b82]" : "text-[#ea4335]"
                  }`}
                >
                  competitive programming{" "}
                </span>
                to sharpen my{" "}
                <span
                  className={`font-medium ${
                    darkMode ? "text-[#81c995]" : "text-[#34a853]"
                  }`}
                >
                  DSA
                </span>{" "}
                skills, which strengthens my ability to write optimized,
                production-ready code.
              </p>

              <p
                className={`text-base sm:text-lg md:text-xl leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                My goal? To shape{" "}
                <span
                  className={`font-medium ${
                    darkMode ? "text-[#8ab4f8]" : "text-[#4285f4]"
                  }`}
                >
                  technology that lasts
                </span>{" "}
                — building scalable systems, exploring creative problem-solving,
                and contributing to projects that make a difference.
              </p>
            </div>
          </div>
        </div>

        {/* Core Competencies - Clean 2x2 Grid */}
        <div
          className={`w-full h-px ${
            darkMode ? "bg-[#2a2a2a]" : "bg-[#e8e8e8]"
          } my-8 sm:my-10`}
        ></div>
        <section className="mb-16 sm:mb-20">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-12 sm:mb-16 ${
              darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
            } tracking-tight`}
          >
            Core Competencies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div>
              <h3
                className={`text-2xl sm:text-3xl font-light mb-4 sm:mb-6 ${
                  darkMode ? "text-[#81c995]" : "text-[#34a853]"
                } tracking-tight`}
              >
                Full-Stack Development
              </h3>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Building end-to-end solutions with modern frameworks and tools.
                From designing intuitive user interfaces to architecting robust
                backend systems, I enjoy the entire journey of bringing ideas to
                production.
              </p>
            </div>

            <div>
              <h3
                className={`text-2xl sm:text-3xl font-light mb-4 sm:mb-6 ${
                  darkMode ? "text-[#f28b82]" : "text-[#ea4335]"
                } tracking-tight`}
              >
                Competitive Programming
              </h3>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Actively practicing DSA to sharpen problem-solving skills. The
                discipline of competitive programming strengthens my ability to
                write optimized, production-ready code under pressure.
              </p>
            </div>

            <div>
              <h3
                className={`text-2xl sm:text-3xl font-light mb-4 sm:mb-6 ${
                  darkMode ? "text-[#fdd663]" : "text-[#fbbc04]"
                } tracking-tight`}
              >
                DevOps & Cloud
              </h3>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Growing expertise in containerization, CI/CD pipelines, and
                cloud infrastructure. I believe great software isn't complete
                until it's deployed reliably and scales effortlessly.
              </p>
            </div>

            <div>
              <h3
                className={`text-2xl sm:text-3xl font-light mb-4 sm:mb-6 ${
                  darkMode ? "text-[#8ab4f8]" : "text-[#4285f4]"
                } tracking-tight`}
              >
                System Design
              </h3>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Fascinated by the architecture behind scalable applications. I
                love thinking about trade-offs, distributed systems, and
                designing solutions that stand the test of time and traffic.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Journey - Card Style */}
        <div
          className={`w-full h-px ${
            darkMode ? "bg-[#2a2a2a]" : "bg-[#e8e8e8]"
          } my-8 sm:my-10`}
        ></div>
        <section className="mb-16 sm:mb-20">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-12 sm:mb-16 ${
              darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
            } tracking-tight`}
          >
            Leadership Journey
          </h2>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <div
              className={`border-l-4 ${
                darkMode ? "border-[#f28b82]" : "border-[#ea4335]"
              } pl-4 sm:pl-6 md:pl-8`}
            >
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-light mb-2 ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                } tracking-tight`}
              >
                Competitive Programming Co-Head
              </h3>
              <p
                className={`text-xs sm:text-sm mb-3 sm:mb-4 ${
                  darkMode ? "text-[#666]" : "text-[#999]"
                }`}
              >
                Google Developer Students Club, SIT Pune
              </p>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Passionately led coding challenges and creative problem-solving
                sessions, inspiring students to explore new algorithms and push
                the boundaries of their coding skills. Fostered a campus
                environment where learning and collaboration thrived, organizing
                weekly contests and mentorship sessions.
              </p>
            </div>

            <div
              className={`border-l-4 ${
                darkMode ? "border-[#8ab4f8]" : "border-[#4285f4]"
              } pl-4 sm:pl-6 md:pl-8`}
            >
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-light mb-2 ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                } tracking-tight`}
              >
                Social Media Head
              </h3>
              <p
                className={`text-xs sm:text-sm mb-3 sm:mb-4 ${
                  darkMode ? "text-[#666]" : "text-[#999]"
                }`}
              >
                SymbiTech, SIT Pune
              </p>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Brought events to life online through innovative digital
                campaigns. Curated stories, visuals, and interactions that
                sparked excitement and strengthened the tech community's
                presence across platforms, reaching over 5,000+ students.
              </p>
            </div>

            <div
              className={`border-l-4 ${
                darkMode ? "border-[#fdd663]" : "border-[#fbbc04]"
              } pl-4 sm:pl-6 md:pl-8`}
            >
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-light mb-2 ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                } tracking-tight`}
              >
                Media & Documentation Head
              </h3>
              <p
                className={`text-xs sm:text-sm mb-3 sm:mb-4 ${
                  darkMode ? "text-[#666]" : "text-[#999]"
                }`}
              >
                National level Hackathon by Google Developers Groups
              </p>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Captured and organized event documentation with a professional
                touch, ensuring every session, workshop, and outcome was
                showcased effectively to participants and the wider community.
                Managed a team to create comprehensive event coverage.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements - Simple Two Column */}
        <div
          className={`w-full h-px ${
            darkMode ? "bg-[#2a2a2a]" : "bg-[#e8e8e8]"
          } my-8 sm:my-10`}
        ></div>
        <section className="mb-16 sm:mb-20">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-12 sm:mb-16 ${
              darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
            } tracking-tight`}
          >
            Key Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 border-l-4 text-[#81c995] pl-4 sm:pl-6 md:pl-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-3 sm:mb-4">
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl font-light ${
                    darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                  } tracking-tight`}
                >
                  Hackathon Finalist – ACE 2.0
                </h3>
                <span
                  className={`text-xs sm:text-sm mt-1 sm:mt-0 ${
                    darkMode ? "text-[#666]" : "text-[#999]"
                  }`}
                >
                  2025
                </span>
              </div>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Developed an innovative smart governance solution that stood out
                among 400+ competing teams, demonstrating both technical skill
                and real-world impact. Built a complete working prototype with
                modern tech stack.
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-3 sm:mb-4">
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl font-light ${
                    darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                  } tracking-tight`}
                >
                  Open Source Contributor
                </h3>
                <span
                  className={`text-xs sm:text-sm mt-1 sm:mt-0 ${
                    darkMode ? "text-[#666]" : "text-[#999]"
                  }`}
                >
                  Ongoing
                </span>
              </div>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Contributing to various open-source projects, collaborating with
                developers worldwide, and giving back to the community that has
                taught me so much. Passionate about learning through real-world
                collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* After achievements section */}
        <div
          className={`w-full h-px ${
            darkMode ? "bg-[#2a2a2a]" : "bg-[#e8e8e8]"
          } my-8 sm:my-10`}
        ></div>
        <div className="text-center py-4 sm:py-5">
          <p
            className={`text-xs sm:text-sm italic ${
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
