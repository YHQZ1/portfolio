import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaCode,
  FaDiscord,
  FaStackOverflow,
} from "react-icons/fa";

export default function Footer() {
  const { darkMode } = useTheme();
  const [copied, setCopied] = useState(false);

  return (
    <footer
      className={`w-full py-6 sm:py-8 ${
        darkMode
          ? "bg-[#0a0a0a] border-[#1a1a1a]"
          : "bg-[#fafafa] border-[#e8e8e8]"
      } border-t`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        <h3
          className={`mb-4 sm:mb-6 text-lg sm:text-xl font-light ${
            darkMode ? "text-[#888]" : "text-[#666]"
          }`}
        >
          Let's connect.
        </h3>
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-4">
          <a
            href="https://www.linkedin.com/in/uttkarsh-ruparel/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl sm:text-2xl transition-none  ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/YHQZ1"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl sm:text-2xl transition-none  ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/yhqz/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl sm:text-2xl transition-none  ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaCode />
          </a>
          <a
            href="https://stackoverflow.com/users/29559883/uttkarsh-ruparel"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl sm:text-2xl transition-none ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaStackOverflow />
          </a>
          <a
            href="https://www.instagram.com/uttkarsh09_?igsh=MW9xYWxxYW00cjVkZg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl sm:text-2xl transition-none  ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaInstagram />
          </a>
          <button
            onClick={() => {
              navigator.clipboard.writeText("YHQZ#3185");
              setCopied(true);
              setTimeout(() => setCopied(false), 1200);
            }}
            className={`relative text-xl sm:text-2xl transition-none cursor-pointer ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
            title="Copy Discord username"
          >
            <FaDiscord />

            {copied && (
              <span
                className={`absolute left-1/2 -translate-x-1/2 mt-2 text-xs px-2 py-1 rounded-sm ${
                  darkMode
                    ? "bg-[#1a1a1a] text-[#f5f5f5]"
                    : "bg-[#eaeaea] text-[#1a1a1a]"
                } opacity-90`}
              >
                Copied!
              </span>
            )}
          </button>
          <Link
            to="/contact"
            className={`text-xl sm:text-2xl transition-none  ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaEnvelope />
          </Link>
        </div>
      </div>
    </footer>
  );
}
