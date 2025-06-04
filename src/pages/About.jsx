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
            <span className="text-accent">Hi, I'm Uttkarsh!</span> I'm a passionate <span className="highlight-blue">Computer Science</span> student at <span className="highlight-green">SIT</span> with a knack for turning complex problems into elegant solutions. My journey in tech began when I first discovered programming in high school, and since then, I've been obsessed with building things that make a difference.
          </p>
          <p className="about-text">
            When I'm not coding, you'll find me contributing to <span className="highlight-yellow">open-source projects</span> or mentoring junior developers. I believe in the power of technology to transform lives, which is why I built <span className="highlight-purple">VerQ</span> - to bridge the gap between students and opportunities. My approach combines technical skills with creative problem-solving, always aiming to deliver user-centric solutions.
          </p>
          <p className="about-text">
            Currently, I'm diving deeper into <span className="highlight-red">AI/ML applications</span> and <span className="highlight-blue">full-stack development</span> while actively participating in hackathons to push my boundaries.
          </p>
        </div>
      </section>

      <section className="about-section about-interests">
        <h2 className="interests-title">
          What am I like outside of work? <span className="text-gradient">I'm glad you asked.</span>
        </h2>

        <div className="interests-grid">
          <div className="interest-item">
            <div className="interest-text">
              <div className="interest-header">
                <h3 className="interest-title1">An amateur cook</h3>
              </div>
              <p className="interest-description">
                Cooking is one of my <span className="text-emphasis">creative outlets</span>, especially when preparing Italian and American dishes. I enjoy experimenting with flavors and techniques to recreate restaurant-quality meals at home.
              </p>
              <p className="interest-subheading">
                Here are three of my recent favourite dishes:
              </p>
              <ul className="interest-list">
                <li><span className="list-highlight">Homemade pasta</span> with various sauces</li>
                <li><span className="list-highlight">Classic American burgers</span> with special sauce</li>
                <li><span className="list-highlight">Authentic Italian risotto</span></li>
                <li><span className="list-highlight">New York-style cheesecake</span></li>
              </ul>
            </div>
            <div className="interest-image">
              <img
                src="https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                alt="Cooking"
                className="interest-img"
              />
            </div>
          </div>

          <div className="interest-item">
            <div className="interest-image">
              <img
                src="https://cdn-9.motorsport.com/images/amp/0ZRjL9M0/s1000/red-bull-racing-2022-f1-car-1.jpg"
                alt="Sports"
                className="interest-img"
              />
            </div>
            <div className="interest-text">
              <div className="interest-header">
                <h3 className="interest-title2">Sports Enthusiast</h3>
              </div>
              <p className="interest-description">
                I'm passionate about both watching and playing sports. I follow <span className="text-emphasis">Formula 1</span> closely and enjoy casual viewing of cricket, football, and tennis. When it comes to playing, I regularly enjoy badminton and pickleball, along with more casual/arcade sports like pool, bowling, and foosball.
              </p>
              <p className="interest-subheading">
                My current favorites in sports:
              </p>
              <ul className="interest-list">
                <li><span className="list-highlight">Formula 1</span> - Following the latest season</li>
                <li><span className="list-highlight">Badminton</span> - My go-to active sport</li>
                <li><span className="list-highlight">Casual games</span> like pool and bowling with friends</li>
              </ul>
            </div>
          </div>

          <div className="interest-item">
            <div className="interest-text">
              <div className="interest-header">
                <h3 className="interest-title3">Media & Entertainment</h3>
              </div>
              <p className="interest-description">
                I'm an avid consumer of <span className="text-emphasis">movies, music, and video games</span>. Whether it's discovering new films, listening to different music genres, or playing both casual and competitive games, I enjoy how media can tell stories and create experiences.
              </p>
              <p className="interest-subheading">
                My current favorites in entertainment:
              </p>
              <ul className="interest-list">
                <li><span className="list-highlight">Exploring new movie genres</span> and directors</li>
                <li><span className="list-highlight">Building diverse music playlists</span> for every mood</li>
                <li><span className="list-highlight">Playing both story-driven</span> and multiplayer games</li>
              </ul>
            </div>
            <div className="interest-image">
              <img
                src="https://i.pinimg.com/736x/cd/49/e4/cd49e47ae6a54d928ea0c7536f7ea61a.jpg"
                alt="Cinema"
                className="interest-img"
              />
            </div>
          </div>

          <div className="interest-item">
            <div className="interest-image">
              <img
                src="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?cs=srgb&dl=pexels-pixabay-290595.jpg&fm=jpg"
                alt="Tinkering"
                className="interest-img"
              />
            </div>
            <div className="interest-text">
              <div className="interest-header">
                <h3 className="interest-title4">Photography</h3>
              </div>
              <p className="interest-description">
                Photography is my way of <span className="text-emphasis">capturing and appreciating</span> the world around me. I enjoy shooting various subjects from nature and cityscapes to portraits and architectural details. Each photo tells a story or captures a moment worth remembering.
              </p>
              <p className="interest-subheading">
                My favorite photography subjects:
              </p>
              <ul className="interest-list">
                <li><span className="list-highlight">Dramatic sunsets</span> and golden hour scenes</li>
                <li><span className="list-highlight">Urban landscapes</span> and skyscrapers</li>
                <li><span className="list-highlight">Candid street photography</span></li>
                <li><span className="list-highlight">Nature and macro details</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-experience"></section>
      
      <style jsx>{`
        .gradient-text {
          background: ${darkMode ? 
            'linear-gradient(90deg, #8ab4f8, #81c995)' : 
            'linear-gradient(90deg, #4285f4, #34a853)'};
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline;
        }
        
        .text-gradient {
          background: ${darkMode ? 
            'linear-gradient(90deg, #f28b82, #fdd663)' : 
            'linear-gradient(90deg, #ea4335, #fbbc04)'};
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline;
        }
        
        .text-accent {
          color: ${darkMode ? '#8ab4f8' : '#4285f4'};
          font-weight: 600;
        }
        
        .text-emphasis {
          color: ${darkMode ? '#fdd663' : '#fbbc04'};
          font-weight: 500;
        }
        
        .highlight-blue {
          color: ${darkMode ? '#8ab4f8' : '#4285f4'};
          font-weight: 500;
        }
        
        .highlight-red {
          color: ${darkMode ? '#f28b82' : '#ea4335'};
          font-weight: 500;
        }
        
        .highlight-yellow {
          color: ${darkMode ? '#fdd663' : '#fbbc04'};
          font-weight: 500;
        }
        
        .highlight-green {
          color: ${darkMode ? '#81c995' : '#34a853'};
          font-weight: 500;
        }
        
        .highlight-purple {
          color: ${darkMode ? '#c58af9' : '#a142f4'};
          font-weight: 500;
        }
        
        .list-highlight {
          color: ${darkMode ? '#8ab4f8' : '#4285f4'};
          font-weight: 500;
        }
      `}</style>
    </main>
  );
}