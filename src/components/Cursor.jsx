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
    let mouseX = 0;
    let mouseY = 0;
    let rafId = null;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = "1";
    };

    const hideCursor = () => {
      cursor.style.opacity = "0";
    };

    const showCursor = () => {
      cursor.style.opacity = "1";
    };

    const updateCursorPosition = () => {
      cursor.style.left = `${mouseX - 4}px`;
      cursor.style.top = `${mouseY - 2}px`;
      rafId = requestAnimationFrame(updateCursorPosition);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseout", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    updateCursorPosition();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseout", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
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
