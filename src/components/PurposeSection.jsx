import React from 'react';
import { purposes } from '../assets/data.js';

export default function PurposeSection() {
  return (
    <section className='w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8' id='about'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-3 grid-col-1 gap-8'>
          {/* heading text */}
          <div className=''>
            <p className='text-sm text-purple-600 font-medium mb-2'>ACHIEVE MORE</p>
            <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900'>Purpose of a convoy is to keep your team</h2>
          </div>

          {/* bullet points */}

          <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8'>
            {purposes.map((purpose, index) => (
              <div key={index} className='flex space-x-4'>
                <div className='w-12 h-12 flex items-center justify-start rounded-lg'>{purpose.icon}</div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>{purpose.title}</h3>
                  <p className='text-gray-600'>{purpose.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
