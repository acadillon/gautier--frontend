import React, { useState } from "react";

const Blueprint = ({ data, goToSlide, activeSlide }) => {
    const [showBlueprint, setShowBlueprint] = useState(false);
    const blueprintWidth = data.blueprint.width;
    const blueprintHeight = data.blueprint.height;

    const parseCoordinates = (caption) => {
        if (!caption) return { x: 0, y: 0 };
        
        const match = caption.match(/x(\d+)_y(\d+)/);
        if (match) {
            return {
                x: (parseInt(match[1]) / blueprintWidth) * 100,
                y: (parseInt(match[2]) / blueprintHeight) * 100
            };
        } else {
            return { x: 0, y: 0 };
        }
    };

    const handleBlueprintLoad = () => {
        setShowBlueprint(true);
    };

    return (
        <>
            <div className={`relative aspect-[100/120] w-full px-[30px] transition-opacity duration-700 delay-100 ease-in-out ${showBlueprint ? "opacity-100" : "opacity-0"}`}>

                <img src={data.blueprint.url} alt='blueprint' key={data.blueprint.id} onLoad={handleBlueprintLoad} className="aspect-[100/120] object-contain w-full h-full" />

                {data.media.map((media, id) => {
                    const coords = parseCoordinates(media.caption);
                    const isActive = id === activeSlide;
                    return (
                        <button
                            key={id}
                            onClick={() => goToSlide(id)}
                            className={`absolute aspect-square w-[12px] rounded-full ${isActive ? 'bg-blue' : 'bg-gray-500'}`}
                            style={{
                                left: `${coords.x}%`,
                                top: `${coords.y}%`
                            }}
                            alt={media.caption}
                        >
                        </button>
                    ); 
                })}

            </div>
        </>
    );
};

export default Blueprint;