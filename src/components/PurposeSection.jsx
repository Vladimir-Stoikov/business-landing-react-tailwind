import React from 'react';
import { purposes } from '../assets/data.js';

export default function PurposeSection() {
  return (
    <section className='w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-3 grid-col-1 gap-8'>
          {/* heading text */}
          <div className=''>
            <p className='text-sm text-purple-600 font-medium mb-2'>ACHIEVE MORE</p>
            <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900'>Purpose of a convoy is to keep your team</h2>
          </div>

          {/* bullet points */}

          <div>
            {purposes.map((purpose, index) => (
              <div key={index}>
                <div>{purpose.icon}</div>
                <div>
                  <h3>{purpose.title}</h3>
                  <p>{purpose.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
