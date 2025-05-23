import { useEffect, useRef, useState } from "react";

export default function CustomCursor({ type = "default", text = "" }) {
  const cursorRef = useRef(null);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const move = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
      setVisible(true);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed z-50 pointer-events-none ${visible ? "opacity-100" : "opacity-0"}`}
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >


      {type === "title" && (
        <span className="text-blue text-title uppercase">
          {text}
        </span>
      )}
      {type === "arrow" && (
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 7.50002H16.5M16.5 7.50002L10 1M16.5 7.50002L10 14.5" stroke="#0000EE" stroke-width="2" />
        </svg>
      )}
      {type === "default" && (
        <div className="aspect-square w-[12px] bg-blue rounded-full"></div>
      )}




    </div>
  );
}
