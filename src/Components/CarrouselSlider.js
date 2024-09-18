import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import CSS module
import styles from './CarrouselSlider.module.css';

const CarrouselSlider = ({ slides }) => {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className={styles.mySwiper}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img className={styles.slideImage} src={slide.url} alt={slide.title} />
                    <h3>{slide.title}</h3>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarrouselSlider;
