//src/layouts/ProjectsList.jsx

import { useState } from "react";
import CustomCursor from "../components/common/CustomCursor";

export default function ProjectsList({ projects }) {
  const [hoveredTitle, setHoveredTitle] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <>
      <CustomCursor text={hoveredTitle} visible={cursorVisible} />

      <div className="md:grid md:grid-cols-3 md:gap-margin w-full">
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
                    className="w-full h-full object-cover custom-cursor-target"
                    onMouseEnter={() => {
                      setHoveredTitle(project.title);
                      setCursorVisible(true);
                    }}
                    onMouseLeave={() => {
                      setHoveredTitle("");
                      setCursorVisible(false);
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
