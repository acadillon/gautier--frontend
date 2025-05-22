// File: src/layouts/About.jsx

import {} from "react";
import fetchApi from "../assets/scripts/lib/strapi.js";

const about = await fetchApi({
  endpoint: "about?populate=*",
  wrappedByKey: "data",
});

const About = ({ isOpen }) => {
  // Render
  return (
    <>
      <div
        className={`about--wrapper overflow-hidden transition-max-h duration-300 ${
          isOpen ? "max-h-[1200px]" : "max-h-0"
        }`}
      >
        <div
          className={`transition-all duration-400 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="p-margin pt-0 md:grid md:grid-cols-3 md:gap-margin w-full">
            <div className="about--infos">
              <a
                href={`mailto:${about.Email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue block"
              >
                {about.Email}
              </a>
              <address className="block not-italic">{about.Adress}</address>
              <a
                href={`tel:${about.Phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue block"
              >
                {about.Phone}
              </a>
              <a
                href={about.Instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue block"
              >
                <p>instagram</p>
              </a>
            </div>
            <div className="about--bio">
              <p className="">{about.Bio}</p>
            </div>
            <div className="about--phases"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
