import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { darkMode } = useTheme();

  return (
    <main
      className={`min-h-screen ${darkMode ? "bg-[#0a0a0a]" : "bg-[#fafafa]"}`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 pt-40 pb-10">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          {/* Photo Column */}
          <div className="lg:col-span-1">
            <img
              src="/ProfilePicture.jpg"
              alt="Uttkarsh"
              className="w-full h-[600px] object-cover rounded-sm shadow-lg"
            />
          </div>

          {/* Bio Content Column */}
          <div className="lg:col-span-2">
            <h1
              className={`text-6xl font-extralight mb-8 ${
                darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
              } tracking-tighter leading-none`}
            >
              About Me
            </h1>

            <div className="space-y-6">
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                }`}
              >
                <span
                  className={`font-semibold ${
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
                </span>
                and building systems that scale. I thrive on solving complex
                problems with clean, efficient solutions.
              </p>

              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
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
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                }`}
              >
                I actively practice{" "}
                <span
                  className={`font-medium ${
                    darkMode ? "text-[#f28b82]" : "text-[#ea4335]"
                  }`}
                >
                  competitive programming
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
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
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

              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                }`}
              >
                Beyond tech, I believe creativity fuels engineering. My hobbies
                and interests keep me balanced, curious, and open to fresh
                perspectives — proving there's always more to build than just
                software.
              </p>
            </div>
          </div>
        </div>

        {/* Roles & Responsibilities Section */}
        <section className="mb-20">
          <h2
            className={`text-4xl font-extralight mb-12 ${
              darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
            } tracking-tight`}
          >
            Roles & Responsibilities{" "}
            <span className={darkMode ? "text-[#888]" : "text-[#666]"}>
              I've embraced
            </span>
          </h2>

          <div className="space-y-8">
            <div
              className={`p-8 border ${
                darkMode
                  ? "border-[#1a1a1a] bg-[#0f0f0f]"
                  : "border-[#e8e8e8] bg-white"
              } rounded-sm`}
            >
              <h3
                className={`text-xl font-medium mb-2 ${
                  darkMode ? "text-[#f28b82]" : "text-[#ea4335]"
                }`}
              >
                Competitive Programming Co-Head
              </h3>
              <p
                className={`text-sm mb-4 ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Google Developer Students Club, SIT Pune
              </p>
              <p
                className={`text-base leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Passionately led coding challenges and creative problem-solving
                sessions, inspiring students to explore new algorithms and push
                the boundaries of their coding skills. Fostered a campus
                environment where learning and collaboration thrived.
              </p>
            </div>

            <div
              className={`p-8 border ${
                darkMode
                  ? "border-[#1a1a1a] bg-[#0f0f0f]"
                  : "border-[#e8e8e8] bg-white"
              } rounded-sm`}
            >
              <h3
                className={`text-xl font-medium mb-2 ${
                  darkMode ? "text-[#8ab4f8]" : "text-[#4285f4]"
                }`}
              >
                Social Media Head
              </h3>
              <p
                className={`text-sm mb-4 ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                SymbiTech, SIT Pune
              </p>
              <p
                className={`text-base leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Brought events to life online through innovative digital
                campaigns. Curated stories, visuals, and interactions that
                sparked excitement and strengthened the tech community's
                presence across platforms.
              </p>
            </div>

            <div
              className={`p-8 border ${
                darkMode
                  ? "border-[#1a1a1a] bg-[#0f0f0f]"
                  : "border-[#e8e8e8] bg-white"
              } rounded-sm`}
            >
              <h3
                className={`text-xl font-medium mb-2 ${
                  darkMode ? "text-[#fdd663]" : "text-[#fbbc04]"
                }`}
              >
                Media & Documentation Head
              </h3>
              <p
                className={`text-sm mb-4 ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                National level Hackathon by Google Developers Groups on Campus
              </p>
              <p
                className={`text-base leading-relaxed ${
                  darkMode ? "text-[#888]" : "text-[#666]"
                }`}
              >
                Captured and organized event documentation with a professional
                touch, ensuring every session, workshop, and outcome was
                showcased effectively to participants and the wider community.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <h2
            className={`text-4xl font-extralight mb-12 ${
              darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
            } tracking-tight`}
          >
            Achievements{" "}
            <span className={darkMode ? "text-[#888]" : "text-[#666]"}>
              that define me
            </span>
          </h2>

          <div
            className={`p-8 border ${
              darkMode
                ? "border-[#1a1a1a] bg-[#0f0f0f]"
                : "border-[#e8e8e8] bg-white"
            } rounded-sm`}
          >
            <h3
              className={`text-xl font-medium mb-2 ${
                darkMode ? "text-[#81c995]" : "text-[#34a853]"
              }`}
            >
              Hackathon Finalist – ACE 2.0 (2025)
            </h3>
            <p
              className={`text-base leading-relaxed ${
                darkMode ? "text-[#888]" : "text-[#666]"
              }`}
            >
              Developed an innovative smart governance solution that stood out
              among 400+ competing teams, demonstrating both technical skill and
              real-world impact.
            </p>
          </div>
        </section>

        <div className="mt-20" />
      </div>
    </main>
  );
}
