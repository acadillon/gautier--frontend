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
    <main class="max-md:mx-margin mb-margin md:ml-margin mt-0 grid grid-cols-3 gap-margin md:h-[calc(100vh-57px)]">

    <div>
      <ProjectInfos data={data}/>
      <Blueprint goToSlide={goToSlide}/>
    </div>

    <div class="slider--wrapper col-span-2">
      <Slider data={data} onSwiperReady={setSwiperInstance} client:only="react"/>
    </div>
    
	</main>
  );
};

export default Project;