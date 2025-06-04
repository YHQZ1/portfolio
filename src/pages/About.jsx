import { useTheme } from "../context/ThemeContext";
import "../styles/About.css";

export default function About() {
  const { darkMode } = useTheme();

  return (
    <main className={`about-container ${darkMode ? "dark" : ""}`}>
      <section className="about-section">
        <h1 className="about-title">About Me</h1>
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
            Hi, I'm Uttkarsh! I'm a passionate Computer Science student at SIT
            with a knack for turning complex problems into elegant solutions. My
            journey in tech began when I first discovered programming in high
            school, and since then, I've been obsessed with building things that
            make a difference.
          </p>
          <p className="about-text">
            When I'm not coding, you'll find me contributing to open-source
            projects or mentoring junior developers. I believe in the power of
            technology to transform lives, which is why I built VerQ - to bridge
            the gap between students and opportunities. My approach combines
            technical skills with creative problem-solving, always aiming to
            deliver user-centric solutions.
          </p>
          <p className="about-text">
            Currently, I'm diving deeper into AI/ML applications and full-stack
            development while actively participating in hackathons to push my
            boundaries.
          </p>
        </div>
      </section>

      <section className="about-section about-interests">
        <h2 className="interests-title">
          What am I like outside of work? I'm glad you asked.
        </h2>

        <div className="interests-grid">
          <div className="interest-item">
            <div className="interest-text">
              <div className="interest-header">
                <h3 className="interest-title">An amateur cook</h3>
              </div>
              <p className="interest-description">
                Cooking is one of my creative outlets, especially when preparing
                Italian and American dishes. I enjoy experimenting with flavors
                and techniques to recreate restaurant-quality meals at home.
              </p>
              <p className="interest-subheading">
                Here are three of my recent favourite dishes:
              </p>
              <ul className="interest-list">
                <li>Homemade pasta with various sauces</li>
                <li>Classic American burgers with special sauce</li>
                <li>Authentic Italian risotto</li>
                <li>New York-style cheesecake</li>
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
                <h3 className="interest-title">Sports Enthusiast</h3>
              </div>
              <p className="interest-description">
                I'm passionate about both watching and playing sports. I follow
                Formula 1 closely and enjoy casual viewing of cricket, football,
                and tennis. When it comes to playing, I regularly enjoy
                badminton and pickleball, along with more casual/arcade sports
                like pool, bowling, and foosball.
              </p>
              <p className="interest-subheading">
                My current favorites in sports:
              </p>
              <ul className="interest-list">
                <li>Formula 1 - Following the latest season</li>
                <li>Badminton - My go-to active sport</li>
                <li>Casual games like pool and bowling with friends</li>
              </ul>
            </div>
          </div>

          <div className="interest-item">
            <div className="interest-text">
              <div className="interest-header">
                <h3 className="interest-title">Media & Entertainment</h3>
              </div>
              <p className="interest-description">
                I'm an avid consumer of movies, music, and video games. Whether
                it's discovering new films, listening to different music genres,
                or playing both casual and competitive games, I enjoy how media
                can tell stories and create experiences. My current favorites in
                entertainment: Exploring new movie genres and directors Building
                diverse music playlists for every mood Playing both story-driven
                and multiplayer games
              </p>
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
                <h3 className="interest-title">Photography</h3>
              </div>
              <p className="interest-description">
                Photography is my way of capturing and appreciating the world
                around me. I enjoy shooting various subjects from nature and
                cityscapes to portraits and architectural details. Each photo
                tells a story or captures a moment worth remembering. My
                favorite photography subjects: Dramatic sunsets and golden hour
                scenes Urban landscapes and skyscrapers Candid street
                photography Nature and macro details
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-experience"></section>
    </main>
  );
}
