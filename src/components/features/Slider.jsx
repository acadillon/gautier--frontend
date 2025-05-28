import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomCursor from "../common/CustomCursor";
import SwiperButton from "../common/SwiperButton";

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard } from 'swiper/modules';

export default function Slider({ data, onSwiperReady, onSlideChange }) {
    const swiperRef = useRef(null);
    const [cursorType, setCursorType] = useState("default");
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [showSwiper, setShowSwiper] = useState(false);
    const totalImages = data.media.length * 2; // *2 car les images sont dupliquées dans le loop

    const handleSwiper = (swiper) => {
        // Stocker l'instance
        swiperRef.current = swiper;

        // Forcer le recalcul après un tick (utile pour loop + auto-width)
        setTimeout(() => {
            swiper.updateSlides();
            swiper.update();
        }, 0);

        if (onSwiperReady) onSwiperReady(swiper);
    };

    // Recalculer après chaque slide (utile si un clone provoque un décalage)
    const handleSlideChange = () => {
        if (swiperRef.current) {
            swiperRef.current.updateSlides();
        }
    };

    const handleImageLoad = () => {
        setImagesLoaded(prev => {
            const newCount = prev + 1;
            if (newCount === totalImages) {
                setShowSwiper(true);
            }
            return newCount;
        });
    };

    return (
        <>
            <style>
                {`
                    .swiper-wrapper {
                        user-select: none !important;
                    }
       
                    .swiper-button-prev,
                    .swiper-button-next {
                        height: 100%;
                        width: 50%;
                        top: 0;
                    }
                    .swiper-button-prev {
                        left: 0;
                    }
                    .swiper-button-next {
                        right: 0;
                    }
                    
                    .swiper-button-prev:after,
                    .swiper-button-next:after {
                        display: none;
                    }
                    @media (max-width: 768px) {
                        .swiper-wrapper,
                        .swiper,
                        .swiper-slide {
                            height: 100%;
                        }
                        .swiper-slide {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        .swiper-button-prev,
                        .swiper-button-next {
                            display: none;
                        }
                    }
                `}
            </style>

            <Swiper
                navigation={true}
                modules={[Navigation, Keyboard]}
                slidesPerView={'auto'}
                spaceBetween={10}
                loop={true}
                lazyPreloadPrevNext={2}
                keyboard={{
                    enabled: true,
                }}
                // loopAdditionalSlides={loopAdditionalSlides}
                onSwiper={(swiper) => {
                    handleSwiper(swiper);
                }}
                onSlideChange={(swiper) => {
                    handleSlideChange();
                    if (onSlideChange) onSlideChange(swiper);
                }}
                className={`mySwiper md:h-[calc(100vh-57px)] transition-all duration-700 ease-in-out ${showSwiper ? "opacity-100" : "opacity-0"}`}
            >


                <SwiperButton
                    className="swiper-button-next"
                    onClick={() => swiperRef.current?.slideNext()}
                    onMouseEnter={() => {
                        setCursorType("arrow-right");     // Type = flèche
                    }}
                    onMouseLeave={() => {
                        setCursorType("default");
                    }}
                />
                <SwiperButton
                    className="swiper-button-prev"
                    onClick={() => swiperRef.current?.slidePrev()}
                    onMouseEnter={() => {
                        setCursorType("arrow-left");     // Type = flèche
                    }}
                    onMouseLeave={() => {
                        setCursorType("default");
                    }}
                />


                {data.media.map((media, id) => {
                    const imageUrl =
                        media.formats?.large?.url || media.url;
                    const imageUrlMedium =
                        media.formats?.medium?.url || media.url;
                    const imageUrlSmall =
                        media.formats?.small?.url || media.url;
                    return (
                        <SwiperSlide key={id} className="md:!w-auto">
                            <div className={`slide-img--wrapper md:h-[calc(100vh-57px)]`}>
                                <img
                                    src={imageUrl}
                                    srcSet={`${imageUrlSmall} 500w, ${imageUrlMedium} 700w, ${imageUrl} 1200w`}
                                    sizes="(max-width: 500px) 500px, (max-width: 700px) 700px, 1200px"
                                    className="md:h-[calc(100vh-57px)] w-auto block"
                                    onLoad={handleImageLoad}
                                />
                            </div>
                        </SwiperSlide>);
                })}
                {(data.description || data.credit) && (
                    <SwiperSlide className="md:!w-auto max-md:!items-start">
                        <div className="description--wrapper md:w-[calc(30vw+40px)] pr-[40px]">
                            <p>
                                {data.description}
                            </p>
                            <p>
                                Crédits photos : {data.credit}
                            </p>
                        </div>
                    </SwiperSlide>
                )}
                {data.media.map((media, id) => {
                    const imageUrl =
                        media.formats?.large?.url || media.url;
                    const imageUrlMedium =
                        media.formats?.medium?.url || media.url;
                    const imageUrlSmall =
                        media.formats?.small?.url || media.url;
                    return (
                        <SwiperSlide key={id} className="md:!w-auto">
                            <div className={`slide-img--wrapper md:h-[calc(100vh-57px)]`}>
                                <img
                                    src={imageUrl}
                                    srcSet={`${imageUrlSmall} 500w, ${imageUrlMedium} 700w, ${imageUrl} 1200w`}
                                    sizes="(max-width: 500px) 500px, (max-width: 700px) 700px, 1200px"
                                    className="md:h-[calc(100vh-57px)] w-auto block"
                                    onLoad={handleImageLoad}
                                />
                            </div>
                        </SwiperSlide>);
                })}
                {(data.description || data.credit) && (
                    <SwiperSlide className="md:!w-auto max-md:!items-start">
                        <div className="description--wrapper md:w-[calc(30vw+40px)] pr-[40px]">
                            <p>
                                {data.description}
                            </p>
                            <p>
                                Crédits photos : {data.credit}
                            </p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>


            <CustomCursor type={cursorType} />
        </>
    );
}

