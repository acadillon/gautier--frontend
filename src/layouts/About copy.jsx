// src/layouts/About.jsx

import { useRef, useState, useEffect } from "react";
import fetchApi from "../assets/scripts/lib/strapi.js";

const about = await fetchApi({
  endpoint: "about?populate=*",
  wrappedByKey: "data",
});

const About = ({ isOpen }) => {
  const [isPastCollabOpen, setIsPastCollabOpen] = useState(false);

  return (
    <div
      className={`about--wrapper overflow-hidden transition-all duration-500 ${
        isOpen ? "max-h-[1000px]" : "max-h-0"
      }`}
    >
      <div
        className={`transition-opacity duration-500 ${
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
          <div className="about--bio flex flex-col gap-[100px]">
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
                  className={`about--pastCollab overflow-hidden transition-all duration-500 ${
                    isPastCollabOpen ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <p>{about.pastCollab}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about--phases"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
