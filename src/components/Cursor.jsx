import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = "1";
    };

    const hide = () => {
      cursor.style.opacity = "0";
    };

    const show = () => {
      cursor.style.opacity = "1";
    };

    const update = () => {
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
      requestAnimationFrame(update);
    };
    update();

    window.addEventListener("mousemove", move);

    document.addEventListener("mouseout", (e) => {
      if (!e.relatedTarget) hide();
    });

    window.addEventListener("mouseenter", show);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseout", hide);
    };
  }, []);

  useEffect(() => {
    const enter = () => setIsPointer(true);
    const leave = () => setIsPointer(false);

    const elems = document.querySelectorAll(
      "a, button, [role='button'], .cursor-pointer-custom"
    );

    elems.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      elems.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <img
      ref={cursorRef}
      src={"/custom-cursor.svg"}
      className="custom-cursor"
      style={{
        transform: isPointer
          ? "translate(-4px, -2px) scale(0.7)"
          : "translate(-4px, -2px) scale(0.7)",
      }}
      alt=""
    />
  );
}
