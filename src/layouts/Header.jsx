// rc/layouts/Hearder.jsx

import { useState } from "react";
import About from "./About.jsx";

const Header = ({ isHome, data = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  // Render
  return (
    <>
      <header>
        <div className="header--wrapper p-margin flex justify-between md:grid md:grid-cols-3 gap-margin w-full">
          {isHome ? (
            <button
              onClick={handleClick}
              className="header--infos block text-left text-title order-2 md:order-1 hover:text-blue"
            >
              <span className="md:capitalize">infos</span>
            </button>
          ) : (
            <h1 className="text-title order-1 md:order-2">{data.title}</h1>
          )}

          {isHome ? (
            <button
              onClick={handleClick}
              className="header--name block text-left text-title order-1 md:order-2 hover:text-blue"
            >
              <h1 className="text-title ">G-architecture</h1>
            </button>
          ) : (
            <a
              href="/"
              className="text-title hover:text-blue"
              title="Retour à l’accueil"
              aria-label="Retour à l’accueil"
            >
              <h1 className="text-title o">G-architecture</h1>
            </a>
          )}

          <div className="header--workphase-cross order-3 md:order-3 max-md:hidden flex justify-between items-center">
            {isHome ? (
              <>
                <h2
                  className={`text-title transition-opacity duration-500 ease-in-out ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  Phases de projets
                </h2>
                <div></div>
              </>
            ) : (
              <>
                <div></div>
                <a
                  href="/"
                  className="text-title hover:text-blue"
                  title="Retour à l’accueil"
                  aria-label="Retour à l’accueil"
                >
                  ✕
                </a>
              </>
            )}
          </div>
        </div>
      </header>
      <About isOpen={isOpen} />
    </>
  );
};

export default Header;
