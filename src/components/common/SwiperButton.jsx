import { } from 'react';


const SwiperButton = ({ className, onClick, onMouseEnter, onMouseLeave }) => {

    // Render
    return (
        <>
            <div className={`swiper-button ${className}`} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ></div>
        </>
    );
};

export default SwiperButton;