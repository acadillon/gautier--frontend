//src/layouts/ProjectsList.jsx

import { useState, useEffect } from "react";
import CustomCursor from "../components/common/CustomCursor";

export default function ProjectsList({ projects }) {
  const [hoveredTitle, setHoveredTitle] = useState("");
  const [cursorType, setCursorType] = useState("default");


  return (
    <>
      <CustomCursor type={cursorType} text={hoveredTitle} />

      <div className={`px-margin pb-margin grid grid-cols-1 md:grid-cols-3 gap-margin w-full animate-enter`}>
        {projects.map((project) => {
          const imageUrl =  
            project.media?.[0]?.formats?.medium?.url || project.media?.[0]?.url;

          return (
            <a key={project.id} href={`/${project.slug}`} className="">
              <div className="aspect-[10/7] w-full overflow-hidden">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onMouseEnter={() => {
                      setHoveredTitle(project.title);
                      setCursorType("title");    
                    }}
                    onMouseLeave={() => {
                      setHoveredTitle("");
                      setCursorType("default");
                    }}
                  />
                )}
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}
