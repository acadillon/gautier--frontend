import React from "react";

const Blueprint = ({ data, goToSlide, activeSlide }) => {
    const parseCoordinates = (caption) => {
        if (!caption) return { x: 0, y: 0 };
        
        const match = caption.match(/x(\d+)_y(\d+)/);
        if (match) {
            return {
                x: match[1],
                y: match[2]
            };
        } else {
            return { x: 0, y: 0 };
        }

    };
    return (
        <>
            <div className="relative aspect-square w-full px-[30px]">


                <img src={data.blueprint.url} alt='blueprint' key={data.blueprint.id} className="aspect-square object-contain w-full h-full" />

                {data.media.map((media, id) => {
                    const coords = parseCoordinates(media.caption);
                    const isActive = id === activeSlide;
                    return (
                        <button
                            key={id}
                            onClick={() => goToSlide(id)}
                            className={`absolute aspect-square w-[12px] rounded-full ${isActive ? 'bg-blue' : 'bg-gray-500'}`}
                            style={{
                                left: `${coords.x}px`,
                                top: `${coords.y}px`
                            }}
                        >
                        </button>
                    );
                })}

            </div>
        </>
    );
};

export default Blueprint;