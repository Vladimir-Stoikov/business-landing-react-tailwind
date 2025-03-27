import React from 'react';
import monitorImage from '../assets/monitor-card.webp';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function MonitorSection() {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
        {/* left */}
        <div className='w-full md:w-1/2'>
          <h2 className='text-green-600 font-semibold text-xl'>MONITOR</h2>
          <h2 className='text-3xl font-bold mt-4 md:w-4/5'>Introducing best mobile carousels</h2>
          <p className='mt-10 text-gray-600 mb-8'>
            {' '}
            Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.
          </p>
          <a href='#' className='text-blue-500 font-semibold items-center gap-2 hover:gap-4 hover:font-bold transition-all flex flex-row'>
            Learn more about monitoring
            <IoIosArrowRoundForward className='size-8' />
          </a>
        </div>

        {/* right */}
        <div className='w-full md:w-1/2'>
          <img src={monitorImage} alt='monitor image' className='w-full h-auto' />
        </div>
      </div>
    </section>
  );
}
