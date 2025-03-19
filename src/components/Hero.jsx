import React from 'react';
import heroImage from '../assets/hero-image.png';

export default function Hero() {
  return (
    <section className='container mx-auto flex flex-col md:flex-row justify-between pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
      {/* left col */}
      <div className='w-full md:w-1/2 space-y-8'>
        {/* star badge */}
        <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
          <div className='text-blue-600 group-hover:text-blue-400 group-hover:scale-110 transition-transform'>★</div>
          <div className='text-sm font-medium'>Jump start your growth</div>
        </div>

        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
          We boost the growtfor
          <span className='text-blue-600 relative inline-block'>
            Startup to Fortune 50
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200 opacity-60'></span>
          </span>{' '}
          Companies
          <span className='inline-block ml-2 animate-pulse'>⚡</span>
        </h1>

        <p className='text-gray-600 text-lg md:text-xl max-w-xl'>Get the most accurate leads, sales people training and conversions, tools and more — all within the same one billing.</p>

        <div className='flex gap-3 max-w-md'>
          <input
            type='email'
            placeholder='Email address'
            className='flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all'
          />
          <button className='bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer hover:shadow-lg hover:shadow-blue-300 transition-all'>➔</button>
        </div>
      </div>

      {/* right col */}
      <div className='w-ful md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
        <div className='relative'>
          <img src={heroImage} alt='hero image' className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300' />
        </div>
      </div>
    </section>
  );
}
