import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`w-full py-8 ${
        darkMode
          ? "bg-[#0a0a0a] border-[#1a1a1a]"
          : "bg-[#fafafa] border-[#e8e8e8]"
      } border-t`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center">
        <h3
          className={`mb-6 text-lg md:text-xl ${
            darkMode ? "text-[#888]" : "text-[#666]"
          }`}
        >
          Let's connect.
        </h3>
        <div className="flex justify-center gap-6 md:gap-8 mb-4">
          <a
            href="https://www.linkedin.com/in/uttkarsh-ruparel/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${darkMode ? "text-[#888]" : "text-[#666]"}`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/YHQZ1"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${darkMode ? "text-[#888]" : "text-[#666]"}`}
          >
            <FaGithub />
          </a>
          <Link
            to="/contact"
            className={`text-2xl ${darkMode ? "text-[#888]" : "text-[#666]"}`}
          >
            <FaEnvelope />
          </Link>
        </div>
      </div>
    </footer>
  );
}
