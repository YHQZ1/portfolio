import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton({ darkMode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
    fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-md
    transition-none duration-200
    ${
      visible
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }

    ${
      darkMode
        ? "bg-white text-black border-white hover:bg-[#e5e5e5]"
        : "bg-black text-white border-black hover:bg-[#222]"
    }
  `}
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
}
