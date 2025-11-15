import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaDiscord,
  FaReddit,
  FaStackOverflow,
} from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from "react-icons/si";

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
          className={`mb-10 sm:mb-10 text-xl sm:text-2xl font-light ${
            darkMode ? "text-[#888]" : "text-[#666]"
          }`}
        >
          Let's connect.
        </h3>
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-2">
          <a
            href="https://www.linkedin.com/in/uttkarsh-ruparel/"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative text-xl sm:text-2xl transition-colors duration-300 group ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaLinkedin />
            <span
              className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 ${
                darkMode
                  ? "bg-[#1a1a1a] text-[#f5f5f5] border border-[#2a2a2a]"
                  : "bg-[#eaeaea] text-[#1a1a1a] border border-[#e0e0e0]"
              }`}
            >
              LinkedIn
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                  darkMode
                    ? "bg-[#1a1a1a] border-r border-b border-[#2a2a2a]"
                    : "bg-[#eaeaea] border-r border-b border-[#e0e0e0]"
                }`}
              />
            </span>
          </a>
          <a
            href="https://github.com/YHQZ1"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative text-xl sm:text-2xl transition-colors duration-300 group ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaGithub />
            <span
              className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 ${
                darkMode
                  ? "bg-[#1a1a1a] text-[#f5f5f5] border border-[#2a2a2a]"
                  : "bg-[#eaeaea] text-[#1a1a1a] border border-[#e0e0e0]"
              }`}
            >
              GitHub
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                  darkMode
                    ? "bg-[#1a1a1a] border-r border-b border-[#2a2a2a]"
                    : "bg-[#eaeaea] border-r border-b border-[#e0e0e0]"
                }`}
              />
            </span>
          </a>
          <a
            href="https://leetcode.com/u/yhqz/"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative text-xl sm:text-2xl transition-colors duration-300 group ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <SiLeetcode />
            <span
              className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 ${
                darkMode
                  ? "bg-[#1a1a1a] text-[#f5f5f5] border border-[#2a2a2a]"
                  : "bg-[#eaeaea] text-[#1a1a1a] border border-[#e0e0e0]"
              }`}
            >
              LeetCode
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                  darkMode
                    ? "bg-[#1a1a1a] border-r border-b border-[#2a2a2a]"
                    : "bg-[#eaeaea] border-r border-b border-[#e0e0e0]"
                }`}
              />
            </span>
          </a>
          <a
            href="https://stackoverflow.com/users/29559883/uttkarsh-ruparel"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative text-xl sm:text-2xl transition-colors duration-300 group ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaStackOverflow />
            <span
              className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 ${
                darkMode
                  ? "bg-[#1a1a1a] text-[#f5f5f5] border border-[#2a2a2a]"
                  : "bg-[#eaeaea] text-[#1a1a1a] border border-[#e0e0e0]"
              }`}
            >
              Stack Overflow
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                  darkMode
                    ? "bg-[#1a1a1a] border-r border-b border-[#2a2a2a]"
                    : "bg-[#eaeaea] border-r border-b border-[#e0e0e0]"
                }`}
              />
            </span>
          </a>
          <a
            href="https://www.instagram.com/uttkarsh09_?igsh=MW9xYWxxYW00cjVkZg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative text-xl sm:text-2xl transition-colors duration-300 group ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaInstagram />
            <span
              className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 ${
                darkMode
                  ? "bg-[#1a1a1a] text-[#f5f5f5] border border-[#2a2a2a]"
                  : "bg-[#eaeaea] text-[#1a1a1a] border border-[#e0e0e0]"
              }`}
            >
              Instagram
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                  darkMode
                    ? "bg-[#1a1a1a] border-r border-b border-[#2a2a2a]"
                    : "bg-[#eaeaea] border-r border-b border-[#e0e0e0]"
                }`}
              />
            </span>
          </a>
          <a
            href="https://x.com/uttkarsh09_?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative text-xl sm:text-2xl transition-colors duration-300 group ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaXTwitter />
            <span
              className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 ${
                darkMode
                  ? "bg-[#1a1a1a] text-[#f5f5f5] border border-[#2a2a2a]"
                  : "bg-[#eaeaea] text-[#1a1a1a] border border-[#e0e0e0]"
              }`}
            >
              X (Twitter)
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                  darkMode
                    ? "bg-[#1a1a1a] border-r border-b border-[#2a2a2a]"
                    : "bg-[#eaeaea] border-r border-b border-[#e0e0e0]"
                }`}
              />
            </span>
          </a>

          <a
            href="https://www.reddit.com/user/yhqz1/"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative text-xl sm:text-2xl transition-colors duration-300 group ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaReddit />
            <span
              className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 ${
                darkMode
                  ? "bg-[#1a1a1a] text-[#f5f5f5] border border-[#2a2a2a]"
                  : "bg-[#eaeaea] text-[#1a1a1a] border border-[#e0e0e0]"
              }`}
            >
              Reddit
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                  darkMode
                    ? "bg-[#1a1a1a] border-r border-b border-[#2a2a2a]"
                    : "bg-[#eaeaea] border-r border-b border-[#e0e0e0]"
                }`}
              />
            </span>
          </a>
          <button
            onClick={() => {
              navigator.clipboard.writeText("YHQZ#3185");
              setCopied(true);
              setTimeout(() => setCopied(false), 1200);
            }}
            className={`relative text-xl sm:text-2xl transition-colors duration-300 cursor-pointer group ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaDiscord />

            {!copied && (
              <span
                className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 ${
                  darkMode
                    ? "bg-[#1a1a1a] text-[#f5f5f5] border border-[#2a2a2a]"
                    : "bg-[#eaeaea] text-[#1a1a1a] border border-[#e0e0e0]"
                }`}
              >
                Discord
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                    darkMode
                      ? "bg-[#1a1a1a] border-r border-b border-[#2a2a2a]"
                      : "bg-[#eaeaea] border-r border-b border-[#e0e0e0]"
                  }`}
                />
              </span>
            )}

            {copied && (
              <span
                className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-sm z-50 ${
                  darkMode
                    ? "bg-[#1a1a1a] text-[#f5f5f5] border border-[#2a2a2a]"
                    : "bg-[#eaeaea] text-[#1a1a1a] border border-[#e0e0e0]"
                }`}
              >
                Copied!
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                    darkMode
                      ? "bg-[#1a1a1a] border-r border-b border-[#2a2a2a]"
                      : "bg-[#eaeaea] border-r border-b border-[#e0e0e0]"
                  }`}
                />
              </span>
            )}
          </button>
          <Link
            to="/contact"
            className={`relative text-xl sm:text-2xl transition-colors duration-300 group ${
              darkMode
                ? "text-[#888] hover:text-[#f5f5f5]"
                : "text-[#666] hover:text-[#1a1a1a]"
            }`}
          >
            <FaEnvelope />
            <span
              className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 ${
                darkMode
                  ? "bg-[#1a1a1a] text-[#f5f5f5] border border-[#2a2a2a]"
                  : "bg-[#eaeaea] text-[#1a1a1a] border border-[#e0e0e0]"
              }`}
            >
              Email Me
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                  darkMode
                    ? "bg-[#1a1a1a] border-r border-b border-[#2a2a2a]"
                    : "bg-[#eaeaea] border-r border-b border-[#e0e0e0]"
                }`}
              />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
