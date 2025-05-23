import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CursorArrow from './CursorArrow';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard } from 'swiper/modules';

export default function Slider({ data, onSwiperReady, onSlideChange }) {
    const swiperRef = useRef(null);

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

    const loopAdditionalSlides = data.media.length + 1;
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
                keyboard={{
                    enabled: true,
                }}
                // loopAdditionalSlides={loopAdditionalSlides}
                onSwiper={handleSwiper}
                onSlideChange={(swiper) => {
                    handleSlideChange();
                    if (onSlideChange) onSlideChange(swiper);
                }}
                className="mySwiper md:h-[calc(100vh-57px)]"
            >
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
                                    loading="lazy"
                                    className="md:h-[calc(100vh-57px)] w-auto block"
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
                                    loading="lazy"
                                    className="md:h-[calc(100vh-57px)] w-auto block"
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
            <CursorArrow />
        </>
    );
}

