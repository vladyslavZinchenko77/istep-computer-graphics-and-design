import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.scss";

// import required modules
import { Pagination } from "swiper";

import Container from "../Container/Container";
import imgTeam1 from '../../img/team-img1.png';
import imgTeam2 from '../../img/team-img2.png';
import imgTeam3 from '../../img/team-img3.png';
import imgTeam4 from '../../img/team-img4.png';
import imgTeam5 from '../../img/team-img5.png';
import imgTeam6 from '../../img/team-img6.png';



export default function Slider() {
  return (
    <>
    <div className="slider__wrap" >
        <h2 className="slider__title">Наша команда - наша сила</h2>
      <Swiper
        pagination={{
          dynamicBullets: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img style={{width: '100%'}} src={imgTeam1} alt="imgTeam1" /></SwiperSlide>
        <SwiperSlide><img style={{width: '100%'}} src={imgTeam2} alt="imgTeam2" /></SwiperSlide>
        <SwiperSlide><img style={{width: '100%'}} src={imgTeam3} alt="imgTeam3" /></SwiperSlide>
        <SwiperSlide><img style={{width: '100%'}} src={imgTeam4} alt="imgTeam4" /></SwiperSlide>
        <SwiperSlide><img style={{width: '100%'}} src={imgTeam5} alt="imgTeam5" /></SwiperSlide>
        <SwiperSlide><img style={{width: '100%'}} src={imgTeam6} alt="imgTeam6" /></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
