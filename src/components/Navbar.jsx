import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import resumePDF from "/Resume.pdf";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[50%] xl:w-[27%] max-w-[1000px] min-w-[280px] flex justify-between items-center py-3 px-6 md:py-2 md:px-4 backdrop-blur-xs bg-white/5 dark:bg-black/5 shadow-lg border border-white/20 dark:border-gray-500/20 rounded-full z-50 mt-5 md:mt-6 lg:mt-7 xl:mt-8`}
    >
      <Link to="/work" className="flex items-center">
        <img
          src="/logo.png"
          alt="Portfolio Logo"
          className="h-10 md:h-9 lg:h-10 w-auto max-w-none min-w-[40px]"
        />
      </Link>

      <div className="flex gap-4 md:gap-4 lg:gap-8 items-center">
        <Link
          to="/work"
          className={`font-semibold text-base md:text-sm lg:text-base py-1 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Work
        </Link>
        <Link
          to="/about"
          className={`font-semibold text-base md:text-sm lg:text-base py-1 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          About
        </Link>
        <a
          href={resumePDF}
          className={`font-semibold text-base md:text-sm lg:text-base py-1 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Resume
        </a>
      </div>

      <button
        className="bg-transparent border-none cursor-pointer p-2 md:p-1.5 lg:p-2 flex items-center justify-center rounded-full"
        onClick={toggleTheme}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <FaSun className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-gray-400" />
        ) : (
          <FaMoon className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-gray-700" />
        )}
      </button>
    </nav>
  );
}
