import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import onlineCard from "../assets/Rectangle 7.png";

import 'swiper/css';
import 'swiper/css/pagination';

import '../App.css';

import { Pagination } from 'swiper/modules';

const OnlineProductSlider = () => {
  return (
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={onlineCard} /></SwiperSlide>
        <SwiperSlide><img src={onlineCard} /></SwiperSlide>
        <SwiperSlide><img src={onlineCard} /></SwiperSlide>
        <SwiperSlide><img src={onlineCard} /></SwiperSlide>
        <SwiperSlide><img src={onlineCard} /></SwiperSlide>
      </Swiper>
  )
}

export default OnlineProductSlider
