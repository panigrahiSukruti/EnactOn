import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import homeImg from "../assets/homeImg.png";

import 'swiper/css';
import 'swiper/css/pagination';

import '../App.css';

import { Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={homeImg} /></SwiperSlide>
        <SwiperSlide><img src={homeImg} /></SwiperSlide>
        <SwiperSlide><img src={homeImg} /></SwiperSlide>
      </Swiper>
  )
}

export default Slider
