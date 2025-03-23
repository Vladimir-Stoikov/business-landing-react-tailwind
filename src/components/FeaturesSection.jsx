import React from 'react';
import { features } from '../assets/data';

export default function FeaturesSection() {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16'>
      {/* heading text */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold mb-4'>How can we help your business?</h2>
        <p className='text-gray-600'>When you resell besnik, you build trust and increase</p>
      </div>

      {/* features boxes */}
      <div className='flex lg:flex-row w-full justify-between m-auto flex-col'>
        {features.map((feature, index) => (
          <div key={index} className='text-center'>
            <div className={`text-3xl w-25 h-25 rounded-full content-center m-auto mb-4 ${index == 0 ? `bg-blue-100` : index == 1 ? `bg-red-100` : `bg-orange-100`}`}>{feature.icon}</div>
            <h3 className='text-2xl font-1 font-bold mb-3'>{feature.title}</h3>
            <p className='mb-10 text-gray-600'>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* button */}
      <div className='w-full flex justify-center mt-5 mb-10'>
        <button className='px-9 py-3 font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors relative'>
          Become a Partner
          <div className='absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-xl top-0 left-0'></div>
        </button>
      </div>
    </section>
  );
}
