import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0);

  useEffect(() => {
    if (isTouchDevice || !cursorRef.current) return;

    const cursor = cursorRef.current;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let rafId = null;

    const hideCursorOnIframe = () => {
      cursor.style.opacity = "0";
    };

    const showCursorOnIframe = () => {
      cursor.style.opacity = "1";
    };

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = "1";
    };

    const handleLeave = () => {
      cursor.style.opacity = "0";
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === "IFRAME" || e.target.closest("iframe")) {
        hideCursorOnIframe();
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === "IFRAME" || e.target.closest("iframe")) {
        showCursorOnIframe();
      }
    };

    const updateCursorPosition = () => {
      cursor.style.left = `${mouseX - 4}px`;
      cursor.style.top = `${mouseY - 2}px`;
      rafId = requestAnimationFrame(updateCursorPosition);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    updateCursorPosition();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <img
      ref={cursorRef}
      src="/custom-cursor.svg"
      className="custom-cursor"
      alt=""
    />
  );
}
