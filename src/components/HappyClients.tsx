// import React from "react"
// import ReactDOM from "react-dom/client"
import './HappyClients.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
// import 'swiper/css';

import 'swiper/swiper-bundle.css';
//IMAGES
import sofidel from '../assets/Images/sofidel_logo.svg';
import stepone from '../assets/Images/stepone_logo.svg';
import petstar from '../assets/Images/petstar_logo.svg';
import elis from '../assets/Images/elis_logo.svg';
import chleft from '../assets/Icons/chevron-left.svg';
import chright from '../assets/Icons/chevron-right.svg';

const clients = [sofidel, stepone, petstar, elis, elis, elis, elis];

const HappyClients = () => {
  return (
    <div className="bg-bl2 py-7  w-[100vw] h-[15.5rem] text-white flex flex-col items-center px-[2rem] sm:px-[6rem] lg:px-[9rem] sticky top-0 left-0 z-10">
      <p className="text-sh2 text-white font-sh2 tracking-[2px]">
        CLIENTI MULTUMITI
      </p>
      <div className="slider-wrapper w-full overflow-x-auto h-40 flex items-center ">
        <div className="swiper-button-prev-custom absolute left-20 z-10 hidden md:flex md:items-center md:justify-center w-10 h-10 rounded-full  cursor-pointer ">
          <img src={chleft} alt="" className="text-white w-8 h-8" />
        </div>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          direction="horizontal"
          slidesPerView={5}
          spaceBetween={20}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 }, // mobile
            640: { slidesPerView: 2 }, // small tablets
            1024: { slidesPerView: 3 }, // desktop
            1500: { slidesPerView: 4 }, // desktop
            1700: { slidesPerView: 5 }, // desktop
          }}
          className="w-full h-40 px-14 "
        >
          {clients.map((i) => {
            return (
              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <img className="w-[18.3rem] h-20" src={i} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
          {/* <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
              <p>a</p>
            </div>
            <div className="swiper-button-prev slider-arrow">
              <p>b</p>
            </div>
          </div> */}
        </Swiper>
        {/* Custom right arrow */}
        <div className="swiper-button-next-custom absolute right-20 z-10 hidden md:flex md:items-center md:justify-center w-10 h-10 rounded-full  cursor-pointer">
          <img src={chright} alt="" className="text-white w-8 h-8" />
        </div>
      </div>
    </div>
  );
};
// to do de realizate HappyClientsul aplicatiei

export default HappyClients;
