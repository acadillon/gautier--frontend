// SliderWrapper.jsx
import { useState } from "react";
import Slider from "../components/features/Slider.jsx";
import ProjectInfos from "../components/common/ProjectInfos.jsx";
import Blueprint from "../components/features/Blueprint.jsx";

const Project = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
      setActiveSlide(index);
    }
  };

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
    console.log(swiper.realIndex);
  };

  return (
    <main className="max-md:mx-margin mb-margin md:ml-margin mt-0 flex flex-col md:grid md:grid-cols-3 gap-margin h-[calc(100vh-57px)]">
      <div className="project-infos--wrapper flex flex-col justify-center md:h-full">
        <ProjectInfos data={data} />
        <div className="max-md:hidden flex flex-col justify-center h-full">
          <Blueprint
            data={data}
            goToSlide={goToSlide}
            activeSlide={activeSlide}
          />
        </div>
      </div>

      <div className="slider--wrapper col-span-2 max-md:flex-1">
        <Slider
          data={data}
          onSwiperReady={setSwiperInstance}
          onSlideChange={handleSlideChange}
          client:only="react"
        />
      </div>
    </main>
  );
};

export default Project;
