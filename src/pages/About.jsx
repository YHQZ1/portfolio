import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

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

export default function About() {
  const { darkMode } = useTheme();
  const typedText = useTypewriter("About", 80);

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#0a0a0a]" : "bg-[#fafafa]"
      } px-4 sm:px-6`}
    >
      <div className="max-w-8xl mx-auto px-2 sm:px-4 md:px-6 lg:px-12 xl:px-16 pt-24 sm:pt-28 md:pt-32 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-20 mb-16 sm:mb-20">
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

          <div className="order-2 lg:order-2 lg:col-span-2 flex flex-col justify-center">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight mb-8 sm:mb-10 md:mb-12 ${
                darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
              } tracking-tighter leading-[1.1]`}
            >
              {typedText}
              <span className="ml-1 animate-pulse">|</span>
            </h1>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div
                className={`border-l-4 pl-4 sm:pl-6 md:pl-8 ${
                  darkMode ? "border-[#8ab4f8]" : "border-[#4285f4]"
                }`}
              >
                <p
                  className={`text-lg sm:text-xl md:text-2xl leading-[1.6] ${
                    darkMode ? "text-[#888]" : "text-[#666]"
                  }`}
                >
                  Hey, I'm Uttkarsh! I genuinely enjoy turning complex ideas
                  into clean, working solutions. There's something special about
                  watching a concept become something people actually use.
                </p>
              </div>

              <div
                className={`border-l-4 pl-4 sm:pl-6 md:pl-8 ${
                  darkMode ? "border-[#81c995]" : "border-[#34a853]"
                }`}
              >
                <p
                  className={`text-lg sm:text-xl md:text-2xl leading-[1.6] ${
                    darkMode ? "text-[#888]" : "text-[#666]"
                  }`}
                >
                  When I'm not building projects, I'm usually working out,
                  eating my way through the city, or watching something
                  compelling. I believe the best solutions come from simple,
                  disciplined and thoughtful approaches.
                </p>
              </div>

              <div
                className={`border-l-4 pl-4 sm:pl-6 md:pl-8 ${
                  darkMode ? "border-[#f28b82]" : "border-[#ea4335]"
                }`}
              >
                <p
                  className={`text-lg sm:text-xl md:text-2xl leading-[1.6] ${
                    darkMode ? "text-[#888]" : "text-[#666]"
                  }`}
                >
                  I'm always learning and growing—currently exploring new areas
                  in tech and always open to interesting conversations about
                  software development.
                </p>
              </div>

              <div
                className={`border-l-4 pl-4 sm:pl-6 md:pl-8 ${
                  darkMode ? "border-[#fdd663]" : "border-[#fbbc04]"
                }`}
              >
                <p
                  className={`text-lg sm:text-xl md:text-2xl leading-[1.6] ${
                    darkMode ? "text-[#888]" : "text-[#666]"
                  }`}
                >
                  Feel free to reach out if you want to chat about tech,
                  collaborate on something cool, or just share what you're
                  working on. I'm always excited to connect with fellow
                  creators!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`w-full h-px ${
            darkMode ? "bg-[#2a2a2a]" : "bg-[#e8e8e8]"
          } my-8 sm:my-10`}
        ></div>
        <section className="mb-16 sm:mb-20">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-12 sm:mb-16 relative inline-block group ${
              darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
            } tracking-tight leading-[1.2]`}
          >
            Core Competencies
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full`}
            ></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div
              className={`border-l-4 pl-4 sm:pl-6 md:pl-8 ${
                darkMode ? "border-[#81c995]" : "border-[#34a853]"
              }`}
            >
              <h3
                className={`text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                } tracking-tight leading-[1.3]`}
              >
                Full-Stack Development
              </h3>
              <p
                className={`text-lg sm:text-xl leading-[1.6] ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Building end-to-end solutions with modern frameworks and tools.
                From designing intuitive user interfaces to architecting robust
                backend systems, I enjoy the entire journey of bringing ideas to
                production.
              </p>
            </div>

            <div
              className={`border-l-4 pl-4 sm:pl-6 md:pl-8 ${
                darkMode ? "border-[#f28b82]" : "border-[#ea4335]"
              }`}
            >
              <h3
                className={`text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                } tracking-tight leading-[1.3]`}
              >
                Competitive Programming
              </h3>
              <p
                className={`text-lg sm:text-xl leading-[1.6] ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Solving complex algorithmic challenges to master efficient
                problem-solving. Competitive programming hones my ability to
                write high-performance code and think critically under time
                constraints.
              </p>
            </div>

            <div
              className={`border-l-4 pl-4 sm:pl-6 md:pl-8 ${
                darkMode ? "border-[#fdd663]" : "border-[#fbbc04]"
              }`}
            >
              <h3
                className={`text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                } tracking-tight leading-[1.3]`}
              >
                DevOps & Cloud
              </h3>
              <p
                className={`text-lg sm:text-xl leading-[1.6] ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Building infrastructure that moves as fast as the code. From
                container orchestration to seamless CI/CD pipelines, I engineer
                systems that deploy reliably and scale effortlessly.
              </p>
            </div>

            <div
              className={`border-l-4 pl-4 sm:pl-6 md:pl-8 ${
                darkMode ? "border-[#8ab4f8]" : "border-[#4285f4]"
              }`}
            >
              <h3
                className={`text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                } tracking-tight leading-[1.3]`}
              >
                System Design
              </h3>
              <p
                className={`text-lg sm:text-xl leading-[1.6] ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Building architectures that scale with user demand, not excuses.
                I design systems where every component serves a purpose and
                every trade-off is calculated for long-term impact.
              </p>
            </div>
          </div>
        </section>

        <div
          className={`w-full h-px ${
            darkMode ? "bg-[#2a2a2a]" : "bg-[#e8e8e8]"
          } my-8 sm:my-10`}
        ></div>
        <section className="mb-16 sm:mb-20">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-12 sm:mb-16 relative inline-block group ${
              darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
            } tracking-tight leading-[1.2]`}
          >
            Leadership Journey
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full`}
            ></span>
          </h2>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <div
              className={`border-l-4 ${
                darkMode ? "border-[#f28b82]" : "border-[#ea4335]"
              } pl-4 sm:pl-6 md:pl-8`}
            >
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-light mb-2 leading-[1.3] ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                } tracking-tight`}
              >
                Competitive Programming Co-Head
              </h3>
              <p
                className={`text-sm mb-3 sm:mb-4 ${
                  darkMode ? "text-[#666]" : "text-[#999]"
                }`}
              >
                Google Developer Students Club, SIT Pune
              </p>
              <p
                className={`text-lg sm:text-xl leading-[1.6] ${
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
                darkMode ? "border-[#81c995]" : "border-[#34a853]"
              } pl-4 sm:pl-6 md:pl-8`}
            >
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-light mb-2 leading-[1.3] ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                } tracking-tight`}
              >
                Media Co-Head
              </h3>
              <p
                className={`text-sm mb-3 sm:mb-4 ${
                  darkMode ? "text-[#666]" : "text-[#999]"
                }`}
              >
                Google Developer Students Club, SIT Pune
              </p>
              <p
                className={`text-lg sm:text-xl leading-[1.6] ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Led the club's digital presence with focused, high-impact media
                campaigns. Produced crisp visuals, announcements, and event
                coverage that boosted engagement and kept the community active
                and informed. Helped the club reach and interact with thousands
                of students across platforms.
              </p>
            </div>

            <div
              className={`border-l-4 ${
                darkMode ? "border-[#8ab4f8]" : "border-[#4285f4]"
              } pl-4 sm:pl-6 md:pl-8`}
            >
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-light mb-2 leading-[1.3] ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                } tracking-tight`}
              >
                Social Media Head
              </h3>
              <p
                className={`text-sm mb-3 sm:mb-4 ${
                  darkMode ? "text-[#666]" : "text-[#999]"
                }`}
              >
                SymbiTech, SIT Pune
              </p>
              <p
                className={`text-lg sm:text-xl leading-[1.6] ${
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
                className={`text-xl sm:text-2xl md:text-3xl font-light mb-2 leading-[1.3] ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                } tracking-tight`}
              >
                Media & Documentation Head
              </h3>
              <p
                className={`text-sm mb-3 sm:mb-4 ${
                  darkMode ? "text-[#666]" : "text-[#999]"
                }`}
              >
                National level Hackathon by Google Developer Students Club, SIT
                Pune
              </p>
              <p
                className={`text-lg sm:text-xl leading-[1.6] ${
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

        <div
          className={`w-full h-px ${
            darkMode ? "bg-[#2a2a2a]" : "bg-[#e8e8e8]"
          } my-8 sm:my-10`}
        ></div>
        <section className="mb-16 sm:mb-20">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-12 sm:mb-16 relative inline-block group ${
              darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
            } tracking-tight leading-[1.2]`}
          >
            Key Achievements
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full`}
            ></span>
          </h2>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16`}
          >
            <div
              className={`border-l-4 pl-4 sm:pl-6 md:pl-8 ${
                darkMode ? "border-[#81c995]" : "border-[#34a853]"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-3 sm:mb-4">
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl font-light leading-[1.3] ${
                    darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                  } tracking-tight`}
                >
                  Hackathon Finalist – ACE 2.0
                </h3>
                <span
                  className={`text-sm mt-1 sm:mt-0 ${
                    darkMode ? "text-[#666]" : "text-[#999]"
                  }`}
                >
                  2025
                </span>
              </div>
              <p
                className={`text-lg sm:text-xl leading-[1.6] ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Developed an innovative smart governance solution that stood out
                among 400+ competing teams, demonstrating both technical skill
                and real-world impact. Built a complete working prototype with
                modern tech stack.
              </p>
            </div>

            <div
              className={`border-l-4 pl-4 sm:pl-6 md:pl-8 ${
                darkMode ? "border-[#8ab4f8]" : "border-[#4285f4]"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-3 sm:mb-4">
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl font-light leading-[1.3] ${
                    darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                  } tracking-tight`}
                >
                  Open Source Contributor
                </h3>
                <span
                  className={`text-sm mt-1 sm:mt-0 ${
                    darkMode ? "text-[#666]" : "text-[#999]"
                  }`}
                >
                  Ongoing
                </span>
              </div>
              <p
                className={`text-lg sm:text-xl leading-[1.6] ${
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

        <div
          className={`w-full h-px ${
            darkMode ? "bg-[#2a2a2a]" : "bg-[#e8e8e8]"
          } my-8 sm:my-10`}
        />
        <section className="mb-16 sm:mb-20">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-12 sm:mb-16 relative inline-block group ${
              darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
            } tracking-tight leading-[1.2]`}
          >
            Work Experience
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full`}
            ></span>
          </h2>

          <div className="text-center">
            <p
              className={`text-lg sm:text-xl leading-[1.6] ${
                darkMode ? "text-[#888]" : "text-[#666]"
              }`}
            >
              Skills sharpened, just waiting for the right opportunity.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
