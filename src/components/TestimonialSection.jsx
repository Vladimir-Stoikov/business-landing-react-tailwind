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
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
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
          className='testimonials-swiper md:mb-12'
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className='h-full md:py-12 py-4'>
              <div className='text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col'>
                <div className='w-24 h-24 mx-auto mb-4'>
                  <img src={testimonial.image} alt='testimonial image' className='w-full h-full rounded-full object-cover' />
                </div>

                <div className='flex justify-center mb-2'>
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className='text-yellow-400'>
                      ★
                    </span>
                  ))}
                </div>
                <h3 className='text-xl font-semibold mb-3'>{testimonial.name}</h3>
                <p className='text-gray-600'>{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* nav btns */}
        <div className='flex justify-center gap-4 mt-8'>
          <button className='swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors'>
            <BsChevronLeft className='size-6' />
          </button>
          <button className='swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors'>
            <BsChevronRight className='size-6' />
          </button>
        </div>
      </div>
    </section>
  );
}
