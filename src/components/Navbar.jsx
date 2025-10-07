import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import "../styles/Navbar.css";
import resumePDF from '/Resume.pdf';

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/work" className="navbar__logo">
        <img src="/logo.png" alt="Portfolio Logo" className="logo-image" />
      </Link>

      <div className="navbar__links">
        <Link to="/work" className="navbar__link">
          Work
        </Link>
        <Link to="/about" className="navbar__link">
          About
        </Link>
        <a
          href={resumePDF}
          className="navbar__link"
        >
          Resume
        </a>
      </div>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <FaSun className="theme-icon sun" />
        ) : (
          <FaMoon className="theme-icon moon" />
        )}
      </button>
    </nav>
  );
}