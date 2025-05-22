import React from "react";

const Blueprint = ({ goToSlide }) => {
  return (
    <div className="flex gap-4">
      <button onClick={() => goToSlide(0)}>Image 1</button>
      <button onClick={() => goToSlide(1)}>Image 2</button>
      <button onClick={() => goToSlide(2)}>Image 3</button>
    </div>
  );
};

export default Blueprint;