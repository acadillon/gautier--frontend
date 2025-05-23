import { useEffect, useRef } from "react";

export default function CustomCursor({ text, visible }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-50 pointer-events-none text-blue text-title uppercase"
      style={{
        transform: "translate(-50%, -50%)",
        opacity: visible && text ? 1 : 0,
      }}
    >
      {text}
    </div>
  );
}
