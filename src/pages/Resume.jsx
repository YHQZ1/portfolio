import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

export default function Resume() {
  const { darkMode } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#0a0a0a]" : "bg-[#fafafa]"
      } px-4 sm:px-6 md:px-8`}
    >
      <div
        className={`
          fixed top-0 left-0 h-[2px] z-50
          ${
            darkMode
              ? "bg-white shadow-[0_0_6px_rgba(255,255,255,0.4)]"
              : "bg-black shadow-[0_0_6px_rgba(0,0,0,0.25)]"
          }
          transition-[width] duration-500 ease-out
        `}
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-6xl mx-auto pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24">
        <h1
          className={`
            text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
            font-extralight mb-6 sm:mb-8 
            ${darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"} 
            tracking-tight leading-[1.1] relative inline-block group
          `}
        >
          Resume
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
        </h1>

        <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className={`
              flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-sm border
              ${
                darkMode
                  ? "border-[#2a2a2a] text-[#f5f5f5] hover:bg-[#111]"
                  : "border-[#ddd] text-[#1a1a1a] hover:bg-[#f4f4f4]"
              }
              transition-none flex-shrink-0
            `}
          >
            <FaDownload className="text-xs sm:text-sm" />
            <span className="hidden xs:inline">Download</span>
            <span className="xs:hidden">Download</span>
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-sm border
              ${
                darkMode
                  ? "border-[#2a2a2a] text-[#f5f5f5] hover:bg-[#111]"
                  : "border-[#ddd] text-[#1a1a1a] hover:bg-[#f4f4f4]"
              }
              transition-none flex-shrink-0
            `}
          >
            <FaExternalLinkAlt className="text-xs sm:text-sm" />
            <span className="hidden xs:inline">Open in New Tab</span>
            <span className="xs:hidden">Open in New Tab</span>
          </a>
        </div>

        <h2
          className={`
            text-xl sm:text-2xl md:text-3xl font-extralight mb-4 sm:mb-6 relative inline-block group
            ${darkMode ? "text-[#e5e5e5]" : "text-[#222]"}
          `}
        >
          Document Preview
          <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
        </h2>

        <div
          className={`
            w-full flex justify-center p-4 sm:p-5 md:p-6 rounded-sm
            ${
              darkMode
                ? "border border-[#1a1a1a] bg-[#0f0f0f]"
                : "border border-[#e0e0e0] bg-white"
            }
          `}
        >
          <div className="w-full max-w-[1050px] relative cursor-iframe-area">
            <iframe
              src="/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="w-full h-[50vh] xs:h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] rounded-sm"
              style={{ border: "none" }}
              title="Resume PDF Viewer"
              loading="lazy"
            />
            <div className="block sm:hidden text-center mt-3 text-xs text-gray-500 dark:text-gray-400">
              Pinch to zoom for better view on mobile
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
