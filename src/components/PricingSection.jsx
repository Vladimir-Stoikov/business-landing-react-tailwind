import React, { useState } from 'react';

export default function PricingSection() {
  const [productCount, setProductCount] = useState(1);

  // product price based on priduct count

  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));

  return (
    <section className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>Price</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          {/* starter */}
          <div className='bg-white p-8 rounded-lg shadow-lg '>
            <h3 className='text-xl text-gray-600 mb-4 '>Starter</h3>
            <p className='text-3xl font-bold mb-6'>{starterPrice}$ / month</p>
          </div>

          {/* business */}
          <div className='bg-white p-8 rounded-lg shadow-lg '>
            <h3 className='text-xl text-gray-600 mb-4 '>Business</h3>
            <p className='text-3xl font-bold mb-6'>{businessPrice}$ / month</p>
          </div>
        </div>

        <div className='max-w-xl mx-auto'>
          <p className='text-center text-gray-600'>{productCount} products</p>

          <div className='relative px-4'>
            <div className='flex items-center gap-2'>
              <span className='text-xs sm:text-sm text-gray-600'>1</span>
              <input className='flex-1 h-2 bg-gray-200 rounded-lg cursor-pointer' type='range' min='1' max='50' value={productCount} onChange={e => setProductCount(e.target.value)} />
              <span className='text-xs sm:text-sm text-gray-600'>50</span>
            </div>
          </div>

          <div className='text-center mt-12'>
            <p className='text-xl text-gray-600 mb-4'>Ready to get started?</p>
            <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all cursor-pointer'>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}
