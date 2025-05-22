// src/layouts/About.jsx

import { useRef, useState, useEffect } from "react";
import fetchApi from "../assets/scripts/lib/strapi.js";

const about = await fetchApi({
  endpoint: "about?populate=*",
  wrappedByKey: "data",
});

const About = ({ isOpen }) => {
  const contentRef = useRef(null);
  const pastCollabRef = useRef(null);

  const [height, setHeight] = useState(0);
  const [collabHeight, setCollabHeight] = useState(0);
  const [isPastCollabOpen, setIsPastCollabOpen] = useState(false);

  const [activePhaseIndex, setActivePhaseIndex] = useState(null);

  const togglePhase = (index) => {
    setActivePhaseIndex(index === activePhaseIndex ? null : index);
  };

  // ResizeObserver principal
  useEffect(() => {
    const contentEl = contentRef.current;
    const pastCollabEl = pastCollabRef.current;

    const updateMainHeight = () => {
      if (contentEl) {
        setHeight(isOpen ? contentEl.scrollHeight : 0);
      }
    };

    const updateCollabHeight = () => {
      if (pastCollabEl) {
        setCollabHeight(isPastCollabOpen ? pastCollabEl.scrollHeight : 0);
      }
    };

    const observer = new ResizeObserver(() => {
      updateMainHeight();
      updateCollabHeight();
    });

    if (contentEl) observer.observe(contentEl);
    if (pastCollabEl) observer.observe(pastCollabEl);

    updateMainHeight();
    updateCollabHeight();

    return () => {
      if (contentEl) observer.unobserve(contentEl);
      if (pastCollabEl) observer.unobserve(pastCollabEl);
      observer.disconnect();
    };
  }, [isOpen, isPastCollabOpen]);

  return (
    <div
      className="about--wrapper overflow-hidden transition-all duration-700 ease-in-out"
      style={{ maxHeight: `${height}px` }}
    >
      <div
        ref={contentRef}
        className={`transition-opacity duration-700 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="p-margin pt-0 md:grid md:grid-cols-3 md:gap-margin w-full">
          <div className="about--infos">
            <a
              href={`mailto:${about.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue block"
            >
              {about.email}
            </a>
            <address className="block not-italic">{about.adress}</address>
            <a
              href={`tel:${about.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue block"
            >
              {about.phone}
            </a>
            <a
              href={about.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue block"
            >
              <p>instagram</p>
            </a>
          </div>
          <div className="about--bio flex flex-col gap-[100px] max-w-[462px]">
            <div>
              <p>{about.bio}</p>
            </div>
            <div className="about--collab flex flex-col gap-margin">
              <div>
                <p>Collaborateur.ice.s</p>
                <p>{about.currentCollab}</p>
              </div>
              <div>
                <button
                  onClick={() => setIsPastCollabOpen(!isPastCollabOpen)}
                  className=" hover:text-blue"
                >
                  (collaborateur.ice.s passé.es)
                </button>
                <div
                  className={`about--pastCollab overflow-hidden transition-all duration-700 ease-in-out ${
                    isPastCollabOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {isPastCollabOpen && (
                    <div ref={pastCollabRef}>
                      <p>{about.pastCollab}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="about--phases">
            <ul className="">
              {about.workPhase.map((phase, index) => (
                <li key={phase.id}>
                  <div
                    onClick={() => togglePhase(index)}
                    className={`flex gap-[5px] ${
                      activePhaseIndex === index ? "text-blue" : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <p className="w-[15px]">{index + 1}</p>
                      <p>–</p>
                    </div>
                    <div className="flex-1">
                      <p>{phase.title}</p>
                      {activePhaseIndex === index && (
                        <p className=" text-blue transition-all duration-500">
                          {phase.description}
                        </p>
                      )}
                    </div>
                    <div>{phase.duration}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
//flex justify-between cursor-pointer
