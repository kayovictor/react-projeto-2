import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'




SwiperCore.use([Navigation, Scrollbar, Pagination]);

export default function Carousel({ info }) {

  const swiperParams = {
    spaceBetween: 30,
    slidesPerView: 2,
    scrollbar: false,
    pagination: false,
    navigation: false,
    loop: true,
  };

  return (
      <Swiper
        style={{ width: '100%', marginTop: '100px' }}
        breakpoints={{
          // when window width is >= 640px
          200: {
            width: 640,
            slidesPerView: 1,
          },
          740: {
            width: 840,
            slidesPerView: 2,
          }
        }}
        {...swiperParams}
          className="swiper-wrapper"
      >
        {info && info.map((info, index) => (
          <SwiperSlide
          key={index}
          style={
            { backgroundImage: `url(${info.img})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '450px',
          }}
          
          >
            {/* <span style={{ width: '250px' }}>{info.titulo}</span> */}
          </SwiperSlide>
        ))}
      </Swiper>
  );
}