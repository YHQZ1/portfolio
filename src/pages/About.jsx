import { useTheme } from "../context/ThemeContext";
import "../styles/About.css";

export default function About() {
  const { darkMode } = useTheme();

  return (
    <main className={`about-container ${darkMode ? "dark" : ""}`}>
      <section className="about-section">
        <h1 className="about-title">
          <span className="gradient-text">About Me</span>
        </h1>
      </section>
      <section className="about-section about-bio">
        <div className="about-image-container">
          <img
            src="/ProfilePicture.jpg"
            alt="Uttkarsh"
            className="about-profile-image"
          />
        </div>
        <div className="about-content">
          <p className="about-text">
            <span className="text-accent">Hey, I'm Uttkarsh</span>, a Computer
            Science undergrad passionate about{" "}
            <span className="highlight-blue">software engineering </span>
            and building systems that scale. I thrive on solving complex
            problems with clean, efficient solutions.
          </p>

          <p className="about-text">
            My core skills are in
            <span className="highlight-green"> full-stack development</span>,
            along with growing expertise in{" "}
            <span className="highlight-yellow">DevOps</span> and
            <span className="highlight-red"> Cloud</span>. I love bringing ideas
            to life — from crafting smooth frontends to deploying resilient
            backends.
          </p>

          <p className="about-text">
            I actively practice{" "}
            <span className="highlight-red">competitive programming </span>
            to sharpen my <span className="highlight-green">DSA</span> skills,
            which strengthens my ability to write optimized, production-ready
            code.
          </p>

          <p className="about-text">
            My goal? To shape{" "}
            <span className="highlight-blue">technology that lasts</span> —
            building scalable systems, exploring creative problem-solving, and
            contributing to projects that make a difference.
          </p>

          <p className="about-text">
            Beyond tech, I believe creativity fuels engineering. My hobbies and
            interests keep me balanced, curious, and open to fresh perspectives
            — proving there’s always more to build than just software.
          </p>
        </div>
      </section>

      <section className="about-section about-roles">
        <h2 className="interests-title">
          Roles & Responsibilities{" "}
          <span className="text-gradient">I’ve embraced</span>
        </h2>
        <ul className="roles-list">
          <li>
            <span className="list-highlight1">
              Competitive Programming Co-Head
            </span>{" "}
            –{" "}
            <span className="list-org">
              Google Developer Students Club, SIT Pune
            </span>
            <p>
              Passionately led coding challenges and creative problem-solving
              sessions, inspiring students to explore new algorithms and push
              the boundaries of their coding skills. Fostered a campus
              environment where learning and collaboration thrived.
            </p>
          </li>
          <li>
            <span className="list-highlight2">Social Media Head</span> –
            <span className="list-org"> SymbiTech, SIT Pune</span>
            <p>
              Brought events to life online through innovative digital
              campaigns. Curated stories, visuals, and interactions that sparked
              excitement and strengthened the tech community’s presence across
              platforms.
            </p>
          </li>
          <li>
            <span className="list-highlight3">Media & Documentation Head</span>{" "}
            –
            <span className="list-org">
              {" "}
              National level Hackathon by Google Developers Groups on Campus
            </span>
            <p>
              Captured and organized event documentation with a professional
              touch, ensuring every session, workshop, and outcome was showcased
              effectively to participants and the wider community.
            </p>
          </li>
        </ul>
      </section>

      <section className="about-section about-achievements">
        <h2 className="interests-title">
          Achievements <span className="text-gradient">that define me</span>
        </h2>
        <ul className="achievements-list">
          <li>
            <span className="list-highlight4">
              Hackathon Finalist – ACE 2.0 (2025)
            </span>
            <p>
              Developed an innovative smart governance solution that stood out
              among 400+ competing teams, demonstrating both technical skill and
              real-world impact.
            </p>
          </li>
        </ul>
      </section>

      {/* <section className="about-section about-interests">
        <h2 className="interests-title">
          What am I like outside of work?{" "}
          <span className="text-gradient">I'm glad you asked.</span>
        </h2>

      </section>

      <section className="about-section about-experience"></section> */}

      <style jsx>{`
        .gradient-text {
  color: ${darkMode ? "#E8EAED" : "#3C4043"}; /* clean contrast from Google UI grays */
  font-weight: 700;
}


        .text-gradient {
          color: ${darkMode
            ? "#F3F3F3"
            : "#2D2D2D"}; /* Soft white → deep charcoal */
          font-weight: 600;
        }

        .text-accent {
          color: ${darkMode ? "#8ab4f8" : "#4285f4"};
          font-weight: 600;
        }

        .text-emphasis {
          color: ${darkMode ? "#fdd663" : "#fbbc04"};
          font-weight: 500;
        }

        .highlight-blue {
          color: ${darkMode ? "#8ab4f8" : "#4285f4"};
          font-weight: 500;
        }

        .highlight-red {
          color: ${darkMode ? "#f28b82" : "#ea4335"};
          font-weight: 500;
        }

        .highlight-yellow {
          color: ${darkMode ? "#fdd663" : "#fbbc04"};
          font-weight: 500;
        }

        .highlight-green {
          color: ${darkMode ? "#81c995" : "#34a853"};
          font-weight: 500;
        }

        .highlight-purple {
          color: ${darkMode ? "#c58af9" : "#a142f4"};
          font-weight: 500;
        }

        .list-highlight1 {
          color: ${darkMode ? "#f28b82" : "#ea4335"}; /* red */
          font-weight: 500;
          font-size: 1.2rem;
        }

        .list-highlight2 {
          color: ${darkMode ? "#8ab4f8" : "#4285f4"}; /* blue */
          font-weight: 500;
          font-size: 1.2rem;
        }

        .list-highlight3 {
          color: ${darkMode ? "#fdd663" : "#fbbc04"}; /* yellow */
          font-weight: 500;
          font-size: 1.2rem;
        }

        .list-highlight4 {
          color: ${darkMode ? "#81c995" : "#34a853"}; /* green */
          font-weight: 500;
          font-size: 1.2rem;
        }

        .list-org {
          font-size: 1.2rem;
          font-weight: 500;
          color: ${darkMode ? "#ccc" : "#555"}; /* neutral gray */
        }

        .roles-list,
        .achievements-list {
          list-style: none;
          padding-left: 0;
        }

        .roles-list li,
        .achievements-list li {
          margin-bottom: 1.5rem;
        }

        .roles-list li p,
        .achievements-list li p {
          margin: 0.3rem 0 0 0;
          color: ${darkMode ? "#ccc" : "#333"};
          font-size: 1.2rem;
        }

        .google-blue {
          color: ${darkMode ? "#8ab4f8" : "#4285f4"};
          font-weight: 500;
        }

        .google-red {
          color: ${darkMode ? "#f28b82" : "#ea4335"};
          font-weight: 500;
        }

        .google-yellow {
          color: ${darkMode ? "#fdd663" : "#fbbc04"};
          font-weight: 500;
        }

        .google-green {
          color: ${darkMode ? "#81c995" : "#34a853"};
          font-weight: 500;
        }
      `}</style>
    </main>
  );
}
