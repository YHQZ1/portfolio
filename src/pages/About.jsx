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
            <span className="text-accent">Hey, I’m Uttkarsh</span>, a Computer
            Science undergrad at
            <span className="highlight-green"> SIT</span> with a strong
            foundation in <span className="highlight-green">C</span> and{" "}
            <span className="highlight-green">Java</span>. I’m passionate about
            building scalable software and solving complex problems.
          </p>

          <p className="about-text">
            I focus on{" "}
            <span className="highlight-blue">full-stack development</span> using
            the <span className="highlight-purple">MERN stack</span>, often
            leveraging <span className="highlight-purple">Supabase</span> or
            SQL. I’m expanding my skills in{" "}
            <span className="highlight-yellow">DevOps</span> and{" "}
            <span className="highlight-red">Cloud</span> to streamline
            deployments and infrastructure.
          </p>

          <p className="about-text">
            A key project of mine is{" "}
            <span className="highlight-purple">VerQ</span>, a platform that
            automates college placements with AI-powered resume scoring. I
            contributed to both frontend and backend development.
          </p>

          <p className="about-text">
            I actively practice{" "}
            <span className="highlight-red">competitive programming</span> to
            sharpen my <span className="highlight-green">DSA</span> skills and
            problem-solving.
          </p>

          <p className="about-text">
            I’m seeking <span className="highlight-blue">SDE internships</span>{" "}
            to work on impactful projects and deepen my engineering expertise.
          </p>
        </div>
      </section>

      <section className="about-section about-interests">
        <h2 className="interests-title">
          What am I like outside of work?{" "}
          <span className="text-gradient">I'm glad you asked.</span>
        </h2>

        <div className="interests-grid">
          {/* Cooking Section */}
          <div className="interest-item">
            <div className="interest-text">
              <div className="interest-header">
                <h3 className="interest-title1">An amateur cook</h3>
              </div>
              <p className="interest-description">
                Cooking is my{" "}
                <span className="text-emphasis">delicious escape</span>, where I
                blend my love for Italian, American, and Indian vegetarian
                cuisine. I take pride in having successfully made several
                authentic Italian dishes from scratch.
              </p>
              <p className="interest-subheading">My culinary favorites:</p>
              <ul className="interest-list">
                <li>
                  <span className="list-highlight">Italian:</span> Homemade
                  pizzas, fresh pastas, and risottos
                </li>
                <li>
                  <span className="list-highlight">American:</span> Juicy
                  cheeseburgers with all the fixings
                </li>
                <li>
                  <span className="list-highlight">Indian Vegetarian:</span>{" "}
                  Paneer dishes like kadhai paneer and paneer tikka
                </li>
                <li>
                  <span className="list-highlight">Mexican:</span> Crispy
                  quesadillas with homemade guacamole
                </li>
              </ul>
            </div>
            <div className="interest-image">
              <img
                src="https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg"
                alt="Cooking"
                className="interest-img"
              />
            </div>
          </div>

          {/* Music Section */}
          <div className="interest-item reverse">
            <div className="interest-image">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Music"
                className="interest-img"
              />
            </div>
            <div className="interest-text">
              <div className="interest-header">
                <h3 className="interest-title2">Musician at Heart</h3>
              </div>
              <p className="interest-description">
                Music isn't just something I listen to - I{" "}
                <span className="text-emphasis">create it</span>. I play both the
                guitar and the piano, channeling my emotions through melodies and
                chords. Whether it's learning new songs or composing original
                pieces, music is my creative sanctuary.
              </p>
              <p className="interest-subheading">
                My musical journey includes:
              </p>
              <ul className="interest-list">
                <li>
                  <span className="list-highlight">Guitar:</span> From strumming
                  chords to fingerstyle patterns
                </li>
                <li>
                  <span className="list-highlight">Keyboard:</span> Exploring
                  different genres and sounds
                </li>
                <li>
                  <span className="list-highlight">Music Discovery:</span>{" "}
                  Constantly expanding my playlist with diverse genres
                </li>
              </ul>
            </div>
          </div>

          {/* Photography Section */}
          <div className="interest-item">
            <div className="interest-text">
              <div className="interest-header">
                <h3 className="interest-title3">Photography</h3>
              </div>
              <p className="interest-description">
                Photography is my way of{" "}
                <span className="text-emphasis">freezing time</span> - capturing
                emotions, stories, and beauty in single frames. I don't just
                take pictures; I preserve moments that would otherwise fade into
                memory.
              </p>
              <p className="interest-subheading">What I love to capture:</p>
              <ul className="interest-list">
                <li>
                  <span className="list-highlight">Candid moments</span> that
                  tell authentic stories
                </li>
                <li>
                  <span className="list-highlight">Urban landscapes</span> and
                  architectural details
                </li>
                <li>
                  <span className="list-highlight">Nature's beauty</span> in its
                  various forms
                </li>
                <li>
                  <span className="list-highlight">Unique perspectives</span> of
                  everyday scenes
                </li>
              </ul>
            </div>
            <div className="interest-image">
              <img
                src="/photography.jpg"
                alt="Photography"
                className="interest-img"
              />
            </div>
          </div>

          {/* Media & Entertainment Section */}
          <div className="interest-item reverse">
            <div className="interest-image">
              <img
                src="https://i.pinimg.com/736x/cd/49/e4/cd49e47ae6a54d928ea0c7536f7ea61a.jpg"
                alt="Entertainment"
                className="interest-img"
              />
            </div>
            <div className="interest-text">
              <div className="interest-header">
                <h3 className="interest-title4">Media & Entertainment</h3>
              </div>
              <p className="interest-description">
                I'm passionate about{" "}
                <span className="text-emphasis">storytelling</span>
                in all its forms - whether through films that transport me to
                other worlds, music that moves my soul, or games that let me
                live extraordinary adventures.
              </p>
              <p className="interest-subheading">My current favorites:</p>
              <ul className="interest-list">
                <li>
                  <span className="list-highlight">Movies:</span> Exploring
                  everything from indie gems to blockbusters
                </li>
                <li>
                  <span className="list-highlight">Video Games:</span> Both
                  story-driven single-player and competitive multiplayer
                </li>
                <li>
                  <span className="list-highlight">Formula 1:</span> Recently
                  got hooked on the speed and strategy
                </li>
                <li>
                  <span className="list-highlight">Music Exploration:</span>{" "}
                  Constantly discovering new artists and genres
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-experience"></section>

      <style jsx>{`
        .gradient-text {
          background: ${darkMode
            ? "linear-gradient(90deg, #8ab4f8, #81c995)"
            : "linear-gradient(90deg, #4285f4, #34a853)"};
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline;
        }

        .text-gradient {
          background: ${darkMode
            ? "linear-gradient(90deg, #f28b82, #fdd663)"
            : "linear-gradient(90deg, #ea4335, #fbbc04)"};
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline;
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

        .list-highlight {
          color: ${darkMode ? "#8ab4f8" : "#4285f4"};
          font-weight: 500;
        }
      `}</style>
    </main>
  );
}
