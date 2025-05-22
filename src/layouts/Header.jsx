// File: src/layouts/Hearder.jsx

import { useState } from "react";
import About from "./About.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  // Render
  return (
    <>
      <header>
        <div className="header--wrapper p-margin flex justify-between md:grid md:grid-cols-3 gap-margin w-full">
          <button
            onClick={handleClick}
            className="block text-left text-title order-2 md:order-1"
          >
            <span className="md:capitalize">infos</span>
          </button>
          <button
            onClick={handleClick}
            className="block text-left text-title order-1 md:order-2"
          >
            <h1 className="text-title ">G-architecture</h1>
          </button>
          <h2
            className={`text-title order-3 md:order-3 max-md:!hidden ${
              isOpen ? "!block" : "hidden"
            }`}
          >
            Phases de projets
          </h2>
        </div>
        <About isOpen={isOpen} />
      </header>
    </>
  );
};

export default Header;
