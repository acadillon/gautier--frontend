import React, { useRef, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';


export default function Slider({ data, onSwiperReady }) {

    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && onSwiperReady) {
            onSwiperReady(swiperRef.current.swiper);
        }
    }, []);

    console.log(onSwiperReady);

    return (
        <>
            <style>
                {`
                    .swiper-wrapper{
                        user-select: none !important;
                    }
                    .swiper-slide{
                        width: auto;
                    }
                    .swiper-button-prev{
                        display: none;
                    }
                    .swiper-button-next{
                        height: 100%;
                        width: 100%;
                        top: 0;
                        left: 0;
                    }
                    .swiper-button-next:after{
                        display: none;
                    }
                    @media (max-width: 768px) {
                        .swiper-button-next{
                            display: none;
                        }
                    }
                  
                `}
            </style>
            <Swiper
                ref={swiperRef}
                navigation={true}
                modules={[Navigation]}
                slidesPerView={'auto'}
                loop={true}
                onSwiper={(swiper) => {
                    // On peut aussi passer swiper ici
                    if (onSwiperReady) onSwiperReady(swiper);
                }}
                className="mySwiper h-full bg-amber-50">
                {data.media.map((media, id) =>
                    <SwiperSlide key={id}>
                        <img
                            src={media.url}
                            loading='lazy'
                            class="md:h-[calc(100vh-57px)] w-auto" />
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}






