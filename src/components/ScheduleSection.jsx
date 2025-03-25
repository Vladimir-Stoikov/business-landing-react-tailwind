import React from 'react';
import scheduleImage from '../assets/stats.webp';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function ScheduleSection() {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
        {/* left */}
        <div className='w-full md:w-1/2'>
          <img src={scheduleImage} alt='schedule image' className='w-full h-auto' />
        </div>

        {/* right */}
        <div className='w-full md:w-1/2'>
          <h2 className='text-orange-600 font-semibold text-xl'>SCHEDULE</h2>
          <h2 className='text-3xl font-bold mt-4'>
            Streamline Your Business <br />
            With Smart Scheduling Solutions
          </h2>
          <p className='mt-10 text-gray-600 mb-8'>
            {' '}
            Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences
            through seamless calendar management.
          </p>
          <a href='#' className='text-blue-500 font-semibold items-center gap-2 hover:gap-4 hover:font-bold transition-all flex flex-row'>
            Explore scheduling features
            <IoIosArrowRoundForward className='size-8' />
          </a>
        </div>
      </div>
    </section>
  );
}
