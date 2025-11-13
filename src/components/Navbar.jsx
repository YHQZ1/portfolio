import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import resumePDF from "/Resume.pdf";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] max-w-[400px] min-w-[280px] flex justify-between items-center py-3 px-6 sm:py-3 sm:px-6 md:py-2 md:px-4 backdrop-blur-xs bg-white/5 dark:bg-black/5 shadow-lg border border-white/20 dark:border-gray-500/20 rounded-full z-50 mt-4 sm:mt-5 md:mt-6 lg:mt-7`}
    >
      <Link to="/work" className="flex items-center">
        <img
          src="/images/logo.png"
          alt="Portfolio Logo"
          className="h-8 sm:h-9 md:h-9 lg:h-10 w-auto max-w-none min-w-[32px] sm:min-w-[36px]"
        />
      </Link>

      <div className="flex gap-3 sm:gap-4 md:gap-4 lg:gap-6 items-center">
        <Link
          to="/work"
          className={`font-semibold text-sm sm:text-base md:text-sm lg:text-base py-1 relative group transition-none duration-300 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Work
          <span
            className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full`}
          ></span>
        </Link>
        <Link
          to="/about"
          className={`font-semibold text-sm sm:text-base md:text-sm lg:text-base py-1 relative group transition-none duration-300 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          About
          <span
            className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full`}
          ></span>
        </Link>
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-semibold text-sm sm:text-base md:text-sm lg:text-base py-1 relative group transition-none duration-300 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Resume
          <span
            className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full`}
          ></span>
        </a>
      </div>

      <button
        className="bg-transparent border-none cursor-pointer p-1.5 sm:p-2 md:p-1.5 lg:p-2 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
        onClick={toggleTheme}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <FaSun className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-gray-400" />
        ) : (
          <FaMoon className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-gray-700" />
        )}
      </button>
    </nav>
  );
}
