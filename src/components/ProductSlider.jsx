import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "../component_css/ProductSlider.module.css";
import "../App.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import mangoHoney from "../assets/mangoHoney.png";
import honey from "../assets/honey.png";
import coconut from "../assets/coconut.png";
import cinnamonHoney from "../assets/coconut.png";

import { Pagination, Navigation } from 'swiper/modules';

const ProductSlider = () => {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true} // Enable navigation arrows
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 5
          },
        }}
        modules={[Pagination, Navigation]} 
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}><img src={cinnamonHoney} alt="" /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src={coconut} alt="" className={styles.productImg}  /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src={mangoHoney} alt="" className={styles.productImg} /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src={honey} alt="" className={styles.productImg}  /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src={cinnamonHoney} alt="" className={styles.productImg}  /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src={coconut} alt="" className={styles.productImg} /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src={mangoHoney} alt="" className={styles.productImg} /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src={honey} alt="" className={styles.productImg} /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductSlider;
