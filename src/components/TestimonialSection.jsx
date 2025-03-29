import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { testimonials } from '../assets/data.js';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function TestimonialSection() {
  return (
    <section className='py-16 px-4 max-w-7xl mx-auto'>
      {/* header */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold md:text-4xl mb-4'>What our happy client say</h2>
        <p className='text-gray-600'>Things that make it the best place to start trading</p>
      </div>

      {/* testimonials */}
      <div>
        {/* cards */}

        <Swiper
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className='testimonials-swiper md:mb-12'
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>

        {/* nav btns */}
        <div className='flex justify-center gap-4 mt-8'>
          <button className='.swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
            <BsChevronLeft className='size-6' />
          </button>
          <button className='.swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
            <BsChevronRight className='size-6' />
          </button>
        </div>
      </div>
    </section>
  );
}
