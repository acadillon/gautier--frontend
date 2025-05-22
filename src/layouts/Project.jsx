// SliderWrapper.jsx
import { useState } from "react";
import Slider from "../components/features/Slider.jsx";
import ProjectInfos from "../components/common/ProjectInfos.jsx";
import Blueprint from "../components/features/Blueprint.jsx";


const Project = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const goToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <main className="max-md:mx-margin mb-margin md:ml-margin mt-0 flex flex-col md:grid md:grid-cols-3 gap-margin h-[calc(100vh-57px)]">

      <div className="project-infos--wrapper flex flex-col justify-center md:h-full">
        <ProjectInfos data={data} />
        <div className="max-md:hidden flex flex-col justify-center h-full">
          <Blueprint goToSlide={goToSlide} />
        </div>
      </div>

      <div className="slider--wrapper col-span-2 max-md:flex-1">
        <Slider data={data} onSwiperReady={setSwiperInstance} client:only="react" />
      </div>

    </main>
  );
};

export default Project;