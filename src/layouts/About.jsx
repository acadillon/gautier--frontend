// src/layouts/About.jsx

import { useRef, useState, useEffect } from "react";
import fetchApi from "../assets/scripts/lib/strapi.js";

const about = await fetchApi({
  endpoint: "about?populate=*",
  wrappedByKey: "data",
});

const About = ({ isOpen, isHome, delayOpenAnnimation, setDelayOpenAnnimation }) => {
  const contentRef = useRef(null);
  const pastCollabRef = useRef(null);

  const [height, setHeight] = useState(0);
  const [collabHeight, setCollabHeight] = useState(0);
  const [isPastCollabOpen, setIsPastCollabOpen] = useState(false);


  const [activePhaseIndex, setActivePhaseIndex] = useState(null);

  const togglePhase = (index) => {
    setDelayOpenAnnimation(true);
    setActivePhaseIndex(index === activePhaseIndex ? null : index);
  };

  const openPastCollab = () => {
    setIsPastCollabOpen(!isPastCollabOpen);
    setDelayOpenAnnimation(false);
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
      className={`about--wrapper overflow-hidden transition-all duration-700 ease-in-out ${
          delayOpenAnnimation ? "delay-[1000ms]" : ""
        }`}
      style={{ maxHeight: `${height}px` }}
    >
      
      <div
        ref={contentRef}
        className={`transition-opacity duration-700 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full p-margin pt-0 pb-[50px] md:pb-margin grid grig-cols-1 md:grid-cols-3 gap-[50px] md:gap-margin">
          <div className="about--infos">
            <a
              href={`mailto:${about.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue "
            >
              {about.email}
            </a>
            <address className="block not-italic">{about.adress}</address>
            <a
              href={`tel:${about.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue "
            >
              {about.phone}
            </a>
            <a
              href={about.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue "
            >
              <p>instagram</p>
            </a>
          </div>
          <div className="about--bio pt-0 flex flex-col gap-[50px] md:gap-[100px] max-w-[462px]">
            <div>
              <p>{about.bio}</p>
            </div>
            <div className="about--current-collab flex flex-col gap-margin">
              <div>
                <p>Collaborateur.ice.s</p>
                <p>{about.currentCollab}</p>
              </div>
              <div>
                <button
                  onClick={() => openPastCollab()}
                  className={`cursor-pointer hover:text-blue ${
                    isPastCollabOpen ? "text-blue" : ""
                  }`}
                >
                  (collaborateur.ice.s passé.es)
                </button>
                <div
                  className={`about--past-collab overflow-hidden transition-all duration-700 ease-in-out ${
                    isPastCollabOpen ? "opacity-100 text-blue" : "opacity-0"
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
          <div className="about--work-phases flex flex-col gap-margin">
            <div className="text-title md:hidden block ">Phases de travail</div>
            <ul>
              {about.workPhase.map((phase, index) => (
                <li className="cursor-pointer hover:text-blue" key={phase.id}>
                  <div
                    onClick={() => togglePhase(index)}
                    className={`work-phases--line flex gap-[5px] ${
                      activePhaseIndex === index ? "text-blue" : ""
                    }`}
                  >
                    <div className="work-phases--number flex justify-between">
                      <p className="w-[15px]">{index}</p>
                      <p>–</p>
                    </div>

                    <div className="work-phases--title flex-1">
                      <p>{phase.title}</p>
                      <div
                        className={`overflow-hidden transition-all duration-700 ease-in-out ${
                          activePhaseIndex === index
                            ? "max-h-[300px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-blue">{phase.description}</p>
                      </div>
                    </div>

                    <div className="work-phases--duration">
                      {phase.duration}
                    </div>
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
