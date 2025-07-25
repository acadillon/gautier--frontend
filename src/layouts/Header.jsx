// rc/layouts/Hearder.jsx

import { useState } from "react";
import About from "./About.jsx";

const Header = ({ isHome, data = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [delayOpenAnnimation, setDelayOpenAnnimation] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
    setDelayOpenAnnimation(false);
  }

  // Render
  return (
    <>
      <header>
        <div className="header--wrapper p-margin flex justify-between md:grid md:grid-cols-3 gap-margin w-full">
          {isHome ? (
            <button
              onClick={handleClick}
              className={`header--infos block text-left text-title order-2 md:order-1 hover:text-blue ${isOpen ? 'max-md:text-blue' : ''}`}
            >
              <span className="md:capitalize">infos</span>
            </button>
          ) : (
            <h1 className="text-title order-2 md:order-1">{data.title}</h1>
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
              className="text-title hover:text-blue hidden md:block order-2"
              title="Retour à l’accueil"
              aria-label="Retour à l’accueil"
            >
                <h1 className="text-title">G-architecture</h1>
            </a>
          )}

          {isHome ? (
            <div className="header--workphase-cross order-3 md:order-3 flex justify-between items-center max-md:hidden">
              <h2
                className={`text-title transition-opacity duration-500 ease-in-out ${
                  isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                Phases de projets
              </h2>
              <div></div>
            </div>
          ) : (
            <div className="header--workphase-cross order-3 md:order-3 flex justify-end items-center">
              <a
                href="/"
                className="text-title group block p-[6px]"
                title="Retour à l’accueil"
                aria-label="Retour à l’accueil"
              >
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L13 14M13 1L1 14"
                    stroke="black"
                    strokeWidth="2"
                    className="group-hover:stroke-blue"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </header>
      <About isOpen={isOpen} isHome={isHome} delayOpenAnnimation={delayOpenAnnimation} setDelayOpenAnnimation={setDelayOpenAnnimation}/>
    </>
  );
};

export default Header;
