import { useTheme } from "../context/ThemeContext";
import "../styles/Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      <div className="footer-content">
        <h3 className="connect-text">Let's connect.</h3>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/uttkarsh-ruparel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/YHQZ1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a href="mailto:rupareluttkarsh2309@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
